import { Annonce } from "./annonce";

export class Diffusion {

    id: number = 0;
    dateHeureDiffusion: Date = new  Date();
    annonce: Array<Annonce>|null = [];	
}
