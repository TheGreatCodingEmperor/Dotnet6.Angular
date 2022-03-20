import { Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  template: `
  <button class="btn" (click)="onToggleSideBar()">
    <mt-icon></mt-icon>
  </button>
  <ng-container *ngTemplateOutlet="topBarTemplate"></ng-container>
  `,
  styles: [
  ]
})
export class TopBarComponent implements OnInit {
  @ContentChild("topBarTemplate") topBarTemplate: TemplateRef<any>|null=null;
  @Input() sideBarExpand:boolean = true;
  @Output() sideBarExpandChange = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  onToggleSideBar() {
    this.sideBarExpand = !this.sideBarExpand;
    this.sideBarExpandChange.emit(this.sideBarExpand);
  }
}
