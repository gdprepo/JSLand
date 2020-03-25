const Client = require("../Classes/client"),
    Caissier = require("../Classes/caissier"),
    Attraction = require("../Classes/attraction"),
    Restaurant = require("../Classes/restaurant"),
    Restaurateur = require("../Classes/restaurateur"),
    Manager = require("../Classes/manager");

let moi = new Client("Prenom", "Nom", 500),
    caissierMontagnesRusses = new Caissier("Caissier-Prenom", "Nom-MR"),
    montagnesRusses = new Attraction(
        "Montagnes Russes",
        caissierMontagnesRusses,
        12,
        15
    ),
    caissierMaisonHantee = new Caissier("Caissier-Prenom", "Nom-MH"),
    maisonHantee = new Attraction("Maison Hantée", caissierMaisonHantee, 5, 25),
    miguel_Restaurateur = new Restaurateur("Restaurateur-Prenom", "Nom-R"),
    pattiya = new Restaurant("Pattiya", miguel_Restaurateur, 16, 24),
    managerMontagnesRusses = new Manager("Manager-Prenom", "Nom-MR", [
        caissierMontagnesRusses
    ]),
    miguel_Manager = new Manager("Manager-Prenom", "Nom-M", [miguel_Restaurateur]),
    caissierChaisesVolantes = new Caissier("Caissier-Prenom", "Nom-CV"),
    chaisesVolantes = new Attraction(
        "Chaises Volantes",
        caissierChaisesVolantes,
        25,
        18
    ),
    palaitdesGlacesCaissier = new Caissier("Prenom-Caissier", "Nom-PG"),
    palaitDesGlaces = new Attraction(
        "Palait Des Glaces",
        palaitdesGlacesCaissier,
        8,
        250
    ),
    sturbacksTeaRestaurateur = new Restaurateur("Prenom-Restaurateur", "Nom-ST"),
    sturbacksTea = new Restaurant(
        "Sturbacks Tea",
        sturbacksTeaRestaurateur,
        8,
        10
    );


// let moi = new Client("Louis", "Lacoste", 500),
//     caissierMontagnesRusses = new Caissier("Frères", "Bogdanoff"),
//     montagnesRusses = new Attraction(
//         "Montagnes Russes",
//         caissierMontagnesRusses,
//         12,
//         15
//     ),
//     caissierMaisonHantee = new Caissier("Bat", "Man"),
//     maisonHantee = new Attraction("Maison Hantée", caissierMaisonHantee, 5, 25),
//     restaurateurMiguel = new Restaurateur("Miguel", "Viret"),
//     pattiya = new Restaurant("Pattiya", restaurateurMiguel, 16, 24),
//     managerMontagnesRusses = new Manager("Jefé", "Pamonboulo", [
//         caissierMontagnesRusses
//     ]),
//     miguel_Manager = new Manager("Jeff", "Bezos", [restaurateurMiguel]),
//     caissierChaisesVolantes = new Caissier("Cavas", "Swinguer"),
//     chaisesVolantes = new Attraction(
//         "Chaises Volantes",
//         caissierChaisesVolantes,
//         25,
//         18
//     ),
//     caissierPalaitDesGlaces = new Caissier("Cayus", "Bonus"),
//     palaitDesGlaces = new Attraction(
//         "Palait Des Glaces",
//         caissierPalaitDesGlaces,
//         8,
//         250
//     ),
//     restaurateurSturbacksTea = new Restaurateur("Mac", "Danolds"),
//     sturbacksTea = new Restaurant(
//         "Sturbacks Tea",
//         restaurateurSturbacksTea,
//         8,
//         10
//     );

let retourAlaLine = () => console.log("");
let Info = message => console.log(`Info => ${message}`);

maisonHantee.nbrPlace = 0;

Info("Bienvenue a JS Land...");
retourAlaLine();
setTimeout(() => {
    Info("Action : Vous êtes arrivé dans le Parc..");
    retourAlaLine();
    Info("Action : Entrain de faire la queue pour les montagnes russes...");
    retourAlaLine();
    setTimeout(() => {
        moi.introductionAttraction(montagnesRusses);
        retourAlaLine();
        Info("Action : Dans l'attraction montagnes russes...");
        retourAlaLine();

        setTimeout(() => {
            Info("Action : Ensuite dans la queue pour la maison hantée...");
            retourAlaLine();

            setTimeout(() => {
                moi.introductionAttraction(maisonHantee);
                retourAlaLine();
                Info("Action : Manger une barbe à papa avec la mascotte...");
                retourAlaLine();
                setTimeout(() => {
                    moi.introductionAttraction(maisonHantee);
                    retourAlaLine();
                    Info("Action : Vous êtes dans la maison hantée...");
                    retourAlaLine();
                    setTimeout(() => {
                        Info("Action : Arrivé dans la queue du restaurant Pattiya...");
                        retourAlaLine();
                        setTimeout(() => {
                            moi.introductionAttraction(pattiya);
                            Info("Action : Vous êtes dans le restaurant...");
                            retourAlaLine();
                            Info("Action : Entrain de Manger...");
                            retourAlaLine();
                            setTimeout(() => {
                                Info("Julia est entrain de faire une intoxication alimentaire...");
                                retourAlaLine();
                                Info("Rechercher le manager...");
                                retourAlaLine();
                                setTimeout(() => {
                                    moi.introductionAttraction(montagnesRusses);
                                    Info("Mauvais manager...");
                                    retourAlaLine();
                                    Info("Action : Rechercher manager...");
                                    retourAlaLine();
                                    setTimeout(() => {
                                        Info("Manger trouvé");
                                        moi.plainte(miguel_Manager);
                                        retourAlaLine();
                                        Info("Remboursement...");
                                        retourAlaLine();
                                        setTimeout(() => {
                                            Info("Action : Puis direction la queue pour les chaises volantes...");
                                            retourAlaLine();
                                            setTimeout(() => {
                                                Info("Action : Arrivé à l'attraction chaises volantes...");
                                                retourAlaLine();
                                                moi.introductionAttraction(chaisesVolantes);
                                                retourAlaLine();
                                                setTimeout(() => {
                                                    Info("Action : Dans la queue du palais des glaces...");
                                                    retourAlaLine();
                                                    setTimeout(() => {
                                                        moi.introductionAttraction(palaitDesGlaces);
                                                        retourAlaLine();
                                                        Info("Action : Retrait de 1000 euros...")
                                                        moi._budget += 1000;
                                                        retourAlaLine();
                                                        moi.introductionAttraction(palaitDesGlaces);
                                                        retourAlaLine();
                                                        setTimeout(() => {
                                                            Info("Action : Entrain de manger un Sturbacks Tea...");
                                                            retourAlaLine();
                                                            Info("Vous sortez de JSLAND...");
                                                        }, 3000);
                                                    }, 1670);
                                                }, 2000);
                                            }, 2000);
                                        }, 1000);
                                    }, 700);
                                }, 1500);
                            }, 5000);
                        }, 2000);
                    }, 5000);
                }, 3000);
            }, 1560);
        }, 1750);
    }, 2000);
}, 1000);
