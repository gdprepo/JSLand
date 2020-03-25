const Personne = require("./personne");
const input = require("readline-sync");

class Restaurateur extends Personne {

    constructor (prenom, nom) {
        super(prenom, nom);
    }


    formulA() {
        let date = new Date(),
            heure = date.getHours();
        return 12 < heure && heure < 14;
    }

    ajouterDesert(nbr) {
        let test = 2, rnd, desert = 0, index = 0;

        while (index !== nbr) {
            rnd = Math.ceil(Math.random() * 5);
            if (rnd === chance) desert += 1;
            index++;
        }
        return desert;
    }

    verifierTransaction(client, prixaPayer) {
        return client.budget - prixaPayer >= 0;
    }

    reponse() {
        let nbrMenu1, nbrMenu2, nbr;
        do {
            nbrPersonne = parseInt(
                input.question(this.say(`Ah bonjour ! Combien êtes vous ?`))
            );
            if (isNaN(nbrPersonne) || nbrPersonne < 0) {
                this.say(`Erreur : Vous devez rentrer un entier positif... On recommence !`);
            }
        } while (isNaN(nbrPersonne) || nbrPersonne < 0);

        do {
            nbrMenu1 = parseInt(
                input.question(this.say(`Très bien, vous êtes donc ${nbrPersonne}. Combien y aura t-il de menus 1 ? `))
            )
            if (isNaN(nbrMenu1) || nbrMenu1 < 0) {
                this.say(`Erreur : Vous devez rentrer un entier positif... On recommence !`);
            }
        } while (isNaN(nbrMenu1) || nbrMenu1 < 0);

        do {
            nbrMenu2 = parseInt(
                input.question(this.say(`Très bien, vous êtes donc ${nbrPersonne}. Combien y aura t-il de menus 2 ? `))
            )
            if (isNaN(nbrMenu2) || nbrMenu2 < 0) {
                this.say(`Erreur : Vous devez rentrer un entier positif... On recommence !`);
            }
        } while (isNaN(nbrMenu2) || nbrMenu2 < 0);

        if (nbrMenu1 + nbrMenu2 === nbr) {
            let prixTotal = nbrMenu1 * restaurant.prixMenu1 + nbrMenu2 * restaurant.prixMenu2;

            if (this.formulA()) {
                prixTotal = Math.floor((prixTotal -= prixTotal * 0.2));
            }
        }

    }

}

module.exports = Restaurateur;