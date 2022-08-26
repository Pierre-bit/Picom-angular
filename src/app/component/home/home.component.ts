import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

<<<<<<< HEAD
=======
  login_page = true;

>>>>>>> dev
  constructor() { }

  ngOnInit(): void {
  }

<<<<<<< HEAD
=======
  changePage(){
    this.login_page = !this.login_page;
  }

>>>>>>> dev
}
