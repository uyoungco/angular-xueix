import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2} from '@angular/core';
import { DragData, DragDropService } from '../drag-drop.service';

@Directive({
  selector: '[app-droppable][dragEnterClass][dropTags]'
})
export class DropDirective {

  @Output() dropped = new EventEmitter<DragData>();
  @Input() dragEnterClass: string;
  @Input() dropTags: string[] = [];
  private drag$;
  constructor(
    private el: ElementRef,
    private rd: Renderer2,
    private service: DragDropService
  ) {
    this.drag$ = this.service.getDragData().take(1)
  }

  @HostListener('dragenter', ['$event'] )
  onDragEnter(ev: Event) {
    if (this.el.nativeElement === ev.target) {
      this.drag$.subscribe(dragData => {
        if (this.dropTags.indexOf(dragData.tag) > -1 ) {

          this.rd.addClass(this.el.nativeElement, this.dragEnterClass);
        }
      })
    }
  }

  @HostListener('dragover', ['$event'])
  onDragOver(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    if (this.el.nativeElement === ev.target) {
      this.drag$.subscribe(dragData => {
        if (this.dropTags.indexOf(dragData.tag) > -1) {
          this.rd.setProperty(ev, 'dataTransfer.effectAllowed', 'all');
          this.rd.setProperty(ev, 'dataTransfer.dropEffect', 'move');
        } else {
          this.rd.setProperty(ev, 'dataTransfer.effectAllowed', 'none');
          this.rd.setProperty(ev, 'dataTransfer.dropEffect', 'none');
        }
      });
    }
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(ev: Event) {
    if (this.el.nativeElement === ev.target) {
      this.drag$.subscribe(dragData => {
        if (this.dropTags.indexOf(dragData.tag) > -1) {
          this.rd.removeClass(this.el.nativeElement, this.dragEnterClass)
        }
      })
    }
  }

  @HostListener('drop', ['$event'])
  onDrop(ev: Event) {
    if (this.el.nativeElement === ev.target) {
      this.drag$.subscribe(dragData => {
        this.rd.removeClass(this.el.nativeElement, this.dragEnterClass)
        this.dropped.emit(dragData)
        this.service.clearDragData()
      })
    }
  }

}
