title = "Button Masher";

description = `[Click]`;

characters = [
    `
    p
   p p
    p
    `
];

options = {
    theme: "pixel",
    isPlayingBgm: true,
    //isReplayEnabled: true
};

let player;
let shapes;
var size = 25;
var rate = 1

function update() {
    if (!ticks) {
        //init()
        player = {x: 9, vx: 1, size: 5}
    };

    
    color("cyan")
    color("yellow")
    rect(0, 10, size, size)
    size -= rate
    if (input.isJustPressed) {
        size += 15
        addScore(size)
        //console.log("Ball Dropped");
        //console.log(size)
        var rand = Math.random()
        console.log(rand)
        rate = 1 + rand
    }
    
    rate += 0.01
    //char("a", 30, 30)
    if(size <= 0 || size >= 105 ){
        rect(0, 10, size, size)
        end()
    }

}



function init() {
    player = {pos: vec(50, 10), vel: vec()};
    shapes = [];
}

addEventListener("load", onLoad);