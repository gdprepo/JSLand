class Personne {

    constructor(prenom, nom) {
        this._prenom = prenom;
        this._nom = nom; 
    }

    get firstname() {
        return this.prenom;
    }

    set firstname(Value) {
        this.prenom = Value;
    }

    get lastname() {
        return this.nom;
    }

    set lastname(Value) {
        this.nom = Value;
    }



    prefix() {
        return this._nom;
    }

    say(msg) {
        return console.log(`${this.prefix()}: ${msg}`);
    }

}

module.exports = Personne;
