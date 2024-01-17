import k from "./kaboom.js";

export function load() {
    k.loadSprite("tilemap", "sprites/tilemap_packed.png", {
        sliceX: 27,
        sliceY: 18,
    });

    k.loadSprite("tram", "sprites/tram.png", {
        sliceX: 2,
        sliceY: 1,
    });
      
    k.loadSprite("npc", "sprites/npc.png", {
        sliceX: 8,
        sliceY: 6,
        anims: {
            walk: {
                from: 8,
                to: 11,
                speed: 8,
                loop: true,
            },
            run: {
                from: 12,
                to: 15,
                speed: 10,
                loop: true,
            },
        },
    });
}
