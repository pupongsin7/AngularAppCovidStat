import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
// import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public constructor(
    private titleService: Title,
    // translate: TranslateService

  ) {
    // this.translate = translate;
    // this.translate.setDefaultLang('en');
  }
  title = 'รายงานสถานการณ์โควิด-19';
  // translate: TranslateService;
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
  ngOnInit(): void {
    this.setTitle(this.title)
  }
  // changeLanguage(lang: string) {
  //   this.translate.use(lang);
  // }
}
