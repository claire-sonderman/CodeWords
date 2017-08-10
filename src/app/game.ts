export class Game{
  constructor(){
    this.cells = [
      new Cell(this),
      new Cell(this),
      new Cell(this),
      new Cell(this),
      new Cell(this),
      new Cell(this),
      new Cell(this),
      new Cell(this),
      new Cell(this),
      new Cell(this),
      new Cell(this),
      new Cell(this),
      new Cell(this),
      new Cell(this),
      new Cell(this),
      new Cell(this),
      new Cell(this),
      new Cell(this),
      new Cell(this),
      new Cell(this),
      new Cell(this),
      new Cell(this),
      new Cell(this),
      new Cell(this),
      new Cell(this)
    ]
  }
  turn: boolean;
  cells: Array<Cell>
}
export class Cell{
  constructor(private game: Game){

  }
  isX: boolean| undefined;
  select() {
    if (this.isX !== undefined)
      return;
    this.game.turn = !this.game.turn;
    this.isX = this.game.turn;
  }
}