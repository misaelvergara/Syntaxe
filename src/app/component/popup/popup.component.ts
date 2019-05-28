import { Component, OnInit } from '@angular/core';
import { ViewController } from '@ionic/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {


  ngOnInit() {}
  constructor(public viewCtrl: ViewController) {}
  
    close() {
      this.viewCtrl._destroy();
    }
}
