import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface CovidData {
  Confirmed :number;
  Recovered: number;
  Hospitalized: number;
  Deaths: number;
  NewConfirmed: number;
  NewRecovered: number;
  NewHospitalized: number;
  NewDeaths: number;
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
    return this.http.get<CovidData>('https://covid19.th-stat.com/api/open/today')
  }
}
