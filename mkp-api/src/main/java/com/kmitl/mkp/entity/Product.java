package com.kmitl.mkp.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
public class Product {
    @Id
    private String id;
    private String name;
    private String description;
    private Double price;
    private String status;
}
