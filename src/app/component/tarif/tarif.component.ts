import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tarif } from 'src/app/model/tarif';
import { TrancheHoraire } from 'src/app/model/tranche-horaire';
import { Zones } from 'src/app/model/zones';
import { TarifService } from 'src/app/services/tarif.service';
import { TrancheHoraireService } from 'src/app/services/tranche-horaire.service';
import { ZonesService } from 'src/app/services/zones.service';

@Component({
  selector: 'app-tarif',
  templateUrl: './tarif.component.html',
  styleUrls: ['./tarif.component.css']
})
export class TarifComponent implements OnInit {

  tarif = new Tarif();
  zones!: Zones[];
  trancheHoraire!: TrancheHoraire[];
  
  constructor(
    private tarifService: TarifService,
    private zoneService: ZonesService,
    private trancheHoraireService: TrancheHoraireService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  saveTarif()
  {
    
  }

  getZonesList()
  {
    this.zoneService.getZoneList().subscribe(data =>{this.zones = data;});
  }

  getTrancheHoraireList()
  {
    this.trancheHoraireService.getTrancheHoraireList().subscribe(data =>{this.trancheHoraire = data;});
  }


}
