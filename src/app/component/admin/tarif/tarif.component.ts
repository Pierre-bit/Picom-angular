import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
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
export class TarifComponent implements OnInit, AfterViewInit {

  id!: number;
  tarif = new Tarif();
  zones: Zones[] = [];
  trancheHoraire: TrancheHoraire[] = [];
  tarifControl = new FormControl('', Validators.required)
  zoneControl = new FormControl('', [Validators.required])
  trancheHControl = new FormControl('', Validators.required)
  dataSource = new MatTableDataSource<Tarif>;
  displayedColumns: string[] = ['id', 'zone', 'trancheHoraire', 'tarif'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private tarifService: TarifService,
    private zoneService: ZonesService,
    private trancheHoraireService: TrancheHoraireService,
  ) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.getTarifList()
    this.getZonesList()
    this.getTrancheHoraireList()
  }

  saveTarif() {
    if (this.trancheHControl.valid && this.tarif.prixEnEuros > 0) {
      let list : Tarif[] = [];
      this.tarif.administrateur = JSON.parse(sessionStorage.getItem('user')!).user.id;
      this.zones.forEach(z => {
        let curT = new Tarif();
        curT.administrateur = this.tarif.administrateur
        curT.prixEnEuros = this.tarif.prixEnEuros
        curT.trancheHoraire = this.tarif.trancheHoraire
        curT.zone = z.id
        list.push(curT)
      })
      this.tarifService.createMultipleTarif(list).subscribe({
        next: (result) => {
          this.getTarifList()
          this.tarif.prixEnEuros = 0;
          this.tarif.trancheHoraire = 0;
        },
        error: (err) => {
          console.log(err)
        }
      })
    }
  }

  getTarifList() {
    this.tarifService.getTarifList().subscribe(data => {
      this.dataSource.data = data
    });
  }

  getZonesList() {
    this.zoneService.getZoneList().subscribe(data => { this.zones = data; });
  }
  getTrancheHoraireList() {
    this.trancheHoraireService.getTrancheHoraireList().subscribe(data => {
      this.trancheHoraire = data;
    });
  }
  getErrorMessageZone() {
    console.log("ok")
    return 'Veuillez saisir une valeur';
  }
}
