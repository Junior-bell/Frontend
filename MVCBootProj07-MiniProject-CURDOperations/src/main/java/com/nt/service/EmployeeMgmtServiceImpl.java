package com.nt.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nt.model.Employee;
import com.nt.repo.IEmployeeRepository;

@Service("empService")
public class EmployeeMgmtServiceImpl implements IEmployeeMgmtService {

	@Autowired
	private IEmployeeRepository empRepo;
	
@Override
	public Iterable<Employee> getAllEmployees()
	{
		return empRepo.findAll(); 
	}

@Override
public String registerEmployees(Employee emp) 
{
	return "Employee is saved with id value:"+empRepo.save(emp).getEmpno();
}

@Override
public void deleteEmployee(Integer empno) {
	// TODO Auto-generated method stub
	
}

@Override
public Employee getEmployeeById(Integer empno) {
	// TODO Auto-generated method stub
	return null;
}

}
