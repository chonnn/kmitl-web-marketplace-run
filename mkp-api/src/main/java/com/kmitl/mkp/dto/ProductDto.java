package com.kmitl.mkp.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProductDto {
    private String id;
    private String name;
    private String description;
    private Double price;
    private String status;
}
