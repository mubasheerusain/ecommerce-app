import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { products } from 'src/app/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(page: number): Observable<products> {
    return this.http.get<products>(`http://localhost:5000/shop/get-products?page=${page}`)
  }
}
