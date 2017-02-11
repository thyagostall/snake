const GRID_SIZE = 20;
const LINES_COLUMNS_GRID_QTY = 40;

let snake: Snake;
let grid: Grid;
let food: Food;

function setup() {
	grid = new Grid(GRID_SIZE)
	grid.draw(LINES_COLUMNS_GRID_QTY, LINES_COLUMNS_GRID_QTY);

	snake = new Snake(grid.size);
	snake.x = 40;
	snake.y = 40;

	food = Food.createRandom(grid.size, LINES_COLUMNS_GRID_QTY);

	frameRate(10);
}

function draw() {
	background(51, 51, 51);	
	snake.draw();
	food.draw();	
	snake.update();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		snake.dir(0, -1);
	} else if (keyCode === DOWN_ARROW) {
		snake.dir(0, 1);
	} else if (keyCode === RIGHT_ARROW) {
		snake.dir(1, 0);
	} else if (keyCode === LEFT_ARROW) {
		snake.dir(-1, 0);
	}
}