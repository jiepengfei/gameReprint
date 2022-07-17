// const { createElement } = require('react');

export default class Core {
  currentArr = [];

  emptyPos = [];

  eleArr = [];

  constructor() {
    this.eleArr = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];
    this.createElementArr();
    this.currentArr = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];
    
    this.onNext();
    this.onNext();
  }

  createElementArr = () => {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        const div = document.createElement('div');
        div.style.width = '20px';
        div.style.height = '20px';
        div.style.background = 'skyblue';
        const body = document.body;
        body.appendChild(div);

        console.log(this.eleArr,div);
        this.eleArr[i][j] = div;
      }
    }
  };

  onUp = () => {
    // for (let j = 0; j < 4; j++) {}
  };

  directionMerge = () => {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        this.currentArr[i][j] === 0 && this.emptyPos.push([i, j]);
      }
    }
  };

  compteEmptyPos = () => {
    this.emptyPos.length = 0;
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        this.currentArr[i][j] === 0 && this.emptyPos.push([i, j]);
      }
    }
    // this.emptyPos.length === 0 && alert('game over');
  };

  randomNewNum = () => {
    const randomPos = this.emptyPos[Math.floor(Math.random() * this.emptyPos.length)];
    const newNum = Math.floor(Math.random() * 10) === 0 ? 4 : 2;
    this.currentArr[randomPos[0]][randomPos[1]] = newNum;
  };

  displayOnScreen = () => {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        this.eleArr[i][j].innerText = this.currentArr[i][j];
      }
    }
  };

  onNext = () => {
    this.compteEmptyPos();
    this.randomNewNum();
    this.displayOnScreen();
  };
}

const test = new Core();
console.log(test);
