import Gobelet from "./Gobelet";

export default class Joueur {
    public _score: number = 0;
    public _nom: string;

    constructor(nom: string) {
        this._nom = nom;
    }

    public get nom(): string {
        return this._nom;
    }

    /**
     * Le gobelet lance les dés
     * La valeur des dés est ensuite stockés dans score
     * @param gobelet 
     */
    public jouer(gobelet: Gobelet) {
        gobelet.lancer(); // Lancer les dés
        // Stocker le résultat des dés 
        // this._score +=         
    }

    public afficherScore() { // : number

    }


}