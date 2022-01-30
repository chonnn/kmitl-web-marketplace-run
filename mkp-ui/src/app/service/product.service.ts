import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interface/product';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${environment.apiUrl}/api/products` );
  }

  getAdminProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${environment.apiUrl}/api/admin/products` );
  }

  getAdminProduct(id:string): Observable<Product>{
    return this.http.get<Product>(`${environment.apiUrl}/api/admin/product/${id}` );
  }

  saveAdminProduct(product:Product): Observable<Product>{
    return this.http.post<Product>(`${environment.apiUrl}/api/admin/product`, product);
  }
}
