import { DepartmentId, HolidaysCollection, joursFeries } from "../src/index"

interface FormattedDates {
  [key: string]: string
}

const _formatDates = (dates: HolidaysCollection) => {
  return Object.entries(dates).reduce((final, current) => {
    final[current[0]] = `${current[1].getFullYear()}-${("0" + (current[1].getMonth() + 1)).slice(-2)}-${("0" + current[1].getDate()).slice(
      -2,
    )}`

    return final
  }, {} as FormattedDates)
}

const expectedHolidays2018 = {
  Armistice: "2018-11-11",
  Ascension: "2018-05-10",
  Assomption: "2018-08-15",
  "Fête Nationale": "2018-07-14",
  "Fête du travail": "2018-05-01",
  "Jour de l'an": "2018-01-01",
  "Lundi de Pentecôte": "2018-05-21",
  "Lundi de Pâques": "2018-04-02",
  Noël: "2018-12-25",
  Toussaint: "2018-11-01",
  "Victoire des alliés": "2018-05-08",
}

const expectedHolidays2020 = {
  Armistice: "2020-11-11",
  Ascension: "2020-05-21",
  Assomption: "2020-08-15",
  "Fête Nationale": "2020-07-14",
  "Fête du travail": "2020-05-01",
  "Jour de l'an": "2020-01-01",
  "Lundi de Pentecôte": "2020-06-01",
  "Lundi de Pâques": "2020-04-13",
  Noël: "2020-12-25",
  Toussaint: "2020-11-01",
  "Victoire des alliés": "2020-05-08",
}

test("should match 2018 results", () => {
  expect(_formatDates(joursFeries(2018))).toEqual(expectedHolidays2018)
  expect(_formatDates(joursFeries(2018, { zone: "métropole" }))).toEqual(expectedHolidays2018)
  expect(_formatDates(joursFeries(2018, { department: 13 }))).toEqual(expectedHolidays2018)
})

test("should match 2020 results", () => {
  expect(_formatDates(joursFeries(2020))).toEqual(expectedHolidays2020)
  expect(_formatDates(joursFeries(2020, { zone: "métropole" }))).toEqual(expectedHolidays2020)
  expect(_formatDates(joursFeries(2020, { department: 13 }))).toEqual(expectedHolidays2020)
})

test("should match 2018 alsace-moselle results", () => {
  const expected = {
    ...expectedHolidays2018,
    "Vendredi Saint": "2018-03-30",
    "Saint Étienne": "2018-12-26",
  }

  expect(_formatDates(joursFeries(2018, { zone: "alsace-moselle" }))).toEqual(expected)
  expect(_formatDates(joursFeries(2018, { zone: "alsace" }))).toEqual(expected)
  expect(_formatDates(joursFeries(2018, { zone: "moselle" }))).toEqual(expected)
  expect(_formatDates(joursFeries(2018, { department: DepartmentId.MOSELLE }))).toEqual(expected)
  expect(_formatDates(joursFeries(2018, { department: 57 }))).toEqual(expected)
  expect(_formatDates(joursFeries(2018, { zone: "bas-rhin" }))).toEqual(expected)
  expect(_formatDates(joursFeries(2018, { department: DepartmentId.BAS_RHIN }))).toEqual(expected)
  expect(_formatDates(joursFeries(2018, { department: 67 }))).toEqual(expected)
  expect(_formatDates(joursFeries(2018, { zone: "haut-rhin" }))).toEqual(expected)
  expect(_formatDates(joursFeries(2018, { department: DepartmentId.HAUT_RHIN }))).toEqual(expected)
  expect(_formatDates(joursFeries(2018, { department: 68 }))).toEqual(expected)
})

test("should match 2020 alsace-moselle results", () => {
  const expected = {
    ...expectedHolidays2020,
    "Vendredi Saint": "2020-04-10",
    "Saint Étienne": "2020-12-26",
  }

  expect(_formatDates(joursFeries(2020, { zone: "alsace-moselle" }))).toEqual(expected)
  expect(_formatDates(joursFeries(2020, { zone: "alsace" }))).toEqual(expected)
  expect(_formatDates(joursFeries(2020, { zone: "moselle" }))).toEqual(expected)
  expect(_formatDates(joursFeries(2020, { department: DepartmentId.MOSELLE }))).toEqual(expected)
  expect(_formatDates(joursFeries(2020, { department: 57 }))).toEqual(expected)
  expect(_formatDates(joursFeries(2020, { zone: "bas-rhin" }))).toEqual(expected)
  expect(_formatDates(joursFeries(2020, { department: DepartmentId.BAS_RHIN }))).toEqual(expected)
  expect(_formatDates(joursFeries(2020, { department: 67 }))).toEqual(expected)
  expect(_formatDates(joursFeries(2020, { zone: "haut-rhin" }))).toEqual(expected)
  expect(_formatDates(joursFeries(2020, { department: DepartmentId.HAUT_RHIN }))).toEqual(expected)
  expect(_formatDates(joursFeries(2020, { department: 68 }))).toEqual(expected)
})

