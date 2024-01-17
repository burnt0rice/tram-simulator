import k from "./kaboom";
import { load } from "./load";
import { map, levelConfig } from "./level";

k.scene("game", () => {
  load();

  addLevel(map, levelConfig);

  const npc1 = add([
    sprite("npc", { anim: "walk", width: 70, height: 70 }),
    pos(120, 370),
    area(),
    body(),
  ]);

  const npc2 = add([
    sprite("npc", { anim: "run", width: 70, height: 70 }),
    pos(500, 370),
    area(),
    body(),
  ]);

  const npc3 = add([
    sprite("npc", { anim: "walk", width: 70, height: 70, flipX: true }),
    pos(200, 640),
    area(),
    body(),
  ]);

  const npc4 = add([
    sprite("npc", { anim: "run", width: 70, height: 70, flipX: true }),
    pos(800, 640),
    area(),
    body(),
  ]);

  npc1.play("run");
  npc2.play("run");
  npc3.play("run");
  npc4.play("run");
});

go("game");
