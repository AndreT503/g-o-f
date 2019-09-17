import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { AngularPreDirective } from '../angular-pre.directive';
import { TriangleService } from '../triangle.service';

@Component({
  selector: 'app-floyd',
  templateUrl: './floyd.component.html',
  styleUrls: ['./floyd.component.css'],
  providers: [TriangleService, AngularPreDirective],
  encapsulation: ViewEncapsulation.None
})
export class FloydComponent implements OnInit {
public floydString = '';
public color: 'yellow' | 'red';
  constructor(private triangleService: TriangleService) { }


  ngOnInit() {
  }

  onClick(rows: number, checked: boolean) {
    if (checked) {
      this.floydString = this.triangleService.evenFloydTriangle(rows);
      this.color = 'red';
    } else {
      this.floydString = this.triangleService.floydTriangle(rows);
      this.color = 'yellow';
    }
 }
}
