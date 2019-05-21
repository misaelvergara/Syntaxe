import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  /*  @param dependency injection
      @explain: creates an instance of the tellBar service 
      services are singletons, which means that there is a single
      instance of the service running accross the app. Therefore, 
      instanciating inside a component will not create an instance
      of the service, but will actually access the current single
      instance.
  */

  constructor() {
  }
}
