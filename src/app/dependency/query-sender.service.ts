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

@Injectable({
  providedIn: 'root'
})
export class QuerySenderService {

  private queryString = '';

  /*
    declares two instances of EventEmitter
  */
  @Output() query: EventEmitter<string> = new EventEmitter();
  @Output() userIsTyping: EventEmitter<boolean> = new EventEmitter();

  /*
    declares a method that takes up a param
    @param is a string
    calls a method instrinsic to objects of EventEmitter
    @method 'emit'
    emits a subscrible string that other components listen to
  */
  newQuery(param) {
    this.queryString = param;
    this.query.emit(this.queryString);
  }

  userTypes(param: boolean) {
    this.userIsTyping.emit(param);

  }
  constructor() { }
}
