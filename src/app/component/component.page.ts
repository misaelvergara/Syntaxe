import { Component, OnInit } from '@angular/core';
import Data from './componentdata';

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

  constructor() {
  }
  ngOnInit() {
  }
}
