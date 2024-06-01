import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CreateCustomer from './Component.CreateCustomer';
import { createCustomer } from '../../services/apiService';

jest.mock('../../services/apiService');

describe('CreateCustomer Component', () => {
    test('renders CreateCustomer component', () => {
        render(<CreateCustomer />);
        const heading = screen.getByRole('heading', { name: /create customer/i });
        expect(heading).not.toBeNull();
    });

    test('submits form with valid data', async () => {
        createCustomer.mockResolvedValue({ data: { id: 1 } });

        render(<CreateCustomer />);

        fireEvent.change(screen.getByLabelText(/first name/i), { target: { value: 'John' } });
        fireEvent.change(screen.getByLabelText(/last name/i), { target: { value: 'Doe' } });
        fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john.doe@example.com' } });

        fireEvent.click(screen.getByRole('button', { name: /create customer/i }));

        await waitFor(() => {
            const successMessage = screen.getByText(/customer created successfully/i);
            expect(successMessage).not.toBeNull();
        });
    });
});