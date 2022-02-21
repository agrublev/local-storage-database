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

### Need help?

Please [post a question][20] on Stack Overflow. **This is the preferred method.**

You can also chat with folks on the [Slack Channel][21]. If you end up getting
your question answered, please still consider consider posting your question to
Stack Overflow (then possibly answering it yourself). Thanks!

### Want to contribute?

Awesome! You can get started over at the [Contributing guide][22].

And thank you!

### License

[The MIT License (MIT)][23]

Copyright (c) 2014-2017 [js-data project authors][24]

[18]: http://www.js-data.io/docs/home
[19]: http://api.js-data.io/
[20]: http://stackoverflow.com/questions/tagged/jsdata
[21]: http://slack.js-data.io/
[22]: https://github.com/js-data/local-storage-database/blob/master/.github/CONTRIBUTING.md
[23]: https://github.com/js-data/local-storage-database/blob/master/LICENSE
[24]: https://github.com/js-data/local-storage-database/blob/master/AUTHORS
