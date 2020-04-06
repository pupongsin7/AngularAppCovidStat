import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core";
import { Router } from "@angular/router"
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() Language
  @Output() switchLanguage = new EventEmitter();

  constructor(public _router:Router) { }

  ngOnInit(): void {
  }
  Navigate(Lang):void{
    this._router.navigateByUrl("/home/"+Lang,{skipLocationChange:true})
  }
}