
const Client = require("../Classes/client"),
    Caissier = require("../Classes/caissier"),
    Attraction = require("../Classes/attraction"),
    Restaurant = require("../Classes/restaurant"),
    Restaurateur = require("../Classes/restaurateur"),
    Manager = require("../Classes/manager");

let Essai = new Client("Nom", "Prenom", 200);
let thomas = new Client("Nom", "Prenom", 111);
let Adrienne = new Client("Nom", "Prenom", 111);
let caissier = new Caissier("Prenom-Caissier", "Nom-Caissier");
let montagnesRusses = new Attraction("Nom-Attraction", caissier, 8, 8);
let restaurateur = new Restaurateur("Restaurateur", "Nom");
let augusteGusto = new Restaurant("restaurant", restaurateur, 10, 12);
let manager = new Manager("Prenom-Manager", "Nom");

Essai.introductionAttraction(montagnesRusses);
