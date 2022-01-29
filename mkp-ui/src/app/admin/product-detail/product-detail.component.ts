import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Product} from "../../interface/product";
import {ProductService} from "../../service/product.service";

import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @ViewChild('saveSuccessSwal')
  public readonly saveSuccessSwal!: SwalComponent;

  product:Product = {
    id: '',
    name: '',
    description: '',
    price: 0
  };

  constructor(private productService: ProductService,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.product.id = params['id'];
      if(this.product.id){
        this.productService.getAdminProduct(this.product.id).subscribe(res => {
          this.product = res;
        });
      }
    });
  }

  onSubmit(){
    this.productService.saveAdminProduct(this.product).subscribe(res => {
      this.saveSuccessSwal.fire();
    })
  }

}
