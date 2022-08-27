import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Annonce } from 'src/app/model/annonce';
import { AnnonceService } from 'src/app/services/annonce.service';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {

  annonces : Annonce[] = [];
 
  constructor(
    private annonceService: AnnonceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAnnonces();
  }

  private getAnnonces(){
    this.annonceService.getAnnonceList().subscribe(data =>{ this.annonces = data});
  }

  /*logout() {
    sessionStorage.removeItem('currentUser');
    window.location.reload();
  }*/

  

  /*onSubmit(){
    console.log(this.annonce);
    this.saveAnnonce();
  }*/
}
