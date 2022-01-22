package com.kmitl.mkp.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyFirstController {

    @GetMapping("hello")
    public String helloSpringBoot(){
        return "Hello Sprint Boot!";
    }

}
