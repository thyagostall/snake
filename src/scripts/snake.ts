class Snake {
	x = 0;
	y = 0;
	xSpeed = 1;
	ySpeed = 0;

	constructor(private side: number) {

	}

	public update() {
		this.x = this.constraintPosition(this.x, this.xSpeed * this.side, width);
		this.y = this.constraintPosition(this.y, this.ySpeed * this.side, width);
	}

	private constraintPosition(pos: number, speed: number, max: number) {
		let result = pos + speed;
		if (pos > max) {
			result = 0;
		} else if (pos < (0 - this.side)) {
			result = max;
		}
		return result;
	}

	public draw() {
		fill(255);
		rect(this.x, this.y, this.side, this.side);
	}

	public dir(x, y) {
		this.xSpeed = x;
		this.ySpeed = y;
	}
}