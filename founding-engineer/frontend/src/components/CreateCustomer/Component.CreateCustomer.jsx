import React, { useState } from 'react';
import { createCustomer } from '../../services/apiService';
import '../../styles/style.css';

/**
 * Component to create a new customer.
 * @component
 */
const CreateCustomer = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!firstName.trim() || !lastName.trim() || !email.trim()) {
            setError('All fields are required.');
            return;
        }

        const customerData = {
            first_name: firstName.trim(),
            last_name: lastName.trim(),
            email: email.trim(),
        };

        try {
            await createCustomer(customerData);
            setSuccess('Customer created successfully.');
            setFirstName('');
            setLastName('');
            setEmail('');
        } catch (error) {
            setError('Failed to create customer');
        }
    };

    return (
        <div className="create-customer-container">
            <h2>Create Customer</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        id="firstName"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        id="lastName"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button type="submit">Create Customer</button>
                {error && <p className="error">{error}</p>}
                {success && <p className="success">{success}</p>}
            </form>
        </div>
    );
};

export default CreateCustomer;