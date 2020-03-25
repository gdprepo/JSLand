const input = require("readline-sync");
const Personne = require("./personne");

class Client extends Personne {

    constructor (prenom, nom, budget) {
        super(prenom, nom);
        this._budget = budget;
        this._lastPayment = {
            place : null,
            price : null
        };
    }

    lastPaymentDone() {
        return !(this._lastPayment.what === undefined ||
            this._lastPayment.howMany === undefined);
    }

    lastPayment(attraction, totalPrice) {
        this._lastPayment.what = attraction;
        this._lastPayment.howMany = totalPrice;
    }

    get budget() {
        return this._budget;
    }
    set budget(value) {
        this._budget = value;
    }

    introductionAttraction(attraction) {
        let reponse = input.question(
            this.say(
                `Bonjour je voudrais participer à cette fantastique attraction (${attraction.name}). Je vous présente les membres de ma famille : `
            )
        );
        reponse = reponse.trim();
        reponse = reponse.split(" ");
        reponse.push(this._prenom);
        if (reponse[0] === "") {
            reponse.splice(0, 1);
        }
        attraction.recevoirClient(this, reponse, reponse.length);
      
    }

    functionRestaurant(restaurant) {
        this.say(
            `Bonjour, je mangerai bien dans ce restaurant, ${restaurant.name}.`
        );
        restaurant.recevoirClient(this);
    }

    plainte(manager) {
        manager.recevoirPlainte(this);
    }

    payment(batiment, prixTotal) {
        this._budget -= parseInt(prixTotal);
        this.lastPayment(batiment, prixTotal);
    }

    prefix() {
        return `Client(${super.prefix()})`;
    }
}

module.exports = Client;