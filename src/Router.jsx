import React from 'react';
import MainLayout from 'layout/MainLayout';
import Main from 'pages/Main';
import Result from 'pages/Result';
import View from 'pages/View';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/view" element={<View />} />
          <Route path="/result" element={<Result />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
