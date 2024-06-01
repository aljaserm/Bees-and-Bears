import { jest } from '@jest/globals';
import dotenv from 'dotenv';


jest.mock('axios');

dotenv.config({ path: './.env.test' });

global.import = { meta: { env: process.env } };

// Mock API service functions
jest.mock('./src/services/apiService', () => ({
    createCustomer: jest.fn(),
    getCustomer: jest.fn(),
    createLoanOffer: jest.fn(),
}));