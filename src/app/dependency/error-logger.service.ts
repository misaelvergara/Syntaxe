import { Injectable, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class ErrorLoggerService {
	
	private logs = [];	
	@Output() logsReady: EventEmitter<string> = new EventEmitter();
	
	// emits all logs
	public getAllLogs() {
		if (this.logs.length > 0) {
			console.log('logs are available:');
			this.logsReady.emit('\t_\\ ' + this.logs.join('\n\t_\\ '));
			this.logs = [];
		} else {
			console.log('no logs were sent, notifying...');
			this.sendNewLog('No logs available.');
			this.getAllLogs();
		}
		console.log('getting logs');
	}
	constructor(private router: Router) { }
	
	// pulls a new log
	public sendNewLog(log: string) {
		console.log('++'+log);
		this.logs = this.logs.concat(log);
	}
	
	// redirects to error page
	public toErrorPage() {
		this.router.navigate(['**']);
	}		
}
