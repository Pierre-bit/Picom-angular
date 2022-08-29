import { CdkPortal } from '@angular/cdk/portal';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Annonce } from 'src/app/model/annonce';
import { Tarif } from 'src/app/model/tarif';
import { TrancheHoraire } from 'src/app/model/tranche-horaire';
import { Zones } from 'src/app/model/zones';
import { AnnonceService } from 'src/app/services/annonce.service';
import { TarifService } from 'src/app/services/tarif.service';
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
  zones: Zones[] = [];
  zonesSelected : [] = [];
  trancheHoraire: TrancheHoraire[] = [];
  trancheHoraireSelected: [] = [];
  dateSelected !: Date;
  zoneControl = new FormControl<Zones | null>(null, Validators.required)
  trancheHControl = new FormControl<TrancheHoraire | null>(null, Validators.required)
  dateControl = new FormControl('', Validators.required)
  contenu = '';
  paiementPage = false;
  error = false;
  errorEditor = false;
  today = new Date();

  constructor(
    private zoneService: ZonesService,
    private trancheHoraireService: TrancheHoraireService,
    private tarifService:TarifService,
  ) {
  }

  ngOnInit(): void {
    this.zoneService.getZoneList().subscribe(data => this.zones = data)
    this.trancheHoraireService.getTrancheHoraireList().subscribe(data => this.trancheHoraire = data);
  }

  goToPaiement() {
    this.errorEditor = false
    this.error = false
    if(this.zoneControl.valid && this.trancheHControl.valid && this.dateControl.valid && this.contenu.length > 0){
      this.annonce.contenu = this.contenu;
      this.annonce.zones = this.zonesSelected
      this.annonce.tranchesHoraires = this.trancheHoraireSelected
      this.annonce.client = JSON.parse(sessionStorage.getItem('user')!).user.id;
      this.annonce.dateHeureDebut = this.dateSelected
      this.zonesSelected.forEach(i => {
        this.trancheHoraireSelected.forEach(j => {
          this.tarifService.getTarifByThAndZone(j, i).subscribe(data => {
            this.annonce.montantRegleEnEuros += data.prixEnEuros;
          })
        })
      })
      this.paiementPage = true
    } else {
      if(this.contenu.length == 0){
        this.errorEditor = true
      }
      if(!this.zoneControl.valid || !this.trancheHControl.valid || !this.dateControl.valid){
        this.error = true;
      }
    }
  }

  onSelectionChange(e:any){
    this.contenu = e.editor.getContent();
  }
}




