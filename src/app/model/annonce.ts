import { TrancheHoraire } from "./tranche-horaire";
import { Zones } from "./zones";

export class Annonce {

    id:number=0;
    dateHeureDebut:Date = new Date();
    contenu:String = "";
    numeroCarte: String = "";
    anneeExpiration:number = 0;
    moisExpiration:number = 0;
    cryptogramme:String = "";
    montantRegleEnEuros:number = 0;
    client:number = 0;
    tranchesHoraires: Array<TrancheHoraire>|null = [];
    zones:Array<Zones>|null = [];


}
