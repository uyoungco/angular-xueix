import {ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit} from '@angular/core';
import { MdDialog } from '@angular/material';
import { NewTaskComponent } from '../new-task/new-task.component';
import { CopyTaskComponent } from '../copy-task/copy-task.component';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import {NewTaskListComponent} from '../new-task-list/new-task-list.component';
import { slideToRight } from '../../anims/router.anim';
import {b} from '@angular/core/src/render3';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss'],
  animations: [ slideToRight ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskHomeComponent implements OnInit {

  @HostBinding('@routeAnim') state;
  lists = [
    {
      id: 1,
      name: '待办',
      order: 1,
      tasks: [
        {
          id: 1,
          desc: '任务一：吃饭',
          completed: true,
          priority: 3,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-3'
          },
          dueDate: new Date()
        },
        {
          id: 1,
          desc: '任务二：阿斯顿发发刚刚才vb',
          completed: false,
          priority: 2,
          owner: {
            id: 1,
            name: '旺旺',
            avatar: 'avatars:svg-6'
          },
          dueDate: new Date()
        },
      ]
    },
    {
      id: 1,
      name: '进行中',
      order: 2,
      tasks: [
        {
          id: 1,
          desc: '任务一：吃饭',
          completed: false,
          priority: 1,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-4'
          },
          dueDate: new Date()
        },
        {
          id: 1,
          desc: '任务二：阿斯顿发发刚刚才vb',
          completed: false,
          priority: 2,
          owner: {
            id: 1,
            name: '旺旺',
            avatar: 'avatars:svg-8'
          },
          dueDate: new Date()
        },
      ]
    }
  ]
  constructor(
    private dialog: MdDialog,
    private cd: ChangeDetectorRef
) { }

  ngOnInit() {
  }

  launchNewTaskDialog() {
    this.dialog.open(NewTaskComponent, {data: {title: '新建任务'}});
  }

  // 移动本列表所有内容
  launchCopyTaskDialog() {
    const dialogRef = this.dialog.open(CopyTaskComponent, {data: {lists: this.lists}})
    this.cd.markForCheck();
  }

  // 点击item事件
  launchUpdateTaskDialog(task) {
    this.dialog.open(NewTaskComponent, {data: {title: '修改任务', task: task}});
  }

  // 删除列表
  launchConfirmDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {data: { title: '删除任务列表', content: '您确认删除该任务列表吗' }})
    dialogRef.afterClosed().subscribe(result => console.log(result))
    this.cd.markForCheck();
  }

  // 列表重命名
  launchEditListDialog() {
    const dialogRef = this.dialog.open(NewTaskListComponent, {data: {title: '修改列表名称'}});
    dialogRef.afterClosed().subscribe(result => console.log(result))
    this.cd.markForCheck();
  }

  launchNewListDialog() {
    const dialogRef = this.dialog.open(NewTaskListComponent, {data: {title: '新建列表'}});
    dialogRef.afterClosed().subscribe(result => console.log(result))
    this.cd.markForCheck();
  }

  handleMove(srcData, list) {
    switch (srcData.tag) {
      case 'task-item':
        console.log('handling item')
        break
      case 'task-list':
        console.log('handling list')
        const srcList = srcData.data;
        const tempOrder = srcList.order
        srcList.order = list.order;
        list.order = tempOrder;
        break
      default:
        break
    }
  }

  // 在这里快速建立一个任务
  handleQuickTask(desc: string) {
    console.log(desc)
  }
}
