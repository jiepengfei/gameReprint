import { useEffect } from 'react';
import Core from './core';
import './index.css';

function InputTest() {
  useEffect(() => {
    new Core();
    // const inputTest = document.createElement('input');
    // inputTest.style.width = '100px';
    // document.body.append(inputTest);
    // inputTest.onkeydown = (e) => {
    //   test.onMove(e);
    // };
  }, [])
  return (
    <div className='main'>
      <div className='head'>
        <div className='button'>
          <span className='backToMenu'>&lt;</span>
          <span className='refresh'>○</span>
        </div>
        <div className='score'>
          <div className='currentScore'></div>
          <div className='bestScore'></div>
        </div>
      </div>
      <div className='container'></div>
      <div className='bottom'>
        <div className='moveCount'></div>
        <div className='currentTime'></div>
      </div>
    </div>
  )
}

export default InputTest;
