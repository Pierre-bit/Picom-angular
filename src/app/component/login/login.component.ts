import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/model/utilisateur';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  utilisateur = new Utilisateur();
  connexion = {username:"",password:""}
  //email= "";
  //motDePasse  = "";
  @Output()
  register = new EventEmitter();
  //credentials = { username: 'admin1@orsys.fr', password: '12345678' };
  constructor(
    private service: LoginService,
    private http: HttpClient ,
    private router: Router
  ) { }

  ngOnInit(): void {
    /*if(this.service.isLoggedIn()) {
      this.router.navigate(['/annonce',localStorage.getItem('id')]);
    }
    else{
      this.router.navigate(['/login']);
    }*/
  }

  login(){
    //this.service.login(this.credentials).subscribe(data => {console.log(data);});
    //this.service.email=this.Email.value
    console.log(this.connexion);
    this.service.login(this.connexion).subscribe(data => { this.router.navigate(['/annonce']);});
    
  }

  registerEvent(){
    this.register.emit()
  }
}
