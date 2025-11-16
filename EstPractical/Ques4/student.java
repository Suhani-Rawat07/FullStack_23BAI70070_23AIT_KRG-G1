package com.example.demo;

import jakarta.persistence.*;

@Entity
public class student {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(nullable=false)
	private String name;

	@Column(nullable=false)
	private String email;

	@Column(nullable=false)
	private String course;
	
	protected student() {}

    public student(String name, String mail, String course) {
        this.name = name;
        this.email = mail;
        this.course = course;
    }
    
    public String getName() {
    	return this.name;
    }
    public String getMail() {
    	return this.email;
    }
    public String getCourse() {
    	return this.course;
    }
}
