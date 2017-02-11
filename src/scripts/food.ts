class Food {
	constructor(private x, private y, private size) {}

	public draw() {
		let x = this.x * this.size;
		let y = this.y * this.size;

		fill(255, 0, 0);
		rect(x, y, this.size, this.size);
	}

	public static createRandom(size: number, gridQty: number): Food {
		let x = floor(random(gridQty));
		let y = floor(random(gridQty));

		console.log(x, y);

		return new Food(x, y, size);
	}
}