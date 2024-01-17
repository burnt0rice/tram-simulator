import k from "./kaboom";
import { load } from "./load";
import { map, levelConfig } from "./level";

k.scene("game", () => {
  console.log("game");
  load();

  addLevel(map, levelConfig);

  const tram = add([
    sprite("tram", { width: 750, height: 138 }),
    pos(125, 400),
    area(),
  ]);

  onKeyPress("space", () => {
    if (tram.frame === 1) {
      tram.frame = 0;
    }else {
      tram.frame = 1;
    }
  })

  const npc3 = add([
    sprite("npc", { anim: "walk", width: 70, height: 70, flipX: true }),
    pos(200, 500),
    area(),
  ]);

  const npc4 = add([
    sprite("npc", { anim: "run", width: 70, height: 70, flipX: true }),
    pos(800, 500),
    area(),
  ]);

  npc3.play("run");
  npc4.play("run");
});

go("game");
