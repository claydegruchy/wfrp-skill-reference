var original = require('./data.json');

var newe = require('../wfrp-trait-reference/creature-traits.json');

original.talents = original.talents.map(t => ({
  ...t,
  description: newe[t.title] || t.description
}))


console.log(original.talents);



console.log(JSON.stringify(original));
