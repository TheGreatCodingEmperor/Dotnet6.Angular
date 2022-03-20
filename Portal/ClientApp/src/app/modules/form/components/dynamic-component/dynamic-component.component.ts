import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-component',
  template: `
  dynamic
    <div [innerHTML]="insertHTML"></div>
  `,
  styles: [
  ]
})
export class DynamicComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  insertHTML=`
<div>
  <app-square-button text="123"></app-square-button>
</div>`
}
