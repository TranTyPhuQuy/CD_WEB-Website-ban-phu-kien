package com.cdweb.springboot.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "categories")
public class Category {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long Id;
	
	@NotNull
	@Size(max = 50)
	private String name;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "parent_category_id")
	private Category pareCategory;
	
	private int level;

	public Category() {
		super();
	}

	public Category(Long id, @NotNull @Size(max = 50) String name, Category pareCategory, int level) {
		super();
		Id = id;
		this.name = name;
		this.pareCategory = pareCategory;
		this.level = level;
	}

	public Long getId() {
		return Id;
	}

	public void setId(Long id) {
		Id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Category getPareCategory() {
		return pareCategory;
	}

	public void setPareCategory(Category pareCategory) {
		this.pareCategory = pareCategory;
	}

	public int getLevel() {
		return level;
	}

	public void setLevel(int level) {
		this.level = level;
	}
	
	
}
