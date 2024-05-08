import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomerForm from './components/CustomerForm';
import CustomerList from './components/CustomerList';
import CustomerDetails from './components/CustomerDetails';
import Header from './components/Header';
import Footer from './components/Footer';

ReactDOM.render(
    <Router>
        <div className="container">
            <Header />
            <CustomerForm />
            <CustomerList />
            <CustomerDetails />
            <Footer />
        </div>
    </Router>,
    document.getElementById('root')
);