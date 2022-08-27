import { Component, OnInit } from '@angular/core';
import { Diffusion } from 'src/app/model/diffusion';
import { DiffusionService } from 'src/app/services/diffusion.service';

@Component({
  selector: 'app-diffusion',
  templateUrl: './diffusion.component.html',
  styleUrls: ['./diffusion.component.css']
})
export class DiffusionComponent implements OnInit {

  diffusions! : Diffusion[];
  constructor(private diffusion:DiffusionService) { }

  ngOnInit(): void {
    this.getDiffusion();
  }

  getDiffusion()
  {
    this.diffusion.getDiffusionList().subscribe(data =>{ this.diffusions = data});
  }

}
