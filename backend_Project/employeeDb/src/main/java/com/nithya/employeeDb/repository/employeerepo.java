package com.nithya.employeeDb.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nithya.employeeDb.entity.employeeentity;

public interface employeerepo extends JpaRepository<employeeentity, Integer> {

}
