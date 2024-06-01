import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

/**
 * Create a new customer
 * @param {Object} customerData - Customer details
 * @returns {Promise<Object>} Axios response promise with customer data
 */
export const createCustomer = async (customerData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}customers/`, customerData);
        return response.data;
    } catch (error) {
        throw new Error(`Failed to create customer: ${error.response ? error.response.data : error.message}`);
    }
};

/**
 * Get customer details by ID
 * @param {number} id - Customer ID
 * @returns {Promise<Object>} Axios response promise with customer details
 */
export const getCustomer = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}customers/${id}/`);
        return response.data;
    } catch (error) {
        throw new Error(`Failed to retrieve customer: ${error.response ? error.response.data : error.message}`);
    }
};

/**
 * Create a new loan offer
 * @param {Object} loanOfferData - Loan offer details
 * @returns {Promise<Object>} Axios response promise with loan offer data
 */
export const createLoanOffer = async (loanOfferData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}loanoffers/`, loanOfferData);
        return response.data;
    } catch (error) {
        throw new Error(`Failed to create loan offer: ${error.response ? error.response.data : error.message}`);
    }
};