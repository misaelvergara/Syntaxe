import { Component, OnInit, OnDestroy } from '@angular/core';
import { ErrorLoggerService } from '../dependency/error-logger.service';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-log',
  templateUrl: './log.page.html',
  styleUrls: ['./log.page.scss'],
})

export class LogPage implements OnInit, OnDestroy {
	public log: string;
	private subscription;
	
	constructor(
	private errorLoggerSrvc: ErrorLoggerService,
	private router: Router) {}
	
	// happens once on initialization
  ngOnInit() {
	  /*
		this subscription stays active across every single page
		Everytime the navigation changes, a new observable is emitted.
		That's why we need to unsucribe from it on ngOnDestroy
	*/
	this.subscription = this.router.events.subscribe((e: any) => {
     if (e instanceof NavigationStart) {
       this.errorLoggerSrvc.getAllLogs();
     }
	});
	
	  this.log = '...';	  
	  this.errorLoggerSrvc.logsReady.subscribe(fetched => {
		  this.log = fetched;
	  });
	  this.errorLoggerSrvc.getAllLogs();
  }
  
  ngOnDestroy() {
	  if (this.subscription) {
		  this.subscription.unsubscribe();
	  }
  }

}
