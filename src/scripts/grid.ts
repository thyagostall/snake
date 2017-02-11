class Grid {
	private _rowQty: number;
	private _colQty: number;

	get size(): number {
		return this._size;
	} 

	constructor(private _size: number) { }

	public draw(rowQty: number, colQty: number) {
		createCanvas(rowQty * this._size, colQty * this._size);

		this._rowQty = rowQty;
		this._colQty = colQty;
	}
}