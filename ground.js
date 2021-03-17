class Ground {
    constructor(x, y, width, height) {
        var options = {
            restitution: 0,
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, options)
        World.add(world, this.body);
        this.height = height
        this.width = width

    }

    show() {
        var pos = this.body.position
        rectMode(CENTER)
        fill("green")
        rect(pos.x, pos.y, this.width, this.height)


    }
}