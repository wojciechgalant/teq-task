import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Employee } from '@teq-task/shared';
import { SortOption } from 'shared/src/lib/common.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('employees')
  getEmployees(
    @Query('offset') offset = 0,
    @Query('limit') limit = 10,
    @Query('sortBy') sortBy = 'name',
    @Query('order') order: SortOption = SortOption.ASC,
    @Query('search') search?: string,
    @Query('department') department?: string
  ): Employee[] {
    return this.appService.getAllEmployees({
      offset,
      limit,
      sortBy,
      order,
      search,
      department,
    });
  }

  @Get('employees/:id')
  getOneEmployeeById(@Param('id') id: Employee['id']): Employee {
    return this.appService.getOneEmployeeById(id);
  }
}
