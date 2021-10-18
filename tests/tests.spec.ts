import joursFeries from "../src/index";

test("should match 2018 results", () =>
  expect(joursFeries(2018)).toMatchInlineSnapshot(`
    Object {
      "Armistice": 2018-11-10T23:00:00.000Z,
      "Ascension": 2018-05-09T22:00:00.000Z,
      "Assomption": 2018-08-14T22:00:00.000Z,
      "Fête Nationale": 2018-07-13T22:00:00.000Z,
      "Fête du travail": 2018-04-30T22:00:00.000Z,
      "Jour de l'an": 2017-12-31T23:00:00.000Z,
      "Lundi de Pentecôte": 2018-05-20T22:00:00.000Z,
      "Lundi de Pâques": 2018-04-01T22:00:00.000Z,
      "Noël": 2018-12-24T23:00:00.000Z,
      "Toussaint": 2018-10-31T23:00:00.000Z,
      "Victoire des alliés": 2018-05-07T22:00:00.000Z,
    }
  `));

test("should match 2020 results", () =>
  expect(joursFeries(2020)).toMatchInlineSnapshot(`
    Object {
      "Armistice": 2020-11-10T23:00:00.000Z,
      "Ascension": 2020-05-20T22:00:00.000Z,
      "Assomption": 2020-08-14T22:00:00.000Z,
      "Fête Nationale": 2020-07-13T22:00:00.000Z,
      "Fête du travail": 2020-04-30T22:00:00.000Z,
      "Jour de l'an": 2019-12-31T23:00:00.000Z,
      "Lundi de Pentecôte": 2020-05-31T22:00:00.000Z,
      "Lundi de Pâques": 2020-04-12T22:00:00.000Z,
      "Noël": 2020-12-24T23:00:00.000Z,
      "Toussaint": 2020-10-31T23:00:00.000Z,
      "Victoire des alliés": 2020-05-07T22:00:00.000Z,
    }
  `));

test("should match 2018 alsace-moselle results", () =>
  expect(joursFeries(2018, { alsace: true })).toMatchInlineSnapshot(`
    Object {
      "Armistice": 2018-11-10T23:00:00.000Z,
      "Ascension": 2018-05-09T22:00:00.000Z,
      "Assomption": 2018-08-14T22:00:00.000Z,
      "Fête Nationale": 2018-07-13T22:00:00.000Z,
      "Fête du travail": 2018-04-30T22:00:00.000Z,
      "Jour de l'an": 2017-12-31T23:00:00.000Z,
      "Lundi de Pentecôte": 2018-05-20T22:00:00.000Z,
      "Lundi de Pâques": 2018-04-01T22:00:00.000Z,
      "Noël": 2018-12-24T23:00:00.000Z,
      "Saint Étienne": 2018-12-25T23:00:00.000Z,
      "Toussaint": 2018-10-31T23:00:00.000Z,
      "Vendredi Saint": 2018-03-29T22:00:00.000Z,
      "Victoire des alliés": 2018-05-07T22:00:00.000Z,
    }
  `));

test("should match 2020 alsace-moselle  results", () =>
  expect(joursFeries(2020, { alsace: true })).toMatchInlineSnapshot(`
    Object {
      "Armistice": 2020-11-10T23:00:00.000Z,
      "Ascension": 2020-05-20T22:00:00.000Z,
      "Assomption": 2020-08-14T22:00:00.000Z,
      "Fête Nationale": 2020-07-13T22:00:00.000Z,
      "Fête du travail": 2020-04-30T22:00:00.000Z,
      "Jour de l'an": 2019-12-31T23:00:00.000Z,
      "Lundi de Pentecôte": 2020-05-31T22:00:00.000Z,
      "Lundi de Pâques": 2020-04-12T22:00:00.000Z,
      "Noël": 2020-12-24T23:00:00.000Z,
      "Saint Étienne": 2020-12-25T23:00:00.000Z,
      "Toussaint": 2020-10-31T23:00:00.000Z,
      "Vendredi Saint": 2020-04-09T22:00:00.000Z,
      "Victoire des alliés": 2020-05-07T22:00:00.000Z,
    }
  `));

test("Lundi de Pâques 1954", () => {
  expect(joursFeries(1954)["Lundi de Pâques"]).toMatchInlineSnapshot(
    `1954-04-18T23:00:00.000Z`
  );
});

test("Lundi de Pâques 1981", () => {
  expect(joursFeries(1981)["Lundi de Pâques"]).toMatchInlineSnapshot(
    `1981-04-19T22:00:00.000Z`
  );
});

test("Lundi de Pâques 2049", () => {
  expect(joursFeries(2049)["Lundi de Pâques"]).toMatchInlineSnapshot(
    `2049-04-18T22:00:00.000Z`
  );
});
