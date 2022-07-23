// const { createElement } = require('react');

export default class Core {
  // #region 字段定义
  #score = 0; // 得分

  #map = []; // 对应视图的显示数据 4*4 Array for save data;

  #mapCopy; // 用于对比map是否发生变化

  #emptyPos = []; // 存放空位置的数组 maxLength 16 for save

  #removeZeroArray = []; // 用于将零后移

  #mergeArray = []; // 用于按下方向键后的数据合并

  #eleArr = []; // 存放页面元素的数组,与map行列对应 4*4 Array for save display element;

  // 数值匹配颜色的枚举
  #colorMap = {
    0: 'Black',
    2: 'Gray',
    4: 'Red',
    8: 'Green',
    16: 'Yellow',
    32: 'Blue',
    64: 'Magenta',
    128: 'Cyan',
    256: 'DarkYellow',
    512: 'DarkBlue',
    1024: 'DarkGreen',
    else: 'DarkRed',
  };

  // #endregion
  constructor() {
    // 初始化
    this.#eleArr = [
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
    ];
    this.#mapCopy = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];
    this.#createElementArr();
    this.#map = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];
    this.#onNext();
    this.#onNext();
  }

  // 创建页面元素,存放入eleArr
  #createElementArr = () => {
    const container = document.querySelector('.container');
    document.addEventListener('keyup', (e) => {
      this.onMove(e);
    })
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        const div = document.createElement('div');
        div.className = 'ele_2048';
        div.style.width = '50px';
        div.style.height = '50px';
        container.append(div);
        this.#eleArr[i][j] = div;
      }
    }
  };

  // 将0后移
  #removeZero = () => {
    this.#removeZeroArray = [0, 0, 0, 0];
    let j = 0;
    for (let i = 0; i < this.#mergeArray.length; i++) {
      if (this.#mergeArray[i] !== 0) {
        // eslint-disable-next-line no-plusplus
        this.#removeZeroArray[j++] = this.#mergeArray[i];
      }
    }
    this.#mergeArray = [...this.#removeZeroArray];
  };

  // 记录当前map
  #recordMap = () => {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        this.#mapCopy[i][j] = this.#map[i][j];
      }
    }
  };

  // 对比map是否变化
  #compteIsMapChange = () => {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (this.#mapCopy[i][j] !== this.#map[i][j]) {
          this.#onNext();
          return;
        }
      }
    }
    // 若没有变化,计算游戏是否结束
    this.#compteEmptyPos();
  };

  // 合并
  #merge = () => {
    this.#removeZero();
    for (let i = 0; i < this.#mergeArray.length - 1; i++) {
      if (this.#mergeArray[i] !== 0 && this.#mergeArray[i] === this.#mergeArray[i + 1]) {
        this.#mergeArray[i] *= 2;
        this.#score += this.#mergeArray[i] * this.#mergeArray[i];
        this.#mergeArray[i + 1] = 0;
      }
    }
    this.#removeZero();
  };

  // #region 移动
  onMove = (e) => {
    const { keyCode } = e;
    if (![37, 38, 39, 40].includes(keyCode)) {
      return;
    }
    this.#recordMap();
    switch (keyCode) {
      case 37:
        this.#moveToLeft();
        break;
      case 38:
        this.#moveToUp();
        break;
      case 39:
        this.#moveToRight();
        break;
      case 40:
        this.#moveToDown();
        break;
      default:
        break;
    }
    this.#compteIsMapChange();
  };

  #moveToUp = () => {
    for (let c = 0; c < 4; c++) {
      for (let r = 0; r < 4; r++) {
        this.#mergeArray[r] = this.#map[r][c];
      }
      this.#merge();
      for (let r = 0; r < 4; r++) {
        this.#map[r][c] = this.#mergeArray[r];
      }
    }
  };

  #moveToDown = () => {
    for (let c = 0; c < 4; c++) {
      for (let r = 3; r >= 0; r--) {
        this.#mergeArray[3 - r] = this.#map[r][c];
      }
      this.#merge();
      for (let r = 3; r >= 0; r--) {
        this.#map[r][c] = this.#mergeArray[3 - r];
      }
    }
  };

  #moveToLeft = () => {
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 4; c++) {
        this.#mergeArray[c] = this.#map[r][c];
      }
      this.#merge();
      for (let c = 0; c < 4; c++) {
        this.#map[r][c] = this.#mergeArray[c];
      }
    }
  };

  #moveToRight = () => {
    for (let r = 0; r < 4; r++) {
      for (let c = 3; c >= 0; c--) {
        this.#mergeArray[3 - c] = this.#map[r][c];
      }
      this.#merge();
      for (let c = 3; c >= 0; c--) {
        this.#map[r][c] = this.#mergeArray[3 - c];
      }
    }
  };

  // #endregion
  #compteEmptyPos = () => {
    this.#emptyPos.length = 0;
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        this.#map[i][j] === 0 && this.#emptyPos.push([i, j]);
      }
    }
    // 没有空位置时游戏结束
    // eslint-disable-next-line no-alert
    this.#emptyPos.length === 0 && alert('game over');
  };

  // 随机在一个空位置放入2(90%)或4(10%)
  #randomNewNum = () => {
    const randomPos = this.#emptyPos[Math.floor(Math.random() * this.#emptyPos.length)];
    const newNum = Math.floor(Math.random() * 10) === 0 ? 4 : 2;
    this.#map[randomPos[0]][randomPos[1]] = newNum;
  };

  // 在屏幕显示
  #displayOnScreen = () => {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        const value = this.#map[i][j];
        this.#eleArr[i][j].innerText = value;
        this.#eleArr[i][j].style.background = this.#colorMap[value];
      }
    }
  };

  // map发生变化后的流程
  #onNext = () => {
    this.#compteEmptyPos();
    this.#randomNewNum();
    // console.log(this.#score);
    this.#displayOnScreen();
  };
}

// const test = new Core();
