import { Component, OnInit, Output, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CovidServiceService, CovidData } from '../covid-service.service'
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  CovidData: CovidData
  translate: TranslateService;
  constructor(
    private route: ActivatedRoute,
    private CoidServ: CovidServiceService,
    translate: TranslateService
  ) {
    this.translate = translate;
    this.translate.setDefaultLang('th');
   }
  ngOnInit(): void {

    this.CoidServ.getCovidData().subscribe(
      (res) => {
        this.CovidData = res
        console.log(this.CovidData)
      }
    )

  }
  ChangeLang(event) {
    this.translate.use(event);
  }
}
