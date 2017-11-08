import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css'],
})
export class UserItemComponent implements OnInit {
  @Input() name: string;  // 使用@Input()接收父组件传过来的值
  constructor() {
    // this.name = "Felipe"
  }

  ngOnInit() {
  }

}
