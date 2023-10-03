import { Component, ElementRef, ViewChild } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @ViewChild('searchInput') search: ElementRef<any> | undefined;
  noOfProduct: number = 0;

  constructor(private sharedService: SharedService, private router: Router) {}

  ngOnInit() {
    this.sharedService.addToCart.subscribe((data) => {
      this.noOfProduct = data;
      console.log(data);
    });
  }

  onSearch() {
    console.log(this.search?.nativeElement);
    alert(this.search?.nativeElement.value);
  }
  onCart() {
  //  this.noOfProduct++;
    this.router.navigate(['/cart']);
  }
}
