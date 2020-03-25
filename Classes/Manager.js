const Personne = require("./personne");
const input = require("readline-sync");

class Manager extends Personne {

    constructor (prenom, nom, listEmploye = []) {
        super(prenom, nom);
        this._listEmploye = listEmploye;
    }


    get listEmploye() {
        if (this.listEmploye.lenght > 0) {
            let list = [];
            this._listEmploye.forEach(element => {
                list.push(`${element.prenom} ${element.nom}`);
            });
            return `${this.prefix()} Les employés sous ma charge sont : ${list.join(
                ", "
            )}.`;
        } else {
            return `${this.prefix()} Je n'ai pas d'employés sous ma charge pour le moment..`;
        }
    }

    set listEmploye(value) {
        this._listEmploye = value;
    }

    checkEmploye(employe) {
        for (const index in this._listEmploye) {
            if (this._listEmploye.hasOwnProperty(index)) {
                const check = this._listEmploye[index];
                return check === employe;
            }
        }
    }


    ajouterEmploye(employe) {
        if (employee instanceof Caissier || employe instanceof Restaurateur) {
            this._employeeList.push(employe);
            this.say(
                `J'ai maintenant ${employee.prenom} ${employee.nom} sous ma charge !`
            );
        } else {
            this.say(`Ce n'est pas un employé d'ici..`);
        }
    }

    supprimerEmployee(employe) {
        if (employe instanceof Caissier || employe instanceof Restaurateur) {
        if(this.containsEmploye(employe)) {
            this._employeeList.splice(
                this._listEmploye.indexOf(employee), 1
            );
        }
            
        } else {
            this.say(`Ce n'est pas un employé d'ici..`);
        }
    }

    recevoirPlainte(client) {
        if (client.lastPaymentDone()) {
            if (this.containsEmployee(client._lastPayment.what.employee)) {
                this.say(
                    `Quoi ?! Votre derniere expérience au ${client._lastPayment.what.name} avec ${client._lastPayment.what.employee.firstName} ${client._lastPayment.what.employee.lastName} ne vous a pas convaincu ?? Laissez moi vous dédommager. Tenez voilà ${client._lastPayment.howMany} euros.`
                );
                client.wallet += client._lastPayment.howMany;
            } else {
                this.say(
                    `Je ne connais pas cet employé, je ne suis pas son manager.`
                );
            }
        } else {
            this.say(`Il semblerait que vous n'avez pas fait de paiements..`);
        }
    }
    
    prefix() {
        return `Manager(${super.prefix()})`;
    }

}

module.exports = Manager;