export class Annonce {

    id:number=0;
    dateHeureCreation:Date = new Date();
    dateHeureDebut:Date = new Date();
    dateHeureFin:Date = new Date();
    contenu:String = "";
    numeroCarte: String = "";
    anneeExpiration:number = 0;
    moisExpiration:number = 0;
    cryptogramme:String = "";
    montantRegleEnEuros:number = 0;
}
