import { Component, OnInit, Input } from '@angular/core';
import { CoreDataService } from '../core-data.service';

@Component({
  selector: 'app-list-generator',
  templateUrl: './list-generator.component.html',
  styleUrls: ['./list-generator.component.scss'],
})
export class GenerateListComponent implements OnInit {
  @Input() iterableList: any[];
  @Input() searchEnabled: boolean;

  // dependency injection: imports CoreDataService
  constructor(private coreDataSrvc: CoreDataService) { }

  public addBrackets(param) {
    return this.coreDataSrvc.addBrackets(param);
  }

  ngOnInit() {}

}
