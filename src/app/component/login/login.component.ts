import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email= "";
  motDePasse  = "";
  @Output()
  register = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  login(){

  }

  registerEvent(){
    this.register.emit()
  }
}
