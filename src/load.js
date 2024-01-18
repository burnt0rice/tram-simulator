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

    k.loadSprite("tram-1", "sprites/trams/tram-1.png", {
        sliceX: 2,
        sliceY: 1,
    });

    k.loadSprite("tram-2", "sprites/trams/tram-2.png", {
        sliceX: 2,
        sliceY: 1,
    });

    k.loadSprite("tram-3", "sprites/trams/tram-3.png", {
        sliceX: 2,
        sliceY: 1,
    });

    k.loadSprite("tram-4", "sprites/trams/tram-4.png", {
        sliceX: 2,
        sliceY: 1,
    });

    k.loadSprite("tram-5", "sprites/trams/tram-5.png", {
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
            mad: {
                from: 16,
                to: 19,
                speed: 10,
                loop: true,
            },
            idle: {
                from: 0,
                to: 0,
                speed: 1,
                loop: false,
            },
        },
    });
}
