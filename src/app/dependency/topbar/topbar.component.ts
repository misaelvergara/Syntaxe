import { Component, OnInit, Input } from '@angular/core';
import { TellBarService } from '../tell-bar.service';
import { TopbarConfig } from './topbarConfig.model';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  constructor(private tellbarService: TellBarService) { }

  bb = true;

  getSmth(): boolean {
    this.tellbarService.getTopbarConfig().subscribe(
      p => this.bb = p
      );
    return this.bb;
  }

  propShowAppName() {
    return this.tellbarService.topbarConfig.showAppName;
  }

  propInsertableTitle() {
    return this.tellbarService.topbarConfig.insertableTitle;
  }

  propEnableButtons() {
    console.log(this.getSmth());
    return this.tellbarService.topbarConfig.enableButtons;
  }

  ngOnInit() {
   }

}
