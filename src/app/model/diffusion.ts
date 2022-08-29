import { Annonce } from "./annonce";
import { Arret } from "./arret";

export class Diffusion {

    id: number = 0;
    dateHeureDiffusion: Date = new  Date();
    annonce: Array<Annonce>|null = [];
    arret:Array<Arret>|null = [];	
}
