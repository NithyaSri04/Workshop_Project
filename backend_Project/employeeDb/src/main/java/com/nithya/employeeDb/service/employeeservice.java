package com.nithya.employeeDb.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nithya.employeeDb.entity.employeeentity;
import com.nithya.employeeDb.repository.employeerepo;

import java.util.List;

@Service
public class employeeservice {
	@Autowired
	private employeerepo emp;
	public void saveDetails(employeeentity  obj) {
		 emp.save(obj);
	}
	public void updateDetails(employeeentity obj) {
		emp.saveAndFlush(obj);
	}
	public List<employeeentity> getAllDetails(){
		return emp.findAll();
	}
	public void deleteById(int id) {                                                         
		emp.deleteById(id);
	}
}

