import { SortOption } from './common.model';

export interface Equipment {
  id: string;
  name: string;
}

export interface Employee {
  id: string;
  name: string;
  department: string;
  status: 'ACTIVE' | 'INACTIVE'; // You can extend status types if needed
  email: string;
  equipments: Equipment[];
}

export interface GetEmployeesQuery {
  offset: number;
  limit: number;
  sortBy: string;
  order: SortOption;
  search?: string;
  department?: string;
}
