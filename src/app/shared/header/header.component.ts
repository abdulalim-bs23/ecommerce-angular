import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @ViewChild('searchInput') search: ElementRef<any> | undefined;

  onSearch() {
    console.log(this.search?.nativeElement);
    alert(this.search?.nativeElement.value);
  }
}
