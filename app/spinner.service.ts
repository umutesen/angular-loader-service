import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private visible: boolean;
  listeners = [];

  constructor() {
    this.visible = false;
  }

  onVisibilityChange(fn) {
    this.listeners.push(fn);
  }

  set visibility(value: boolean) {
    this.visible = value;
    this.listeners.forEach((fn) => {
      fn(value);
    });
  }

}