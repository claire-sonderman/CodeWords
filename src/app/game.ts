import {CardDetails} from './CardDetails';

export class Game {
  constructor(private wordArray: Array<string>, private shuffledTypeOfCards: Array<string>) {
    this.cells = [
      new Cell(this, wordArray[0], shuffledTypeOfCards[0]),
      new Cell(this, wordArray[1], shuffledTypeOfCards[1]),
      new Cell(this, wordArray[2], shuffledTypeOfCards[2]),
      new Cell(this, wordArray[3], shuffledTypeOfCards[3]),
      new Cell(this, wordArray[4], shuffledTypeOfCards[4]),
      new Cell(this, wordArray[5], shuffledTypeOfCards[5]),
      new Cell(this, wordArray[6], shuffledTypeOfCards[6]),
      new Cell(this, wordArray[7], shuffledTypeOfCards[7]),
      new Cell(this, wordArray[8], shuffledTypeOfCards[8]),
      new Cell(this, wordArray[9], shuffledTypeOfCards[9]),
      new Cell(this, wordArray[10], shuffledTypeOfCards[10]),
      new Cell(this, wordArray[11], shuffledTypeOfCards[11]),
      new Cell(this, wordArray[12], shuffledTypeOfCards[12]),
      new Cell(this, wordArray[13], shuffledTypeOfCards[13]),
      new Cell(this, wordArray[14], shuffledTypeOfCards[14]),
      new Cell(this, wordArray[15], shuffledTypeOfCards[15]),
      new Cell(this, wordArray[16], shuffledTypeOfCards[16]),
      new Cell(this, wordArray[17], shuffledTypeOfCards[17]),
      new Cell(this, wordArray[18], shuffledTypeOfCards[18]),
      new Cell(this, wordArray[19], shuffledTypeOfCards[19]),
      new Cell(this, wordArray[20], shuffledTypeOfCards[20]),
      new Cell(this, wordArray[21], shuffledTypeOfCards[21]),
      new Cell(this, wordArray[22], shuffledTypeOfCards[22]),
      new Cell(this, wordArray[23], shuffledTypeOfCards[23]),
      new Cell(this, wordArray[24], shuffledTypeOfCards[24])
    ]
  }
  turn: string = "Red Start Turn";
  cells: Array<Cell>
}
export class Cell {
  constructor(private game: Game, private wrd: string, private clr: string) {
    this.color = clr;
    this.word = wrd;
    switch(this.color) {
      case 'b':
        this.isBlue = true;
        break;
      case 'r':
        this.isRed = true;
        break;
      case 'n':
        this.isNeutral = true;
        break;
      case 'x':
        this.isLose = true;
        break;
    }
  }

  color: string | undefined;
  word: string | undefined;
  isRed: boolean | undefined;
  isBlue: boolean | undefined;
  isNeutral: boolean | undefined;
  isLose: boolean | undefined;
  isFlipped: boolean = false;

  select() {
    this.isFlipped = true;

  }
}