import React, { Suspense } from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import Index from './component/index';
import Test from './component/test';
import InputTest from './2048';

function App() {
  return <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Test" element={<Test />} />
        <Route path="/2048" element={<InputTest />} />
        <Route path="*" element={<Navigate to="/" replace />}/>
      </Routes>
    </Suspense>
  </BrowserRouter>
}

export default App;
