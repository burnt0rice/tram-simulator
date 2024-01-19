export default class Tram {
  constructor(pos) {
    this.pos = pos;
  }

  buildTram(k) {
    const tramSections = [
      { spriteId: 1, width: 138, height: 138, frame: 0, pos: { x: 0, y: 0 }, door: { x: 37, y: 62, width: 57, height: 56 }, collisionArea: { left: { x: 50, y: 125, tags: ["doorLeftLast"] }, right: { x: 103, y: 125, tags: ["doorRight"] }} },
      { spriteId: 2, width: 188, height: 138, frame: 0, pos: { x: 138, y: 0 }, door: { x: 11, y: 62, width: 57, height: 56 }, collisionArea: { left: { x: 150, y: 125, tags: ["doorLeft"] }, right: { x: 203, y: 125, tags: ["doorRight"] }} },
      { spriteId: 3, width: 188, height: 138, frame: 0, pos: { x: 326, y: 0 }, door: { x: 11, y: 62, width: 57, height: 56 }, collisionArea: { left: { x: 339, y: 125, tags: ["doorLeft"] }, right: { x: 391, y: 125, tags: ["doorRight"] }} },
      { spriteId: 4, width: 102, height: 138, frame: 0, pos: { x: 514, y: 0}, door: { x: 11, y: 62, width: 57, height: 56 }, collisionArea: { left: { x: 526, y: 125, tags: ["doorLeft"] }, right: { x: 579, y: 125, tags: ["doorRight"] }} },
      { spriteId: 5, width: 125, height: 138, frame: 0, pos: { x: 616, y: 0}, door: { x: 11, y: 62, width: 57, height: 56 }, collisionArea: { left: { x: 629, y: 125, tags: ["doorLeft"] }, right: { x: 681, y: 125, tags: ["doorRightLast"] }} },
    ];

    tramSections.forEach((section) => {
      let tramSection = k.add([
        sprite(`tram-${section.spriteId}`, section),
        pos(this.pos.x + section.pos.x, this.pos.y + section.pos.y),
        area(),
        "tram-section-" + section.spriteId,
      ]);

      tramSection.onMousePress(() => {
        const mpos = mousePos();
        let xStatement = mpos.x > this.pos.x + section.pos.x + section.door.x && mpos.x < this.pos.x + section.pos.x + section.door.x + section.door.width;
        let yStatement = mpos.y > this.pos.y + section.pos.y + section.door.y && mpos.y < this.pos.y + section.pos.y + section.door.y + section.door.height;
        if (xStatement && yStatement) {
          if (tramSection.frame === 1) {
            tramSection.frame = 0;
          }else {
            tramSection.frame = 1;
          }
        }
      });
  
      k.onKeyPress(`${section.spriteId}`, () => {
        if (tramSection.frame === 1) {
          tramSection.frame = 0;
        }else {
          tramSection.frame = 1;
        }
      });

      //Add collisionAreas
      k.add([
        rect(5, 50),
        pos(this.pos.x + section.collisionArea.left.x, this.pos.y + section.collisionArea.left.y),
        color(0, 0, 0),
        opacity(0),
        area(),
        {
          tramSection: section.spriteId,
        },
        ...section.collisionArea.left.tags
      ]);

      k.add([
        rect(5, 50),
        pos(this.pos.x + section.collisionArea.right.x, this.pos.y + section.collisionArea.right.y),
        color(0, 0, 0),
        opacity(0),
        area(),
        {
          tramSection: section.spriteId,
        },
        ...section.collisionArea.right.tags
      ]);
    });
  }
}
