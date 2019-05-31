import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  constructor() { }
  /*  these are the basic functions that print out data to this
      component's template

      these function get and return data from tellbarService
  */
  @Input() showsAppName: boolean;
  @Input() insertableTitle: string;
  @Input() showsBackButton: boolean;

  
  ngOnInit() {
   }

}
