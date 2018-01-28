import {Component, OnInit, ViewChild} from '@angular/core';
import {MeditorService} from '../service/meditor.service';
import {Subscription} from 'rxjs/Subscription';
import {ChildComponent} from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  parentPrint: any;
  contentFromChild: any;
  serviceInput: any;
  subscription: Subscription = null;
  @ViewChild(ChildComponent)
  private childComponent: ChildComponent;
  viewOutput: any;
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
  fromChild(event) {
    console.log(event);
    this.contentFromChild = event;
  }
  clickService() {
    this.meditor.push({id: 'parent', body: this.serviceInput});
  }
  clickView() {
    this.viewOutput = this.childComponent.contentFromChild;
  }
}
