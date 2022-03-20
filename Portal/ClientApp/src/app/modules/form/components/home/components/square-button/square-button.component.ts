import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square-button',
  template: `
    <p>
      square-button works!
      {{text}}
    </p>
  `,
  styles: [
  ]
})
export class SquareButtonComponent implements OnInit {
  @Input() text:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
