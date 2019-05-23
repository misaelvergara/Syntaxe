import { Component, OnInit } from '@angular/core';
import Data from './componentdata';

@Component({
  selector: 'app-component',
  templateUrl: './component.page.html',
  styleUrls: ['./component.page.scss'],
})
export class ComponentPage implements OnInit {
  constructor() {
  }
  ngOnInit() {
  }  

  comp = {
    headerCode: "olá"
  };
  /* instantiates the Data class */
  data: Data = new Data();
  /* assigns appropriate data to headerCode string */

  header_code = this.data.JavaScript["Tipos de Dados"]["Dados Complexos"].object.code;
  title = this.data.JavaScript["Tipos de Dados"]["Dados Complexos"].object.title;

  customActionSheetOptions: any = {
    header: 'Linguagem atual',
    subHeader: 'Selecione outra linguagem para este conteúdo'
  };
}
