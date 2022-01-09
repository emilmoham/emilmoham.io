import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Archive } from  './Archive'
import { Blog } from './Blog'
import { Home } from './Home'
import { NoMatch } from './NoMatch'
import { Layout } from './components/Layout'
import { NavigationBar } from './components/NavigationBar'

import './index.css'

class App extends Component {
  render() {
    return(
      <React.Fragment>
        <NavigationBar />
        <Layout>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Archive" element={<Archive />} />
              <Route path="/Blog/:uuid" element={<Blog  />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </Router>
          </Layout>
      </React.Fragment>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);