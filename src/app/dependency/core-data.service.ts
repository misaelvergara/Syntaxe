/*
  This service is responsible for holding all the core data for the component page.
  It holds a main array of data that gets searched by a method called filterItems.
  This method returns an array of results that has an identical structure to the
  main array.
*/
import { Injectable } from '@angular/core';
import ComponentData from './component-data';

@Injectable({
  providedIn: 'root'
})
export class CoreDataService {

  private componentData = new ComponentData();

  private resultsArray = [];
  private sortedListArray = [];
  private forceBreakLoop = false;
  private globalQueryTerm: string;
  private globalCurrIteration: number;
  public filter = {
    descptLength: 150,
    titleIsSet: true,
    contentIsSet: true,
    codeIsSet: false,
    listWasRetrieved: false,
    ask: (term) => {
      this.resultsArray = [];
      this.filterComponentData(this.componentData.array, term);
    },
    requestComponent: (ref: any[]) => {
      this.resultsArray = [];
      this.getComponentProperties(this.componentData.array, ref);
    },
    requestSortedList: () => this.sortList(this.componentData.array),
    retrieve: () => this.resultsArray,
    retrieveSortedList: () => {
      this.filter.listWasRetrieved = true;
      return this.sortedListArray;
    }
  };

  private filterComponentData(searchable: any[], term: string, ref = []): void {
    /*
    searchable[0].name
    <array>[index] returns an object
    <array><index>.name

    this method takes a searchable array of objects and modifies a private
    instance array to hold the found results.
    the criteria for finding results consists of taking a term and verifying if
    the property values of an object that is contained inside the searchable 
    arrays is identic to the said term
    */
    // length of the searchable array
    const length = searchable.length;
    let obj;

    /*
      Loops through the existing objects inside the searchable array
    */
    for (let i = 0; i < length; i++) {
		let foundInContent = false;
		let foundInCode = false;
		let foundInTitle = false;
      if (this.filter.titleIsSet) {
        // checks for term in the title property of the object
        foundInTitle = this.matchStrings(searchable[i].title || '', term);
      }
      if (this.filter.contentIsSet) {
        // checks for term in the body property of the object
        if (searchable[i].hasContent) {
          foundInContent = this.matchStrings(searchable[i].body || '', term);
        }
      }
      if (this.filter.codeIsSet) {
        // checks for term in the code property of the object
        foundInCode = this.matchStrings(searchable[i].code || '', term);
      }

      // checks whether the term was found
      if (foundInContent || foundInTitle || foundInCode) {
        // fills the object with proper properties for the search page to handle       
        obj = {
          title: searchable[i].title,
          descpt: searchable[i].hasContent ?
            `${searchable[i].body.slice(0, this.filter.descptLength)}...`
            : '',
          tree: ref.concat(searchable[i].title)
        };

        // populates the resultArray with proper results
        this.resultsArray = this.resultsArray.concat(obj);
      }

      /*
          checks if the searchable array has any iterable arrays
      */
      if (searchable[i].hasChildren) {
        /*
            @ref: is an array passed as reference to the parent element of the 
            searchable array. This reference is but the title of the parant element - of which
            has child elements - so that the objects of the searchable array will contain a tree
            property referencing its inheritance.

        */
        this.filterComponentData(searchable[i].children, term, ref.concat(searchable[i].title));
      }

    }
  }
/*
  finds and retrieves component data
*/
  private getComponentProperties(searchable: any[], ref = [], curIteration = 0, insertableFunctionId = -1): void {
	let functionId = insertableFunctionId + 1;
	
    // length of the searchable array
    const length = searchable.length;
    let obj;
    let term: string;
	/*
		tenho um problema
		a variavel curIteration é individual a cada instância da função
		ou seja, a cada recursion da função, temos uma variável curIteration para seu escopo
		
		o que quero é o seguinte: quando a palavra for encontrada,
		a variavel aumenta globalmente em todas as instancias da função
		Portanto:
		quando a função começa, a variável é definida globalmente pela primeira vez
		Logo, então: 
		todas as instâncias da função são afetadas
	*/
	this.globalCurrIteration = curIteration;
	console.log('curr iteration changes: ' + this.globalCurrIteration);

    /*
      Loops through the existing objects inside the searchable array
    */
    for (let i = 0; i < length; i++) {
      /*The last key of the array passed through the 'ref' parameter
        is the object we are trying to access through the getComponentProperties method.
        Each key in the array, counting down from the last key, represents a
        parent object that contains the target object. That way, a[0] contains a[1]
        and a[1] contains a[2], and so on..*/
      term = ref[this.globalCurrIteration];
      let foundInTitle = searchable[i].title == term;
	  console.log('(' + functionId + ') ' + '(' + this.globalCurrIteration + ')' +
	  'term of current iteration: '+term+' for '+searchable[i].title+'\n  foundInTitle: '+foundInTitle);
      // checks if the term was found
      if (foundInTitle) {
        // checks if the last iteration of the reference array was reached
        if (this.globalCurrIteration == ref.length - 1) {
          // fills the object with proper properties for the component page to handle
          obj = {
			routes: searchable[i].routes,
            title: searchable[i].title,
			
            body: searchable[i].hasContent ? 
			`${searchable[i].body}` 
			: `Ainda não temos código disponível para a página '${searchable[i].title}'.`,
			
            code: (typeof searchable[i].code === 'undefined') ? 
			`Desculpe! Ainda não temos conteúdo disponível para a página '${searchable[i].title}'.`
			: `${searchable[i].code}`,
			
            tree: ref,
          };
          this.resultsArray = this.resultsArray.concat(obj);
          console.log(obj);
		  /*
			this forces other iterations of the loop to break once the requested data was found
		  */
		  this.forceBreakLoop = true;
		  break;
        } else {
          // else, iterates again, increasing the value of curIteration
          ++this.globalCurrIteration;
        }

      }

      // checks if the searchable array has any iterable arrays
	  /* also checks
		if the globalCurrIteration variable changes, then the searched term was matched and the
		function is trying to search for the next term 
	  */
      if (searchable[i].hasChildren && this.globalCurrIteration != functionId) {
        this.getComponentProperties(searchable[i].children, ref, this.globalCurrIteration, functionId);
      }
	  /*
		this forces other iterations of the loop to break once the requested data was found
	  */
	  if (this.forceBreakLoop) {
		  this.forceBreakLoop = false;
		  break;
	  }

    }
  }

  private sortList(searchable: any[], ref = []): void {
    const length = searchable.length;
    let obj;

    /*
      Loops through the existing objects inside the searchable array
    */
    for (let i = 0; i < length; i++) {

      obj = {
        title: searchable[i].title,
        tree: ref.concat(searchable[i].title)
      };

      // populates the resultArray with proper results
      this.sortedListArray = this.sortedListArray.concat(obj);


      /*
          checks if the searchable array has any iterable arrays
      */
      if (searchable[i].hasChildren) {
        this.sortList(searchable[i].children, ref.concat(searchable[i].title));
      }
    }
  }

  public addBrackets(param: any[]) {
    return `['` + param.join(`','`) + `']`;
  }



  private matchStrings(p1: string, p2: string) {
    return p1.toLowerCase().indexOf(p2.toLowerCase()) > -1;
  }
  constructor() {
  }
}

