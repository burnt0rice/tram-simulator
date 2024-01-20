import k from "./kaboom";
import { load } from "./load";
import { map, levelConfig } from "./level";

import Tram from "./Tram";
import Npc from "./Npc";

function resetScore() {
  document.getElementById("npc-score").innerHTML = "0";
  document.getElementById("score").innerHTML = "0";
  document.getElementById("timer").innerHTML = "0";

}

/* Initial menu click events */
document.getElementById("start").onclick = () => {
  document.getElementById("start").style.display = "none";
  resetScore();
  k.go("game");

  document.getElementsByTagName("canvas")[0].focus();
}

document.getElementById("restart").onclick = () => {
  document.getElementById("game-over").style.display = "none";
  resetScore();
  k.go("game");

  document.getElementsByTagName("canvas")[0].focus();
}

document.getElementById("go-back").onclick = () => {
  document.getElementById("game-over").style.display = "none";
  resetScore();
  document.getElementById("start").style.display = "block";
}

load();

/* Scenes */
k.scene("game", () => {
  console.log("game");

  addLevel(map, levelConfig);

  let tram = new Tram({ x: 325, y: 445 });
  tram.buildTram(k);
  
  function spawnNPCFromRight() {
    const npcRight = new Npc({ x: 1500, y: 550 }, "left", 7, "walk");
    npcRight.buildNpc(k);
  
    // wait a random amount of time to spawn next npc
    wait(rand(20, 30), spawnNPCFromRight);
  }

  function spawnNPCFromLeft() {
    const npcLeft = new Npc({ x: 0, y: 550 }, "right", 7, "walk");
    npcLeft.buildNpc(k);

    // wait a random amount of time to spawn next npc
    wait(rand(10, 20), spawnNPCFromLeft);
  }

  spawnNPCFromRight();
  spawnNPCFromLeft();
});

k.scene("game-over", () => {
  console.log("game-over");
});