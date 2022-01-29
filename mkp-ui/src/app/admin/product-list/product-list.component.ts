import { Component, OnInit } from '@angular/core';
import {Product} from "../../interface/product";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products!: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAdminProducts().subscribe(res => {
      this.products = res;
    });
    //next command

    // this.products = [
    //   {id:'1',name:"Test 1",description:"Test 1",price:199.00},
    //   {id:'2',name:"Test 2",description:"Test 2",price:99.00},
    // ];
  }

}
