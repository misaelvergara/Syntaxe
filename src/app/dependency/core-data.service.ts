/*
  This service is responsible for holding all the core data for the component page.
  It holds a main array of data that gets searched by a method called filterItems.
  This method returns an array of results that has an identical structure to the
  main array.
*/
import { Injectable } from '@angular/core';
import ComponentData from '../component/component.data.raw';

@Injectable({
  providedIn: 'root'
})
export class CoreDataService {

  private componentData = new ComponentData();

  private resultArray = [];
  public filter = {
    setTitle: true,
    setContent: true,
    setCode: false,
    ask: (term) => {
      this.resultArray = [];
      this.filterData(this.componentData.array, term)},
    retrieve: () => this.resultArray,
  };

  private filterData(searchable: any[], term: string, ref = []): void {
    /*
    searchable[0].name
    <array>[index] returns an object
    <array><index>.name

    */
    // length of the searchable array
    const length = searchable.length;
    let obj;
    let foundInContent = false;
    let foundInCode = false;
    let foundInTitle = false;

    for (let i = 0; i < length; i++) {
      /*
          filter settings
      */
      if (this.filter.setTitle) {
        foundInTitle = this.checkString(searchable[i].title || '', term);
      }
      if (this.filter.setContent) {
        if (searchable[i].hasContent) {
          foundInContent = this.checkString(searchable[i].body || '', term);
        }
      }
      if (this.filter.setCode) {
        foundInCode = this.checkString(searchable[i].code || '', term);
      }

      /*
          checks if the term was found
      */
      if (foundInContent || foundInTitle || foundInCode) {
        obj = {
          title: searchable[i].title,
          descpt: searchable[i].hasContent ? `${searchable[i].body.slice(0, 50)}...` : '',
          tree: ref.concat(searchable[i].title)
        };
        this.resultArray = this.resultArray.concat(obj);
      }

      /*
          checks if the searchable array has any iterable arrays
      */
      if (searchable[i].hasChildren) {
        /*
            what if the term wasn't found but it does have children?
        */
        this.filterData(searchable[i].children, term,
          ref.concat(searchable[i].title));
      }

    }
  }

  private checkString(p1: string, p2: string) {
    return p1.toLowerCase().indexOf(p2.toLowerCase()) > -1;
  }
  constructor() {
  }
}

