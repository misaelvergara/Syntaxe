import { Component, OnInit } from '@angular/core';
import Data from './componentdata';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CoreDataService } from '../dependency/core-data.service';
import { PopoverController } from '@ionic/angular';
import { TreeComponent } from './tree/tree.component';

@Component({
  selector: 'app-component',
  templateUrl: './component.page.html',
  styleUrls: ['./component.page.scss'],
})
export class ComponentPage implements OnInit {
  /* instantiates the Data class */
  public expandsCode = false;
  public showExpandButton = true;
  public data: Data = new Data();
  public componentData: any[];
  public breakLineToggle = false;

  /* angular template settings
    @explanation: strings that are interpolated in the template */
  public contentTitle: string;
  public headerCode: string;
  public contentBody: string;



  customActionSheetOptions: any = {
    header: 'Linguagem atual',
    subHeader: 'Selecione outra linguagem para este conteúdo'
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private coreData: CoreDataService,
    private popoverCtrl: PopoverController
  ) { }

  async showTree(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: TreeComponent,
      componentProps: { tree: this.componentData[0].tree || ['null'] },
      event: ev,
      animated: true,
      showBackdrop: true,
      cssClass: `
      .popover{backround: black !important}
      `
    });
    return await popover.present();
  }
  ngOnInit() {
    //gets the router parameters as an array
    this.route.paramMap.subscribe(params => {
      //returns an array of a single key
      let myArray = params.getAll('array');

      if (typeof myArray[0] == 'undefined') {
        //navigates to error page if no parameters were defined
        this.router.navigate(['**']);
        return;
      }

      try {
        let formattedArray = myArray[0].replace(/'/gi, `"`);
        // loads component page data from coreData 
        this.coreData.filter.askForComponent(
          JSON.parse(formattedArray)
        );

        this.componentData = this.coreData.filter.retrieve();
        console.log(this.componentData);
        this.contentTitle = this.componentData[0].title;
        this.contentBody = this.componentData[0].body;
        this.headerCode = this.componentData[0].code;

        if (this.headerCode.length < 2) {
          this.showExpandButton = false;
          this.expandsCode = true;
        }



      }
      catch (e) {
        this.router.navigate(['**']);
        console.log(e);

      }
    });
  }

}
