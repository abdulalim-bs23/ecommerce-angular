import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from './product.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrl = environment.apiUrl;

  product = new Subject<Product | undefined>();
  product$ = this.product.asObservable();

  productData: any;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    const url = `${this.baseUrl}products.json`;
    console.log(url);
    return this.http.get<any>(url);
  }
}
