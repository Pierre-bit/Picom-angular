import { Annonce } from "./annonce";

export class Utilisateur {

    id: number = 0;
    nom : String = "";
    prenom : String = "";
    email: String = "";
    motDePasse : String = "";
    numeroDeTelephone : String|null = "";
    annonces : Array<Annonce>|null = [];
}
