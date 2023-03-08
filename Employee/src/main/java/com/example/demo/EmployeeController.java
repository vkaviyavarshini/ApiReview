package com.example.demo;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/v1")
public class EmployeeController {
	@Autowired
	EmployeeRepo repo;
	
	@Autowired
	EmployeeService serv;
	
	@GetMapping("/employees")
	List<Employee> getList(){
		return repo.findAll();
	}
	
	@GetMapping("/getEmployees")
	Optional<Employee> getListId(@RequestParam int empId){
		return repo.findById(empId);
	}
	
	@PostMapping("/employees")
	public Employee create(@RequestBody Employee emp) {
		return repo.save(emp);
	}
	
	@PutMapping("/employees")
	public String update(@RequestBody Employee emp) {
		return serv.updateDetail(emp);
	}
	
	@DeleteMapping("/employees")
	public String delete(@RequestParam int empId) {
		return serv.deleteDetail(empId);
	}

}
