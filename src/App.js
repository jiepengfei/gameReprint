import React, { Suspense } from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import routeList from './router';

function App () {
  const routes = routeList.map((item) => {
    return <Route key={item.path} path={item.path} element={<item.component />} />;
  });

  return <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routes}
        <Route path="*" element={<Navigate to="/" replace />}/>
      </Routes>
    </Suspense>
  </BrowserRouter>;
}

export default App;