test("should match 2018 réunion results", () => {
  const expected = {
    ...expectedHolidays2018,
    "Abolition de l'esclavage": "2018-12-20",
  }

  expect(_formatDates(joursFeries(2018, { zone: "réunion" }))).toEqual(expected)
  expect(_formatDates(joursFeries(2018, { department: 974 }))).toEqual(expected)
  expect(_formatDates(joursFeries(2018, { department: DepartmentId.REUNION }))).toEqual(expected)
})

test("should match 2020 réunion results", () => {
  const expected = {
    ...expectedHolidays2020,
    "Abolition de l'esclavage": "2020-12-20",
  }

  expect(_formatDates(joursFeries(2020, { zone: "réunion" }))).toEqual(expected)
  expect(_formatDates(joursFeries(2020, { department: 974 }))).toEqual(expected)
  expect(_formatDates(joursFeries(2020, { department: DepartmentId.REUNION }))).toEqual(expected)
})

test("should match 2018 mayotte results", () => {
  const expected = {
    ...expectedHolidays2018,
    "Abolition de l'esclavage": "2018-04-27",
  }

  expect(_formatDates(joursFeries(2018, { zone: "mayotte" }))).toEqual(expected)
  expect(_formatDates(joursFeries(2018, { department: 976 }))).toEqual(expected)
  expect(_formatDates(joursFeries(2018, { department: DepartmentId.MAYOTTE }))).toEqual(expected)
})

test("should match 2020 mayotte results", () => {
  const expected = {
    ...expectedHolidays2020,
    "Abolition de l'esclavage": "2020-04-27",
  }

  expect(_formatDates(joursFeries(2020, { zone: "mayotte" }))).toEqual(expected)
  expect(_formatDates(joursFeries(2020, { department: 976 }))).toEqual(expected)
  expect(_formatDates(joursFeries(2020, { department: DepartmentId.MAYOTTE }))).toEqual(expected)
})

test("should match 2018 guadeloupe results", () => {
  const expected = {
    ...expectedHolidays2018,
    "Abolition de l'esclavage": "2018-05-27",
    "Fête Victor Schoelcher": "2018-07-21",
    "Vendredi Saint": "2018-03-30",
  }

  expect(_formatDates(joursFeries(2018, { zone: "guadeloupe" }))).toEqual(expected)
  expect(_formatDates(joursFeries(2018, { department: 971 }))).toEqual(expected)
  expect(_formatDates(joursFeries(2018, { department: DepartmentId.GUADELOUPE }))).toEqual(expected)
})

test("should match 2020 guadeloupe results", () => {
  const expected = {
    ...expectedHolidays2020,
    "Abolition de l'esclavage": "2020-05-27",
    "Fête Victor Schoelcher": "2020-07-21",
    "Vendredi Saint": "2020-04-10",
  }

  expect(_formatDates(joursFeries(2020, { zone: "guadeloupe" }))).toEqual(expected)
  expect(_formatDates(joursFeries(2020, { department: 971 }))).toEqual(expected)
  expect(_formatDates(joursFeries(2020, { department: DepartmentId.GUADELOUPE }))).toEqual(expected)
})

test("should match 2018 polynésie française results", () => {
  const expected = {
    ...expectedHolidays2018,
    "Arrivée de l'Évangile": "2018-03-05",
    "Fête de l'autonomie": "2018-06-29",
    "Vendredi Saint": "2018-03-30",
  }

  expect(_formatDates(joursFeries(2018, { zone: "polynésie française" }))).toEqual(expected)
  expect(_formatDates(joursFeries(2018, { department: 987 }))).toEqual(expected)
  expect(_formatDates(joursFeries(2018, { department: DepartmentId.POLYNESIE_FRANCAISE }))).toEqual(expected)
})

test("should match 2020 polynésie française results", () => {
  const expected = {
    ...expectedHolidays2020,
    "Arrivée de l'Évangile": "2020-03-05",
    "Fête de l'autonomie": "2020-06-29",
    "Vendredi Saint": "2020-04-10",
  }

  expect(_formatDates(joursFeries(2020, { zone: "polynésie française" }))).toEqual(expected)
  expect(_formatDates(joursFeries(2020, { department: 987 }))).toEqual(expected)
  expect(_formatDates(joursFeries(2020, { department: DepartmentId.POLYNESIE_FRANCAISE }))).toEqual(expected)
})

test("should match 2018 martinique results", () => {
  const expected = {
    ...expectedHolidays2018,
    "Vendredi Saint": "2018-03-30",
    "Fête Victor Schoelcher": "2018-07-21",
    "Fête des morts": "2018-11-02",
    "Abolition de l'esclavage": "2018-05-22",
  }

  expect(_formatDates(joursFeries(2018, { zone: "martinique" }))).toEqual(expected)
  expect(_formatDates(joursFeries(2018, { department: 972 }))).toEqual(expected)
  expect(_formatDates(joursFeries(2018, { department: DepartmentId.MARTINIQUE }))).toEqual(expected)
})

