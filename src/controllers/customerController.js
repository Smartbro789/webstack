import { Customer } from '../models/customer';

export class CustomerController {
    constructor() {
        this.customers = [];
    }

    createCustomer(customer) {
        const id = this.customers.length + 1;
        this.customers.push(new Customer(id, customer.name, customer.email));
    }

    getCustomers() {
        return this.customers;
    }

    getCustomer(id) {
        return this.customers.find(customer => customer.id === id);
    }

    updateCustomer(customer) {
        const index = this.customers.findIndex(c => c.id === customer.id);
        this.customers[index] = customer;
    }

    deleteCustomer(id) {
        this.customers = this.customers.filter(customer => customer.id !== id);
    }
}