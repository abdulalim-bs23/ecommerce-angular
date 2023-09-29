import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShippingService } from './shipping.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent {
  isUpdate: boolean = false;
  form: FormGroup;

  countries: any[] | undefined;
  selectedCountry: string = '0';

  constructor(
    private fb: FormBuilder,
    private shippingService: ShippingService
  ) {
    this.form = this.fb.group({
      recipeName: [
        '',
        [Validators.required, Validators.pattern(/^[A-Za-z ]*$/)],
      ],
      description: [''],
      imagePath: [''],
      ingredients: this.fb.array([]),
    });
  }

  ngOnInit() {
    this.shippingService.getCountries().subscribe((countries) => {
      this.countries = countries;
    });
  }

  onCountryChange(newValue: any) {
    this.selectedCountry = newValue.target.value; 
  }

  onSubmit() {
    if (this.form.valid) {
      // let newRecipe = new Recipe(
      //   0,
      //   this.form.get('recipeName')?.value,
      //   this.form.get('description')?.value,
      //   this.form.get('imagePath')?.value,
      //   '',
      //   ingredientsArray
      // );
    }
  }
}
