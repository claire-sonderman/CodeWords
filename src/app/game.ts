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
  isFlipped: boolean| undefined;
  select() {
    if (this.isFlipped !== undefined)
      return;
    this.game.turn = !this.game.turn;
    this.isFlipped = true;
  }
}