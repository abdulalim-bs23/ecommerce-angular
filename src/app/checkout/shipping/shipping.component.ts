import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShippingService } from './shipping.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent {
  isBD: boolean = true;
  shippingAddressForm: FormGroup;

  countries: any[] | undefined;
  divisions: any[] | undefined;
  districts: any[] | undefined;
  upazilas: any[] | undefined;
  payment_methods: any[] | undefined;
  selectedCountry: string = '0';
  isChecked: boolean = false;
  selectedOption: string | undefined;
  constructor(
    private fb: FormBuilder,
    private shippingService: ShippingService
  ) {
    this.shippingAddressForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[A-Za-z\- ']+$/)]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9 ()+-]*$/)]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
          ),
        ],
      ],
      country: [''],
      division: [''],
      district: [''],
      upazila: ['Select a Area'],
      description: [''],
      selectedOption: [''],
    });
  }

  ngOnInit() {
    this.shippingService.getCountries().subscribe((countries) => {
      this.countries = countries;
    });
    this.shippingService.getDivisions().subscribe((divisions) => {
      this.divisions = divisions;
    });
    this.shippingService.getPaymentMethods().subscribe((payment_methods) => {
      this.payment_methods = payment_methods;
    });
  }
  onCountryChange(newValue: any) {
    this.selectedCountry = newValue.target.value;
    if (this.selectedCountry == 'bd') {
      this.isBD = false;
    } else {
      this.isBD = true;
    }
  }
  onDivisionChange(division: any) {
    let divisionId = division.target.value;
    this.shippingService.getDistricts(divisionId).subscribe((divisions) => {
      this.districts = Object.values(divisions);
    });
  }
  onDistrictChange(district: any) {
    let districtId = district.target.value;
    this.shippingService.getUpazilas(districtId).subscribe((districts) => {
      this.upazilas = Object.values(districts);
    });
  }

  onSubmit() {
    console.log('submit');
    if (this.shippingAddressForm.valid) {
      const name = this.shippingAddressForm.get('name')?.value;
      const phone = this.shippingAddressForm.get('phone')?.value;
      const email = this.shippingAddressForm.get('email')?.value;
      const country = this.shippingAddressForm.get('country')?.value;
      const division = this.shippingAddressForm.get('division')?.value;
      const district = this.shippingAddressForm.get('district')?.value;
      const upazila = this.shippingAddressForm.get('upazila')?.value;
      const description = this.shippingAddressForm.get('description')?.value;

      console.log(name, phone, email, country, division, district, upazila);
    }
  }

  selectRadio(optionId: string){
    this.selectedOption = optionId;
    console.log(optionId);
  }
  placeOrderCondition(event: any) {
    this.isChecked = !this.isChecked;
  }
}
