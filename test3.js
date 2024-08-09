const prompt = require("prompt-sync")({ sigint: true });

let mapvar = 0;
let change = 0;
const coordinats = { x: 1, y: 1, undiscoverdform: "■", discoverdform: "#" };
let coordinatarray = [];

let map = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
// let x = 0;
// let y = 0;
const p = { x: 1, y: 1, playerform: "0" };
let offset = { x: 1, y: 1 };

function input() {
  let direction = prompt("Where do you go?");
  switch (direction.toLowerCase()) {
    case "w":
      console.log("North");
      if (p.y === 0) {
        map.unshift(map[0]);
        p.y++;
      }
      p.y--;
      break;
    case "a":
      if (p.x === 0) {
        for (let i = 0; i < map.length; i++) {
          map[i].unshift("");
        }
        p.x++;
      }
      console.log("West");
      p.x--;
      break;
    case "s":
      console.log("South");
      if (p.y === map.length - 1) {
        map.push(map[0]);
      }
      p.y++;
      break;
    case "d":
      if (p.x === map[0].length - 1) {
        for (let i = 0; i < map.length; i++) {
          map[i].push("");
        }
      }
      console.log("East");
      p.x++;
      break;
    default:
      console.log("Sorry only wasd is accepted!");
  }
}

for (var i = 0; i < Infinity; i++) {
  for (let y = 0; y < map.length; y++) {
    let row = "";
    for (let x = 0; x < map[y].length + change; x++) {
      if (y === p.y && x === p.x) {
        row += p.playerform;
        // coordinatarray[mapvar] = coordinats;
        // coordinatarray[mapvar].x = x;
        // coordinatarray[mapvar].y = y;
        // mapvar++;
        //console.log(coordinatarray[mapvar]);
      } else if (coordinatarray[y.y] === y && coordinatarray[x.x] === x) {
        row += coordinats.discoverdform;
      } else {
        row += coordinats.undiscoverdform;
      }
    }
    console.log(row);
  }
  input();
}
