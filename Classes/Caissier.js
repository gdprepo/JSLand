const Personne = require("./personne");

class Caissier extends Personne {

    constructor (prenom, nom) {
        super(prenom, nom);
    }

    verifierTransaction(client, prixaPayer) {        
        return client.budget - prixaPayer >= 0;
    }

    reponse(client, attraction, prixTotal, nbrPlace, list) {
        this.say(
            `Ah enchanté de vous rencontrer : ${list.join(
                ", "
            )}. Il y aura donc ${list.length} tickets ...`
        );

        if (list.length <= nbrPlace) {
            this.say(`Soit ${prixTotal} en euros s'il vous plait.`);

            if(this.verifierTransaction(client, prixTotal)) {
                client.payment(attraction, prixTotal);
                attraction.nbrPlace -= list.length;
            } else {
                this.say(`Ah... Il semblerait qu'il n'y es plus assez sur votre compte.`);
            }
        } else {
            this.say(`Il n'y a plus assez de places disponibles, veuillez attendre votre tour`);
            attraction.vider();
        };
    }

    prefix() {
        return `Caissier(${super.prefix()}) `;
    }

}

module.exports = Caissier;