import React, { useState } from 'react';
import { getCustomer } from '../../services/apiService';
import '../../styles/style.css';

/**
 * Component to get a customer's details
 * @component
 */
const GetCustomer = () => {
    const [customerId, setCustomerId] = useState('');
    const [customer, setCustomer] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setCustomer(null);

        if (!customerId.trim()) {
            setError('Customer ID is required.');
            return;
        }

        try {
            const data = await getCustomer(customerId.trim());
            setCustomer(data);
        } catch (error) {
            setError('Failed to fetch customer');
        }
    };

    return (
        <div className="get-customer-container">
            <h2>Get Customer</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="customerId">Customer ID:</label>
                    <input
                        id="customerId"
                        type="text"
                        value={customerId}
                        onChange={(e) => setCustomerId(e.target.value)}
                    />
                </div>
                <button type="submit">Get Customer</button>
                {error && <p className="error">{error}</p>}
                {customer && (
                    <div className="customer-details">
                        <p><strong>ID:</strong> {customer.id}</p>
                        <p><strong>First Name:</strong> {customer.first_name}</p>
                        <p><strong>Last Name:</strong> {customer.last_name}</p>
                        <p><strong>Email:</strong> {customer.email}</p>
                    </div>
                )}
            </form>
        </div>
    );
};

export default GetCustomer;