class Snake {
	private xSpeed = 1;
	private ySpeed = 0;
	
	private tail = [];

	constructor(
		x: number, 
		y: number, 
		private side: number) {

		this.tail.push({x: x, y: y});
	}

	public update(grid: Grid) {
		for (let i = this.tail.length - 1; i > 0; i--) {
			let x = this.tail[i - 1].x;
			let y = this.tail[i - 1].y; 
			this.tail[i] = {x: x, y: y};
		}
		
		this.tail[0].x = this.constraintPosition(this.tail[0].x, this.xSpeed, grid.rows);
		this.tail[0].y = this.constraintPosition(this.tail[0].y, this.ySpeed, grid.cols);
	}

	private constraintPosition(pos: number, speed: number, max: number) {
		let result = pos + speed;
		if (result >= max) {
			result = 0;
		} else if (result < 0) {
			result = max - 1;
		}
		return result;
	}

	public draw() {
		fill(255);
		
		for (let pos of this.tail) {
			rect(pos.x * this.side, pos.y * this.side, this.side, this.side);
		}
	}

	private dir(x, y) {
		this.xSpeed = x;
		this.ySpeed = y;
	}

	public goUp() {
		this.dir(0, -1);
	}	

	public goDown() {
		this.dir(0, 1);
	}

	public goRight() {
		this.dir(1, 0);
	}

	public goLeft() {
		this.dir(-1, 0);
	}	

	public canEatFood(food: Food) {
		let distX = abs(this.tail[0].x - food.x);
		let distY = abs(this.tail[0].y - food.y);

		return (distX < 1 && distY < 1);
	}

	public eat(food: Food) {
		this.tail.push({});
	}
}