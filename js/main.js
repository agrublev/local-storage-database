// import Collection from "./localDatabase";
//
// // myCollection
// /**
//  * Global Vars
//  */
//
// $(function() {
//     $("body").append(`<div id="review">Hellow</div>`);
import Collection from "../release/localDatabase";
let myCollection = new Collection("test");
myCollection.set({ test: 2323, gra: 23 });
console.log("--- INFO ", myCollection.remove("test"));
console.log("--- 22 ", myCollection.get("test"));
// });
