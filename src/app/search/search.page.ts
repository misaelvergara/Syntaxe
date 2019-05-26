import { Component, OnInit } from '@angular/core';
import { SearchService } from '../dependency/search.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  /* DEPENDENCY INJECTION: accesses an instance (which is
    a singleton across all components) of search service */
  constructor(private searchService: SearchService) {
    this.searchControl = new FormControl();
  }

  public searchControl: FormControl;
  public searchTerm = '';
  public items: any;
  public searching = false;
  public outputHeader = 'hi, im being outputted';

  ngOnInit() {
    /* this initializes all the searchable items,
    displaying them in the local items array
     */
    this.setFilteredItems('');

    /*
    PIPED "debounceTime" into observable valueChanges
    */
    this.searchControl.valueChanges
      .pipe(debounceTime(800))
      .subscribe(param => {
        this.setFilteredItems(param);
        this.searching = false;
      });
  }

  setFilteredItems(param) {
    this.items = this.searchService.filterItems(param);
  }
  onSearchInput() {
    this.searching = true;
  }
}
