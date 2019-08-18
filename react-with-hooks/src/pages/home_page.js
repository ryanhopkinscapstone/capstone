import logo from "../logo.svg";
import React from "react";


// Create home page, left default logo and link to react on page due to lack of main page content at the moment
function HomePage() {
    return (
        <div id="home_page" className="App-page App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Edit <code>src/App.js</code> and save to reload.</p>
            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                Learn React
            </a>
        </div>
    );
}

export default HomePage;