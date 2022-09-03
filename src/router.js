import Index from './games/index/index';
import InputTest from './games/2048';
import Minesweeper from './games/minesweeper';
import CardGame from './games/cardGame';

const routeList = [
  {
    path: '/',
    component: Index,
  },
  {
    path: '/2048',
    component: InputTest,
  },
  {
    path: '/minesweeper',
    component: Minesweeper,
  },
  {
    path: '/CardGame',
    component: CardGame,
  },
];

export default routeList;
