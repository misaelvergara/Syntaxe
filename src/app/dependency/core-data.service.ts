/*
  This service is responsible for holding all the core data for the component page.
  It holds a main array of data that gets searched by a method called filterItems.
  This method returns an array of results that has an identical structure to the
  main array.
*/
import { Injectable, Output, EventEmitter } from '@angular/core';
import { ErrorLoggerService } from './error-logger.service';
import ComponentData from './component-data';

@Injectable({
  providedIn: 'root'
})

export class CoreDataService {

	@Output() sortedListReady: EventEmitter<any[]> = new EventEmitter();

	private componentData = new ComponentData();
  private fetchedObjects = [];
	// holds all the indexed objects that match a term
  private fetchedSortedList = [];
	// holds all the objects indexed in the ComponentData class
  private breakLoopGlobally = false;
	// breaks the scoped loops of getComponentProperties
  private level: number;
	// stores th
  private levels: any[];
  
  public filter = {
    descptLength: 150,
    titleIsSet: true,
    contentIsSet: true,
    codeIsSet: false,
    listWasfetched: false,
	
    ask: (term) => {
      this.fetchedObjects = [];
      this.filterComponentData(this.componentData.array, term);
    },
	
    requestComponent: (ref: any[]) => {
	  this.breakLoopGlobally = false;
      this.fetchedObjects = [];
	  this.levels = [];
      this.getComponentProperties(this.componentData.array, ref);
    },
	
    requestSortedList: () => {
		// checks if list was not retrived yet
		if (!this.filter.listWasfetched) {
			this.sortList(this.componentData.array);
		}
		this.filter.listWasfetched = true;
		this.sortedListReady.emit(this.fetchedSortedList);
	},
	
    fetch: () => this.fetchedObjects,
	
  };
  
  
  constructor(private errorLoggerSrvc: ErrorLoggerService) {
  }

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
        this.fetchedObjects = this.fetchedObjects.concat(obj);
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
  finds and fetchs component data
*/
  private getComponentProperties(searchable: any[], ref = [], globalLevel = 0, insertablelocalLevel = -1): void {
	let localLevel = insertablelocalLevel + 1;
	
    // length of the searchable array
    const length = searchable.length;
    let obj;
    let term: string;
	/*
		tenho um problema
		a variavel globalLevel é individual a cada instância da função
		ou seja, a cada recursion da função, temos uma variável globalLevel para seu escopo
		
		o que quero é o seguinte: quando a palavra for encontrada,
		a variavel aumenta globalmente em todas as instancias da função
		Portanto:
		quando a função começa, a variável é definida globalmente pela primeira vez
		Logo, então: 
		todas as instâncias da função são afetadas
	*/
	this.level = globalLevel;
    /*
      Loops through the existing objects inside the searchable array
    */
    for (let i = 0; i < length; i++) {
      /*The last key of the array passed through the 'ref' parameter
        is the object we are trying to access through the getComponentProperties method.
        Each key in the array, counting down from the last key, represents a
        parent object that contains the target object. That way, a[0] contains a[1]
        and a[1] contains a[2], and so on..*/
      term = ref[this.level];
      let foundInTitle = searchable[i].title == term;
      // checks if the term was found
      if (foundInTitle) {
        // checks if the last iteration of the reference array was reached
        if (this.level == ref.length - 1) {
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
          this.fetchedObjects = this.fetchedObjects.concat(obj);
		  this.breakLoopGlobally = true;
		  /*
			this forces other iterations of the loop to break once the requested data was found
		  */
        } else {
          // else, iterates again, increasing the value of globalLevel
          ++this.level;
        }

      }

      // checks if the searchable array has any iterable arrays
	  /* also checks
		if the level has a higher value than the localLevel, then the function is ready to call itself
		in order to look for the next key of the ref array passed as a parameter
		
		this stops the function from searching for results on the children of a parent if the current
		term wasn't found yet
	  */
      if (searchable[i].hasChildren && foundInTitle) {
			this.getComponentProperties(searchable[i].children, ref, this.level, localLevel);	
      } else if (this.level > localLevel) {		  
		  // this stops the function globally
		  this.breakLoopGlobally = true;
		  console.log('...');
		  this.errorLoggerSrvc.sendNewLog('Attempted to get component data for an invalid term. Parent scope has no children for terms.');
		  this.errorLoggerSrvc.sendNewLog('Attempted to search for the next term (global level changed) in the same local level.');
	  }
	  // this forces other iterations of the loop to break once the requested data was found
	  if (this.breakLoopGlobally) {
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
      this.fetchedSortedList = this.fetchedSortedList.concat(obj);


      /*
          checks if the searchable array has any iterable arrays
      */
      if (searchable[i].hasChildren) {
        this.sortList(searchable[i].children, ref.concat(searchable[i].title));
      }
    }
  }

  public formatForRouter(param: any[]) {
	if (typeof param != 'undefined') {
		return `['` + param.join(`','`) + `']`;
	} else {
		this.errorLoggerSrvc.sendNewLog('Attempted to format an invalid route.');
		this.errorLoggerSrvc.toErrorPage();
		return ' ';
	}
  }



  private matchStrings(p1: string, p2: string) {
    return p1.toLowerCase().indexOf(p2.toLowerCase()) > -1;
  }
}

