import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  numberOfItems: number = 0;
  isOpen: boolean = false;

  constructor() {}

  toggle() {
    return (this.isOpen = !this.isOpen);
  }

  getItems():void {};
}
