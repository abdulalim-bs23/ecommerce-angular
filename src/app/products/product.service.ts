import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IProduct, Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  urlLocal: string = 'http://localhost:3000';
  urlDummyJson: string = 'https://dummyjson.com/';

  product = new Subject<Product | undefined>();
  product$ = this.product.asObservable();

  productData: any ;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get<any>(this.urlDummyJson + 'products');
  }
}
