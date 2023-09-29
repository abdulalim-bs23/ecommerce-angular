import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SharedService } from 'src/app/shared/shared.service';
@Injectable({
  providedIn: 'root',
})
export class ShippingService {
  baseUrl = environment.apiUrl;
  apiKey = environment.apiKey;

  constructor(private http: HttpClient, private sharedService: SharedService) {}

  getCountries(): Observable<any> {
    const url = `${this.baseUrl}countries.json?${
      this.sharedService.getTokenParam() == null
        ? ''
        : this.sharedService.getTokenParam()
    }`;
    return this.http.get<any>(url);
  }
  getDivisions(): Observable<any> {
    const url = `${this.baseUrl}divisions.json?${
      this.sharedService.getTokenParam() == null
        ? ''
        : this.sharedService.getTokenParam()
    }`;
    return this.http.get<any>(url);
  }
  getDistricts(): Observable<any> {
    const url = `${this.baseUrl}districts.json?${
      this.sharedService.getTokenParam() == null
        ? ''
        : this.sharedService.getTokenParam()
    }`;
    return this.http.get<any>(url);
  }
  getUpazilas(): Observable<any> {
    const url = `${this.baseUrl}upazilas.json?${
      this.sharedService.getTokenParam() == null
        ? ''
        : this.sharedService.getTokenParam()
    }`;
    return this.http.get<any>(url);
  }
}
