import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  id!:number;
  tarif = new Tarif();
  zone = new Zones();
  zones!: Zones[];
  trancheHoraire!: TrancheHoraire[];
  trancheH= new TrancheHoraire();
  
  
  constructor(
    private tarifService: TarifService,
    private zoneService: ZonesService,
    private trancheHoraireService: TrancheHoraireService,
    private router: Router,
    private route: ActivatedRoute
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

  getOneZone()
  {
    this.id = this.route.snapshot.params['id'];

    this.zoneService.getZoneById(this.id).subscribe(data => {
      this.zone = data;
    }, (error: any) => console.log(error));
    
  }

  getOneTrancheHoraire()
  {
    this.id = this.route.snapshot.params['id'];

    this.trancheHoraireService.getTrancheHoraireById(this.id).subscribe(data => {
      this.trancheH = data;
    }, (error: any) => console.log(error));
  }


}
