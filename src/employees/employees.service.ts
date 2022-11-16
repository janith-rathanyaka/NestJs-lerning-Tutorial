import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Employee, EmployeeTier } from './Employee.model';

@Injectable()
export class EmployeesService {
  private employees: Employee[] = [];

  getAllEmployees() {
    return this.employees;
  }

  createEmployee(
    firstName: string,
    lastName: string,
    designation: string,
    nearestCity: string,
    tier: EmployeeTier,
  ) {
     const employee = {
        id: uuidv4(),
        firstName,
        lastName,
        designation,
        nearestCity,
        tier
     }

     this.employees.push(employee);
     return employee
  }
}
