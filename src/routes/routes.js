
// import React, { Suspense, lazy } from 'react';
import React from 'react';
import { BrowserRouter as Router,
  Routes as RouterCover,
  Route, } from 'react-router-dom';
import BusinessCard from '../pages/BusinessCard';
import MoviesPage from '../pages/MoviesPage';




export const Routes = () => {
  return (
    <Router>
      <RouterCover>
        <Route path='/home' element={< MoviesPage />} />
        <Route path='/businesscard' element={< BusinessCard />} />
      </RouterCover>
    </Router>

  );
};
export default Routes;










// const Home = lazy(() => import('./routes/Home'));
// // const About = lazy(() => import('./routes/About'));

// const App = () => (
//   <Router>
//       <Routes>
// <Route path='/' element={<MoviesPage />}>
//         <Route path="/" element={<Home />} />
//         {/* <Route path="/about" element={<About />} /> */}
//         {/* <Route path='shop/*' element={<Shop />} /> */}
// </Route>
//       </Routes>
//   </Router>
// );