import k from "./kaboom";
import { load } from "./load";
import { map, levelConfig } from "./level";

document.getElementById("start").onclick = () => {
  document.getElementById("start").style.display = "none";
  k.go("game");

  document.getElementsByTagName("canvas")[0].focus();
}

k.scene("game", () => {
  console.log("game");
  load();

  addLevel(map, levelConfig);

  const tram1 = add([
    sprite("tram-1", { width: 138, height: 138, frame: 0 }),
    pos(325, 445),
    area(),
  ])

  const tram2 = add([
    sprite("tram-2", { width: 188, height: 138, frame: 0 }),
    pos(463, 445),
    area(),
  ]);

  const tram3 = add([
    sprite("tram-3", { width: 188, height: 138, frame: 0 }),
    pos(651, 445),
    area(),
  ]);

  const tram4 = add([
    sprite("tram-4", { width: 102, height: 138, frame: 0 }),
    pos(839, 445),
    area(),
  ]);

  const tram5 = add([
    sprite("tram-5", { width: 125, height: 138, frame: 0 }),
    pos(941, 445),
    area(),
  ]);

  onKeyPress("1", () => {
    if (tram1.frame === 1) {
      tram1.frame = 0;
    }else {
      tram1.frame = 1;
    }
  });

  tram1.onMousePress(() => {
    const mpos = mousePos();
    if (mpos.x > 372 && mpos.x < 429 && mpos.y > 507 && mpos.y < 563) {
      if (tram1.frame === 1) {
        tram1.frame = 0;
      }else {
        tram1.frame = 1;
      }
    }
  });

  onKeyPress("2", () => {
    if (tram2.frame === 1) {
      tram2.frame = 0;
    }else {
      tram2.frame = 1;
    }
  })

  tram2.onMousePress((e) => {
    const mpos = mousePos();
    if (mpos.x > 474 && mpos.x < 531 && mpos.y > 507 && mpos.y < 563) {
      if (tram2.frame === 1) {
        tram2.frame = 0;
      }else {
        tram2.frame = 1;
      }
    }
  });

  onKeyPress("3", () => {
    if (tram3.frame === 1) {
      tram3.frame = 0;
    }else {
      tram3.frame = 1;
    }
  })

  tram3.onMousePress(() => {
    const mpos = mousePos();
    if (mpos.x > 663 && mpos.x < 720 && mpos.y > 507 && mpos.y < 563) {
      if (tram3.frame === 1) {
        tram3.frame = 0;
      }else {
        tram3.frame = 1;
      }
    }
  });

  onKeyPress("4", () => {
    if (tram4.frame === 1) {
      tram4.frame = 0;
    }else {
      tram4.frame = 1;
    }
  })

  tram4.onMousePress(() => {
    const mpos = mousePos();
    if (mpos.x > 852 && mpos.x < 911 && mpos.y > 507 && mpos.y < 563) {
      if (tram4.frame === 1) {
        tram4.frame = 0;
      }else {
        tram4.frame = 1;
      }
    }
  });

  onKeyPress("5", () => {
    if (tram5.frame === 1) {
      tram5.frame = 0;
    }else {
      tram5.frame = 1;
    }
  })

  tram5.onMousePress(() => {
    const mpos = mousePos();
    if (mpos.x > 953 && mpos.x < 1009 && mpos.y > 507 && mpos.y < 563) {
      if (tram5.frame === 1) {
        tram5.frame = 0;
      }else {
        tram5.frame = 1;
      }
    }
  });
  
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