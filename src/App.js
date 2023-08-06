import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home';
import SingleUser from './components/users/most_followed_users/SingleUser';
import MostFollowedUsersPage from './components/users/most_followed_users/MostFollowedUsersPage';
import MostStarredRepositoriesPage from './components/repos/MostStarredRepositoriesPage';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/user/:login" element={<SingleUser />} />
          <Route
            exact
            path="/users/:users"
            element={<MostFollowedUsersPage />}
          />
          <Route
            exact
            path="/repos/:repos"
            element={<MostStarredRepositoriesPage />}
          />
          <Route exact path="/about" element={<About />} />
          <Route path="*" exact={true} element={<NotFound />} />
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default App;
