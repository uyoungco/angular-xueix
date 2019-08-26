import {Component, OnInit, Input, EventEmitter, Output, HostBinding, HostListener, ChangeDetectionStrategy} from '@angular/core';
import {  cardAnim } from '../../anims/card.anim';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  animations: [
    cardAnim
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectItemComponent implements OnInit {

  @Input() item;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onInvite = new EventEmitter<void>();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onEdit = new EventEmitter<void>();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onDel = new EventEmitter<void>();

  // @HostBinding('@card') cardState = 'out'

  constructor() { }

  ngOnInit() {
  }
  // @HostListener('mouseenter')
  // onMouseEnter() {
  //   this.cardState = 'hover'
  // }
  //
  // @HostListener('mouseleave')
  // onMouseLeave() {
  //   this.cardState = 'out'
  // }

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
