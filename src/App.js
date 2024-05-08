import React from 'react';
import './App.css';
import CustomerList from './components/CustomerList';
import customers from './customers.json';
import NavbarComponent from './components/Navbar';
import FooterComponent from './components/Footer';

function App() {
    return (
        <div className="App">
            <NavbarComponent />
            <CustomerList customers={customers} />
            <FooterComponent />
        </div>
    );
}

export default App;