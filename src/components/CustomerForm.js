import React from 'react';

class CustomerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customer: {
                id: '',
                name: '',
                email: ''
            },
            errors: {}
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const customer = { ...this.state.customer, [name]: value };
        this.setState({ customer });
    }

    handleSubmit(event) {
        event.preventDefault();
        // ...
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {/* ... */}
            </form>
        );
    }
}

export default CustomerForm;