import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Annonce } from 'src/app/model/annonce';
import { AnnonceService } from 'src/app/services/annonce.service';
import { AnnonceComponent } from '../annonce.component';

@Component({
  selector: 'app-list-annonce',
  templateUrl: './list-annonce.component.html',
  styleUrls: ['./list-annonce.component.css']
})
export class ListAnnonceComponent implements OnInit {


  utilisateur = JSON.parse(sessionStorage.getItem('user')!).user.prenom + " " + JSON.parse(sessionStorage.getItem('user')!).user.nom;
  id: number = 0;
  dataSource = new MatTableDataSource<Annonce>;

  displayedColumns: string[] = ['id', 'contenu', 'datediff']
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private annonceService: AnnonceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.annonceList();
  }

  annonceList() {
    this.annonceService.getAnnonceListClient(JSON.parse(sessionStorage.getItem('user')!).user.id).subscribe(data => {
      console.log(this.dataSource);
      this.dataSource.data = data;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  goToDiffusion() {
    this.router.navigate(['annonce/diffusion']);
  }

  addAnnonce() {
    this.router.navigate(['annonce/create-annonce']);
  }


}


