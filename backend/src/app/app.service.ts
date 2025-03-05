import { Injectable } from '@nestjs/common';
import { Employee, GetEmployeesQuery } from '@teq-task/shared';
import { EMPLOYEES } from './mock';
import { SortOption } from 'shared/src/lib/common.model';

@Injectable()
export class AppService {
  getAllEmployees(query: GetEmployeesQuery): Employee[] {
    return EMPLOYEES.sort((a, b) =>
      query.sortBy && query.order
        ? query.order === SortOption.ASC
          ? a[query.sortBy] - b[query.sortBy]
          : b[query.sortBy] - a[query.sortBy]
        : 1
    )
      .filter(
        (employee) =>
          !query.search ||
          employee.department.toLocaleLowerCase().includes(query.search) ||
          employee.name.toLocaleLowerCase().includes(query.search)
      )
      .splice(query.offset * query.limit, query.limit);
  }
}
