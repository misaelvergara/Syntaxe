import { Injectable } from '@angular/core';
import { TopbarConfig } from './topbar/topbarConfig.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TellBarService {

  topbarConfig: TopbarConfig =
    {
      showAppName: true,
      insertableTitle: 'title',
      enableButtons: false
    };
  constructor() { }

  setShowAppName(b: boolean) {
    this.topbarConfig.showAppName = b;
  }

  setInsertableTitle(s: string) {
    this.topbarConfig.insertableTitle = s;
  }

  setEnableButtons(b: boolean) {
    this.topbarConfig.enableButtons = b;
    console.log('+++++++++++++++++++++' +
    this.topbarConfig.enableButtons
    );
  }

  getShowAppName() {
    return this.topbarConfig.showAppName;
  }

  getInsertableTitle() {
    return this.topbarConfig.insertableTitle;
  }

  getEnableButtons() {
    return this.topbarConfig.enableButtons;
  }

  getTopbarConfig(): Observable<boolean> {
    return of(this.topbarConfig.enableButtons);
  }
}
