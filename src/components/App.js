import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import "./css/global.css";



class App extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <NavBar />
                </div>
                <div className="app-body">
                        <Route exact path='/' component={Home} />
                        <Route exact path='/Projects' component={Projects} />
                        <Route exact path='/Contact' component={Contact} />
                </div>
            </Router>
        );
    }
}


export default App;