import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Diffusion } from 'src/app/model/diffusion';
import { AnnonceService } from 'src/app/services/annonce.service';
import { ArretService } from 'src/app/services/arret.service';
import { DiffusionService } from 'src/app/services/diffusion.service';
import { ZonesService } from 'src/app/services/zones.service';

@Component({
  selector: 'app-diffusion',
  templateUrl: './diffusion.component.html',
  styleUrls: ['./diffusion.component.css']
})
export class DiffusionComponent implements OnInit {

  diffusions!: Diffusion[];


  dataSource = new MatTableDataSource<Diffusion>;
  displayedColumns: string[] = ['id', 'zone', 'arret', 'tarif'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(
    private diffusion: DiffusionService,
    private annonceService: AnnonceService,
    private arretService: ArretService,
    private zoneService: ZonesService,
    private router: Router
  ) { }

  ngOnInit(

  ): void {
    this.getDiffusion();
    this.getAnnonceById();
    this.arretService.getArretList();
    this.zoneService.getZoneList();

  }

  getDiffusion() {
    this.diffusion.getDiffusionList().subscribe(data => {
      this.dataSource.data = data;
    });
  }

  getAnnonceById() {
    this.annonceService.getAnnonceListClient(1).subscribe(data => {
      console.log(data);

    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  return() {
    this.router.navigate(['/annonce'])
  }

}
