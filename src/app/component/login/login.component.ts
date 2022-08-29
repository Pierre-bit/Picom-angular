import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { Utilisateur } from 'src/app/model/utilisateur';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  utilisateur = new Utilisateur();
  identifiants = { username: "", password: "" }
  errorMessage = ""
  error = false;
  email = new FormControl('', [Validators.required, Validators.email]);
  motDePasse = new FormControl('', [Validators.required, Validators.minLength(8)]);
  user:any = {'user':'', role:Array}

  @Output()
  register = new EventEmitter();

  constructor(
    private service: LoginService,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    if (this.email.valid && this.motDePasse.valid) {

      this.service.login(this.identifiants).subscribe(
        {
          next: (result) => {
            this.user = result;
            const session = {'user':this.user.user, 'role':this.user.role[0].authority}
            sessionStorage.setItem('user', JSON.stringify(session))
            this.router.navigate(['/annonce'])
          },
          error: (err) => {
            this.errorMessage = err.error.error;
            this.error = true;
          }
        }
      );

    }
  }

  registerEvent() {
    this.register.emit()
  }

  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'Veuillez saisir une valeur';
    }

    return this.email.hasError('email') ? 'Email invalide' : '';
  }

  getErrorMessageMdp() {
    if (this.motDePasse.hasError('required')) {
      return 'Veuillez saisir une valeur';
    }
    return this.motDePasse.hasError('minlength') ? 'Le mot de passe doit contenir 8 caractère minimum' : '';
  }
}
