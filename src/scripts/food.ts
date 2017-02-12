class Food {
	constructor(private x, private y, private size) {}

	public draw() {
		let x = this.x * this.size;
		let y = this.y * this.size;

		fill(255, 0, 0);
		rect(x, y, this.size, this.size);
	}

	public static createRandom(grid: Grid): Food {
		let x = floor(random(grid.rows));
		let y = floor(random(grid.cols));

		return new Food(x, y, grid.size);
	}
}