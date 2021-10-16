const addDays = (date: Date, days: number) =>
  new Date(date.getTime() + days * 24 * 60 * 60 * 1000);

const lundiDePaques = (year: number) => addDays(paques(year), 1);

const vendrediSaint = (year: number) => addDays(paques(year), -2);

const ascension = (year: number) => addDays(paques(year), 39);

const lundiDePentecote = (year: number) => addDays(paques(year), 50);

const paques = function (year: number) {
  const a = year % 19;
  const century = Number(year / 100);
  const yearsAfterCentury = year % 100;
  const d =
    (19 * a +
      century -
      Number(century / 4) -
      Number((Number(century - (century + 8) / 25) + 1) / 3) +
      15) %
    30;
  const e =
    (32 +
      2 * (century % 4) +
      2 * Number(yearsAfterCentury / 4) -
      d -
      (yearsAfterCentury % 4)) %
    7;
  const f = d + e - 7 * Number((a + 11 * d + 22 * e) / 451) + 114;

  const month = Number(f / 31);
  const day = (f % 31) + 1;
  return new Date(year, month - 1, day);
};

const jourDeLAn = (year: number) => new Date(year, 0, 1);

const feteDuTravail = (year: number) => new Date(year, 4, 1);

const victoireDesAllies = (year: number) => new Date(year, 4, 8);

const feteNationale = (year: number) => new Date(year, 6, 14);

const assomption = (year: number) => new Date(year, 7, 15);

const toussaint = (year: number) => new Date(year, 10, 1);

const armistice = (year: number) => new Date(year, 10, 11);

const noel = (year: number) => new Date(year, 11, 25);

const saintEtienne = (year: number) => new Date(year, 11, 26);

const fetes = (year: number) => ({
  Armistice: armistice(year),
  Ascension: ascension(year),
  Assomption: assomption(year),
  "Fête Nationale": feteNationale(year),
  "Fête du travail": feteDuTravail(year),
  "Jour de l'an": jourDeLAn(year),
  "Lundi de Pentecôte": lundiDePentecote(year),
  "Lundi de Pâques": lundiDePaques(year),
  Noël: noel(year),
  Toussaint: toussaint(year),
  "Victoire des alliés": victoireDesAllies(year),
});

const fetesAlsace = (year: number) => ({
  "Saint Étienne": saintEtienne(year),
  "Vendredi Saint": vendrediSaint(year),
});

const getJoursFeries = (year: number, options?: { alsace: boolean }) =>
  options?.alsace ? { ...fetes(year), ...fetesAlsace(year) } : fetes(year);

export default getJoursFeries;
