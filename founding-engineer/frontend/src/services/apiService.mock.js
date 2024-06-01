const API_BASE_URL = process.env.VITE_API_BASE_URL;

/**
 * Mocked API service for unit tests
 */

export const createCustomer = async (customerData) => {
    return Promise.resolve({ data: { id: 1, ...customerData } });
};

export const getCustomer = async (id) => {
    return Promise.resolve({ data: { id, first_name: 'John', last_name: 'Doe', email: 'john.doe@example.com' } });
};

export const createLoanOffer = async (loanOfferData) => {
    return Promise.resolve({ data: { id: 1, ...loanOfferData } });
};