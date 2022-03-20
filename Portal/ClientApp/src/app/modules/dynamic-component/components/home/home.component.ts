import { Component, OnInit } from '@angular/core';
import { PrimengComponents } from 'src/app/modules/shared/models/dynamic-primeng-components';

@Component({
  selector: 'app-home',
  template: `
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  code = [
    // {component:'input',props:{
    //   style:"color:red;"
    // },click:()=>{},children:[]},
    // {component:'radio',children:[]},
    {template:"<div><app-side-bar></app-side-bar></div>"}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
