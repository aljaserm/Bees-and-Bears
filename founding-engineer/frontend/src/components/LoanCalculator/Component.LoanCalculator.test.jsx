import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LoanCalculator from './Component.LoanCalculator';

describe('LoanCalculator Component', () => {
    test('renders LoanCalculator component', () => {
        render(<LoanCalculator />);
        const heading = screen.getByRole('heading', { name: /loan calculator/i });
        expect(heading).not.toBeNull();
    });

    test('calculates loan correctly', async () => {
        render(<LoanCalculator />);

        fireEvent.change(screen.getByLabelText(/loan amount/i), { target: { value: '1000' } });
        fireEvent.change(screen.getByLabelText(/interest rate/i), { target: { value: '5' } });
        fireEvent.change(screen.getByLabelText(/loan term/i), { target: { value: '12' } });

        fireEvent.click(screen.getByRole('button', { name: /calculate/i }));

        await waitFor(() => {
            const monthlyPayment = screen.getByText(/monthly payment/i);
            expect(monthlyPayment).not.toBeNull();
        });
    });
});