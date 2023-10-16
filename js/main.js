const oldgreeting = require("./oldgreeting.js");
console.log("merge oefening leuk!")

oldgreeting.greet()


function basicHaiku()
{
    return ["Toward those short trees","We saw a batman descending","On a day in spring."]
}
//zet hier je haiku functie neer, zie https://github.com/progsen/haikugitopdracht voor ideeen
function HaikuX(){
    console.log("haiku by:","isaiah");
    console.log("aap");
    console.log("kaas");
    console.log("banaan");
}
haikus = [
    basicHaiku()
]

function randomHaiku()
{

    let i = Math.floor(Math.random(haikus.length));
    return haikus[i];
}

function start()
{
    console.log("starting main")
    
    console.log(randomHaiku())

}

start()