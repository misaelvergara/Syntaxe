/*
  This page implements two services through dependency injection. These services
  are then used to display a list of queried elements by the user.

  . coreDataSrvc
  is responsile for providing a method that allows the page to search through an array
  of data that contains many objects. The method returns an array according to the passed
  parameter.
  . queryService
  is encharged to integrate the BottomBar component to the page. The page subscribes
  to the observables provided by this service, taking action each time it is notified
  of changes.
 */
import { Component, OnInit } from '@angular/core';
import { CoreDataService } from '../dependency/core-data.service';
import { QuerySenderService } from '../dependency/query-sender.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  /* DEPENDENCY INJECTION: accesses an instance (which is
    a singleton across all components) of search service */
  constructor(
    private coreDataSrvc: CoreDataService,
    private querySrvc: QuerySenderService) {
  }
  public retrievedComponentList: any;
  public userIsTyping = false;
  public canDisplaySecHeader = false;
  public outputHeader: string;
  public resultHeader: string;

  public addBrackets(param) {
    return this.coreDataSrvc.addBrackets(param);
  }

  ngOnInit() {
    this.resultHeader = 'Comece sua busca!';
    /*
      gets notified if the user is typing
      @param returns a boolean
     */
    this.querySrvc.hasEmittedUserIsTyping.subscribe(param => {
      this.userIsTyping = param;
      if (param) {
        this.resultHeader = 'Pesquisando...';
      }
      // displays loading spinner
    });

    /*
      subscribes to changes in the query
    */
    this.querySrvc.hasEmittedQuery.subscribe((param: string) => {
      // changes were made, so:

      // checks if string contains only whitespace
      if (!param.replace(/\s/g, '').length) {
        this.canDisplaySecHeader = false;
        this.resultHeader = 'Pesquisa inválida.';
        // tells the QuerySenderService to emit that the user is no longer typing
        this.querySrvc.emitUserIsTyping(false);
        return;
      } else {
        this.canDisplaySecHeader = true;
      }
      this.outputHeader = param;

      /*
        calls filterItems from coreDataSrvcService, which returns results
        as an array
      */
      this.coreDataSrvc.filter.ask(param);
      this.retrievedComponentList = this.coreDataSrvc.filter.retrieve();

      const length = this.retrievedComponentList.length;
      if (length > 1) {
        this.resultHeader = `Foram encontrados (${length}) resultados.`;
      } else if (length > 0) {
        this.resultHeader = 'Foi encontrado (1) resultado.';
      } else {
        this.resultHeader = 'Nenhum resultado encontrado.';
      }

      // search is done
      // tells the QuerySenderService to emit that the user is no longer typing
      this.querySrvc.emitUserIsTyping(false);
    });
  }
}

