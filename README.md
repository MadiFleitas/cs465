# Travlr Getaways

A full stack travel booking web application developed using the MEAN stack (MongoDB, Express, Angular, Node.js).

![Travlr Getaways Logo](https://raw.githubusercontent.com/MadiFleitas/cs465/main/public/images/logo.png)

## Table of Contents
- [About The Project](#about-the-project)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Functionality](#functionality)
- [Testing](#testing)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

## About The Project
"Travlr Getaways" is designed as a travel booking site where customers can create accounts, search for travel packages by location and price, and view their itineraries. The project also includes an admin portal for managing trips and customer data.

This project was developed as part of my coursework in CS-465 Full Stack Development I, focusing on creating a fully functional web application that meets the client's requirements. For a deeper understanding of the project’s architecture and requirements, refer to the relevant documents.

## Built With
This project utilizes the following frameworks and technologies:
- **Node.js**
- **Express**
- **MongoDB**
- **Angular**

## Getting Started
To install and run this application on your own machine, follow these steps:

### Prerequisites
Make sure you have `npm` installed on your machine.
```bash
npm install npm@latest -g
Installation
To install and run the Travlr Getaways application on your local machine, follow these steps:

Clone the repository:
bash
Copy code
git clone https://github.com/MadiFleitas/cs465.git
Navigate to the server directory:
bash
Copy code
cd cs465/app_server
Install server dependencies:
bash
Copy code
npm install
Start the server:
bash
Copy code
npm run start:server
In a new terminal, navigate to the admin directory:
bash
Copy code
cd ../app_admin
Install frontend dependencies:
bash
Copy code
npm install
Start the Angular development server:
bash
Copy code
ng serve
Open your web browser and navigate to:
For the API: http://localhost:3000
For the Angular frontend: http://localhost:4200
Functionality
The Travlr Getaways application features two main components:

Customer-Facing Website: Users can:

Create and manage their accounts.
Search for travel packages based on location and price.
View their itineraries and book reservations.
Admin Portal: Administrators can:

Log in securely to manage customer data.
Add, edit, or delete travel packages.
Update pricing and availability of trips.
Testing
Testing for the Travlr Getaways application involves several methodologies:

API Testing: Ensure all endpoints function correctly using tools like Postman to verify GET, POST, PUT, and DELETE requests.
Unit Testing: Implement unit tests for critical components using frameworks such as Jasmine and Karma for Angular.
Integration Testing: Validate interactions between the front end and back end to ensure seamless data flow and functionality.
Roadmap
Future improvements for the Travlr Getaways application may include:

Enhanced user authentication features, including OAuth for third-party logins.
Improved UI/UX based on user feedback.
Integration of a search filter for travel packages by multiple criteria.
Addition of payment processing features for booking trips.
Deployment to a cloud service for wider accessibility.
Contributing
Contributions to the Travlr Getaways project are welcome! Here’s how you can help:

Fork the repository.
Create a new branch:
bash
Copy code
git checkout -b feature/YourFeatureName
Make your changes and commit them:
bash
Copy code
git commit -m 'Add some feature'
Push to your branch:
bash
Copy code
git push origin feature/YourFeatureName
Open a pull request.
Please ensure your code adheres to the project’s coding standards and includes appropriate comments.

License
This project is licensed under the MIT License. See the LICENSE file for more details.

Contact
For any inquiries or collaboration opportunities, feel free to reach out to me:

Email: madison.a.fleitas@gmail.com
GitHub: MadiFleitas
LinkedIn: madison-fleitas-40b215185
Acknowledgments
Thanks to Node.js for providing the runtime environment.
Appreciation to Express.js for simplifying server-side development.
Special thanks to MongoDB for its flexible NoSQL database capabilities.
Thanks to Angular for enabling the development of a dynamic single-page application.
