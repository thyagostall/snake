const GRID_SIZE = 20;
const LINES_QTY = 23;
const COLUMNS_QTY = 23;

let snake: Snake;
let grid: Grid;
let food: Food;

let didGameOver = false;

function setup() {
	reset();

	frameRate(12);
}

function reset() {
	didGameOver = false;

	grid = new Grid(GRID_SIZE)
	grid.draw(LINES_QTY, COLUMNS_QTY);

	snake = new Snake(2, 2, grid.size);
	food = Food.createRandom(grid);
}

function draw() {
	if (didGameOver) {
		drawGameOver();
		return;
	}

	background(51);
	
	food.draw();	
	snake.draw();

	if (snake.canEatFood(food)) {
		snake.eat(food);
		food = Food.createRandom(grid);
	}

	if (snake.isIntersectingItself()) {
		didGameOver = true;
		return;
	}

	snake.update(grid);
}

function drawGameOver() {
	background(51, 0, 0);
	snake.draw();
	food.draw();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		snake.goUp();
	} else if (keyCode === DOWN_ARROW) {
		snake.goDown();
	} else if (keyCode === RIGHT_ARROW) {
		snake.goRight();
	} else if (keyCode === LEFT_ARROW) {
		snake.goLeft();
	}
}