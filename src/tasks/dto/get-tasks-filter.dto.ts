import { IsOptional, IsString } from 'class-validator';
import { TaskStatus } from '../task.model';

export class GetTasksFilterDto {
  @IsOptional()
  status: TaskStatus;
  @IsOptional()
  @IsString()
  search: string;
}
