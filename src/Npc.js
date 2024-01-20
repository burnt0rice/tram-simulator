export default class Npc {

  constructor(pos, direction, speed, animation) {
    this.pos = pos;
    this.direction = direction;
    this.speed = speed;
    this.animation = animation;
    this.destroyReason = "";
  }

  buildNpc(k) {
    const direction = this.direction === "left" ? k.LEFT : k.RIGHT;
    const flipX = this.direction === "left" ? true : false; 
    const npc = k.add([
      sprite("npc", { anim: "walk", width: 70, height: 70, flipX: flipX }),
      pos(this.pos.x, this.pos.y),
      area(),
      offscreen({ destroy: true }),
      //move(direction, this.speed)
    ]);

    let walkLoop = loop(1/this.speed, () => {
      if (this.direction === "left") {
        npc.pos.x -= 10;
      }else {
        npc.pos.x += 10;
      }
    });

    const collisionArea = this.direction === "left" ? "doorLeft" : "doorRight";
    npc.onCollide(collisionArea, (collisionDoor) => {
      npc.play("idle");
      walkLoop.paused = true;

      setTimeout(() => {
        if (k.get("tram-section-" + collisionDoor.tramSection).length === 1) {
          if (k.get("tram-section-" + collisionDoor.tramSection)[0].frame === 1) {
            this.destroyReason = "tram";
            npc.destroy();
            return;
          }
        }

        npc.play("walk");
        walkLoop.paused = false;
      }, 1500);
    });

    const lastCollisionArea = this.direction === "left" ? "doorLeftLast" : "doorRightLast";
    npc.onCollide(lastCollisionArea, (collisionDoor) => {
      if (npc.curAnim() === "walk") {
        npc.play("idle");
        walkLoop.paused = true;
        setTimeout(() => {
          if (k.get("tram-section-" + collisionDoor.tramSection).length === 1) {
            if (k.get("tram-section-" + collisionDoor.tramSection)[0].frame === 1) {
              this.destroyReason = "tram";
              npc.destroy();
              return;
            }
          }

          npc.play("mad");
          walkLoop.paused = false;
          this.destroyReason = "offscreen";
        }, 1500);
      }
    });

    npc.onDestroy(() => {
      console.log("destroy - npc -> ", this.destroyReason);
      if (this.destroyReason === "offscreen") {
        let npcScoreElement = document.getElementById("npc-score");
        let npcScore = parseInt(npcScoreElement.innerHTML);
        npcScore++;

        npcScoreElement.innerHTML = npcScore;
      }

      if (this.destroyReason === "tram") {
        k.go("game-over");
        document.getElementById("game-over").style.display = "flex";
      }
    });
  }
}
