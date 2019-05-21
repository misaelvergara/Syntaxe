import { Component, OnInit } from '@angular/core';
import { TellBarService } from '../dependency/tell-bar.service';

@Component({
  selector: 'app-component',
  templateUrl: './component.page.html',
  styleUrls: ['./component.page.scss'],
})
export class ComponentPage implements OnInit {

  constructor(private tellbarService: TellBarService) {
    /* tellbarService settings */
    this.tellbarService.setShowAppName(false);
    this.tellbarService.setEnableButtons(true);
    this.tellbarService.setInsertableTitle('Componente');
  }

  ngOnInit() {
  }

}
