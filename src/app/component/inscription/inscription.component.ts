import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
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
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  ERROR_NAME = ""
  ERROR_FIRST_NAME = ""
  ERROR_PASSWORD = "";
  ERROR_PHONE_NUMBER = "";
  ERROR_EMAIL = "";
  MIN_PASSWORD = "";
  INVALID_PHONE_NUMBER = "";
  INVALID_EMAIL = "";


  constructor(private service: LoginService,
     private _snackBar: MatSnackBar,
     private translate: TranslateService
     ) { 
     }
  

  ngOnInit(): void {
  }

  register() {
    if (this.email.valid && this.motDePasse.valid && this.nom.valid && this.prenom.valid && this.numeroDeTel.valid) {
      this.service.register(this.user).subscribe({
        next: (response) => {
          this.openSnackBar()
          this.retourEvent()
        },
        error: (err) => {
          console.log(err)
        }
      })
    }
  }

  openSnackBar() {
    this._snackBar.open('Inscription réussi !', undefined, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 2000,
      panelClass:["custom_snackbar"]
    });
  }

  retourEvent() {
    this.retour.emit();
  }
  getErrorMessageNom() {
    this.translate.get('ERROR_NAME').subscribe( (text: string) => {
      this.ERROR_NAME = text;
    });
    return this.ERROR_NAME;
  }

  getErrorMessagePrenom() {
    this.translate.get('ERROR_FIRST_NAME').subscribe( (text: string) => {
      this.ERROR_FIRST_NAME = text;
    });
    return this.ERROR_FIRST_NAME;
  }

  getErrorMessageEmail() {

    if (this.email.hasError('required')) {
      this.translate.get('ERROR_EMAIL').subscribe( (text: string) => {
        this.ERROR_EMAIL = text;
      });
      return this.ERROR_EMAIL;
    }

    if (this.email.hasError('email'))
    {
      this.translate.get('INVALID_EMAIL').subscribe( (text: string) => {
        this.INVALID_EMAIL = text;
      });
    } 
    return this.INVALID_EMAIL;
  }

  getErrorMessageMdp() {
    if (this.motDePasse.hasError('required')) {
      this.translate.get('ERROR_PASSWORD').subscribe( (text: string) => {
        this.ERROR_PASSWORD = text;
      });
      return this.ERROR_PASSWORD;
    }
    if (this.motDePasse.hasError('minlength'))
    {
      this.translate.get('MIN_PASSWORD').subscribe( (text: string) => {
        this.MIN_PASSWORD = text;
      });
    }
    return this.MIN_PASSWORD;
  }

  getErrorMessageNumero() {
    if (this.numeroDeTel.hasError('required')) {
      this.translate.get('ERROR_PHONE_NUMBER').subscribe( (text: string) => {
        this.ERROR_PHONE_NUMBER = text;
      });
      return this.ERROR_PHONE_NUMBER;
    }
    if (this.numeroDeTel.hasError('pattern'))
    {
      this.translate.get('INVALID_PHONE_NUMBER').subscribe( (text: string) => {
        this.INVALID_PHONE_NUMBER= text;
      });
    } 
    return this.INVALID_PHONE_NUMBER;
  }
}

