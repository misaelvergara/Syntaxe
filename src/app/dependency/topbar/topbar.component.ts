import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {

  @Input() showBackButton: boolean;
  @Input() showAppName: boolean;
  @Input() insertableTitle: string;
  @Input() enableButtons: boolean;

  constructor() { }

  ngOnInit() {}

}
