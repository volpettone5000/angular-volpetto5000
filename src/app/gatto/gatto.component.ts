import { Component, OnChanges, OnInit } from '@angular/core';

export interface polpo {
  x;
  polpo();
}

@Component({
  selector: 'app-gatto',
  templateUrl: './gatto.component.html',
  styleUrls: ['./gatto.component.css'],
})
export class GattoComponent implements OnInit, polpo, OnChanges {
  x;
  polpo() {
    console.log('polpo');
  }

  constructor() {
    this.meow('constructor');
  }

  ngOnChanges() {
    this.meow('ngOnChanges');
  }

  ngOnInit() {
    this.meow('ngOnInit');
  }

  meow(str) {
    console.log('meow! ' + str);
  }

  
  getElementToArray(n1: number, n2: number, n3: number) {
    return {
      n1: n1,
      n2: n2,
      n3: n3,
      getElementToArray() {
        return this.n1 + ' ' + this.n2 + ' ' + this.n3;
        let user = [];
        user = this.getElementToArray(2, 3, 4);
        console.log(this.user.getElementToArray());
      },
    };
  }

  // --->
}
