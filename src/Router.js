import React from 'react';
import Main from 'pages/Main';
import View from 'pages/View';
import { Routes, Route } from 'react-router-dom';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/view" element={<View />} />
    </Routes>
  );
};

export default Router;
