# jours-feries

![📆⛱️](https://github.com/SocialGouv/jours-feries/workflows/%F0%9F%93%86%E2%9B%B1%EF%B8%8F/badge.svg) [![codecov](https://codecov.io/gh/SocialGouv/jours-feries/branch/master/graph/badge.svg)](https://codecov.io/gh/SocialGouv/jours-feries)  
[![NPM](https://nodei.co/npm/@socialgouv/jours-feries.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/@socialgouv/jours-feries)

JavaScript / npm port of [jours-feries-france](https://github.com/AntoineAugusti/jours-feries-france) by @AntoineAugusti

## Usage

```js
import { joursFeries, DepartmentId } from "@socialgouv/jours-feries";

// national holidays
console.log(joursFeries(2018));

// national holidays + holidays specific to alsace and moselle
console.log(joursFeries(2018, { zone: 'alsace-moselle' }));
// or national holidays + holidays specific to Bas-Rhin department (Alsace)
console.log(joursFeries(2018, { zone: 'bas-rhin' }));
console.log(joursFeries(2018, { department: DepartmentId.BAS_RHIN }));
console.log(joursFeries(2018, { department: 67 }));

// national holidays + holidays specific to Île de la Réunion
console.log(joursFeries(2018, { department: 974 }));
console.log(joursFeries(2018, { department: DepartmentId.REUNION }));
console.log(joursFeries(2018, { zone: "réunion" }));
```

⚠️ Les dates renvoyées sont de vrais objets JavaScript `Date`

```json
{
  "Jour de l'an": "2017-12-31T23:00:00.000Z",
  "Fête du travail": "2018-04-30T22:00:00.000Z",
  "Victoire des alliés": "2018-05-07T22:00:00.000Z",
  "Fête Nationale": "2018-07-13T22:00:00.000Z",
  "Assomption": "2018-08-14T22:00:00.000Z",
  "Toussaint": "2018-10-31T23:00:00.000Z",
  "Armistice": "2018-11-10T23:00:00.000Z",
  "Noël": "2018-12-24T23:00:00.000Z",
  "Lundi de Pâques": "2018-04-01T22:00:00.000Z",
  "Ascension": "2018-05-09T22:00:00.000Z",
  "Lundi de Pentecôte": "2018-05-20T22:00:00.000Z",
  "Vendredi Saint": "2018-03-29T22:00:00.000Z",
  "Saint Étienne": "2018-12-25T23:00:00.000Z"
}
```
