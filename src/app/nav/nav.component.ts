import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core";
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() Language
  @Output() switchLanguage = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
