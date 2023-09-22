import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from './category.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>('http://localhost:3000/categories');
  }
}
