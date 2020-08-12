import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-blue',
  templateUrl: './blue.component.html',
  styleUrls: ['./blue.component.css']
})
export class BlueComponent implements OnInit {

  public passedIdParameter: number = null;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.passedIdParameter = +params['id'];
    });
  }

}
