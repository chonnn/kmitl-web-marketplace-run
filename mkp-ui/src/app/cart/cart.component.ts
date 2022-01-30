import { Component, OnInit, ViewChild } from '@angular/core';
import {Product} from "../interface/product";
import {OrderDetail, Orders} from "../interface/order";
import {OrderService} from "../service/order.service";
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @ViewChild('saveSuccessSwal')
  public readonly saveSuccessSwal!: SwalComponent;

  products!:Product[];
  sumPrice!:number;

  orders: Orders = {
    id: "",
    name: "",
    orderDetails: []
  }

  constructor(private orderService:OrderService,
              private router:Router
              ) { }

  ngOnInit(): void {
    this.products = JSON.parse(localStorage.getItem('cart')||'[]' );

    this.sumPrice = 0;
    this.products.forEach(item => {
      this.sumPrice += item.price||0;
    });
  }

  placeOrder(){
    let orderDetailList: OrderDetail[] = [];
    this.products.forEach(item =>{
      orderDetailList.push({
        productId: item.id,
        productName: item.name,
        price: item.price
      });
    });

    this.orders.orderDetails = orderDetailList;
    this.orderService.saveOrder(this.orders).subscribe(res => {
      this.saveSuccessSwal.fire();
      localStorage.setItem('cart','[]');

      this.router.navigate(['/home']);
    });



  }

}
