import React, { useEffect, useState } from 'react';
import Minesweeping from './core';
import './index.css';

const Minesweeper = () => {
  const [newGame, initNewGame] = useState(null);
  const clickEvent = (e) => {
    const num = e.target.getAttribute('num');
    newGame.clickEvent(Number(num));
  };
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    initNewGame(new Minesweeping(10, 10));
  }, []);

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
      <div className='container' onClick={clickEvent}></div>
      <div className='bottom'>
        <div className='moveCount'></div>
        <div className='currentTime'></div>
      </div>
    </div>
  );
};

export default Minesweeper;
