import { Annonce } from "./annonce";

export class TrancheHoraire {

   id: number = 0;
   debut: number = 0;
   annonces:Array<Annonce>|null = [];
}
