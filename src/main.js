import kaboom from "kaboom";

const k = kaboom({
  width: 1000,
  height: 1000,
  letterbox: true,
});

loadSprite("tilemap", "sprites/tilemap_packed.png", {
  sliceX: 27,
  sliceY: 18,
});

loadSprite("npc", "sprites/tilemap_packed.png", {
  sliceX: 27,
  sliceY: 18,
  anims: {
    walk: {
      from: 23,
      to: 26,
      speed: 20,
      loop: true,
    },
  },
});

const map = [
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "                    ",
  "====================",
];

const levelConfig = {
  tileHeight: 50,
  tileWidth: 50,
  tiles: {
    " ": () => [
      sprite("tilemap", {
        frame: 117,
        width: 50,
        height: 50,
      }),
      k.area(),
      k.offscreen(),
    ],
    "=": () => [
      sprite("tilemap", {
        frame: 1,
        width: 50,
        height: 50,
      }),
      k.area(),
      k.offscreen(),
    ],
  },
};

scene("game", () => {
  addLevel(map, levelConfig);

  const npc = add([
    sprite("npc", { anim: "walk", width: 50, height: 50 }),
    pos(80, 40),
    area(),
    body(),
  ]);

  npc.play("walk");
});

go("game");
