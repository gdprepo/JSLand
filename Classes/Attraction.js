const Batiment = require("./batiment");

class Attraction extends Batiment {

    constructor (name, employee = null, Place, prix) {
        super(name, employee);
        this._place = Place;
        this._prix = prix;
        this._nbrPlace = Place;
    }

    vider() {
        this._nbrPlace = this._place;
    }

    get place() {
        return this._place;
    }

    set place(value) {
        this._place = value;
    }

    get nbrPlace() {
        return this._nbrPlace;
    }

    set nbrPlace(value) {
        this._nbrPlace = value;
    }

    get prix() {
        return this._prix;
    }

    set prix(value) {
        this._prix = value;
    }

    recevoirClient(client, reponse, taille) {
        const prixTotal = this.prix * taille;
        this.employee.reponse(client, this, prixTotal, this.nbrPlace, reponse);
    }

}

module.exports = Attraction;