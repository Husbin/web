import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MeditorService} from '../service/meditor.service';
import {Subscription} from 'rxjs/Subscription';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  contentFromChild: any;
  private _fromParent: any;     //私有变量，通过setter获取父组件的数据
  subscription: Subscription = null;
  serviceInput: any;
  // @Input()fromParent;    //ts中，用于直接接收从父组件获取的数据
  @Input()                      //通过setter获取父组件的数据
  set fromParent(fromParent: any) {
    this._fromParent = fromParent;
  }
  get fromParent(): any {
    return this._fromParent;
  }
  @Output() fromChild = new EventEmitter<any>();
  constructor(
    private meditor: MeditorService
  ) {
    this.subscription = meditor.getObservable().subscribe(
      msg => {
        console.log(msg);
        if (msg.id === 'parent') {
          this.serviceInput = msg.body;
        }
      }
    );
  }
  ngOnInit() {
  }

  clickChild() {
    console.log('click child' , this.contentFromChild);
    this.fromChild.emit(this.contentFromChild);
  }

  clickService() {
    this.meditor.push({id: 'child', body: this.serviceInput});
  }
}
