import Index from './games/index/index';
import Test from './games/index/test';
import InputTest from './games/2048';

const routeList = [
  {
    path: '/',
    component: Index,
  },
  {
    path: '/Test',
    component: Test,
  },
  {
    path: '/2048',
    component: InputTest,
  },
];

export default routeList;
