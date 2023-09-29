import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  addToCart = new Subject<number>();
  buyNow = new Subject<boolean>();
  constructor() {}
}
