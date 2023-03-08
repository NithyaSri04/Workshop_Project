package com.nithya.employeeDb.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="employee")
public class employeeentity {
	employeeentity(){}
	@Id
	@Column(name="Id")
	
	private int id;
	@Column(name="employeename")
	private String name;
	@Column(name="designation")
	private String designation;
	@Column(name="age")
	private int age;
	@Column(name="salary")
	private int salary;
	@Column(name="mailid")
	private String mailid;
	@Column(name="address")
	private String address;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDesignation() {
		return designation;
	}
	public void setBranchname(String designation) {
		this.designation = designation;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public int getSalary() {
		return salary;
	}
	public void setSalary(int salary) {
		this.salary = salary;
	}
	public String getMailid() {
		return mailid;
	}
	public void setMailid(String mailid) {
		this.mailid = mailid;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public employeeentity(int id, String name, String designation, int age, int salary, String mailid, String address) {
		super();
		this.id = id;
		this.name = name;
		this.designation = designation;
		this.age = age;
		this.salary = salary;
		this.mailid = mailid;
		this.address = address;
	}
}
	