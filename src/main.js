import k from "./kaboom";
import { load } from "./load";
import { map, levelConfig } from "./level";
import ui from "./uiManager";

import Tram from "./Tram";
import Npc from "./Npc";
import Timer from "./Timer";

/* Setup game */
let timer;
let music;

ui.initalClickListeners();

load();

/* Scenes */
k.scene("game", () => {
  music = k.play("music", {
    loop: true,
    volume: 0.3,
  });

  addLevel(map, levelConfig);

  let tram = new Tram({ x: 325, y: 445 });
  tram.buildTram(k);

  // Init timer and start it
  timer = new Timer(90);
  timer.updateTimeDisplay();  
  timer.startTimer(100);
  
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

k.onSceneLeave(() => {
  if (music) music.stop();
});

k.scene("game-over", () => {
  timer.stopTimer();
  timer.resetTimer();

  document.getElementById("game-over").style.display = "flex";

  console.log("game-over");
});

k.scene("game-win", () => {
  timer.stopTimer();
  timer.resetTimer();

  document.getElementById("game-win").style.display = "flex";

  console.log("game-over");
});