import React, { FunctionComponent, lazy, Suspense } from 'react';
import { Spin } from 'antd';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';

const Artist = lazy(() => import('./Artist'));

const Router: FunctionComponent = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route
      path="artist/:name"
      element={
        <Suspense fallback={<Spin />}>
          <Artist />
        </Suspense>
      }
    />
  </Routes>
);

export default Router;
