/*
  This page is designed to retrieve component data from the CoreData service and display
  it according to an array received as a router parameter (url parameters).

  @depends on ActivatedRoute to request the router parameters. Receives it as an observable.
  @depends on Router to redirect to a different page when the router parameter is invalid (: doesn't
  correspond to an actual object in the ComponentData array)
  @depends on CoreDataService to request an object of the ComponentData array, which is the necessary
  data to display information in the view of this component
  @depends on PopoverController to display a hierarchical list tracing to the current object
  of ComponentData

 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CoreDataService } from '../dependency/core-data.service';
import { ErrorLoggerService } from '../dependency/error-logger.service';

import { PopoverController } from '@ionic/angular';
import { TreeComponent } from './tree/tree.component';

@Component({
  selector: 'app-component',
  templateUrl: './component.page.html',
  styleUrls: ['./component.page.scss'],
})
export class ComponentPage implements OnInit {
  public codeIsExpanded = false;
  public showExpandButton = true;
  // retrieves an array of a single object
  public retrievedObject: any[];
  public breakLineToggle = false;
  public wordbreakIsOn = true;

  /* angular template settings
    @explanation: strings that are interpolated in the template */
  public contentTitle = 'loading..';
  public headerCode = 'loading..';
  public contentBody = 'loading..';
  public componentTree: any[];
  public language: string;
  public contentRoutes: any[];

  customActionSheetOptions: any = {
    header: 'Linguagem atual',
    subHeader: 'Selecione outra linguagem para este conteúdo'
  };

  /* ##########################################################
    ####### METHODS ##########################################
    #########################################################
   */

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private coreDataSrvc: CoreDataService,
    private popoverCtrl: PopoverController,
    private errorLoggerSrvc: ErrorLoggerService
  ) { }

  public formatForRouter(param) {
    this.errorLoggerSrvc.sendNewLog('formatting.. At: component.page');
    return this.coreDataSrvc.formatForRouter(param);
  }

  public redirectToSelectedLanguage() {
    const targetRoute = this.formatForRouter(this.contentRoutes);
    // picked language is different from the component language
    if (this.language != this.componentTree[0]) {
      this.router.navigate(['/component', targetRoute]);
    }
  }

  public toggleWordbreak() {
    this.wordbreakIsOn = !this.wordbreakIsOn;
  }

  public togglecodeIsExpanded() { this.codeIsExpanded = !this.codeIsExpanded; }

  async showTreePopup(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: TreeComponent,
      componentProps: { tree: this.componentTree || ['null'] },
      /* passes the event trigger so that angular can identify which
      component triggered this event */
      event: ev,
      mode: 'ios',
      animated: true,
      showBackdrop: true,
	  cssClass: 'tree-popover'
    });
    return await popover.present();
  }
  ngOnInit() {
    // gets the router parameters as an array
    this.activatedRoute.paramMap.subscribe(params => {
      // returns an array of a single key
      // this single key is a string resembling an array
      const returnedRoute = params.getAll('array');

      if (typeof returnedRoute[0] === 'undefined') {
        // navigates to error page if no parameters were defined
        this.router.navigate(['**']);
        return;
      }

      try {
        const formattedArray = returnedRoute[0].replace(/'/gi, `"`);
        this.errorLoggerSrvc.sendNewLog('Param " ' + formattedArray + ' "');
        // loads component page data from coreData
        this.coreDataSrvc.filter.requestComponent(
          // parses the string array into an actual array
          JSON.parse(formattedArray)
        );

        this.retrievedObject = this.coreDataSrvc.filter.retrieve();

        if (typeof this.retrievedObject[0] == 'undefined') {
          this.errorLoggerSrvc.sendNewLog('Not a valid route.')
          this.errorLoggerSrvc.toErrorPage();
        } else {
          this.contentTitle = this.retrievedObject[0].title;
          this.contentBody = this.retrievedObject[0].body;
          this.headerCode = this.retrievedObject[0].code;
          this.componentTree = this.retrievedObject[0].tree;
          this.language = this.componentTree[0];
          this.contentRoutes = this.retrievedObject[0].routes;
        }

        // checks if the header code has any significant content
        if (this.headerCode.length < 2) {
          this.showExpandButton = false;
          this.codeIsExpanded = true;
        }
      } catch (e) {
        console.log(e);
        this.errorLoggerSrvc.sendNewLog('Failed try/catch At: component.page');
        this.errorLoggerSrvc.toErrorPage();
      }
    });
  }

}
