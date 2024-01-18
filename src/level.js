import k from "./kaboom.js";

const map = [
    "                              ",
    "                              ",
    "                              ",
    "                              ",
    "    L  YT       L          L ",
    "    l  yt       l          l  ",
    "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
    "oooooooooooooooooooooooooooooo",
    "vvvVvvvvvvvvvvvvvvvvvvvvvvVvvv",
    "ssSssssssssssssssssssssSssssss",
    "mmMmmmmmmmmmmmmmmmmmmmmMmmmmmm",
    "ddDddddddddddddddddddddDdddddd",
    "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
    "ooooooooToooooooofffoooooooooo",
    "        thhk                  ",
    "                              ",
    "                              ",
    "                              ",
    "                              ",
    "                              ",
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
                frame: 460,
                width: 50,
                height: 50,
            }),
            k.area(),
            k.offscreen(),
        ],
        "s": () => [
            k.sprite("tilemap", {
                frame: 406,
                width: 50,
                height: 50,
            }),
            k.area(),
            k.offscreen(),
        ],
        "m": () => [
            k.sprite("tilemap", {
                frame: 433,
                width: 50,
                height: 50,
            }),
            k.area(),
            k.offscreen(),
        ],
        "D": () => [
            k.sprite("tilemap", {
                frame: 459,
                width: 50,
                height: 50,
            }),
            k.area(),
            k.offscreen(),
        ],
        "S": () => [
            k.sprite("tilemap", {
                frame: 405,
                width: 50,
                height: 50,
            }),
            k.area(),
            k.offscreen(),
        ],
        "M": () => [
            k.sprite("tilemap", {
                frame: 432,
                width: 50,
                height: 50,
            }),
            k.area(),
            k.offscreen(),
        ],
        "b": () => [
            k.sprite("tilemap", {
                frame: 9,
                width: 50,
                height: 50,
            }),
            k.area(),
            k.offscreen(),
        ],
        "o": () => [
            k.sprite("tilemap", {
                frame: 63,
                width: 50,
                height: 50,
            }),
            k.area(),
            k.offscreen(),
        ],
        "v": () => [
            k.sprite("tilemap", {
                frame: 468,
                width: 50,
                height: 50,
            }),
            k.area(),
            k.offscreen(),
        ],
        "V": () => [
            k.sprite("tilemap", {
                frame: 469,
                width: 50,
                height: 50,
            }),
            k.area(),
            k.offscreen(),
        ],
        "t": () => [
            k.sprite("tilemap", {
                frame: 287,
                width: 50,
                height: 50,
            }),
            k.area(),
            k.offscreen(),
        ],
        "T": () => [
            k.sprite("tilemap", {
                frame: 233,
                width: 50,
                height: 50,
            }),
            k.area(),
            k.offscreen(),
        ],
        "y": () => [
            k.sprite("tilemap", {
                frame: 286,
                width: 50,
                height: 50,
            }),
            k.area(),
            k.offscreen(),
        ],
        "Y": () => [
            k.sprite("tilemap", {
                frame: 232,
                width: 50,
                height: 50,
            }),
            k.area(),
            k.offscreen(),
        ],
        "f": () => [
            k.sprite("tilemap", {
                frame: 238,
                width: 50,
                height: 50,
            }),
            k.area(),
            k.offscreen(),
        ],
        "h": () => [
            k.sprite("tilemap", {
                frame: 381,
                width: 50,
                height: 50,
            }),
            k.area(),
            k.offscreen(),
        ],
        "l": () => [
            k.sprite("tilemap", {
                frame: 191,
                width: 50,
                height: 50,
            }),
            k.area(),
            k.offscreen(),
        ],
        "L": () => [
            k.sprite("tilemap", {
                frame: 164,
                width: 50,
                height: 50,
            }),
            k.area(),
            k.offscreen(),
        ],
        "k": () => [
            k.sprite("tilemap", {
                frame: 280,
                width: 50,
                height: 50,
            }),
            k.area(),
            k.offscreen(),
        ],
    },
};

export { map, levelConfig };