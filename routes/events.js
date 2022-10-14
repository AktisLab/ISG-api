const router = require('express').Router();

router.get('/association', (req, res) => {
  res.send([
    {
      title: "WEI 2022 ISG SBM",
      date: "Du 14 au 16 septembre",
      location: "Camping la marette, Joannas",
      cover: "wei.png",
    },
    {
      title: "Match OL/Toulouse",
      date: "Vendredi 7 octobre",
      location: "Groupama Stadium",
      cover: "parc-ol.png",
    },
    {
      title: "Tournée de l'Etudiant",
      date: "Du 5 au 8 octobre",
      location: "Presqu'île et Vieux Lyon",
      cover: "vieuxLyon.png",
    },
    {
      title: "Parcours libre technologique",
      date: "Du 24 au 28 octobre",
      location: "ISG, campus de Lyon",
      cover: "formation.png",
    },
  ]);
});

router.get('/company', (req, res) => {
  res.send([
    {
      title: "Lancement de la nouvelle gamme",
      date: "Lun. 24 octobre 2022",
      hour: "10:00",
      location: "6 Rue Saint-Nizier"
    },
    {
      title: "Soirée de Noël",
      date: "Ven. 23 décembre 2022",
      hour: "19:00",
      location: "6 Rue Saint-Nizier"
    },
    {
      title: "Anniversaire de l'entreprise",
      date: "Jeu. 12 janvier 2023",
      hour: "14:00",
      location: "Halle Tony Guarnier"
    },
    {
      title: "Innauguration des nouveaux locaux",
      date: "Mar. 24 janvier 2023",
      hour: "09:00",
      location: "4Bis Cours Bayard"
    },
    {
      title: "Assemblée générale",
      date: "Mar. 14 février 2023",
      hour: "10:00",
      location: "Halle Tony Guarnier"
    },
  ]);
});

router.get('/concertHall', (req, res) => { res.send([
  {
    title: "Live echo: Zentone",
    date: "Sam. 22 octobre",
    hour: "19:00",
    cover: "zentone.png"
  },
  {
    title: "Youssoupha",
    date: "Jeu. 27 octobre",
    hour: "19:00",
    cover: "youssoupha.png"
  },
  {
    title: "Encode X Kosmos - horror edition",
    date: "Ven. 28 octobre",
    hour: "23:30",
    cover: "kosmos.png"
  },
  {
    title: "L'ENTOURLOOP",
    date: "Jeu. 10 novembre",
    hour: "19:00",
    cover: "entourloop.png"
  },
  {
    title: "Prime",
    date: "Ven. 16 décembre",
    hour: "19:00",
    cover: "prime.png"
  },
]); });

router.get('/artist', (req, res) => { res.send([
    {
      date: "25 octobre 2022",
      location: "Parc des princes, Paris",
      cover: "parcDesPrinces.png"
    },
    {
      date: "28 octobre 2022",
      location: "Le transbordeur, Lyon",
      cover: "transbordeur.png"
    },
    {
      date: "2 novembre 2022",
      location: "Zénith, Saint Etienne",
      cover: "zenithStEtienne.png"
    },
    {
      date: "18 novembre 2022",
      location: "Le Dôme, Marseille",
      cover: "leDome.png"
    },
    {
      date: "19 novembre 2022",
      location: "Arkéa Arena, Floirac",
      cover: "arkeaarena.png"
    },
  ]);
});

module.exports = router;
