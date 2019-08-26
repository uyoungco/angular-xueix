import { NgModule } from '@angular/core';
import { DragDirective } from './drag-arop/drag.directive';
import { DropDirective } from './drag-arop/drop.directive';
import { DragDropService } from './drag-drop.service';

@NgModule({
  exports: [
    DragDirective,
    DropDirective
  ],
  declarations: [
    DragDirective,
    DropDirective
  ],
  providers: [
    DragDropService
  ]
})
export class DirectiveModule {
  constructor() {}
}
