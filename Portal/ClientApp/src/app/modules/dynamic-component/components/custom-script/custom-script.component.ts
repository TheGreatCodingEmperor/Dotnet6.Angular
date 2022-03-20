import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-script',
  template: `
    <p>
      custom-script works!
    </p>
  `,
  styles: [
  ]
})
export class CustomScriptComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
