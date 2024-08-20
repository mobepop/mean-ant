import { Component , EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-taskdetail',
  templateUrl: './taskdetail.component.html',
  styleUrls: ['./taskdetail.component.scss']
})

export class TaskdetailComponent {
  @Input() task! : Task;
  @Output() save = new EventEmitter<Task>();
  @Output() cancel = new EventEmitter<void>();

  onSave() {
    this.save.emit(this.task)
  }
  onCancel() {
    this.cancel.emit()
  }
}
