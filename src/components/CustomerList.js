import React, { useState } from 'react';
import {Container, Table, Form, Button} from 'react-bootstrap';

const CustomerList = () => {
    const [customers, setCustomers] = useState([
        { id: 1, name: 'John Doe', email: 'john.doe@example.com', image: '' },
        { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com', image: '' },
    ]);

    const handleAddCustomer = (newCustomer) => {
        setCustomers((prevCustomers) => [...prevCustomers, newCustomer]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newCustomer = {
            id: customers.length + 1,
            name: formData.get('name'),
            email: formData.get('email'),
            image: formData.get('image'),
        };
        handleAddCustomer(newCustomer);
        event.target.reset();
    };

    return (
        <Container>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Image</th>
                </tr>
                </thead>
                <tbody>
                {customers.map((customer) => (
                    <tr key={customer.id}>
                        <td>{customer.id}</td>
                        <td>{customer.name}</td>
                        <td>{customer.email}</td>
                        <td>
                            <img src={customer.image} alt={`${customer.name}'s image`} width="100" />
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
            <Form onSubmit={handleSubmit} encType="multipart/form-data">
                <Form.Group>
                    <Form.Label htmlFor="name">Name</Form.Label>
                    <Form.Control type="text" id="name" name="name" placeholder="Name" required />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="email">Email</Form.Label>
                    <Form.Control type="email" id="email" name="email" placeholder="Email" required />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="image">Image</Form.Label>
                    <Form.Control type="file" id="image" name="image" />
                </Form.Group>
                <Button type="submit">Add Customer</Button>
            </Form>
        </Container>
    );
};

export default CustomerList;