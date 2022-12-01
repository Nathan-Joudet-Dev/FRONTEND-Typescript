import de from "./De";
import De from "./De";

export default class Gobelet {
    public _valeur: number;
    public _des: De[] = [];

    constructor(valeur: number) {
        this._valeur = valeur;
    }

    /**
     * Permet d'ajouter un dé avec un nombres définis de face dans le gobelet 
     * @param nombreFace nombre de face sur le dé
     */
    public ajouteDe(nombreFace: number): void {
        this._des.push(new De(nombreFace));
    }

    /**
     * Tu prends le gobelet et tu lances les dés
     * Tu parcours le tableau de De et tu affectes la valeur au gobelet 
     */
    public lancer(): number {
        this._valeur = 0;
        this._des.forEach(de => {
            de.lancer()
            this._valeur += de._valeur;
        });
        return this._valeur;
    }

    /**
     * Affiche le score total du gobelet
     */
    public afficherScore(): void { // : number
        console.log(`le score total du gobelet est de ${this._valeur}`);
    }



}