import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { windowWhen } from 'rxjs';

@Component({
  selector: 'app-global-master',
  templateUrl: 'global-master.component.html',
  styles: [
    `
      #topBar{
        box-shadow:0 0 2px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19) !important;
      }
      .fixed{
        position: absolute;
        height: calc(100% - 17.6px);
        top:71.6px;
        right:0;
        z-index:3;
        
      }
      .all{
        width:100% !important;
      }
    `
  ]
})
export class GlobalMasterComponent implements OnInit {
  @ContentChild("sideBarTemplate") sideBarTemplate: TemplateRef<any> | null = null;
  @ContentChild("iconBarTemplate") iconBarTemplate: TemplateRef<any> | null = null;
  @ContentChild("topBarTemplate") topBarTemplate: TemplateRef<any> | null = null;
  @ContentChild("mainTemplate") mainTemplate: TemplateRef<any> | null = null;
  @ContentChild("sideBarRightTemplate") sideBarRightTemplate: TemplateRef<any> | null = null;
  @Input() iconBarExpand = true;
  @Input() sideBarExpand = true;
  @Input() sideBarRightExpand = true;

  constructor() { }

  ngOnInit(): void {
  }

  deepClone(item: any) {
    return JSON.parse(JSON.stringify(item));
  }

  rwd(lg?: number, md?: number, normal?: number) {
    normal = normal ? normal : 12;
    md = md ? md : 12;
    lg = lg ? lg : 12;
    // return `col-${normal} md:col-${md} lg:col-${lg}`
    return `col-${normal} col-md-${md} col-lg-${lg}`
  }

  onResize(event: MouseEvent) {
    console.log(event);
    let rightBar = document.getElementById('sideBarRight');
    if (rightBar) {
      let startX = event.clientX;
      let startWidth = rightBar?.clientWidth;
      let move = (e: MouseEvent) => {
        console.log(e);
        (rightBar as HTMLElement).style.width = startWidth - (e.clientX - startX) + 'px';
      }
      window.addEventListener('mousemove', move, false);
      let up = () => {
        window.removeEventListener('mousemove', move, false);
      }
      window.addEventListener("mouseup", up, false);
      window.addEventListener("blur", up, false);
    }
  }
}
