import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Annonce } from 'src/app/model/annonce';
import { TrancheHoraire } from 'src/app/model/tranche-horaire';
import { Zones } from 'src/app/model/zones';
import { AnnonceService } from 'src/app/services/annonce.service';
import { TrancheHoraireService } from 'src/app/services/tranche-horaire.service';
import { ZonesService } from 'src/app/services/zones.service';


@Component({
  selector: 'app-create-annonce',
  templateUrl: './create-annonce.component.html',
  styleUrls: ['./create-annonce.component.css']
})
export class CreateAnnonceComponent implements OnInit {

  @Output()
  paiement = new EventEmitter();

  annonce = new Annonce();
  id: number = 0;

  zones : Zones[] = [];
  trancheHoraire: TrancheHoraire[] = [];
  zoneControl = new FormControl<Zones|null>(null, Validators.required)
  trancheHControl = new FormControl<TrancheHoraire|null>(null, Validators.required)  
  dateDeb: FormGroup;
  today = new Date();
  month = this.today.getMonth();
  year = this.today.getFullYear();

  

  


  constructor(
    private annonceService: AnnonceService,
    private zoneService: ZonesService,
    private trancheHoraireService: TrancheHoraireService,
    private router: Router,
    
    ) { 
      
      this.dateDeb = new FormGroup({
        start: new FormControl(new Date(this.year, this.month, 13)),
        end: new FormControl(new Date(this.year, this.month, 16))
      });
    }

  ngOnInit(): void {
    this.zoneService.getZoneList().subscribe(data => this.zones = data)
    this.trancheHoraireService.getTrancheHoraireList().subscribe(data => this.trancheHoraire = data);

  }

  saveAnnonce()
  {
    this.annonceService.createAnnonce(this.annonce).subscribe(data =>{this.annonce = data;});
    this.goToAnnonceList();
  }

  goToAnnonceList(){
    this.router.navigate(['/annonce/home']);}

  goToPaiement()
  {
    this.paiement.emit()
  }
}




