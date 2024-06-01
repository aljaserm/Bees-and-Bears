import React, { useState } from 'react';
import { createLoanOffer } from '../../services/apiService';
import '../../styles/style.css';

/**
 * Component to create a new loan offer
 * @component
 */
const MakeLoanOffer = () => {
    const [customerId, setCustomerId] = useState('');
    const [loanAmount, setLoanAmount] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [loanTerm, setLoanTerm] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!customerId.trim() || !loanAmount.trim() || !interestRate.trim() || !loanTerm.trim()) {
            setError('All fields are required.');
            return;
        }

        const loanOfferData = {
            customer: customerId.trim(),
            loan_amount: parseFloat(loanAmount.trim()),
            interest_rate: parseFloat(interestRate.trim()),
            loan_term: parseInt(loanTerm.trim(), 10),
        };

        try {
            await createLoanOffer(loanOfferData);
            setSuccess('Loan offer created successfully.');
            setCustomerId('');
            setLoanAmount('');
            setInterestRate('');
            setLoanTerm('');
        } catch (error) {
            setError('Failed to create loan offer');
        }
    };

    return (
        <div className="make-loan-offer-container">
            <h2>Create Loan Offer</h2>
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
                <div>
                    <label htmlFor="loanAmount">Loan Amount:</label>
                    <input
                        id="loanAmount"
                        type="text"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="interestRate">Interest Rate:</label>
                    <input
                        id="interestRate"
                        type="text"
                        value={interestRate}
                        onChange={(e) => setInterestRate(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="loanTerm">Loan Term (in months):</label>
                    <input
                        id="loanTerm"
                        type="text"
                        value={loanTerm}
                        onChange={(e) => setLoanTerm(e.target.value)}
                    />
                </div>
                <button type="submit">Create Loan Offer</button>
                {error && <p className="error">{error}</p>}
                {success && <p className="success">{success}</p>}
            </form>
        </div>
    );
};

export default MakeLoanOffer;