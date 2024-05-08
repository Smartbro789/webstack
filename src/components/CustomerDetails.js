import React from 'react';
import { Customer } from '../models/customer';

class CustomerDetails extends React.Component {
    render() {
        const customer = this.props.customer;

        if (!customer) {
            return <div></div>;
        }

        return (
            <div>
                <h2>{customer.name}</h2>
                <p>Email: {customer.email}</p>
            </div>
        );
    }
}

export default CustomerDetails;