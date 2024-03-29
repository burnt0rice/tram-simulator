export default class Npc {

  constructor(pos, direction, speed, animation) {
    console.log("Npc created");
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

      //Open door
      if (k.get("tram-section-" + collisionDoor.tramSection).length === 1) {
        k.play("door-open", { volume: 0.5 });
        k.get("tram-section-" + collisionDoor.tramSection)[0].frame = 1;
      }

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
      }, 1000);
    });

    const lastCollisionArea = this.direction === "left" ? "doorLeftLast" : "doorRightLast";
    npc.onCollide(lastCollisionArea, (collisionDoor) => {
      if (npc.curAnim() === "walk") {
        npc.play("idle");
        walkLoop.paused = true;

        //Open door
        if (k.get("tram-section-" + collisionDoor.tramSection).length === 1) {
          k.play("door-open", { volume: 0.5 });
          k.get("tram-section-" + collisionDoor.tramSection)[0].frame = 1;
        }

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
        }, 1000);
      }
    });

    npc.onDestroy(() => {
      console.log("destroy - npc -> ", this.destroyReason);
      if (this.destroyReason === "offscreen") {
        let npcScoreElement = document.getElementById("npc-score");
        let npcScore = parseInt(npcScoreElement.innerHTML);
        npcScore++;

        let scoreElement = document.getElementById("score");
        let score = parseInt(scoreElement.innerHTML);
        score = score + 100;

        npcScoreElement.innerHTML = npcScore;
        scoreElement.innerHTML = score;
      }

      if (this.destroyReason === "tram") {
        k.go("game-over");
      }
    });
  }
}
