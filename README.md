<img src="https://raw.githubusercontent.com/js-data/js-data/master/js-data.png" alt="js-data logo" title="js-data" align="right" width="96" height="96" />

# [![NPM][1]][2]

[1]: https://img.shields.io/npm/v/local-storage-database.svg?style=flat
[2]: https://www.npmjs.org/package/local-storage-database

__Local Storage Database consistency with objects.__

Simple class to store data and manage it easily.

### Just getting started?
Import module:
```javascript
import Collection from "../release/localDatabase";
```

Create the instance (or many):
```javascript
let myCollection = new Collection("test");
```

Interact with it:
```javascript
let myCollection = new Collection("test");
// set some data
myCollection.set({ test: 2323, gra: 23 });
// update it with new data
myCollection.set({ awesome: 2323 });
// get entire json db
console.log(myCollection.get());
// or single key
console.log(myCollection.get("test"));
// remove single key
console.log(myCollection.remove("gra"));
// remove entire db
console.log(myCollection.remove());
```
