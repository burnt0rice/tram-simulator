export default class Tram {
  constructor(pos) {
    this.pos = pos;
  }

  buildTram(k) {
    const tramSections = [
      { spriteId: 1, width: 138, height: 138, frame: 0, pos: { x: 0, y: 0 }, door: { x: 37, y: 62, width: 57, height: 56 } },
      { spriteId: 2, width: 188, height: 138, frame: 0, pos: { x: 138, y: 0 }, door: { x: 11, y: 62, width: 57, height: 56 } },
      { spriteId: 3, width: 188, height: 138, frame: 0, pos: { x: 326, y: 0 }, door: { x: 11, y: 62, width: 57, height: 56 } },
      { spriteId: 4, width: 102, height: 138, frame: 0, pos: { x: 514, y: 0}, door: { x: 11, y: 62, width: 57, height: 56 } },
      { spriteId: 5, width: 125, height: 138, frame: 0, pos: { x: 616, y: 0}, door: { x: 11, y: 62, width: 57, height: 56 } },
    ];

    tramSections.forEach((section) => {
      let tramSection = k.add([
        sprite(`tram-${section.spriteId}`, section),
        pos(this.pos.x + section.pos.x, this.pos.y + section.pos.y),
        area(),
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
    });
  }
}
