import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MeditorService {
  private subject = new Subject<MeditorMsg>();
  constructor() {}
  // 获取订阅者
  public getObservable(): Observable<MeditorMsg> {
    return this.subject.asObservable();
  }
  // 推送信息
  public push(msg: MeditorMsg) {
    this.subject.next(msg);
  }
}
// 中间者信息
export interface MeditorMsg {
  id: string;
  body: any;
}
