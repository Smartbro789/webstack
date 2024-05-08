import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { useState } from 'react';


const CustomerList = () => {
    const [customers, setCustomers] = useState([
        { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
        { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com' },
    ]);

    const handleAddCustomer = (newCustomer) => {
        setCustomers((prevCustomers) => [...prevCustomers, newCustomer]);
    };

    return (
        <Container>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {customers.map((customer) => (
                    <tr key={customer.id}>
                        <td>{customer.id}</td>
                        <td>{customer.name}</td>
                        <td>{customer.email}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const newCustomer = {
                        id: customers.length + 1,
                        name: document.getElementById('name').value,
                        email: document.getElementById('email').value,
                    };
                    handleAddCustomer(newCustomer);
                    document.getElementById('name').value = '';
                    document.getElementById('email').value = '';
                }}
            >
                <input type="text" id="name" placeholder="Name" />
                <input type="email" id="email" placeholder="Email" />
                <button type="submit">Add Customer</button>
            </form>
        </Container>
    );
};

export default CustomerList;