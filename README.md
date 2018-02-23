# simple-format

## Configuration
1. Add simple-format to your dependencies:
```json
{
  "dependencies": {
    "simple-format": "https://github.com/jossalgon/simple-format"
   }
}
```

2. Require simple-format as soon as posible to use it everywhere.
```js
require('simple-format');
```
## Use

```js
var person = {
  name: "Lorem",
  surname: "Ipsum"
}

console.log('hi {{name}}, {{surname}}.'.format(person));
```
```
> hi Lorem, Ipsum.
```
