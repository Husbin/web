import { Component, OnInit } from '@angular/core';
import {MeditorService} from '../service/meditor.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  parentClick = false;
  parentPrint: any;
  contentFromChild: any;
  serviceInput: any;
  subscription: Subscription = null;
  constructor(
    private meditor: MeditorService
  ) {
    this.subscription = meditor.getObservable().subscribe(
      msg => {
        console.log(msg);
        if (msg.id === 'child') {
          this.serviceInput = msg.body;
        }
      }
    );
  }
  ngOnInit() {
  }
  clickParent() {
    console.log(this.parentPrint);
    this.parentClick = true;
  }
  fromChild(event) {
    console.log(event);
    this.contentFromChild = event;
  }
  clickService() {
    this.meditor.push({id: 'parent', body: this.serviceInput});
  }
}
