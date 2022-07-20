import Core from './core';



export default function InputTest() {
  console.log('111');
  const test = new Core();
  const inputTest = document.createElement('input');
  inputTest.style.width = '100px';
  document.body.append(inputTest);
  inputTest.onkeydown = (e) => {
    test.onMove(e);
  };
  return inputTest;
}
