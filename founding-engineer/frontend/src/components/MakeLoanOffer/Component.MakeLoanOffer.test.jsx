import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import MakeLoanOffer from './Component.MakeLoanOffer';
import { createLoanOffer } from '../../services/apiService';

jest.mock('../../services/apiService');

describe('MakeLoanOffer Component', () => {
    test('renders MakeLoanOffer component', () => {
        render(<MakeLoanOffer />);
        const heading = screen.getByRole('heading', { name: /create loan offer/i });
        expect(heading).not.toBeNull();
    });

    test('submits form with valid data', async () => {
        createLoanOffer.mockResolvedValue({ data: { id: 1 } });

        render(<MakeLoanOffer />);

        fireEvent.change(screen.getByLabelText(/customer id/i), { target: { value: '1' } });
        fireEvent.change(screen.getByLabelText(/loan amount/i), { target: { value: '1000' } });
        fireEvent.change(screen.getByLabelText(/interest rate/i), { target: { value: '5' } });
        fireEvent.change(screen.getByLabelText(/loan term/i), { target: { value: '12' } });

        fireEvent.click(screen.getByRole('button', { name: /create loan offer/i }));

        await waitFor(() => {
            const successMessage = screen.getByText(/loan offer created successfully/i);
            expect(successMessage).not.toBeNull();
        });
    });
});