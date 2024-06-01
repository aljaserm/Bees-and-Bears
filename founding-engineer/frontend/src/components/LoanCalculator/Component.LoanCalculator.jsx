import React, { useState } from 'react';
import '../../styles/style.css';

/**
 * Component to calculate loan payments.
 * @component
 */
const LoanCalculator = () => {
    const [loanAmount, setLoanAmount] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [loanTerm, setLoanTerm] = useState('');
    const [monthlyPayment, setMonthlyPayment] = useState(null);

    const calculateMonthlyPayment = (loanAmount, interestRate, loanTerm) => {
        const monthlyRate = interestRate / 100 / 12;
        const payment = (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -loanTerm));
        return payment.toFixed(2);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const monthlyPayment = calculateMonthlyPayment(parseFloat(loanAmount), parseFloat(interestRate), parseInt(loanTerm));
        setMonthlyPayment(monthlyPayment);
    };

    return (
        <div>
            <h1>Loan Calculator</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="loanAmount">Loan Amount:</label>
                    <input id="loanAmount" type="number" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="interestRate">Interest Rate (%):</label>
                    <input id="interestRate" type="number" step="0.01" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="loanTerm">Loan Term (months):</label>
                    <input id="loanTerm" type="number" value={loanTerm} onChange={(e) => setLoanTerm(e.target.value)} required />
                </div>
                <button type="submit">Calculate</button>
            </form>
            {monthlyPayment && (
                <div>
                    <h2>Monthly Payment: ${monthlyPayment}</h2>
                </div>
            )}
        </div>
    );
};

export default LoanCalculator;