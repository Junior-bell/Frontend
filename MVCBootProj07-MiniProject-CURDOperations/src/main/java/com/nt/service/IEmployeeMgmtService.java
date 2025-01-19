package com.nt.service;

import com.nt.model.Employee;

public interface IEmployeeMgmtService {
public Iterable<Employee> getAllEmployees();
public String registerEmployees(Employee emp);
public void deleteEmployee(Integer empno);
public Employee getEmployeeById(Integer empno);
}
