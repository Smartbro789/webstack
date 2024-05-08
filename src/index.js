import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import withValidation from './hoc/withValidation';
import CustomerForm from './components/CustomerForm';
import CustomerList from './components/CustomerList';
import CustomerDetails from './components/CustomerDetails';
import Header from './components/Header';
import Footer from './components/Footer';

const CustomerFormWithValidation = withValidation(CustomerForm);
const CustomerListWithValidation = withValidation(CustomerList);
const CustomerDetailsWithValidation = withValidation(CustomerDetails);

ReactDOM.render(
    <Router>
        <div className="container">
            <Header />
            <CustomerFormWithValidation />
            <CustomerListWithValidation />
            <CustomerDetailsWithValidation />
            <Footer />
        </div>
    </Router>,
    document.getElementById('root')
);