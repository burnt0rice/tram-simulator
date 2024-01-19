import k from "./kaboom";
import { load } from "./load";
import { map, levelConfig } from "./level";

import Tram from "./Tram";

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
  
  function spawnNPCRight() {
    const npcRight = add([
      sprite("npc", { anim: "walk", width: 70, height: 70, flipX: true }),
      pos(1500, 550),
      area(),
      offscreen({ destroy: true }),
      move(LEFT, 100)
    ]);

    

    npcRight.onCollide("doorLeftLast", () => {
      if (npcRight.curAnim() === "walk") {
        npcRight.play("idle");
        setTimeout(() => {
          npcRight.play("mad");
        }, 1000);
      }
      console.log("collide - npcRight <-> doorLeftLast");
    });

    // wait a random amount of time to spawn next tree
    wait(rand(1, 5), spawnNPCRight);
  }

  function spawnNPCLeft() {
    const npcLeft = add([
      sprite("npc", { anim: "walk", width: 70, height: 70, flipX: false }),
      pos(0, 550),
      area(),
      offscreen({ destroy: true }),
      move(RIGHT, 100)
    ]);

    

    npcLeft.onCollide("doorRightLast", () => {
      if (npcLeft.curAnim() === "walk") {
        npcLeft.play("idle");
        setTimeout(() => {
          npcLeft.play("mad");
        }, 1000);
      }
      console.log("collide - npcLeft <-> doorRightLast");
    });

    // wait a random amount of time to spawn next tree
    wait(rand(1, 5), spawnNPCLeft);
  }

  spawnNPCRight();
  spawnNPCLeft();

  

  

  const collitionAreaDoorLeft1 = add([
    rect(5, 50),
    pos(375, 570),
    color(0, 0, 0),
    opacity(0),
    area(),
    "doorLeft",
    "doorLeftLast"
  ]);

  const collitionAreaDoorLeft2 = add([
    rect(5, 50),
    pos(477, 570),
    color(0, 0, 0),
    opacity(0),
    area(),
    "doorLeft"
  ]);

  const collitionAreaDoorLeft3 = add([
    rect(5, 50),
    pos(668, 570),
    color(0, 0, 0),
    opacity(0),
    area(),
    "doorLeft"
  ]);

  const collitionAreaDoorLeft4 = add([
    rect(5, 50),
    pos(858, 570),
    color(0, 0, 0),
    opacity(0),
    area(),
    "doorLeft"
  ]);

  const collitionAreaDoorLeft5 = add([
    rect(5, 50),
    pos(962, 570),
    color(0, 0, 0),
    opacity(0),
    area(),
    "doorLeft"
  ]);

  const collitionAreaDoorRight1 = add([
    rect(5, 50),
    pos(428, 570),
    color(0, 0, 0),
    opacity(0),
    area(),
    "doorRight"
  ]);

  const collitionAreaDoorRight2 = add([
    rect(5, 50),
    pos(530, 570),
    color(0, 0, 0),
    opacity(0),
    area(),
    "doorRight"
  ]);

  const collitionAreaDoorRight3 = add([
    rect(5, 50),
    pos(720, 570),
    color(0, 0, 0),
    opacity(0),
    area(),
    "doorRight"
  ]);

  const collitionAreaDoorRight4 = add([
    rect(5, 50),
    pos(912, 570),
    color(0, 0, 0),
    opacity(0),
    area(),
    "doorRight"
  ]);

  const collitionAreaDoorRight5 = add([
    rect(5, 50),
    pos(1015, 570),
    color(0, 0, 0),
    opacity(0),
    area(),
    "doorRight",
    "doorRightLast"
  ]);
});

//Notes
/*

*/