import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home_page";
import NavBar from "./components/nav_bar";
import AboutPage from "./pages/about_page";
import DashboardPage from "./pages/dashboard_page";

class App extends Component {
  render () {
    return (
        <div className="App">
          <NavBar/>
          <main>
            <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route path="/home" component={HomePage}/>
              <Route path="/about" component={AboutPage}/>
              <Route path="/dashboard" component={DashboardPage}/>
            </Switch>
          </main>
        </div>
    );
  }
}

export default App;
