package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {
	@Autowired
	EmployeeRepo repo;
	
	public String updateDetail(Employee emp) {
		repo.save(emp);
		return "updated";
	}
	
	public String deleteDetail(int empid) {
		if(repo.existsById(empid)) 
		{
			repo.deleteById(empid);
		    return "Id deleted";
			}
			else
			{
				return "Id not exists";
			}
	}
}
