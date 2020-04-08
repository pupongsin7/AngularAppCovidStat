import { Component, OnInit, Output, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CovidServiceService, CovidData } from '../covid-service.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Language: String
  CovidData: CovidData
  constructor(
    private route: ActivatedRoute,
    private CoidServ: CovidServiceService
  ) {
    this.route.paramMap.subscribe(params => {
      this.Language = params.get('Language')
      console.log("1",this.Language)
    })

   }
  ngOnInit(): void {

    this.Language = this.route.snapshot.params.Language != undefined ? this.route.snapshot.params.Language : "th"
    this.CoidServ.getCovidData().subscribe(
      (res) => {
        this.CovidData = res
        console.log(this.CovidData)
      }
    )

  }
  ChangeLang(event) {
    this.Language = event
    
  }
}
