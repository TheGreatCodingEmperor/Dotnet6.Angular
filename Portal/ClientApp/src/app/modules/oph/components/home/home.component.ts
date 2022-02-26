import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { MasterComponent } from '../master/master.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styles: [
  ]
})
export class HomeComponent extends MasterComponent implements OnInit {

  constructor(
    masterService: MasterService
  ) {
    super(masterService);
  }

  override ngOnInit(): void {
  }

}

