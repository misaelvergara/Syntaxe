import { Component, OnInit, Input } from '@angular/core';
import { CoreDataService } from 'src/app/dependency/core-data.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
})
export class TreeComponent implements OnInit {
  @Input() tree;
  constructor(private coreDataSrvc: CoreDataService) { }

  sliceRouterParam(lastIndex: number) {
    const tree = this.tree.slice(0, lastIndex + 1);

    return this.coreDataSrvc.addBrackets(tree);
  }

  ngOnInit() {}

}
