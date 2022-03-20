import { Component, OnInit } from '@angular/core';
import { GlobalMasterComponent } from 'src/app/modules/shared/components/global-master/global-master.component';

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
export class MasterComponent extends GlobalMasterComponent implements OnInit {

  constructor() { 
    super();
  }

  override ngOnInit(): void {
  }

}
