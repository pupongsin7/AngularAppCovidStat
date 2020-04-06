import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public constructor(
    private titleService: Title,
  ) { }
  title = 'รายงานสถานการณ์โควิด-19';
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
  ngOnInit(): void {
    this.setTitle(this.title)
  }
}
