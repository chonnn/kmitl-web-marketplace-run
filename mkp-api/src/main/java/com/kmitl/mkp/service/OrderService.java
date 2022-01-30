package com.kmitl.mkp.service;

import com.kmitl.mkp.dto.OrdersDto;
import com.kmitl.mkp.entity.Orders;
import com.kmitl.mkp.entity.Product;
import com.kmitl.mkp.mapper.OrderMapper;
import com.kmitl.mkp.repository.OrdersRepository;
import com.kmitl.mkp.repository.ProductRepository;
import com.kmitl.mkp.util.UUIDGenerator;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class OrderService {

    private final OrdersRepository ordersRepository;
    private final ProductRepository productRepository;

    private final OrderMapper orderMapper;

    public OrdersDto saveOrder(OrdersDto ordersDto){

        Orders orders = orderMapper.toOrder(ordersDto);
        orders.setTotalAmount(
                orders.getOrderDetails().stream().mapToDouble(od -> {
                    Product product = productRepository.findById(od.getProduct().getId()).get();
                    od.setPrice(product.getPrice());
                    return product.getPrice();
                }).sum()
        );

        orders.getOrderDetails().forEach(od -> od.setOrder(orders));
        ordersRepository.save(orders);

        return ordersDto;
    }

}
