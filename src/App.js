import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './router';
import Core from './2048/core';

const test = new Core();
const inputTest = document.createElement('input');
inputTest.style.width = '100px';
document.body.append(inputTest);
inputTest.onkeydown = (e) => {
  test.onMove(e);
};

const list = routes.map((obj) => {
  const { path, component } = obj;
  return <Route key={path} path={path} component={component} />;
});
console.log(list);
function App() {
  return <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {list}
      </Routes>
    </Suspense>
  </Router>
}

export default App;
