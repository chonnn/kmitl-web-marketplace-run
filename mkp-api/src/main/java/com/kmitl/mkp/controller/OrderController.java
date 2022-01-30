package com.kmitl.mkp.controller;

import com.kmitl.mkp.dto.OrdersDto;
import com.kmitl.mkp.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
//@RequestMapping("api")
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;

    @PostMapping("order")
    public OrdersDto postOrder(@RequestBody OrdersDto ordersDto){
        return orderService.saveOrder(ordersDto);
    }
}
