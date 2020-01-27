import React from 'react';
import ReactDom from 'react-dom';
import Spinner from './Spinner';
import NavBar from './NavBar';
import './background.css';

class App extends React.Component { 

    state = { nav: null };

    renderContent() {
        return (
            
            <NavBar />
        );
    }

    render() {
        return (
            <div className={`bgimg-1`}>
                {this.renderContent()}
            </div>
        )
    }
}

export default App;