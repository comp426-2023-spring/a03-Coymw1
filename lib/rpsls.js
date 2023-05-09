const minimist = require("minimist");


function rps(shot) {

    shot = shot.toLowerCase()
    var x = {'player': shot};
    items = ["rock", "paper", "scissors"];

    if (shot == undefined) {
        var x = {'player': items[(Math.random() * 3)]};
        return x;
    }

    if (items.includes(shot) == false) {return error;}
    var cpu = items[(Math.random() * 3)]

    x.opponent = items[(Math.random() * 3)];
    console.log(x);

}