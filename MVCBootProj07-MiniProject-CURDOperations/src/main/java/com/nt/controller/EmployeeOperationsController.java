package com.nt.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.nt.model.Employee;
import com.nt.service.IEmployeeMgmtService;

import ch.qos.logback.core.model.Model;

@Controller
public class EmployeeOperationsController {
	
	@Autowired
	private IEmployeeMgmtService empService;

@GetMapping("/")  // to show home page
public String showHome() {
	return "home";
}
@GetMapping("/emp_report")
public String showEmployeeReport(Map<String,Object> map)
{
	//use service 
	Iterable<Employee> itEmps=empService.getAllEmployees();
	//put result in model Attribute
	map.put("empList", itEmps);
	//Return LVN
	return "show_employee_report";
}
@GetMapping("/emp_add")
public String showFormforsave (@ModelAttribute("emp") Employee emp)
{
	return "register_employee";
}
@PostMapping("/emp_add")
public String saveEmployee(@ModelAttribute("emp") Employee emp,Map<String,Object> map,RedirectAttributes attrs)
{
	//use service
	String msg=empService.registerEmployees(emp);
   //keep  the result in Model Attribute
	attrs.addFlashAttribute("resultMsg",msg);
	//return LVN
	return "redirect:emp_report";
}
@GetMapping("/emp_edit")
public String showEditForm(@RequestParam("no") Integer empno, Model model) {
    Employee emp = empService.getEmployeeById(empno);
    ((RedirectAttributes) model).addAttribute("emp", emp);
    return "edit_employee";
}

@GetMapping("/emp_delete")
public String deleteEmployee(@RequestParam("no") Integer empno, RedirectAttributes attrs) {
    empService.deleteEmployee(empno);
    attrs.addFlashAttribute("resultMsg", "Employee deleted successfully!");
    return "redirect:/emp_report";
}

}
