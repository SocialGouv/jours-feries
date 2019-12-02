const addDays = (date, days) =>
  new Date(date.getTime() + days * 24 * 60 * 60 * 1000);

const lundiDePaques = year => addDays(paques(year), 1);

const vendrediSaint = year => addDays(paques(year), -2);

const ascension = year => addDays(paques(year), 39);

const lundiDePentecote = year => addDays(paques(year), 50);

const paques = year => {
  const a = year % 19,
    // century
    b = parseInt(year / 100),
    // years after century
    c = year % 100,
    d =
      (19 * a +
        b -
        parseInt(b / 4) -
        parseInt((parseInt(b - (b + 8) / 25) + 1) / 3) +
        15) %
      30,
    e = (32 + 2 * (b % 4) + 2 * parseInt(c / 4) - d - (c % 4)) % 7,
    f = d + e - 7 * parseInt((a + 11 * d + 22 * e) / 451) + 114,
    month = parseInt(f / 31),
    day = (f % 31) + 1;

  return new Date(year, month - 1, day);
};

const jourDeLAn = year => new Date(year, 0, 1);

const feteDuTravail = year => new Date(year, 4, 1);

const victoireDesAllies = year => new Date(year, 4, 8);

const feteNationale = year => new Date(year, 6, 14);

const assomption = year => new Date(year, 7, 15);

const toussaint = year => new Date(year, 10, 1);

const armistice = year => new Date(year, 10, 11);

const noel = year => new Date(year, 11, 25);

const saintEtienne = year => new Date(year, 11, 26);

const fetes = {
  "Jour de l'an": jourDeLAn,
  "Fête du travail": feteDuTravail,
  "Victoire des alliés": victoireDesAllies,
  "Fête Nationale": feteNationale,
  Assomption: assomption,
  Toussaint: toussaint,
  Armistice: armistice,
  Noël: noel,
  "Lundi de Pâques": lundiDePaques,
  Ascension: ascension,
  "Lundi de Pentecôte": lundiDePentecote,
  "Vendredi Saint": vendrediSaint,
  "Saint Étienne": saintEtienne
};

const fetesAlsace = ["Vendredi Saint", "Saint Étienne"];

const getJoursFeries = (year, { alsace } = { alsace: false }) =>
  Object.keys(fetes)
    // filter out alsace if needed
    .filter(fete => alsace || !fetesAlsace.includes(fete))
    // get results
    .map(fete => ({ [fete]: fetes[fete](parseInt(year)) }))
    // flatten dict
    .reduce((acc, fete) => ({ ...acc, ...fete }), {});

module.exports = getJoursFeries;
