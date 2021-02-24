import React from 'react';
import { Container, Grid } from '@material-ui/core';

import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';
import Contact from './pages/Contact/Contact';

import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Particles from 'react-particles-js';

function App() {
  return (
    <Container className={'top_60'} >
      <Particles
        className="particles_canvas"
        params={{
          "particles": {
            "number": {
              "value": 50
            },
            "size": {
              "value": 3
            },
            "shape": {
              "stroke": {
                "width": "6",
                "color": "#53e2f5"
              }
            }
          },
          "interactivity": {
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              }
            }
          }
        }} />
      <Grid container spacing={7}>
        <Grid item xs={12} sm={12} md={4} lg={3} className="perfi">
          <Profile />
        </Grid>
        <Grid item xs>
          <Router>
            <Header className="header" />
            <div className="main-content container_shadow">
              <Switch>
                <Route path="/portfolio/port">
                  <Portfolio />
                </Route>
                <Route path="/portfolio/contact">
                  <Contact />
                </Route>
                <Route path="/portfolio">
                  <Resume />
                </Route>
              </Switch>
            </div>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
