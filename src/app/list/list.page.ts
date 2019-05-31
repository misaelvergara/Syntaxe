import { Component, OnInit } from '@angular/core';
import { CoreDataService } from '../dependency/core-data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  public retrievedComponentList: any[];

  constructor(private coreDataSrvc: CoreDataService) { }

  public addBrackets(param) {
    return this.coreDataSrvc.addBrackets(param);
  }

  ngOnInit() {
    // checks if the returned array of objects is empty
    if (!this.coreDataSrvc.filter.listWasRetrieved) {
      // if so, it hasn't been populated yet; populate it ->
      this.coreDataSrvc.filter.requestSortedList();
    }
    this.retrievedComponentList = this.coreDataSrvc.filter.retrieveSortedList();
  }

}
