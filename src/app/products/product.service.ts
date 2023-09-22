import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './category/category.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  urlLocal: string = 'http://localhost:3000';
  urlDummyJson: string = 'https://dummyjson.com/';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get<any>(this.urlDummyJson + 'products');
  }
}
