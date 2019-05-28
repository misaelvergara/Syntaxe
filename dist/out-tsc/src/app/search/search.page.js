import * as tslib_1 from "tslib";
/*
  This page implements two services through dependency injection. These services
  are then used to display a list of queried elements by the user.

  . CoreDataService
  is responsile for providing a method that allows the page to search through an array
  of data that contains many objects. The method returns an array according to the passed
  parameter.
  . queryService
  is encharged to integrate the BottomBar component to the page. The page subscribes
  to the observables provided by this service, taking action each time it is notified
  of changes.
 */
import { Component } from '@angular/core';
import { CoreDataService } from '../dependency/core-data.service';
import { QuerySenderService } from '../dependency/query-sender.service';
var SearchPage = /** @class */ (function () {
    /* DEPENDENCY INJECTION: accesses an instance (which is
      a singleton across all components) of search service */
    function SearchPage(coreData, queryService) {
        this.coreData = coreData;
        this.queryService = queryService;
        this.userIsTyping = false;
        this.canDisplaySecHeader = false;
    }
    SearchPage.prototype.ngOnInit = function () {
        var _this = this;
        this.resultHeader = 'Comece sua busca!';
        /*
          gets notified if the user is typing
          @param returns a boolean
         */
        this.queryService.userIsTyping.subscribe(function (param) {
            _this.userIsTyping = param;
            if (param) {
                _this.resultHeader = 'Pesquisando...';
            }
            // displays loading spinner
        });
        /*
          subscribes to changes in the query
        */
        this.queryService.query.subscribe(function (param) {
            // changes were made, so:
            // checks if string contains only whitespace
            if (!param.replace(/\s/g, '').length) {
                _this.canDisplaySecHeader = false;
                _this.resultHeader = 'Pesquisa inválida.';
                // tells the QuerySenderService to emit that the user is no longer typing
                _this.queryService.userTypes(false);
                return;
            }
            else {
                _this.canDisplaySecHeader = true;
            }
            _this.outputHeader = param;
            /*
              calls filterItems from coreDataService, which returns results
              as an array
            */
            _this.coreData.filter.ask(param);
            _this.receivedItems = _this.coreData.filter.retrieve();
            var length = _this.receivedItems.length;
            if (length > 1) {
                _this.resultHeader = "Foram encontrados (" + length + ") resultados.";
            }
            else if (length > 0) {
                _this.resultHeader = 'Foi encontrado (1) resultado.';
            }
            else {
                _this.resultHeader = 'Nenhum resultado encontrado.';
            }
            // search is done
            // tells the QuerySenderService to emit that the user is no longer typing
            _this.queryService.userTypes(false);
        });
    };
    SearchPage.prototype.addBrackets = function (param) {
        return "['" + param.join("','") + "']";
    };
    SearchPage = tslib_1.__decorate([
        Component({
            selector: 'app-search',
            templateUrl: './search.page.html',
            styleUrls: ['./search.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [CoreDataService,
            QuerySenderService])
    ], SearchPage);
    return SearchPage;
}());
export { SearchPage };
//# sourceMappingURL=search.page.js.map