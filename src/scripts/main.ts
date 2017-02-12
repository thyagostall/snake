const GRID_SIZE = 20;
const LINES_QTY = 15;
const COLUMNS_QTY = 15;

let snake: Snake;
let grid: Grid;
let food: Food;

function setup() {
	grid = new Grid(GRID_SIZE)
	grid.draw(LINES_QTY, COLUMNS_QTY);

	snake = new Snake(2, 2, grid.size);
	food = Food.createRandom(grid);

	frameRate(10);
}

function draw() {
	background(51, 51, 51);	
	
	food.draw();	
	snake.draw();

	if (snake.canEatFood(food)) {
		snake.eat(food);
		food = Food.createRandom(grid);
	}
	snake.update(grid);
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		snake.goUp();
		snake.dir(0, -1);
	} else if (keyCode === DOWN_ARROW) {
		snake.goDown();
		snake.dir(0, 1);
	} else if (keyCode === RIGHT_ARROW) {
		snake.goRight();
		snake.dir(1, 0);
	} else if (keyCode === LEFT_ARROW) {
		snake.goLeft();
	}
}