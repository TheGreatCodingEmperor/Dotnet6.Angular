import { Component, Input, OnInit } from '@angular/core';
var require = { paths: { vs: 'node_modules/monaco-editor/min/vs' } };

@Component({
  selector: 'html-edit-panel',
  template: `
  <div style="height: 500px" *ngIf="showEditor">
    <ngx-monaco-editor style="height: 100%" [options]="editorOptions" [(ngModel)]="code"></ngx-monaco-editor>
  </div>
  `,
  styles: [
  ]
})
export class HtmlEditPanelComponent implements OnInit {
  editorOptions = { theme: 'vs-dark', language: 'html' };
  @Input() code: string = 'function x() {\nconsole.log("Hello world!");\n}';
  @Input() showEditor=false;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 200);
  }

}
