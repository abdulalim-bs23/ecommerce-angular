import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SharedService } from 'src/app/shared/shared.service';
@Injectable({
  providedIn: 'root',
})
export class ShippingService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient, private sharedService: SharedService) {}

  getCountries(): Observable<any> {
    const url = `${
      this.baseUrl
    }countries.json?${this.sharedService.getTokenParam()}`;
    return this.http.get<any>(url);
  }
  getDivisions(): Observable<any> {
    const url = `${
      this.baseUrl
    }divisions.json?${this.sharedService.getTokenParam()}`;
    return this.http.get<any>(url);
  }
  getDistricts(divisionId: number): Observable<any> {
    const url = `${
      this.baseUrl
    }districts.json?orderBy="division_id"&equalTo="${divisionId}"&${this.sharedService.getTokenParam()}`;
    return this.http.get<any>(url);
  }
  getUpazilas(districtId: number): Observable<any> {
    const url = `${
      this.baseUrl
    }upazilas.json?orderBy="district_id"&equalTo="${districtId}"&${this.sharedService.getTokenParam()}`;
    return this.http.get<any>(url);
  }
  getPaymentMethods(): Observable<any> {
    const url = `${
      this.baseUrl
    }payment_methods.json?${this.sharedService.getTokenParam()}`;
    return this.http.get<any>(url);
  }
}
