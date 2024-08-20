import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../models/task';

@Pipe({
  name: 'statusFilter'
})

export class StatusFilterPipe implements PipeTransform {

  transform(tasks: Task[],status: string): Task[] {
    return tasks.filter(task => task.status === status);
  }

}
