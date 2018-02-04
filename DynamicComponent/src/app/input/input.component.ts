import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  constructor() { }
  // 接收管理员配置的参数
  @Input() item: any;
  ngOnInit() {
  }
}
