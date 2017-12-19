import React from 'react';
import './Header.css';

class Header extends React.PureComponent {
    render() {
        return (
            <header className="Header">
                <img src="logo_totoro.png" className="App-logo" alt="totoro" />
                <h1 className="App-title">Welcome to Ghibli Explorer</h1>
            </header>
        );
    }
}

export default Header;
