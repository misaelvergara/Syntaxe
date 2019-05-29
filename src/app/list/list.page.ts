import { Component, OnInit } from '@angular/core';
import { CoreDataService } from '../dependency/core-data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  public list: any[];

  constructor(private coreDataSrvc: CoreDataService) { }

  public addBrackets(param) {
    return this.coreDataSrvc.addBrackets(param);
  }

  ngOnInit() {
    if (this.coreDataSrvc.filter.retrieveList().length < 1) {
      this.coreDataSrvc.filter.askForList();
    }

    this.list = this.coreDataSrvc.filter.retrieveList();
  }

}
