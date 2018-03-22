import React, { Component } from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import LandingPage from './LandingPage';
import IssueRouter from './Issues/IssueRouter';
import Profile from './Profile/Profile';

class DataRouter extends Component {
  constructor(){
    super();
  }

  render(){
    return(
      <div id="data">
        <nav id="global-nav">
          <Link to="/home"><i class="fas fa-code"></i></Link>
          <div id="search">
            <input id="search-bar" placeholder="Search" />
            <button id="search-button"><i class="fas fa-search"></i></button>
          </div>
          <Link to="/issues">Issues</Link>
          <Link to="/profile"><i class="fas fa-user"></i></Link>
        </nav>
          <Redirect to="/home"/>
          <Switch>
          <Route path="/home" component={LandingPage} />
          <Route path="/issues" component={IssueRouter} />
          <Route path="/profile" component={Profile} />
          </Switch>
          <div id="footer">
            <i class="fa fa-github" aria-hidden="true"></i>
            <p>Monique - Simon - Newton - Elon - Carlo</p>
          </div>
      </div>
    )
  }
}

export default DataRouter
