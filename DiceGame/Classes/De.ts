


export default class de {
    public _valeur: number;
    // public _side: Side[] = [];

    constructor(valeur: number) {
        this._valeur = valeur;
        // this._side = side;
    }


    /**
     * lancer les dés
     * Obtenir une valeur aléatoire su une des faces du dé
     */
    public lancer() { //: number
        this._valeur = Math.floor(Math.random() * 6) + 1
    }
}