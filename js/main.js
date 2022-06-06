// import Collection from "./localDatabase";
import $ from "jquery";
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
// myCollection.set({ test: 2323, gra: 23 });
// console.log("--- INFO ", myCollection.remove("test"));
// console.log("--- 22 ", myCollection.get("test"));
const asd = {
    scores: [
        { href: "http://google.com", score: 9 },
        { href: "http://reddit.com", score: 10 }
    ]
};

$("figure.top").append(`<button class="btn-favs">FAVS</button>`);
$("figure.top .btn-favs").on("click", function() {
    $("body").prepend(`<div class="wrap"/>`);

    let scores = c.get("scores");

    let sr = scores.sort((a, b) => b.score - a.score);

    sr.forEach(e => {
        let all = `<div class="rating">${e.score}</div>`;
        let i = 0;
        while (i < 11) {
            all += `<img src="https://img${i}.thepluginz.com/img/thumbs/gallery/${e.href
                .split("/")
                .pop()}-thumb.jpg"/>`;
            i++;
        }
        $(".wrap").append(`<div class="images"><a href="${e.href}">${all}</a></div>`);
    });
    console.info("Console --- asd.scores.sort((a, b) => a.score - b.score);");
});
// });
