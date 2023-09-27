import { Component } from '@angular/core';
import { CategoryService } from './category.service';
import { ICategory } from './category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  constructor(private categoryService: CategoryService) {}

  categories: ICategory[] = [];

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  onCategory() {
    alert('hello');
  }
}
