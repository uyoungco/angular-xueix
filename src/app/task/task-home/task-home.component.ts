import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { NewTaskComponent } from '../new-task/new-task.component';
import { CopyTaskComponent } from '../copy-task/copy-task.component';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {

  lists = [
    {
      id: 1,
      name: '待办',
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
  constructor(private dialog: MdDialog) { }

  ngOnInit() {
  }

  openNewProjectDialog() {}
  launchNewTaskDialog() {
    this.dialog.open(NewTaskComponent);
  }
  launchCopyTaskDialog() {
    const dialogRef = this.dialog.open(CopyTaskComponent, {data: {lists: this.lists}})
  }
}
