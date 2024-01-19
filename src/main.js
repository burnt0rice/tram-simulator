import k from "./kaboom";
import { load } from "./load";
import { map, levelConfig } from "./level";

import Tram from "./Tram";
import Npc from "./Npc";

document.getElementById("start").onclick = () => {
  document.getElementById("start").style.display = "none";
  k.go("game");

  document.getElementsByTagName("canvas")[0].focus();
}

k.scene("game", () => {
  console.log("game");
  load();

  addLevel(map, levelConfig);

  let tram = new Tram({ x: 325, y: 445 });
  tram.buildTram(k);
  
  function spawnNPCFromRight() {
    const npcRight = new Npc({ x: 1500, y: 550 }, "left", 100, "walk");
    npcRight.buildNpc(k);
  
    // wait a random amount of time to spawn next npc
    wait(rand(1, 5), spawnNPCFromRight);
  }

  function spawnNPCFromLeft() {
    const npcLeft = new Npc({ x: 0, y: 550 }, "right", 100, "walk");
    npcLeft.buildNpc(k);

    // wait a random amount of time to spawn next npc
    wait(rand(1, 5), spawnNPCFromLeft);
  }

  spawnNPCFromRight();
  spawnNPCFromLeft();
});