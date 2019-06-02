import { Component, OnInit } from '@angular/core';
import { CoreDataService } from '../dependency/core-data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})

export class ListPage implements OnInit {
  public retrievedComponentList: any[];
  public listHasLoaded = false;
	// tells the view the list has loaded, making the progress bar slowly fade
  public canCancelProgressBar = false;
	// tells the view to hide the progress bar definitevely
  public progress = 0;
	// advances the progress bar, ranges from 0 to 1

  constructor(private coreDataSrvc: CoreDataService) { }
	/*
		subscribeble methods should be placed on top of ngOnInit()
	*/	
	ngOnInit() {
	// subcribebles are liseteners, gets sorted list when its ready
	this.coreDataSrvc.sortedListReady.subscribe(retrieved => {
		// the list was retrieved, now the component waits 1s in order for animations to take effect
		setTimeout(() => {
		this.retrievedComponentList = retrieved;
		this.listHasLoaded = true;
		clearInterval(interval);
			// interrupts interval definitevely 		
		setTimeout(() => {
			this.canCancelProgressBar = true
		}, 600)
			// waits 0.6s to interrupt the progressbar definitevely		
		}, 1000);
    });
	
	let interval = setInterval(() => {
		// just random number I played with to make the progress bar flow smoother
		this.progress += ((Math.floor(Math.random() * 9) + 1) / 400);
	},10);
	
	// requests sortedList
	this.coreDataSrvc.filter.requestSortedList();
  }

}
