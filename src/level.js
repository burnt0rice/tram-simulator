import k from "./kaboom.js";

const map = [
    "                              ",
    "                              ",
    "                              ",
    "                              ",
    "                              ",
    "                              ",
    "                              ",
    "oooooooooooooooooooooooooooooo",
    "pppppppppppppppppppppppppppppp",
    "                              ",
    "dddddddddddddddddddddddddddddd",
    "pppppppppppppppppppppppppppppp",
    "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
    "                              ",
    "                              ",
    "                              ",
    "                              ",
    "                              ",
    "                              ",
    "==============================",
  ];
  
const levelConfig = {
    tileHeight: 50,
    tileWidth: 50,
    tiles: {
        " ": () => [
            k.sprite("tilemap", {
                frame: 36,
                width: 50,
                height: 50,
            }),
            k.area(),
            k.offscreen(),
        ],
        "d": () => [
            k.sprite("tilemap", {
                frame: 63,
                width: 50,
                height: 50,
            }),
            k.area(),
            k.offscreen(),
        ],
        "b": () => [
            k.sprite("tilemap", {
                frame: 144,
                width: 50,
                height: 50,
            }),
            k.area(),
            k.offscreen(),
        ],
        "o": () => [
            k.sprite("tilemap", {
                frame: 90,
                width: 50,
                height: 50,
            }),
            k.area(),
            k.offscreen(),
        ],
        "p": () => [
            k.sprite("tilemap", {
                frame: 117,
                width: 50,
                height: 50,
            }),
            k.area(),
            k.offscreen(),
        ],
        "=": () => [
        k.sprite("tilemap", {
                frame: 1,
                width: 50,
                height: 50,
            }),
            k.area(),
            k.offscreen(),
        ],
    },
};

export { map, levelConfig };