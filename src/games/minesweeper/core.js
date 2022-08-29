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
      if (value - this.#colunm > 0) this.#dataArray[value - this.#colunm] += 1; // up
      if (value - this.#colunm > 0 && value % this.#colunm !== this.#colunm - 1) {
        this.#dataArray[value - this.#colunm + 1] += 1;
      } // upper right
      if (value % this.#colunm !== this.#colunm - 1) this.#dataArray[value + 1] += 1; // right
      if (
        value % this.#colunm !== this.#colunm - 1 &&
        value + this.#colunm < this.#dataArray.length
      ) {
        this.#dataArray[value + this.#colunm + 1] += 1;
      } // low right
      if (value + this.#colunm < this.#dataArray.length) {
        this.#dataArray[value + this.#colunm] += 1;
      } // down
      if (value + this.#colunm < this.#dataArray.length && value % this.#colunm !== 0) {
        this.#dataArray[value + this.#colunm - 1] += 1;
      } // left lower
      if (value % this.#colunm !== 0) this.#dataArray[value - 1] += 1; // left
      if (
        value - this.#colunm > 0 && value % this.#colunm !== 0
      ) {
        this.#dataArray[value - this.#colunm - 1] += 1;
      } // upper left
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
    if ((num - this.#colunm) >= 0 && this.#dataArray[num - this.#colunm] === 0) {
      this.#clickBlank(num - this.#colunm);
    }
    if (
      (num + this.#colunm) < this.#colunm * this.#row &&
      this.#dataArray[num + this.#colunm] === 0
    ) {
      this.#clickBlank(num + this.#colunm);
    }
    if (
      (num - 1) >= 0 && (num - 1) % this.#colunm !== this.#colunm - 1 &&
      this.#dataArray[num - 1] === 0
    ) {
      this.#clickBlank(num - 1);
    }
    if ((num + 1) < this.#colunm * this.#row && (num + 1) % this.#colunm !== 0 &&
    this.#dataArray[num + 1] === 0) {
      this.#clickBlank(num + 1);
    }
  };

  #render = () => {
    this.#temSet.forEach((num) => {
      this.#elementArr[num].style.backgroundColor = 'skyblue';
    });
  };
}
