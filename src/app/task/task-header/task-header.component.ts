import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss']
})
export class TaskHeaderComponent implements OnInit {

  @Input() header = '';
  @Output() newTask = new EventEmitter<void>();
  @Output() moveAll = new EventEmitter<void>();
  @Output() delList = new EventEmitter<void>();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onEditList = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onNewTaskClick() {
    this.newTask.emit()
  }

  onMoveAllClick() {
    this.moveAll.emit()
  }

  // 删除列表
  onDelListClick() {
    this.delList.emit()
  }

  // 列表重命名
  onEditListClick() {
    this.onEditList.emit()
  }
}
