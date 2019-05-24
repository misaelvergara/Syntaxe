import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SearchService {
  public items: any = [];

  constructor() {
    this.items = [
      { title: "one" },
      { title: "two" },
      { title: "three" },
      { title: "four" },
      { title: "five" },
      { title: "six" }
    ];
  }

  filterItems(searchTerm) {
    return this.items.filter(index => {
      return index.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
}