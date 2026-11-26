/* =========================================================
   Alle inhoud van de portfolio staat hier.
   Tekst aanpassen? Doe het in dit bestand.
   ========================================================= */

const SITE = {
  naam: "Samira Loor",
  schoolMail: "samira.loor@student.arteveldehs-luca.be",
  persoonlijkeMail: "samiraloor85@gmail.com",
  telefoon: "0486 03 08 28",
  telefoonLink: "+32486030828",
  school: "Arteveldehogeschool × LUCA School of Arts, Gent",
  opleiding: "Graduaat Digitale Vormgeving, 2de jaar",
  // Vul je LinkedIn-link in, dan verschijnt de knop vanzelf op de site.
  linkedin: "",
  formspreeId: ""
};

const PROJECTEN = [
  {
    slug: "mascotte",
    kaartNaam: "Stadsmascotte · New Orleans",
    wat: "character design · campagne",
    kaartBeeld: "assets/img/mascotte/groep.webp",
    // Voorstel: pas aan wat niet klopt
    rol: "Individueel project. Ik bedacht het concept, tekende de drie personages en hun expressies, maakte de styleguide en werkte de hele campagne uit: key visual, app-icoon, animatie, poster, social media en mock-ups.",
    geleerd: "Ik leerde hoe je één personage consequent doortrekt over heel veel dragers, van app-icoon tot metroposter. Eerst een styleguide maken en pas dan de campagne starten bespaart achteraf veel werk. En ik merkte hoe belangrijk poses en expressies zijn om een karakter echt te laten leven.",
    titelVet: "",
    titelScript: "",
    naam: "Stadsmascotte · New Orleans",
    type: "schoolproject",
    kort: "Een mascotte die het karakter van New Orleans tot leven brengt: jazz, de jaren 1920 en heel veel attitude.",
    sticker: null,
    grid: ["assets/img/mascotte/kaart-collage.webp","assets/img/mascotte/kaart-muse.webp"],
    gridKaart: true,
    hero: "assets/img/mascotte/cover.webp",
    tools: ["Illustrator", "Photoshop", "Figma"],
    skills: ["character design", "illustratie", "campagne", "styleguide", "animatie", "storytelling"],
    secties: [
      {
        titel: "Wat was de opdracht?",
        tekst: [
          "Ontwerp een mascotte die het karakter van een stad tot leven brengt en jongeren aanspreekt, en werk er een volledige campagne rond uit: van key visual en app-icoon tot animatie, poster, app-scherm, social media en mock-ups."
        ]
      },
      {
        titel: "Waarom New Orleans?",
        tekst: [
          "New Orleans staat bekend om zijn sterke muziekcultuur, vooral jazz, die helemaal verweven is met het straatleven, de parades en de tradities van de gemeenschap. Afrikaanse, Caribische, Spaanse en Europese invloeden komen er samen in een havenstad die bruist.",
          "De kunst, de jazz en de architectuur voelen alsof ze voor altijd in de jaren 1920 zijn blijven hangen. Precies zoals ik het graag heb."
        ],
        beeld: "assets/img/mascotte/moodboard.webp",
        bijschrift: "Moodboard: kunst, architectuur, Mardi Gras en de typografie van de stad."
      },
      {
        titel: "Het concept",
        tekst: [
          "Mijn mascotte is een show: een leadzangeres met een enorme haardos en een rode flapperjurk, geflankeerd door twee muses met waaiers. Het gordijn zwaait open, de spotlight valt op de ster, de lead zwaait met de microfoon en de benen van de muses vliegen de lucht in.",
          "De flapperhoofdband, de outfits en de poses verwijzen naar de jazz- en danscultuur van de jaren 1920. Sterke kleuren, groot haar en een zelfverzekerde houding zorgen ervoor dat jongeren meteen kijken."
        ],
        groot: [
          { src: "assets/img/mascotte/lead-expressies.webp", bijschrift: "De leadzangeres: poses en expressies" },
          { src: "assets/img/mascotte/muses-expressies.webp", bijschrift: "De muses: portret en poses met waaier" },
          { src: "assets/img/mascotte/muses-been.webp", bijschrift: "De muses in actie" }
        ]
      },
      {
        titel: "Styleguide",
        tekst: [
          "Warme roodtinten, goud en okergeel en diepe bruintinten voor het haar en de huid, aangevuld met crème en een vleugje roze. Voor de typografie koos ik een sierlijk script naast een smalle, vette letter met jazzclubposter-energie."
        ],
        groot: [
          { src: "assets/img/mascotte/groep.webp", bijschrift: "New Orleans – Louisianna" }
        ],
        rij: [
          { src: "assets/img/mascotte/lead-solo.webp", bijschrift: "De lead" },
          { src: "assets/img/mascotte/muse-1.webp", bijschrift: "Muse 1" },
          { src: "assets/img/mascotte/muse-2.webp", bijschrift: "Muse 2" }
        ],
        naRij: [{ src: "assets/img/mascotte/styleguide.webp", bijschrift: "Kleurenpalet en typografie" }]
      },
      {
        titel: "De campagne",
        groot: [
          { src: "assets/img/mascotte/keyvisual-crop.webp", bijschrift: "Key visual" },
          { src: "assets/img/mascotte/appicoon-crop.webp", bijschrift: "App-icoon" },
          { src: "assets/img/mascotte/dooh-crop.webp", bijschrift: "DOOH-poster" },
          { src: "assets/img/mascotte/socials-crop.webp", bijschrift: "Social media" },
          { src: "assets/img/mascotte/mockup-1-crop.webp", bijschrift: "Mock-ups: etalage en flyer" },
          { src: "assets/img/mascotte/mockup-2-crop.webp", bijschrift: "Mock-ups: tote bag en metroposter" }
        ]
      },
      {
        titel: "Het proces in 6 weken",
        lijst: [
          "Week 1 · Onderzoek en experiment: moodboard, stadsthema's en typografie",
          "Week 2 · Concept en focus: hoe spreekt de mascotte jongeren aan?",
          "Week 3 · Start campagne: variaties, expressies, styleguide en key visual",
          "Week 4 · Animatie: gif van de mascotte",
                    "Week 6 · Social media en mock-ups"
        ]
      }
    ],
    disclaimer: "Dit is een schoolproject. De mascotte en de campagne zijn fictief en niet in opdracht van de stad New Orleans gemaakt. De mock-upfoto's zijn sjablonen."
  },

  {
    slug: "cloudberry",
    kaartNaam: "Cloudberry",
    wat: "awarenesscampagne · Creative Automation",
    kaartBeeld: "assets/img/cloudberry/post-2.webp",
    // Voorstel: pas aan wat niet klopt
    rol: "Individueel project. Ik deed de art direction, het logo en de huisstijl, bewerkte alle foto's in Photoshop en maakte de posts, stories, verpakking, stickers en landingspagina, met Claude als AI-werkpartner.",
    geleerd: "Ik leerde AI gebruiken als werkpartner en niet als vervanger: goede prompts schrijven, kritisch kiezen en alles zelf nabewerken. Ook zag ik hoe één consequente look, hier de warme, analoge fotostijl, een merk herkenbaar maakt over posts, stories en verpakking heen.",
    titelVet: "",
    titelScript: "",
    naam: "Cloudberry",
    type: "schoolproject · Creative Automation",
    kort: "Een awareness-campagne voor een fictief theemerk voor kinderen en jonge ouders, met AI als werkpartner.",
    sticker: null,
    grid: [
      "assets/img/cloudberry/post-2.webp",
      "assets/img/cloudberry/story-1.webp",
      "assets/img/cloudberry/post-6.webp",
      "assets/img/cloudberry/post-8.webp",
      "assets/img/cloudberry/story-6.webp",
      "assets/img/cloudberry/post-4.webp"
    ],
    hero: "assets/img/cloudberry/stickers.webp",
    link: { url: "https://schoolacc07.github.io/cloudberry/", label: "Bekijk de landingspagina" },
    tools: ["Figma", "Photoshop", "Excel", "Claude (AI)"],
    skills: ["art direction", "branding", "fotobewerking", "prompting", "creative automation"],
    secties: [
      {
        titel: "Wat was de opdracht?",
        tekst: [
          "Dit is een schoolproject voor het vak Creative Automation. De opdracht was om een volledige awareness-campagne uit te werken voor het fictieve theemerk Cloudberry, met AI (Claude) als werkpartner doorheen het hele proces.",
          "Cloudberry maakt rooibosthee met fruitige smaakduo's voor kinderen en jonge ouders. Het resultaat: een logo, huisstijl, verpakking, stickers, een landingspagina en social media assets (posts en stories)."
        ]
      },
      {
        titel: "Logo",
        groot: [
          { src: "assets/img/cloudberry/logo-groot.webp", bijschrift: "Het logo" },
          { src: "assets/img/cloudberry/logo-opbouw.webp", bijschrift: "Het theepotje is even hoog als de letters van het logo." },
          { src: "assets/img/cloudberry/logo-theepotjes.webp", bijschrift: "Het theepotje in alle smaakkleuren" }
        ]
      },
      {
        titel: "Posts",
        tekst: [
          "De posts voelen als oude familiefoto's: kinderen die genieten van fruit en een kopje thee. Zo spreekt Cloudberry vooral jonge ouders aan, met herkenbare, warme momenten in plaats van een klassieke productfoto.",
          "Alle foto's zijn in Photoshop aangepast. Ik maakte de kleuren warmer en zachter en voegde korrel en een licht vervaagde look toe, zodat ze aanvoelen als analoge foto's uit een fotoalbum. Het fruit in elke foto heb ik extra laten opvallen."
        ],
        galerij: [1,2,3,4,5,6,7,8,9].map(i => ({ src: `assets/img/cloudberry/post-${i}.webp` })),
        posts: true
      },
      {
        titel: "Stories",
        tekst: [
          "De stories (9:16) tonen close-ups van het fruit uit de smaken: aardbei, framboos, bosbes, mandarijn, kers, limoen en meer. Elke story staat voor één smaak. In het midden staat de slogan “a cup for you, a cup for the little ones”."
        ],
        galerij: [1,2,3,4,5,6,7,8].map(i => ({ src: `assets/img/cloudberry/story-${i}.webp` })),
        stories: true
      },
      {
        titel: "Verpakking en stickers",
        galerij: [
          { src: "assets/img/cloudberry/packaging.webp", bijschrift: "Verpakkingen" },
          { src: "assets/img/cloudberry/stickers.webp", bijschrift: "Doosje met stickers" }
        ]
      },
      {
        titel: "Voor en na in Photoshop",
        tekst: [
          "Links de originele foto, in het midden de bewerkte versie. Met aanpassingslagen en maskers maakte ik de kleuren warmer, liet ik de wangen en het fruit meer opvallen en ging ik voor een analoge, vintage look."
        ],
        galerij: [
          { src: "assets/img/cloudberry/voor.webp", bijschrift: "Voor" },
          { src: "assets/img/cloudberry/na.webp", bijschrift: "Na" },
          { src: "assets/img/cloudberry/photoshop.webp", bijschrift: "In Photoshop" }
        ]
      }
    ],
    disclaimer: "Cloudberry is een fictief merk en geen bestaand product. Een deel van de beelden is met AI gegenereerd of gebaseerd op referentiefoto's en daarna in Photoshop bewerkt. Alle beelden zijn enkel gebruikt voor dit schoolproject."
  },

  {
    slug: "roots",
    kaartNaam: "ROOTS",
    wat: "fotografie · branding",
    kaartBeeld: "assets/img/roots/foto-1.webp",
    // Voorstel: pas aan wat niet klopt
    rol: "Individueel project. Ik bedacht het merk en het verhaal, maakte het moodboard, het logo en de mascotte, regisseerde en schoot alle foto's en bewerkte ze in Lightroom en Photoshop.",
    geleerd: "Ik leerde een merkverhaal vertellen met enkel beelden: wat je wel en niet in beeld brengt, bepaalt het gevoel. Ik werd zekerder achter de camera en in het regisseren van mensen, en ik leerde een reeks foto's zo te bewerken dat ze als één geheel aanvoelen.",
    titelVet: "ROOTS",
    titelScript: "the coil of us",
    naam: "ROOTS",
    type: "schoolproject · Fotografie",
    kort: "Een merk dat je niet alleen ziet, maar ook voelt: een liefdesbrief aan coils, curls en de meiden die erdoor groeien.",
    sticker: "assets/img/roots/logo.webp",
    stickerBreed: true,
    grid: [
      "assets/img/roots/foto-9.webp",
      "assets/img/roots/foto-5.webp",
      "assets/img/roots/foto-1.webp",
      "assets/img/roots/foto-10.webp",
      "assets/img/roots/foto-4.webp",
      "assets/img/roots/foto-6.webp"
    ],
    hero: "assets/img/roots/foto-1.webp",
    tools: ["Camera", "Lightroom", "Photoshop", "Illustrator"],
    skills: ["fotografie", "art direction", "retouche", "illustratie", "branding", "storytelling"],
    secties: [
      {
        titel: "Wat was de opdracht?",
        tekst: [
          "Dit is een schoolproject voor het vak Fotografie. De opdracht was om een merk te bedenken en het verhaal achter dat merk te vertellen via foto's. Zo ontstond ROOTS: een merk dat je niet alleen ziet, maar ook voelt door de beelden."
        ]
      },
      {
        titel: "Het verhaal van ROOTS",
        tekst: [
          "ROOTS gaat over de soms moeilijke journey van het leren kennen, verzorgen en accepteren van je haar.",
          "Het kleine meisje als mascotte staat voor de momenten waarop je niet weet wat je met je haar moet doen en die journey even lastig voelt. Met mijn fotografie wilde ik juist de andere kant laten zien: gewoon jezelf zijn, plezier maken en je haar laten zijn zoals het is. De meisjes gaan samen op avontuur door de stad, hebben lol en zijn een beetje goofy. No worries, just being yourself."
        ],
        quote: "ROOTS is a love letter to coils, curls and the girls growing through them. A space inspired by softness, ritual, texture and community. For the ones learning their hair, loving their roots and finding themselves in the process. — the coil of us."
      },
      {
        titel: "Moodboard",
        tekst: ["Zachtheid, ritueel, textuur en community: warme oranje- en honingtinten, haar in de hoofdrol en momenten van samen zijn."],
        beeld: "assets/img/roots/moodboard.webp"
      },
      {
        titel: "Kleurenpalet",
        tekst: ["Ik experimenteerde met verschillende versies van het logo en speelde met vormen, kleuren en typografie. Uiteindelijk koos ik voor een combinatie van paars en oranje, omdat die kleuren goed passen bij de opvallende en energieke uitstraling van het merk."],
        beeld: "assets/img/roots/kleurenpalet.webp"
      },
      {
        titel: "Logo en varianten",
        // mascotte: zet hier het pad naar de losse tekening, bv. "assets/img/roots/mascotte.webp"
        mascotte: "assets/img/roots/sticker.webp",
        beeld: "assets/img/roots/logo.webp",
        galerij: ["oranje","wit","paars","roze"].map(k => ({ src: `assets/img/roots/logo-${k}.webp`, bijschrift: k })),
        vier: true
      },
      {
        titel: "Foto's",
        tekst: ["Alle foto's heb ik zelf geschoten en daarna bewerkt in Lightroom en Photoshop."],
        galerij: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(i => ({ src: `assets/img/roots/foto-${i}.webp` })),
        masonry: true
      }
    ],
    disclaimer: "ROOTS is een fictief merk en geen bestaand product. De beelden zijn zelf gemaakt en gebruikt voor dit schoolproject."
  },

  {
    slug: "biljetten",
    kaartNaam: "Eurobiljetten",
    wat: "illustratie · kleurpotlood",
    kaartBeeld: "assets/img/biljetten/500-voor.webp",
    // Voorstel: pas aan wat niet klopt
    rol: "Individueel project. Ik koos het concept en de koninginnen, deed het onderzoek, tekende alles met kleurpotlood en maakte de biljetten op in Photoshop.",
    geleerd: "Ik leerde geduld: realistisch tekenen met kleurpotlood vraagt tijd en precisie. Ik leerde ook onderzoek doen naar historische figuren en hoe je tekeningen na het inscannen netjes opmaakt in Photoshop, met watermerken en overvloeimodi.",
    titelVet: "",
    titelScript: "",
    naam: "Eurobiljetten",
    type: "schoolproject",
    kort: "Een eigen reeks eurobiljetten, helemaal met kleurpotlood getekend: elk biljet eert een koningin die Europa veranderde.",
    sticker: null,
    grid: [
      "assets/img/biljetten/500-voor.webp",
      "assets/img/biljetten/100-voor.webp"
    ],
    gridDuo: true,
    hero: "assets/img/biljetten/500-voor.webp",
    tools: ["Kleurpotlood", "Scanner", "Photoshop"],
    skills: ["realistisch tekenen", "illustratie", "onderzoek", "fotobewerking", "compositie"],
    secties: [
      {
        titel: "Wat was de opdracht?",
        tekst: [
          "Een schoolproject waarin we een eigen reeks eurobiljetten moesten ontwerpen. Mijn concept is “Europe through its queens”: elk biljet eert een koningin die Europa in haar tijd voor altijd veranderd heeft, gebaseerd op historische schilderijen."
        ]
      },
      {
        titel: "500 euro · Marie-Antoinette",
        galerij: [
          { src: "assets/img/biljetten/500-voor.webp", bijschrift: "Voorkant" },
          { src: "assets/img/biljetten/500-achter.webp", bijschrift: "Achterkant" }
        ],
        tweeKol: true,
        schets: { src: "assets/img/biljetten/schets-500.webp", bijschrift: "Schets in wording: de koningin is al ingekleurd met kleurpotlood, de Bastille op de achtergrond is nog potlood." },
        naGalerij: {
          tekst: ["Met de Franse Revolutie in mijn achterhoofd koos ik een portret van de koningin en een schilderij van de brandende Bastille. Ze was een icoon in de hogere kringen en gaf uitbundige feesten in Versailles. De revolutie staat op de achterkant."],
          galerij: [
            { src: "assets/img/biljetten/ref-500-portret.webp", bijschrift: "Referentie: Marie-Antoinette" },
            { src: "assets/img/biljetten/ref-500-verhaal.webp", bijschrift: "Referentie: The burning of the Bastille" }
          ]
        }
      },
      {
        titel: "100 euro · Louisa of Prussia",
        galerij: [
          { src: "assets/img/biljetten/100-voor.webp", bijschrift: "Voorkant" },
          { src: "assets/img/biljetten/100-achter.webp", bijschrift: "Achterkant" }
        ],
        tweeKol: true,
        schets: { src: "assets/img/biljetten/schets-100.webp", bijschrift: "Eerste potloodschets van Louisa, met de stoet van Tilsit op de achtergrond." },
        naGalerij: {
          tekst: ["Louisa staat bekend als een teken van moed tegen Napoleon. Toen hij Pruisen overheerste, ging ze zelf naar hem in Tilsit om betere voorwaarden te vragen. Dat moment staat op de achterkant."],
          galerij: [
            { src: "assets/img/biljetten/ref-100-portret.webp", bijschrift: "Referentie: Louisa of Prussia" },
            { src: "assets/img/biljetten/ref-100-verhaal.webp", bijschrift: "Referentie: Louisa meeting Napoleon at Tilsit" }
          ]
        }
      },
      {
        titel: "50 euro · Isabella I of Castile",
        galerij: [
          { src: "assets/img/biljetten/50-voor.webp", bijschrift: "Voorkant" },
          { src: "assets/img/biljetten/50-achter.webp", bijschrift: "Achterkant" }
        ],
        tweeKol: true,
        naGalerij: {
          tekst: ["Samen met haar man, de koning van Aragon, verenigde ze Spanje. Ze speelde ook een grote rol in de reizen van Columbus, en die Spaanse expeditie staat op de achterkant."],
          galerij: [
            { src: "assets/img/biljetten/ref-50-portret.webp", bijschrift: "Referentie: Isabella I of Castile" },
            { src: "assets/img/biljetten/ref-50-verhaal.webp", bijschrift: "Referentie: The Spanish expedition" }
          ]
        }
      },
      {
        titel: "Hoe zijn de biljetten gemaakt?",
        tekst: ["Alles op de biljetten is zelf getekend: de koninginnen, de achterkanten en de details. Daarna heb ik de tekeningen ingescand en in Photoshop bewerkt en opgemaakt. De watermerken zijn foto's die ik met een overvloeimodus in kleur over het biljet heb gelegd."]
      }
    ],
    disclaimer: "Dit zijn fictieve biljetten en geen echt betaalmiddel. De schilderijen zijn enkel gebruikt als referentie voor dit schoolproject."
  },

  {
    slug: "ab-festival",
    kaartNaam: "Unhoused Festival",
    wat: "webdesign · posters",
    kaartBeeld: "assets/img/ab/poster-1.webp",
    // Voorstel: pas aan wat niet klopt
    rol: "Individueel project. Ik deed het onderzoek naar festivals en concertzalen, bedacht het festival en de line-up en ontwierp de sitemap, wireframes, website en posters in Figma.",
    geleerd: "Ik leerde creatief zijn binnen de vaste regels van een bestaande huisstijl. En ik zag hoe elke stap, van onderzoek en sitemap tot wireframes, de volgende makkelijker maakt.",
    titelVet: "",
    titelScript: "",
    naam: "Unhoused Festival · AB",
    type: "schoolproject",
    kort: "Een eigen driedaags festival in de huisstijl van de Ancienne Belgique, om geld in te zamelen voor SAAMO.",
    sticker: null,
    grid: [
      "assets/img/ab/poster-1.webp",
      "assets/img/ab/website.webp",
      "assets/img/ab/poster-3.webp"
    ],
    gridDrie: true,
    hero: "assets/img/ab/website.webp",
    tools: ["Figma"],
    skills: ["onderzoek", "conceptontwikkeling", "webdesign", "posterdesign", "werken binnen een bestaande huisstijl"],
    secties: [
      {
        titel: "Wat was de opdracht?",
        tekst: [
          "We kregen de huisstijl van de AB (Ancienne Belgique). In diezelfde huisstijl moesten we een eigen festival uitwerken. Zo ontstond Unhoused Festival: een driedaags festival in de AB, georganiseerd door SAAMO om geld in te zamelen."
        ]
      },
      {
        titel: "Alles zelf bedacht",
        tekst: [
          "Van de artiesten en de line-up tot het aantal concerten en festivaldagen: alles moesten we zelf creëren. Daarvoor deed ik eerst onderzoek naar andere festivals en concertzalen, zoals de AB, de Gentse Feesten en de Beverse Feesten. Daarna maakte ik een sitemap, wireframes, de website en de posters."
        ]
      },
      {
        titel: "Website",
        // Klik op het beeld: de video opent in Figma.
        figmaVideo: {
          poster: "assets/img/ab/website-video.webp",
          link: "https://www.figma.com/proto/YcSZ6hdlzTzQ5R3R36dsKX/2526_LC_Portfolio_Samira-Loor?node-id=65-1502&scaling=min-zoom&content-scaling=fixed&page-id=65%3A16"
        }
      },
      {
        titel: "Posters",
        tekst: ["Drie kleurvarianten van de festivalposter."],
        galerij: [
          { src: "assets/img/ab/poster-1.webp", bijschrift: "Variant 1" },
          { src: "assets/img/ab/poster-2.webp", bijschrift: "Variant 2" },
          { src: "assets/img/ab/poster-3.webp", bijschrift: "Variant 3" }
        ],
        drieKol: true
      }
    ],
    disclaimer: "Dit is een schoolproject. De AB en SAAMO hebben hier geen opdracht voor gegeven en zijn er niet bij betrokken. Het festival, de artiesten en de concerten zijn allemaal verzonnen."
  },

  {
    slug: "germs",
    kaartNaam: "Splash them germs",
    wat: "game · HTML, CSS & JS",
    kaartBeeld: "assets/img/germs/germ-1.webp",
    // Voorstel: pas aan wat niet klopt
    rol: "Individueel project. Ik bedacht het spel, tekende alle germs en schermen en bouwde het spel zelf in HTML, CSS en JavaScript.",
    geleerd: "Ik leerde mijn eigen tekeningen omzetten naar een werkend spel. Vooral denken vanuit de speler, een kind, was nieuw voor mij: alles moest duidelijk en grappig zijn, en zeker niet eng.",
    titelVet: "",
    titelScript: "",
    naam: "JavaScript-spelletje",
    type: "schoolproject",
    kort: "Een spelletje over gezondheid: leer de germs kennen in de Germs Library en spat ze daarna weg.",
    sticker: null,
    grid: [
      "assets/img/germs/schetsen.webp"
    ],
    gridGerms: true,
    hero: "assets/video/splash-them-germs.webp",
    germsSpel: true,
    link: { url: "https://chic-liger-804237.netlify.app/", label: "Speel het spelletje" },
    tools: ["Tekenen", "HTML", "CSS", "JavaScript"],
    skills: ["illustratie", "character design", "game design", "coderen", "storytelling"],
    secties: [
      {
        titel: "Wat was de opdracht?",
        tekst: [
          "Maak een spelletje over gezondheid. Mijn spel gaat over germs: je leert ze kennen in de Germs Library (Bacillus, Strepto, Jumpo, Germoid, Pathix en Sporex) en daarna moet je ze wegspatten."
        ]
      },
      {
        titel: "Zo speel je het",
        naastVideo: [
          "Splash them germs is een spelletje voor kinderen over bacteriën en virussen. Het spel begint met een vraag naar je naam: zo word jij de patiënt die ziek in bed ligt. Daarna ontmoet je in de Germs Library zes germs: Bacillus, Strepto, Jumpo, Germoid, Pathix en Sporex. Elk heeft een eigen gezicht en karakter. Dan begint het echte werk: de germs kruipen over het scherm en jij moet ze wegspatten om beter te worden.",
          "Het doel: kinderen op een speelse manier laten zien dat bacteriën overal zitten en ziek kunnen maken, en waarom handen wassen en opletten belangrijk is. Door de germs grappige, eigen gezichtjes te geven, wordt iets saais of engs iets waar ze graag mee bezig zijn."
        ],
        video: { src: "assets/video/splash-them-germs.mp4", poster: "assets/video/splash-them-germs.webp" }
      },
      {
        titel: "Hoe is het gemaakt?",
        tekst: ["Alle germs en visuals heb ik eerst zelf getekend. Daarna heb ik het spel helemaal zelf gebouwd met HTML, CSS en JavaScript."],
        galerij: [
          { src: "assets/img/germs/schetsen.webp", bijschrift: "Schets" }
        ]
      },
      {
        titel: "Van schets tot scherm",
        tekst: ["Van de eerste pennenschets via een lijntekening naar het ingekleurde spelscherm en de Germs Library."],
        beeld: "assets/img/germs/proces.webp"
      },
      {
        titel: "Kleurenpalet",
        tekst: ["Elke germ kreeg zijn eigen kleurenpalet, zodat kinderen ze meteen herkennen."],
        beeld: "assets/img/germs/kleurenpalet.webp"
      }
    ],
    disclaimer: "Dit is een schoolproject. De germs zijn verzonnen personages en niet medisch correct."
  },

  {
    slug: "tshirt",
    kaartNaam: "90's T-shirt",
    wat: "collage · Photoshop",
    kaartBeeld: "assets/img/tshirt/design.webp",
    // Voorstel: pas aan wat niet klopt
    rol: "Individueel project. Ik koos het thema, verzamelde de beelden en maakte de collage, de typografie en de mock-up in Photoshop.",
    geleerd: "Ik leerde met lagen, cut-outs en kleurvlakken werken zodat een bewust rommelige look toch in balans blijft. En dat focussen sterker werkt: mijn eerste idee met alle gasten was te druk, met enkel Jimmy kreeg het shirt een duidelijk verhaal.",
    titelVet: "",
    titelScript: "",
    naam: "90's T-shirt",
    type: "schoolproject",
    kort: "Een knip-en-plak fanshirt in 90's-stijl: een collage in een rommelige tienerkamer vol bandposters.",
    sticker: null,
    grid: [
      "assets/img/tshirt/design.webp",
      "assets/img/tshirt/mockup.webp",
      "assets/img/tshirt/detail.webp"
    ],
    gridDrie: true,
    hero: "assets/img/tshirt/design.webp",
    tools: ["Photoshop"],
    skills: ["storytelling", "collage", "fotobewerking", "typografie"],
    secties: [
      {
        titel: "Wat was de opdracht?",
        tekst: [
          "Ontwerp een T-shirt in 90's-stijl. Ik koos voor een fangirl-T over Jimmy Fallon: een collage van foto's van hem toen hij jong was, in een rommelige 90's-kamer vol posters van grote bands uit die tijd. Mijn eerste idee was een collage van alle beroemdheden die bij hem op The Tonight Show kwamen, maar ik heb het uiteindelijk gefocust op hem alleen."
        ]
      },
      {
        titel: "Hoe is het gemaakt?",
        tekst: ["In Photoshop heb ik met verschillende kleurlagen gewerkt, cut-outs gemaakt en foto's over elkaar geplakt, met een dik, schuin lettertype over de plekken waar de kleuren wisselen. Het moest voelen als een echt knip-en-plak fanshirt. Het eindresultaat toon ik op een mock-up."],
        galerij: [
          { src: "assets/img/tshirt/design.webp", bijschrift: "Design" },
          { src: "assets/img/tshirt/mockup.webp", bijschrift: "Mock-up" },
          { src: "assets/img/tshirt/detail.webp", bijschrift: "Detail" }
        ]
      }
    ],
    disclaimer: "Dit is een schoolproject en geen officiële merchandise. De foto's van Jimmy Fallon zijn niet van mij en zijn enkel voor deze opdracht gebruikt."
  },

  {
    slug: "kandinsky",
    kaartNaam: "Wassily Kandinsky",
    wat: "artistieke vertaling",
    kaartBeeld: "assets/img/kandinsky/logo.webp",
    // Voorstel: pas aan wat niet klopt
    rol: "Individueel project. Ik onderzocht het werk van Kandinsky en ontwierp het logo, de stickers en het cadeaupapier in Illustrator.",
    geleerd: "Ik leerde een stijl analyseren in plaats van kopiëren: welke vormen, lijnen en kleuren maken iets ‘Kandinsky’? Die regels vertaalde ik naar mijn eigen ontwerpen, zoals een patroon dat werkt als cadeaupapier.",
    titelVet: "",
    titelScript: "",
    naam: "Wassily Kandinsky",
    type: "schoolproject · artistieke vertaling",
    kort: "De kenmerkende vormen, lijnen en kleuren van Kandinsky vertaald naar een eigen logo, stickers en cadeaupapier.",
    sticker: null,
    grid: [
      "assets/img/kandinsky/logo.webp",
      "assets/img/kandinsky/cadeaupapier.webp",
      "assets/img/kandinsky/stickers.webp"
    ],
    gridDrie: true,
    hero: "assets/img/kandinsky/cadeaupapier.webp",
    tools: ["Illustrator"],
    skills: ["onderzoek", "vertaling van een stijl", "logo-ontwerp", "patroonontwerp", "illustratie"],
    secties: [
      {
        titel: "Over dit project",
        tekst: ["Voor dit schoolproject kregen we van de leerkracht een willekeurige kunstenaar toegewezen. Ik kreeg Wassily Kandinsky. Ik onderzocht zijn kunst en vertaalde zijn kenmerkende vormen, kleuren en composities naar een eigen visuele stijl."]
      },
      {
        titel: "Onderzoek",
        tekst: ["Ik bekeek verschillende werken van Kandinsky om zijn stijl beter te begrijpen. Ik lette vooral op de abstracte vormen, lijnen en opvallende kleuren die vaak in zijn werk terugkomen. Die elementen gebruikte ik als inspiratie om zijn stijl op mijn eigen manier te vertalen naar een logo, cadeaupapier en stickers."],
        galerij: [
          { src: "assets/img/kandinsky/ref-1.webp", bijschrift: "Referentie: Yellow-Red-Blue" },
          { src: "assets/img/kandinsky/ref-2.webp", bijschrift: "Referentie: Composition VIII" },
          { src: "assets/img/kandinsky/ref-3.webp", bijschrift: "Referentie" }
        ],
        drieKol: true
      },
      {
        titel: "Eindresultaat",
        groot: [
          { src: "assets/img/kandinsky/logo.webp", bijschrift: "Logo" },
          { src: "assets/img/kandinsky/stickers.webp", bijschrift: "Stickers" },
          { src: "assets/img/kandinsky/cadeaupapier.webp", bijschrift: "Cadeaupapier" }
        ]
      }
    ],
    disclaimer: "Dit is een schoolproject. De schilderijen van Wassily Kandinsky zijn enkel gebruikt als onderzoek en referentie; het logo, de stickers en het cadeaupapier zijn mijn eigen ontwerpen."
  }
];
