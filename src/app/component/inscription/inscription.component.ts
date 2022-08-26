import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  @Output()
  retour = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  register(){

  }

  retourEvent(){
    this.retour.emit();
  }
}
