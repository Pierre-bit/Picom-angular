import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Annonce } from 'src/app/model/annonce';
import { AnnonceService } from 'src/app/services/annonce.service';

@Component({
  selector: 'app-create-annonce',
  templateUrl: './create-annonce.component.html',
  styleUrls: ['./create-annonce.component.css']
})
export class CreateAnnonceComponent implements OnInit {

  private annonce = new Annonce();

  constructor(
    private annonceService: AnnonceService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  saveAnnonce()
  {
    this.annonceService.createAnnonce(this.annonce).subscribe(data =>{this.annonce = data;});
    this.goToAnnonceList();
  }

  goToAnnonceList(){
    this.router.navigate(['/annonce']);}
}
