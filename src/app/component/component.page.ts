import { Component, OnInit } from '@angular/core';
import Data from './componentdata';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PopoverController } from '@ionic/angular';
import { PopupComponent } from './popup/popup.component';

@Component({
  selector: 'app-component',
  templateUrl: './component.page.html',
  styleUrls: ['./component.page.scss'],
})
export class ComponentPage implements OnInit {
  /* instantiates the Data class */
  expandsCode = false;

  data: Data = new Data();

  /* angular template settings
    @explanation: strings that are interpolated in the template */
  contentTitle = this.data.JavaScript['Tipos de Dados']['Dados Complexos'].object.title;
  headerCode = this.data.JavaScript['Tipos de Dados']['Dados Complexos'].object.code;
  contentBody = this.data.JavaScript['Tipos de Dados']['Dados Complexos'].object.body;

  customActionSheetOptions: any = {
    header: 'Linguagem atual',
    subHeader: 'Selecione outra linguagem para este conteúdo'
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public popoverCtrl: PopoverController
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      // This is never executed, for route is not recognized
      let myArray=params.getAll('array');
      console.log(myArray);
  });
  }
}
