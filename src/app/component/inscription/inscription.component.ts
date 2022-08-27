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

  MOBILE_PATTERN = /^((\+)33|0)[1-9](\d{2}){4}$/;
  email = new FormControl('', [Validators.required, Validators.email]);
  motDePasse = new FormControl('', [Validators.required, Validators.minLength(8)]);
  nom = new FormControl('', [Validators.required]);
  prenom = new FormControl('', [Validators.required]);
  numeroDeTel = new FormControl('', [Validators.required, Validators.pattern(this.MOBILE_PATTERN)]);

  constructor(private service: LoginService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  register() {
    if (this.email.valid && this.motDePasse.valid && this.nom.valid && this.prenom.valid && this.numeroDeTel.valid) {
      this.service.register(this.user).subscribe({
        next: (response) => {
          this.retourEvent()
        },
        error: (err) => {
          console.log(err)
        }
      })
    }
  }

  retourEvent() {
    this.retour.emit();
  }
  getErrorMessageNom() {
    return 'Veuillez saisir une valeur';
  }

  getErrorMessagePrenom() {
    return 'Veuillez saisir une valeur';
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
    return this.motDePasse.hasError('minlength') ? '8 caractère minimum' : '';
  }

  getErrorMessageNumero() {
    if (this.numeroDeTel.hasError('required')) {
      return 'Veuillez saisir une valeur';
    }
    return this.numeroDeTel.hasError('pattern') ? 'N° de téléphone invalide : (06)xxxxxxxx / +33(6)xxxxxxxx' : '';
  }
}

