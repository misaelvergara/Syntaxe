import { Component, OnInit } from '@angular/core';

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

  customActionSheetOptions: any = {
    header: 'Linguagem atual',
    subHeader: 'Selecione outra linguagem para este conteúdo'
  };

  comp = {
    'headerCode': `
<pre>Hi
  My name is Angular
    <strong>Angular 4</strong>
  I like pandas</pre>
`,
  };
}
