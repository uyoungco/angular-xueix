import {ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit} from '@angular/core';
import { MdDialog } from '@angular/material';

import { NewProjectComponent } from '../new-project/new-project.component'
import { InviteComponent } from '../invite/invite.component'
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { slideToRight } from '../../anims/router.anim';
import { listAnimation } from '../../anims/list.anim';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations: [ slideToRight, listAnimation ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectListComponent implements OnInit {

  @HostBinding('@routeAnim') state;
  numb = 3
  projects = [
    {
      'id': 1,
      'name': '企业协作平台11',
      'desc': '这是一个企业内部项目',
      'coverImg': 'assets/img/covers/1.jpg'
    },
    {
      'id': 2,
      'name': '企业协作平台22',
      'desc': '这是一个企业内部项目',
      'coverImg': 'assets/img/covers/2.jpg'
    }
  ]
  constructor(
    private dialog: MdDialog,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }

  openNewProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {data: { title: '新增项目' }})
    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      this.projects = [...this.projects,
        {
          id: this.numb++,
          name: '一个新项目4',
          desc: '这个是一个新项目',
          coverImg: 'assets/img/covers/4.jpg'
        },
        {
          id: this.numb++,
          name: '一个新项目4',
          desc: '这个是一个新项目',
          coverImg: 'assets/img/covers/5.jpg'
        }
      ]
      this.cd.markForCheck();
    })
  }
  launchInviteDialog() {
    const dialogRef = this.dialog.open(InviteComponent)
  }

  // 编辑
  launchUpdateDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {data: { title: '编辑项目' }})
  }

  launchConfirmDialog(project) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {data: { title: '删除项目', content: '您确认删除该项目吗' }})
    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      this.projects = this.projects.filter(p => p.id !== project.id)
      this.cd.markForCheck();
    })
  }
}
