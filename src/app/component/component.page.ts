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
import { PopoverController } from '@ionic/angular';
import { TreeComponent } from './tree/tree.component';

@Component({
  selector: 'app-component',
  templateUrl: './component.page.html',
  styleUrls: ['./component.page.scss'],
})
export class ComponentPage implements OnInit {
  public expandsCode = false;
  public showExpandButton = true;
  // retrieves an array of a single object
  public retrievedObject: any[];
  public breakLineToggle = false;
  public wordbreakIsOn = true;

  /* angular template settings
    @explanation: strings that are interpolated in the template */
  public contentTitle = 'unavailable';
  public headerCode = 'unavailable';
  public contentBody = 'unavailable';
  public getCurrentLanguageFromTree = 'JavaScript';
  public contentRoutes = ['JavaScript'];

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
    private popoverCtrl: PopoverController
  ) { }

  public redirectToSelectedLanguage() {
	  console.log('["'+this.contentRoutes.join('", "')+'"]');
    this.router.navigate(['/component', '["'+this.contentRoutes.join('", "')+'"]']);
  }

  public toggleWordbreak() {
    this.wordbreakIsOn = !this.wordbreakIsOn;
    console.log(this.wordbreakIsOn);
  }

  public toggleExpandsCode() { this.expandsCode = !this.expandsCode; }

  async showTreePopup(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: TreeComponent,
      componentProps: { tree: this.retrievedObject[0].tree || ['null'] },
      /* passes the event trigger so that angular can identify which
      component triggered this event */
      event: ev,
      mode: 'ios',
      animated: true,
      showBackdrop: true,
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
        console.log(formattedArray);
        // loads component page data from coreData
        this.coreDataSrvc.filter.requestComponent(
          // parses the array
          JSON.parse(formattedArray)
        );

        this.retrievedObject = this.coreDataSrvc.filter.retrieve();
        this.contentTitle = this.retrievedObject[0].title;
        this.contentBody = this.retrievedObject[0].body;
        this.headerCode = this.retrievedObject[0].code;
        this.getCurrentLanguageFromTree = this.retrievedObject[0].tree[0];
		this.contentRoutes = this.retrievedObject[0].routes;

        if (this.headerCode.length < 2) {
          this.showExpandButton = false;
          this.expandsCode = true;
        }



      } catch (e) {
        this.router.navigate(['**']);
        console.log(e);

      }
    });
  }

}
