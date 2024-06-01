import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import GetCustomer from './Component.GetCustomer';
import { getCustomer } from '../../services/apiService';

jest.mock('../../services/apiService');

describe('GetCustomer Component', () => {
    test('renders GetCustomer component', () => {
        render(<GetCustomer />);
        const heading = screen.getByRole('heading', { name: /get customer/i });
        expect(heading).not.toBeNull();
    });

    test('shows error with invalid id', async () => {
        getCustomer.mockRejectedValue(new Error('Failed to fetch customer'));

        render(<GetCustomer />);

        fireEvent.change(screen.getByLabelText(/customer id/i), { target: { value: '999' } });
        fireEvent.click(screen.getByRole('button', { name: /get customer/i }));

        await waitFor(() => {
            const errorMessage = screen.getByText(/failed to fetch customer/i);
            expect(errorMessage).not.toBeNull();
        });
    });
});