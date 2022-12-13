import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  a = null;
  b = null;
  c = null;
  d = null;
  result = [];
  arr = [];
  show = false;

  addElementToArray(array: Array<Number>, element: Number) {
    array.push(element);
    this.result = array;
    return this.result;
  }

  getArrayFromIntegers(a: Number, b: Number, c: Number, d: Number) {
    const arr = [];
    arr.push(a);
    arr.push(b);
    arr.push(c);
    arr.push(d);
    this.result = arr;
    return arr;
  }

  hideShow() {
    this.show = !this.show;
  }
}
