const joursFeries = require("../index");

test("should match 2018 results", () =>
  expect(joursFeries(2018)).toMatchSnapshot());

test("should match 2020 results", () =>
  expect(joursFeries(2020)).toMatchSnapshot());

test("should match 2018 alsace-moselle results", () =>
  expect(joursFeries(2018, { alsace: true })).toMatchSnapshot());

test("should match 2020 alsace-moselle  results", () =>
  expect(joursFeries(2020, { alsace: true })).toMatchSnapshot());

test("Lundi de Pâques 1954", () => {
  expect(joursFeries(1954)["Lundi de Pâques"]).toMatchSnapshot();
});

test("Lundi de Pâques 1981", () => {
  expect(joursFeries(1981)["Lundi de Pâques"]).toMatchSnapshot();
});

test("Lundi de Pâques 2049", () => {
  expect(joursFeries(2049)["Lundi de Pâques"]).toMatchSnapshot();
});
