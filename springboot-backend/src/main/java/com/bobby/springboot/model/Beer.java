package com.bobby.springboot.model;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

// The model initiates no actions, it accepts commands from the controller and processes them. 

//Hibernate creates table and column names of the instance variables below:
@Entity // Entity defines that a class can be mapped to a table.
@Table(name = "beers")
public class Beer {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) // Primary key & generated value for columns
	private int id;
	
	@Column(name = "beer_name")
	private String beerName;

	@Column(name = "beer_desc")
	private String desc;
	
	@Column(name = "beer_abv")
	private double beerABV;
	
	@Column(name = "beer_ibu")
	private int beerIBU;
	
	@Column(name = "timestamp")
	private Timestamp timestamp;
	
	
	
	// When creating Parameterized constructor, we also need Default constructor 
	// because Hibernate uses proxies to create proxy objects	
	public Beer() {
		
	}
	 // Parameterized Constructor excluding ID:
	public Beer(String beerName, String desc, double beerABV, int beerIBU, Timestamp timestamp) {
		super();
		this.beerName = beerName;
		this.desc = desc;
		this.beerABV = beerABV;
		this.beerIBU = beerIBU;
		this.timestamp = timestamp;
	}
	
	// Getter and Setter Methods to access private fields above:
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getBeerName() {
		return beerName;
	}
	public void setBeerName(String beerName) {
		this.beerName = beerName;
	}
	public String getDesc() {
		return desc;
	}
	public void setDesc(String desc) {
		this.desc = desc;
	}
	public double getBeerABV() {
		return beerABV;
	}
	public void setBeerABV(double beerABV) {
		this.beerABV = beerABV;
	}
	public int getBeerIBU() {
		return beerIBU;
	}
	public void setBeerIBU(int beerIBU) {
		this.beerIBU = beerIBU;
	}
	public Timestamp getTimeStamp() {
		return timestamp;
	}
	public void setTimeStamp(Timestamp timestamp) {
		this.timestamp = timestamp;
	}
}
