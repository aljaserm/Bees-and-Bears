# README.md

## Loan Calculator Backend

This project is a basic loan calculator for a digital lending product, implemented using Django. The application maintains a list of customers and their respective loan offers, and it provides an API to create and manage these entities.

## Table of Contents

- [Models](#models)
- [API Endpoints](#api-endpoints)
- [Validation](#validation)
- [Testing](#testing)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Tests](#running-tests)
- [Accessing the Application](#accessing-the-application)
- [Consuming the API from the Frontend](#consuming-the-api-from-the-frontend)
- [Details about the Project](#details-about-the-project)
- [Documentation](#documentation)
- [Design Choices](#design-choices)
- [Assumptions and Shortcuts](#assumptions-and-shortcuts)

### Models

- **Customer**: Represents a customer with fields for first name, last name, and email.
- **LoanOffer**: Represents a loan offer with fields for customer, loan amount, interest rate, loan term, and monthly payment.

### API Endpoints

- **POST /api/customers/**: Create a new customer.
- **GET /api/customers/{id}/**: Retrieve details of a customer.
- **POST /api/loanoffers/**: Create a loan offer for a customer.

### Validation

The backend includes validation to ensure:

- Customer names do not contain numbers and are not empty or whitespace.
- Email addresses are valid.
- Loan amounts, interest rates, and loan terms are positive values.

### Testing

Unit tests are provided to verify the functionality of the backend application. These tests include:

- Creating a customer with valid and invalid data.
- Creating a loan offer with valid and invalid data.

### Getting Started

#### Prerequisites

- Python 3.11
- Django 5.0.6
- Virtualenv

#### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```
   cd backend
   ```

3. Create and activate a virtual environment:

   ```
   python -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
   ```

4. Install the required packages:

   ```
   pip install -r requirements.txt
   ```
5. Create Migrations:
   ```
   python manage.py makemigrations
   ```

6. Apply the migrations:

   ```
   python manage.py migrate
   ```

7. Run the development server:

   ```
   python manage.py runserver
   ```

#### Running Tests

To run the tests, use the following command:

```
python manage.py test api.tests
```

### Running Tests with Coverage

To run tests with coverage, use the following commands:

```
coverage run --source='api' manage.py test
coverage report
```

To generate an HTML coverage report, use:

```
coverage html
```

Open htmlcov/index.html in a web browser to view the detailed coverage report.

### Accessing the Application

By default, navigating to `http://127.0.0.1:8000/` will redirect you to the Swagger documentation. To view the API documentation, visit:
http://127.0.0.1:8000/swagger/


### Consuming the API from the Frontend

To consume the API from the frontend, you can use HTTP requests with libraries like Axios or Fetch in JavaScript. Here is a basic example using Axios:

```javascript
import axios from 'axios';

const fetchCustomers = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/customers/');
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching customers:', error);
    }
};

fetchCustomers();
```

### Details about the Project

This project is designed to evaluate technical skills, problem-solving abilities, coding practices, and understanding of modern development tools in the context of a digital lending platform for green technologies. The system allows the creation of loan offers based on user input and includes logic for calculating monthly payments based on the loan amount, interest rate, and term using the standard loan amortization formula.

### Documentation

- **API Documentation**: Detailed API documentation can be generated using `drf_yasg`. To access the API documentation, run the server and navigate to `/swagger/` or `/redoc/` in your browser.

### Design Choices

- **Django**: Chosen for its robustness and ease of use for building web applications.
- **SQLite**: Used as the data store for simplicity and ease of setup.
- **REST Framework**: Used for building the API endpoints, providing powerful serialization and validation capabilities.

### Assumptions and Shortcuts

- The project is implemented with basic validation and error handling.
- The frontend is not included in this part of the project but will be implemented using React.
- The project is designed to be completed in a short amount of time, so some advanced features and optimizations are not included.
