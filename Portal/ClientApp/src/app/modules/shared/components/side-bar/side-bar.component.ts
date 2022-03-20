import { Component, ContentChild, ElementRef, HostBinding, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  template: `
    <ng-container *ngTemplateOutlet="sideBarTemplate" class="basic" [ngClass]="expand?'show':'height'"></ng-container>
  `,
  styles: [
    `
    :host(.basic) {
      transition-property: width;
      transition-duration: 0.2s;
    }
    :host(.hide) {
      width:0;
    }
    `
  ]
})
export class SideBarComponent implements OnInit {
  @Input() expand = true;
  @ContentChild("sideBarTemplate") sideBarTemplate: TemplateRef<any>|null=null;
  @HostBinding('class.hide') hide = false;

  

  constructor() { }

  ngOnInit(): void {
  }

}
