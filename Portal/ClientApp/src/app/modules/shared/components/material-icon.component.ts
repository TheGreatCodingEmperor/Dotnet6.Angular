import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mt-icon',
  template: `
    <i class="material-icons" style="font-size:{{size}};">{{icon}}</i> 
  `,
  styles: [
  ]
})
export class MaterialIconComponent implements OnInit {
  @Input() icon:string ='book';
  @Input() size:string ='1.2rem';
  constructor() { }

  ngOnInit(): void {
  }

}
