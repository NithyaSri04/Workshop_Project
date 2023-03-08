package com.nithya.employeeDb.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.nithya.employeeDb.entity.employeeentity;
import com.nithya.employeeDb.service.employeeservice;


@RestController
@CrossOrigin("http://localhost:3000")
public class employeecontroller {
	@Autowired 
	private employeeservice empservice;
	
	@PostMapping("/addemployee")
	public String getDetails(@RequestBody employeeentity obj) {
		empservice.saveDetails(obj);
		return "Value Added";
	}
	@GetMapping("/getemployee")
	public List<employeeentity> getDetails(){
		return empservice.getAllDetails();
	}
	@PutMapping("/updateemployee") 
		public String putDetails(@RequestBody employeeentity obj) {
			empservice.updateDetails(obj);
			return "Value Updated";
		}
	@DeleteMapping("/deleteemployeeentity/{id}")
	public String deleteById(@PathVariable("id") int id) {
		empservice.deleteById(id);
		return "Value Deleted";
	}
}


