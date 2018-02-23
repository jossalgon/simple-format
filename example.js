require('./index.js');

// This is just an example
var person = {
  name: "Lorem",
  surname: "Ipsum"
}

console.log('hi {{name}}, {{surname}}.'.format(person));