test("should match 2020 martinique results", () => {
  const expected = {
    ...expectedHolidays2020,
    "Vendredi Saint": "2020-04-10",
    "Abolition de l'esclavage": "2020-05-22",
    "Fête Victor Schoelcher": "2020-07-21",
    "Fête des morts": "2020-11-02",
  }

  expect(_formatDates(joursFeries(2020, { zone: "martinique" }))).toEqual(expected)
  expect(_formatDates(joursFeries(2020, { department: 972 }))).toEqual(expected)
  expect(_formatDates(joursFeries(2020, { department: DepartmentId.MARTINIQUE }))).toEqual(expected)
})

test("should match 2018 wallis et futuna results", () => {
  const expected = {
    ...expectedHolidays2018,
    "Fête du Territoire": "2018-07-29",
    "Saint Pierre Chanel": "2018-04-28",
    "Saints Pierre et Paul": "2018-06-29",
  }

  expect(_formatDates(joursFeries(2018, { zone: "wallis et futuna" }))).toEqual(expected)
  expect(_formatDates(joursFeries(2018, { department: 986 }))).toEqual(expected)
  expect(_formatDates(joursFeries(2018, { department: DepartmentId.WALLIS_ET_FUTUNA }))).toEqual(expected)
})

test("should match 2020 wallis et futuna results", () => {
  const expected = {
    ...expectedHolidays2020,
    "Fête du Territoire": "2020-07-29",
    "Saint Pierre Chanel": "2020-04-28",
    "Saints Pierre et Paul": "2020-06-29",
  }

  expect(_formatDates(joursFeries(2020, { zone: "wallis et futuna" }))).toEqual(expected)
  expect(_formatDates(joursFeries(2020, { department: 986 }))).toEqual(expected)
  expect(_formatDates(joursFeries(2020, { department: DepartmentId.WALLIS_ET_FUTUNA }))).toEqual(expected)
})

test("should match 2018 nouvelle calédonie results", () => {
  const expected = {
    ...expectedHolidays2018,
    "Fête de la citoyenneté": "2018-09-24",
  }

  expect(_formatDates(joursFeries(2018, { zone: "nouvelle calédonie" }))).toEqual(expected)
  expect(_formatDates(joursFeries(2018, { department: 988 }))).toEqual(expected)
  expect(_formatDates(joursFeries(2018, { department: DepartmentId.NOUVELLE_CALEDONIE }))).toEqual(expected)
})

test("should match 2020 nouvelle calédonie results", () => {
  const expected = {
    ...expectedHolidays2020,
    "Fête de la citoyenneté": "2020-09-24",
  }

  expect(_formatDates(joursFeries(2020, { zone: "nouvelle calédonie" }))).toEqual(expected)
  expect(_formatDates(joursFeries(2020, { department: 988 }))).toEqual(expected)
  expect(_formatDates(joursFeries(2020, { department: DepartmentId.NOUVELLE_CALEDONIE }))).toEqual(expected)
})

test("should match 2018 saint martin results", () => {
  const expected = {
    ...expectedHolidays2018,
    "Abolition de l'esclavage": "2018-05-28",
    "Fête Victor Schoelcher": "2018-07-21",
  }

  expect(_formatDates(joursFeries(2018, { zone: "saint martin" }))).toEqual(expected)
  expect(_formatDates(joursFeries(2018, { department: 978 }))).toEqual(expected)
  expect(_formatDates(joursFeries(2018, { department: DepartmentId.SAINT_MARTIN }))).toEqual(expected)
})

test("should match 2020 saint martin results", () => {
  const expected = {
    ...expectedHolidays2020,
    "Abolition de l'esclavage": "2020-05-28",
    "Fête Victor Schoelcher": "2020-07-21",
  }

  expect(_formatDates(joursFeries(2020, { zone: "saint martin" }))).toEqual(expected)
  expect(_formatDates(joursFeries(2020, { department: 978 }))).toEqual(expected)
  expect(_formatDates(joursFeries(2020, { department: DepartmentId.SAINT_MARTIN }))).toEqual(expected)
})

test("Lundi de Pâques 1954", () => {
  expect(joursFeries(1954)["Lundi de Pâques"]).toMatchInlineSnapshot(`1954-04-18T23:00:00.000Z`)
})

test("Lundi de Pâques 1981", () => {
  expect(joursFeries(1981)["Lundi de Pâques"]).toMatchInlineSnapshot(`1981-04-19T22:00:00.000Z`)
})

test("Lundi de Pâques 2049", () => {
  expect(joursFeries(2049)["Lundi de Pâques"]).toMatchInlineSnapshot(`2049-04-18T22:00:00.000Z`)
})
