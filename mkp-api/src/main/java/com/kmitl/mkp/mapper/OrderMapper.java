package com.kmitl.mkp.mapper;

import com.kmitl.mkp.dto.OrderDetailDto;
import com.kmitl.mkp.dto.OrdersDto;
import com.kmitl.mkp.entity.OrderDetail;
import com.kmitl.mkp.entity.Orders;
import com.kmitl.mkp.util.UUIDGenerator;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", imports = {UUIDGenerator.class})
public interface OrderMapper {

    @Mapping(target = "id",
            expression = "java(ordersDto.getId().isEmpty()? UUIDGenerator.getUUID():ordersDto.getId())")
    Orders toOrder(OrdersDto ordersDto);

    @Mapping(target = "id",
            source = "id",
            defaultExpression = "java(UUIDGenerator.getUUID())")
    @Mapping(target = "product.id", source = "productId")
    OrderDetail toOrderDetail(OrderDetailDto orderDetailDto);
}
