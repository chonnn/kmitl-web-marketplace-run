package com.kmitl.mkp.controller;

import com.kmitl.mkp.dto.ProductDto;
import com.kmitl.mkp.entity.Product;
import com.kmitl.mkp.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("api")
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;

    @PostMapping("admin/product")
    public ProductDto postProduct(@RequestBody ProductDto productDto){
        return productService.saveProduct(productDto);
    }

    @GetMapping("admin/products")
    public List<ProductDto> getProducts(){
        return productService.findProducts();
    }

    @GetMapping("admin/product/{id}")
    public ProductDto getProduct(@PathVariable String id){
        return productService.findProduct(id);
    }
}
