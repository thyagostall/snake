class Grid {
	private _rowQty: number;
	private _colQty: number;

	get size(): number {
		return this._size;
	} 

	get rows(): number {
		return this._rowQty;
	}

	get cols(): number {
		return this._colQty;
	}	

	constructor(private _size: number) { }

	public draw(rowQty: number, colQty: number) {
		let canvas = createCanvas(rowQty * this._size, colQty * this._size);
		canvas.parent("game");

		this._rowQty = rowQty;
		this._colQty = colQty;
	}
}