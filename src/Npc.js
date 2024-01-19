export default class Npc {
  constructor(pos, direction, speed, animation) {
    this.pos = pos;
    this.direction = direction;
    this.speed = speed;
    this.animation = animation;
  }

  buildNpc(k) {
    const direction = this.direction === "left" ? k.LEFT : k.RIGHT;
    const flipX = this.direction === "left" ? true : false; 
    const npc = k.add([
      sprite("npc", { anim: "walk", width: 70, height: 70, flipX: flipX }),
      pos(this.pos.x, this.pos.y),
      area(),
      offscreen({ destroy: true }),
      move(direction, this.speed)
    ]);

    const collisionArea = this.direction === "left" ? "doorLeftLast" : "doorRightLast";
    npc.onCollide(collisionArea, () => {
      if (npc.curAnim() === "walk") {
        npc.play("idle");
        setTimeout(() => {
          npc.play("mad");
        }, 1000);
      }
      console.log("collide - npc <-> " + collisionArea);
    });
  }
}
