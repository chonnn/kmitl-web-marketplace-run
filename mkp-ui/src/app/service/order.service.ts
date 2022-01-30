import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Orders} from "../interface/order";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  saveOrder(order:Orders): Observable<Orders>{
    return this.http.post<Orders>(`${environment.apiUrl}/api/order`,order);
  }
}
