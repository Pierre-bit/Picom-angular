import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  login_page = true;

  constructor() { }

  ngOnInit(): void {
  }

  changePage(){
    this.login_page = !this.login_page;
  }

}
