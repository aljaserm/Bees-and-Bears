import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoanCalculator from './components/LoanCalculator/Component.LoanCalculator';
import CreateCustomer from './components/CreateCustomer/Component.CreateCustomer';
import GetCustomer from './components/GetCustomer/Component.GetCustomer.jsx';
import MakeLoanOffer from './components/MakeLoanOffer/Component.MakeLoanOffer';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <nav>
                    <ul>
                        <li><Link to="/">Loan Calculator</Link></li>
                        <li><Link to="/create-customer">Create Customer</Link></li>
                        <li><Link to="/get-customer">Get Customer</Link></li>
                        <li><Link to="/make-loan-offer">Make Loan Offer</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<LoanCalculator />} />
                    <Route path="/create-customer" element={<CreateCustomer />} />
                    <Route path="/get-customer" element={<GetCustomer />} />
                    <Route path="/make-loan-offer" element={<MakeLoanOffer />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;