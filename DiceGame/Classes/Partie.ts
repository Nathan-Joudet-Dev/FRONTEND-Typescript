import Gobelet from "./Gobelet";
import Joueur from "./Joueur";

export default class Partie {
    public nbTours: number;
    public joueursDansLaPartie: Joueur[] = [];
    public gobelet: Gobelet = new Gobelet(6);


    constructor(nbTours: number) {
        this.nbTours = nbTours;
    }

    /**
     * Initialiser la partie
     * Nb de Joueurs
     * Nb de Dés
     * Nb de tours
     * Gobelet
     */


    public initialiserPartie(...joueursEntrant: Joueur[]) {
        joueursEntrant.forEach(element => {
            this.joueursDansLaPartie.push(element);
            this.gobelet.ajouteDe(6);
        });


    }

    /**
     * Lancer la partie
     * 
     */
    public lancerPartie() { // : number
        // lance les dés
        // 

    }

    /**
     * Afficher le gagnant
     */
    public afficherGagnant() { // : string

    }





}