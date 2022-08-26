import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/model/utilisateur';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  user = new Utilisateur();
  @Output()
  retour = new EventEmitter();


  constructor(private service:LoginService,private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }
  
  register(){
    console.log(this.user)
    this.service.register(this.user).subscribe(  
      response => {  
        this.retourEvent()
      }
    )
  }

  retourEvent(){
    this.retour.emit();
  }
}  

