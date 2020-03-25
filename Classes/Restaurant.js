const Batiment = require("./batiment");

class Restaurant extends Batiment {
    constructor(nom, employe, prixMenu1, prixMenu2) {
        super(nom, employe);
        this._prixMenu1 = prixMenu1;
        this._prixMenu2 = prixMenu2;
    }

    get prixMenu1()
    {
        return this._prixMenu1;
    }

    set prixMenu1(value)
    {
        this._prixMenu1 = prixMenu1;
    }

    get prixMenu2()
    {
        return this._prixMenu2;
    }

    set prixMenu2(value)
    {
        this._prixMenu2 = value;
    }

    recevoirClient(client) {
        this.employee.reponse(client, this);
    }
}

module.exports = Restaurant;
