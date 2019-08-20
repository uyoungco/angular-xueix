import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {

  @Input() item;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onInvite = new EventEmitter<void>();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onEdit = new EventEmitter<void>();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onDel = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
  onInviteClick() {
    this.onInvite.emit();
  }

  // 编辑
  onEditClick() {
    this.onEdit.emit()
  }

  //  删除
  onDelClick() {
    this.onDel.emit()
  }
}
