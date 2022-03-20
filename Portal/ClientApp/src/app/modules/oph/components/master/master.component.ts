import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-master',
  template: `
    <p>
      master works!
    </p>
  `,
  styles: [
  ]
})
export class MasterComponent implements OnInit {
  iconBarExpand = true;
  sideBarExpand = true;

  constructor(
    private masterService:MasterService
  ) { }

  ngOnInit(): void {
  }

  rwd(lg?:number,md?:number,normal?:number){
    normal = normal?normal:12;
    md = md?md:12;
    lg = lg?lg:12;
    // return `col-${normal} md:col-${md} lg:col-${lg}`
    return `col-${normal} col-md-${md} col-lg-${lg}`
  }

  toggleSideBar(toggle:boolean){
    this.sideBarExpand = toggle;
  }

}
