/*
  This component sends queries to the QuerySenderService. These queries are then
  prepared to be emitted for the search page to listen to.
 */
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { QuerySenderService } from '../query-sender.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bottombar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss'],
})
export class BottomBarComponent implements OnInit {

  public searchControl: FormControl;

  constructor(
    private querySenderSrvc: QuerySenderService,
    private router: Router) {
    this.searchControl = new FormControl();
  }

  userIsTyping() {
    this.querySenderSrvc.emitUserIsTyping(true);
  }
  
  clearSearchBar() {
	  this.searchControl.setValue('');
  }

  ngOnInit() {
    this.searchControl.valueChanges.pipe(debounceTime(875)).subscribe(param => {
      /*
      executes newQuery from the QuerySenderService
      takes a parameter which is used to update
      the queryString variable inside the service
      Once the variable is updated, the service emits an event
      for the searchPage to subscribe to
    */
      this.querySenderSrvc.emitNewQuery(param);
    });

  }

  goToSearchPage() {
    this.router.navigate(['/search']);
  }

}
