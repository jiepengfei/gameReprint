class Minesweeping {
  // #region field
  #colunm;

  #row;

  #dataArray;

  #mineArray;

  #elementArr;
  // #endregion

  constructor(column, row) {
    this.#colunm = column;
    this.#row = row;
    const dataBuffer = new ArrayBuffer(this.#colunm * this.#row);
    this.#dataArray = new Uint8Array(dataBuffer);
    const mineBuffer = new ArrayBuffer((this.#colunm * this.#row) / 10);
    this.#mineArray = new Uint8Array(mineBuffer);
    this.#elementArr = new Array(100);
    this.#initMine();
    this.#countMineNum();
    this.#createElement();
  }

  #initMine = () => {
    for (let i = 0; i < this.#dataArray.length / 10; ) {
      const randNum = Math.floor(Math.random() * 100);
      if (this.#dataArray[randNum] !== 9) {
        this.#dataArray[randNum] = 9;
        this.#mineArray[i] = randNum;
        i += 1;
      }
    }
  };

  #countMineNum = () => {
    this.#mineArray.forEach((value) => {
      if (value - this.#colunm > 0) this.#dataArray[value - this.#colunm] += 1; // up
      if (value + this.#colunm < this.#dataArray.length) this.#dataArray[value + this.#colunm] += 1; // down
      if (value % this.#colunm !== 0) this.#dataArray[value - 1] += 1; // left
      if (value % this.#colunm !== this.#colunm - 1) this.#dataArray[value + 1] += 1; // right
    });
  };

  #createElement = () => {
    const container = document.querySelector('.container');
    for (let i = 0; i < this.#colunm * this.#row; i++) {
      const ele = document.createElement('div');
      ele.setAttribute('num', i);
      this.#elementArr[i] = ele;
      container.appendChild(ele);
    }
  };

  #clickEvent = (num) => {
    this.#dataArray[num] = 1;
  };
}

// eslint-disable-next-line no-unused-vars
const a = new Minesweeping(10, 10);
