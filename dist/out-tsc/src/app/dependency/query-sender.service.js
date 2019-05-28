import * as tslib_1 from "tslib";
/*
  This service sends and receives queries from the BottomBarComponent.
  Through EventEmitter, an observable is sent to the pages that require
  it. This way, each time the observable is changed, the page that
  implements it gets notified and runs some action based on the
  observed changes.
  @methods These methods are responsible for emitting events. How?
  Well, objects of the EventEmitter class inherit a method called
  'emit'. Through these inherited methods, a value can be passed as
  a parameter. This value, then, is emitted as an observable.
*/
import { Injectable, Output, EventEmitter } from '@angular/core';
var QuerySenderService = /** @class */ (function () {
    function QuerySenderService() {
        this.queryString = '';
        /*
          declares two instances of EventEmitter
        */
        this.query = new EventEmitter();
        this.userIsTyping = new EventEmitter();
    }
    /*
      declares a method that takes up a param
      @param is a string
      calls a method instrinsic to objects of EventEmitter
      @method 'emit'
      emits a subscrible string that other components listen to
    */
    QuerySenderService.prototype.newQuery = function (param) {
        this.queryString = param;
        this.query.emit(this.queryString);
    };
    QuerySenderService.prototype.userTypes = function (param) {
        this.userIsTyping.emit(param);
    };
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], QuerySenderService.prototype, "query", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], QuerySenderService.prototype, "userIsTyping", void 0);
    QuerySenderService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], QuerySenderService);
    return QuerySenderService;
}());
export { QuerySenderService };
//# sourceMappingURL=query-sender.service.js.map