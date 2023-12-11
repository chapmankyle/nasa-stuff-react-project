import React, { PureComponent } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Home from './routes/Home';
import Search from './routes/Search';
import Game from './routes/Game';

/**
 * Main app.
 */
export default class App extends PureComponent {

  /** Renders the app UI */
  render() {
    return <BrowserRouter>
      <Header />

      <div id='content'>
        <img id='content-background' draggable='false' src={require('./images/background.jpg')} alt='Stars' />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/game' element={<Game />} />
        </Routes>
      </div>
    </BrowserRouter>
  }

}
