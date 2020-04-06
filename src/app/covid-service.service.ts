import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface CovidData {
  Confirmed: string
  Recovered: string;
  Hospitalized: string;
  Deaths: string;
  NewConfirmed: string;
  NewRecovered: string;
  NewHospitalized: string;
  NewDeaths: string;
  UpdateDate: string;
}
@Injectable({
  providedIn: 'root'
})

export class CovidServiceService {
  
  constructor(
    private http: HttpClient,
    
    ) { }
  getCovidData() {
    return this.http.get<CovidData>('http://covid19.th-stat.com/api/open/today')
  }
}
