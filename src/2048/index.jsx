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
  return <div className='container' tabIndex={1}></div>
}

export default InputTest;
