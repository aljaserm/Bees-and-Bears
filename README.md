Here's the updated `README.md` with corrected hyperlinks and improved wording:

# Bees-and-Bears Project

This project consists of a backend and a frontend for a digital lending product. The backend is implemented using Django and provides an API for managing customers and loan offers. The frontend is built using React and Vite to interact with the backend API.

## Table of Contents
- [Project Structure](#project-structure)
- [Backend](#backend)
  - [Models](#models)
  - [API Endpoints](#api-endpoints)
  - [Validation](#validation)
  - [Testing](#testing)
  - [Getting Started](#getting-started)
  - [Running Tests](#running-tests)
  - [Running Tests with Coverage](#running-tests-with-coverage)
  - [Accessing the Application](#accessing-the-application)
  - [Consuming the API from the Frontend](#consuming-the-api-from-the-frontend)
  - [Details about the Project](#details-about-the-project)
  - [Documentation](#documentation)
  - [Design Choices](#design-choices)
  - [Assumptions and Shortcuts](#assumptions-and-shortcuts)
- [Frontend](#frontend)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
  - [Running Tests](#running-tests)
  - [Configuration](#configuration)
  - [Dependencies](#dependencies)
- [Docker Setup](#docker-setup)
  - [Docker Installation](#docker-installation)
  - [Building and Running Containers](#building-and-running-containers)
  - [Accessing the Application](#accessing-the-application)
  - [Stopping the Containers](#stopping-the-containers)
- [CI/CD with GitHub Actions](#cicd-with-github-actions)
- [Note](#note)

## Project Structure
This is the project structure on a high level:
- backend
- deploy
- frontend

## Backend

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

### Running Tests

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

Open `htmlcov/index.html` in a web browser to view the detailed coverage report.

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

## Frontend

### Installation

To install the project dependencies, run:

```
npm install
```

### Running the Project

To start the development server, use:

```
npm run dev
```

To build the project for production, use:

```
npm run build
```

To preview the production build, use:

```
npm run preview
```

### Running Tests

To run the test suite, use:

```
npm run test
```

### Configuration

#### .env

Contains environment variables for the development environment.

#### .env.test

Contains environment variables for the test environment.

#### jest.config.cjs

Configuration for Jest, the testing framework.

#### babel.config.cjs

Configuration for Babel, the JavaScript compiler.

### Dependencies

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A build tool that aims to provide a faster and leaner development experience for modern web projects.
- **Axios**: A promise-based HTTP client for the browser and Node.js.
- **Jest**: A delightful JavaScript testing framework with a focus on simplicity.
- **@testing-library/react**: Simple and complete testing utilities that encourage good testing practices.

For a complete list of dependencies, refer to the `package.json` file.

### Assumptions and Shortcuts

- The project is implemented with basic validation and error handling.
- The frontend is not included in this part of the project but will be implemented using React.
- The project is designed to be completed in a short amount of time, so some advanced features and optimizations are not included.
- Some test cases were skipped due to time constraints.

## Docker Setup

### Docker Installation

Ensure you have Docker and Docker Compose installed on your system. Follow the instructions from the official Docker [documentation](https://docs.docker.com/get-docker/) to install Docker.

### Building and Running Containers

1. Navigate to the `deploy` directory:

   ```
   cd deploy
   ```

2. Build and start the Docker containers:

   ```
   docker-compose up --build
   ```

This command will build the Docker images for the backend, frontend, and database services and start the containers.

### Accessing the Application

- **Backend**: The backend service will be available at [http://localhost:8000](http://localhost:8000).
- **Frontend**: The frontend service will be available at [http://localhost:5000](http://localhost:5000).

### Stopping the Containers

To stop the running containers, use:

```
docker-compose down
```

This will stop and remove the containers created by `docker-compose up`.

## CI/CD with GitHub Actions

I have also set up continuous integration and deployment (CI/CD) using GitHub Actions to demonstrate my ability to work on a project end-to-end. The CI/CD pipeline includes:

- **Automated Testing**: Running tests on every push to ensure code quality.
- **Docker Build and Push**: Building Docker images and pushing them to a container registry.
- **Deployment**: Deploying the latest images to the production environment.

The GitHub Actions workflow files are located in the `.github/workflows` directory.

## Note

In this project, I proactively extended beyond the initial requirements by implementing Docker and setting up CI/CD pipelines using GitHub Actions. By integrating these advanced practices, I aimed to showcase my comprehensive skills and capability to manage projects from inception to deployment. This initiative highlights my proficiency in containerization, automation, and continuous delivery, ensuring the project is built, tested, and deployed with optimal efficiency and reliability.

