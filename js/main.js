const oldgreeting = require("./oldgreeting.js");
console.log("merge oefening leuk!")

oldgreeting()


function basicHaiku()
{

    return ["1","We saw a batman descending","On a day in spring."]

    return ["2","We saw a batman descending","On a day in spring."]

}
//zet hier je haiku functie neer, zie https://github.com/progsen/haikugitopdracht voor ideeen

}
haikus = [
    basicHaiku()
    student1haiku()
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