export default class Minesweeping {
  // #region field
  #colunm;

  #row;

  #dataArray;

  #mineArray;

  #elementArr;

  #temSet; // 存储当前点击事件数据的临时set对象
  // #endregion

  constructor (column, row) {
    this.#colunm = column;
    this.#row = row;
    const dataBuffer = new ArrayBuffer(this.#colunm * this.#row);
    this.#dataArray = new Uint8Array(dataBuffer);
    const mineBuffer = new ArrayBuffer((this.#colunm * this.#row) / 10);
    this.#mineArray = new Uint8Array(mineBuffer);
    this.#elementArr = new Array(100);
    this.#temSet = new Set([]);
    this.#initMine();
    this.#countMineNum();
    this.#createElement();
  }

  #initMine = () => {
    for (let i = 0; i < this.#dataArray.length / 10;) {
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
      const canUp = value - this.#colunm > 0;
      const canRight = value % this.#colunm !== this.#colunm - 1;
      const canDown = value + this.#colunm < this.#dataArray.length;
      const canLeft = value % this.#colunm !== 0;
      if (canUp) this.#dataArray[value - this.#colunm] += 1; // up
      if (canUp && canRight) this.#dataArray[value - this.#colunm + 1] += 1; // upper right
      if (canRight) this.#dataArray[value + 1] += 1; // right
      if (canRight && canDown) { this.#dataArray[value + this.#colunm + 1] += 1; } // low right
      if (canDown) this.#dataArray[value + this.#colunm] += 1; // down
      if (canDown && canLeft) this.#dataArray[value + this.#colunm - 1] += 1; // left lower
      if (canLeft) this.#dataArray[value - 1] += 1; // left
      if (canUp && canLeft) this.#dataArray[value - this.#colunm - 1] += 1; // upper left
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

  clickEvent = (num) => {
    this.#temSet.clear();
    console.time('timer');
    if (this.#dataArray[num] === 0) {
      this.#clickBlank(num);
    } else {
      this.#elementArr[num].innerHTML = this.#dataArray[num];
    };
    this.#render();
    console.timeEnd('timer');
    console.log(this.#temSet);
    const arr1 = [[], [], [], [], [], [], [], [], [], []];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        arr1[i].push(this.#dataArray[i * 10 + j]);
      }
    }
    console.log(arr1);
  };

  #clickBlank = (num) => {
    if (this.#temSet.has(num)) return;
    this.#temSet.add(num);
    if (num - this.#colunm >= 0) this.#nextCell(num - this.#colunm); // up
    if (num + this.#colunm < this.#colunm * this.#row) this.#nextCell(num + this.#colunm); // down
    // eslint-disable-next-line max-len
    if (num - 1 >= 0 && (num - 1) % this.#colunm !== this.#colunm - 1) this.#nextCell(num - 1); // left
    if ((num + 1) % this.#colunm !== 0) this.#nextCell(num + 1); // right
  };

  #nextCell = (nextNum) => {
    this.#dataArray[nextNum] === 0 && this.#clickBlank(nextNum);
  };

  #render = () => {
    this.#temSet.forEach((num) => {
      this.#elementArr[num].style.backgroundColor = 'skyblue';
    });
  };
}
