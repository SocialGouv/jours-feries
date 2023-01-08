interface HolidaysCollection {
  // Common holidays
  Armistice: Date
  Ascension: Date
  Assomption: Date
  "Fête Nationale": Date
  "Fête du travail": Date
  "Jour de l'an": Date
  "Lundi de Pentecôte": Date
  "Lundi de Pâques": Date
  Noël: Date
  Toussaint: Date
  "Victoire des alliés": Date

  // Zone specific holidays
  "Abolition de l'esclavage"?: Date
  "Arrivée de l'Évangile"?: Date
  "Fête de l'autonomie"?: Date
  "Fête de la citoyenneté"?: Date
  "Fête des morts"?: Date
  "Fête du Territoire"?: Date
  "Fête Victor Schoelcher"?: Date
  "Saint Étienne"?: Date
  "Saint Pierre Chanel"?: Date
  "Saints Pierre et Paul"?: Date
  "Vendredi Saint"?: Date
}

enum DepartmentId {
  MOSELLE = 57,
  BAS_RHIN = 67,
  HAUT_RHIN = 68,
  GUADELOUPE = 971,
  MARTINIQUE = 972,
  GUYANNE = 973,
  REUNION = 974,
  MAYOTTE = 976,
  SAINT_MARTIN = 978,
  WALLIS_ET_FUTUNA = 986,
  POLYNESIE_FRANCAISE = 987,
  NOUVELLE_CALEDONIE = 988,
}

type Zone =
  | "métropole"
  | "alsace-moselle"
  | "alsace"
  | "bas-rhin"
  | "haut-rhin"
  | "moselle"
  | "réunion"
  | "mayotte"
  | "guadeloupe"
  | "guyanne"
  | "polynésie française"
  | "martinique"
  | "wallis et futuna"
  | "nouvelle calédonie"
  | "saint martin"

interface JoursFeriesOptions {
  zone?: Zone
  department?: DepartmentId | number
}

const addDays = (date: Date, days: number) => new Date(date.getTime() + days * 24 * 60 * 60 * 1000)

const paques = function (year: number) {
  const a = year % 19
  const century = Math.floor(year / 100)
  const yearsAfterCentury = year % 100
  const d = (19 * a + century - Math.floor(century / 4) - Math.floor((Math.floor(century - (century + 8) / 25) + 1) / 3) + 15) % 30
  const e = (32 + 2 * (century % 4) + 2 * Math.floor(yearsAfterCentury / 4) - d - (yearsAfterCentury % 4)) % 7
  const f = d + e - 7 * Math.floor((a + 11 * d + 22 * e) / 451) + 114
  const month = Math.floor(f / 31)
  const day = (f % 31) + 1

  return new Date(year, month - 1, day)
}

const _vendrediSaint = (year: number) => ({
  "Vendredi Saint": addDays(paques(year), -2),
})

const _feteVSchoelcher = (year: number) => ({
  "Fête Victor Schoelcher": new Date(year, 6, 21),
})

const fetes = (year: number): HolidaysCollection => ({
  Armistice: new Date(year, 10, 11),
  Ascension: addDays(paques(year), 39),
  Assomption: new Date(year, 7, 15),
  "Fête Nationale": new Date(year, 6, 14),
  "Fête du travail": new Date(year, 4, 1),
  "Jour de l'an": new Date(year, 0, 1),
  "Lundi de Pentecôte": addDays(paques(year), 50),
  "Lundi de Pâques": addDays(paques(year), 1),
  Noël: new Date(year, 11, 25),
  Toussaint: new Date(year, 10, 1),
  "Victoire des alliés": new Date(year, 4, 8),
})

const fetesAlsace = (year: number): HolidaysCollection => ({
  ...fetes(year),
  "Saint Étienne": new Date(year, 11, 26),
  ..._vendrediSaint(year),
})

const fetesReunion = (year: number): HolidaysCollection => ({
  ...fetes(year),
  "Abolition de l'esclavage": new Date(year, 11, 20),
})

const fetesMayotte = (year: number): HolidaysCollection => ({
  ...fetes(year),
  "Abolition de l'esclavage": new Date(year, 3, 27),
})

const fetesGuadeloupe = (year: number): HolidaysCollection => ({
  ...fetes(year),
  "Abolition de l'esclavage": new Date(year, 4, 27),
  ..._feteVSchoelcher(year),
  ..._vendrediSaint(year),
})

const fetesGuyanne = (year: number): HolidaysCollection => ({
  ...fetes(year),
  "Abolition de l'esclavage": new Date(year, 3, 2),
  ..._vendrediSaint(year),
})

const fetesPolynesieFrancaise = (year: number): HolidaysCollection => ({
  ...fetes(year),
  "Arrivée de l'Évangile": new Date(year, 2, 5),
  "Fête de l'autonomie": new Date(year, 5, 29),
  ..._vendrediSaint(year),
})

const fetesMartinique = (year: number): HolidaysCollection => ({
  ...fetes(year),
  "Abolition de l'esclavage": new Date(year, 4, 22),
  "Fête des morts": new Date(year, 10, 2),
  ..._feteVSchoelcher(year),
  ..._vendrediSaint(year),
})

const fetesWallisEtFutuna = (year: number): HolidaysCollection => ({
  ...fetes(year),
  "Saint Pierre Chanel": new Date(year, 3, 28),
  "Saints Pierre et Paul": new Date(year, 5, 29),
  "Fête du Territoire": new Date(year, 6, 29),
})

const fetesNouvelleCaledonie = (year: number): HolidaysCollection => ({
  ...fetes(year),
  "Fête de la citoyenneté": new Date(year, 8, 24),
})

const fetesSaintMartin = (year: number): HolidaysCollection => ({
  ...fetes(year),
  ..._feteVSchoelcher(year),
  "Abolition de l'esclavage": new Date(year, 4, 28),
})

/**
 * Get french bank holidays by year and zone.
 *
 * @param year year you're interested in
 * @param options the zone you're interested in ("métropole" by default)
 */
function joursFeries(year: number, options?: JoursFeriesOptions): HolidaysCollection {
  const zoneOrDepartment = options?.zone ?? options?.department

  switch (zoneOrDepartment) {
    case "alsace-moselle":
    case "alsace":
    case "moselle":
    case "bas-rhin":
    case "haut-rhin":
    case DepartmentId.MOSELLE:
    case DepartmentId.BAS_RHIN:
    case DepartmentId.HAUT_RHIN:
      return fetesAlsace(year)

    case "guadeloupe":
    case DepartmentId.GUADELOUPE:
      return fetesGuadeloupe(year)

    case "guyanne":
    case DepartmentId.GUYANNE:
      return fetesGuyanne(year)

    case "martinique":
    case DepartmentId.MARTINIQUE:
      return fetesMartinique(year)

    case "mayotte":
    case DepartmentId.MAYOTTE:
      return fetesMayotte(year)

    case "nouvelle calédonie":
    case DepartmentId.NOUVELLE_CALEDONIE:
      return fetesNouvelleCaledonie(year)

    case "polynésie française":
    case DepartmentId.POLYNESIE_FRANCAISE:
      return fetesPolynesieFrancaise(year)

    case "réunion":
    case DepartmentId.REUNION:
      return fetesReunion(year)

    case "saint martin":
    case DepartmentId.SAINT_MARTIN:
      return fetesSaintMartin(year)

    case "wallis et futuna":
    case DepartmentId.WALLIS_ET_FUTUNA:
      return fetesWallisEtFutuna(year)

    default:
      return fetes(year)
  }
}

export { joursFeries, DepartmentId, Zone, HolidaysCollection }
