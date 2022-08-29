import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Annonce } from 'src/app/model/annonce';
import { AnnonceService } from 'src/app/services/annonce.service';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit {
  bg = '';
  annees = ["2023","2024","2025","2026","2027","2028","2029","2030"]
  mois = ["01","02","03","04","05","06","07","08","09","10","11","12"]
  cardNumber = [
    "#", "#", "#", "#",
    "#", "#", "#", "#",
    "#", "#", "#", "#",
    "#", "#", "#", "#",
  ];
  cardNumberHandle = 0;
  year = "YYYY";
  month = "MM"
  owner = "Valentin Francoil";
  rotate = false;
  cvv = '';
  cvvShow = '';
  cardNum = "";
  changeM = false;
  changeY = false;
  @Input() annonce = new Annonce();
  cardNumControl = new FormControl('', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]);
  cvvControl = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(4)]);
  yearControl = new FormControl<'' | null>(null, Validators.required)
  monthControl = new FormControl<'' | null>(null, Validators.required)

  constructor(private annonceService:AnnonceService,
    private router: Router,){}

  ngOnInit(): void {
    this.bg = this.randomIntFromInterval(1, 25)+".jpeg";
    console.log(this.annonce)
  }

  randomIntFromInterval(min:number, max:number) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  onFocus(){
    this.rotate = !this.rotate
  }

  monthChange(e:string){
    this.changeM = true;
    setTimeout(() => {
      this.month = e;
      this.changeM = false;
    }, 200)
  }

  yearChange(e:string){
    this.changeY = true;
    setTimeout(() => {
      this.year = e;
      this.changeY = false;
    }, 200)
  }

  cvvChange(e:Event){
    this.cvvShow = "";
    this.cvv = (e.target as HTMLInputElement).value;
    for(var i=0; i < (e.target as HTMLInputElement).value.length; i++){
      this.cvvShow += "*";
    }
  }
  keyPressNumbers(event:any) {
    var charCode = (event.which) ? event.which : event.keyCode;
    // Only Numbers 0-9
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }

  cardNumberChange(e:string){
    if(e.length > this.cardNumberHandle){
      for(var i=this.cardNumberHandle; i < e.length; i++){
        this.cardNumber[i] = e.charAt(i);
        this.cardNumberHandle++;
      }
    } else {
      for(var i=this.cardNumberHandle; i > e.length; i--){
        this.cardNumber[i-1] = "#";
        this.cardNumberHandle--;
      }
    }
  }

  createAnnonce(){
    if(this.cardNumControl.valid && this.cvvControl.valid && this.yearControl.valid && this.monthControl.valid){
      this.annonce.anneeExpiration = Number(this.year)
      this.annonce.moisExpiration = Number(this.month)
      this.annonce.cryptogramme = this.cvv
      this.annonce.numeroCarte = this.cardNum
      this.annonceService.createAnnonce(this.annonce).subscribe(data => {
        this.router.navigate(['/annonce'])
      })
    }
  }

  getErrorMessageCn(){
    if (this.cardNumControl.hasError('required')) {
      return 'Veuilez saisir votre numéro de carte';
    }

    if(this.cardNumControl.hasError('minlength') || this.cardNumControl.hasError('maxlength') ){
      return 'Le numéro de carte doit contenir 16 chiffres';
    }
    return '';
  }
  getErrorMessageCvv(){
    if (this.cvvControl.hasError('required')) {
      return 'Veuilez saisir votre CVV';
    }

    if(this.cvvControl.hasError('minlength') || this.cardNumControl.hasError('maxlength') ){
      return 'Le CVV doit contenir 3 à 4 chiffres';
    }
    return '';
  }
}
