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
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

## About The Project
"Travlr Getaways" is designed as a travel booking site where customers can create accounts, search for travel packages by location and price, and view their itineraries. The project also includes an admin portal for managing trips and customer data.

This project was developed as part of my coursework in CS-465 Full Stack Development I, focusing on creating a fully functional web application that meets the client's requirements. For a deeper understanding of the project’s architecture and requirements, refer to the relevant documents.

### Architecture

For Travlr Getaways, I used different frontend development techniques to deliver a dynamic and interactive user experience. Initially, I served static HTML pages through Express for basic routing, which was great for quick prototypes. As the project moved forward, I integrated JavaScript to add interactivity by handling events and manipulating the DOM. Eventually, I transitioned the project into a single-page application (SPA) using Angular, which made the user experience much smoother by letting content update without having to reload the entire page. The SPA approach really boosted performance by cutting down server requests and making changes directly on the client side.

On the backend, I went with a NoSQL MongoDB database because of its flexibility for handling unstructured data and easy scalability. The schema-less design was especially helpful for managing the various travel package details, customer profiles, and bookings without having to deal with extensive database changes every time requirements evolved. Plus, its JSON-like structure matched well with the rest of the full stack, making it easy to move data between the server and the client.

### Functionality

JSON, or JavaScript Object Notation, is different from JavaScript itself because it's a lightweight format specifically for data exchange, while JavaScript is used for scripting and logic. In Travlr Getaways, JSON played a key role in linking the backend and frontend, acting as the format for API responses that Angular could easily parse and display. This made the interaction between different parts of the app seamless.

Throughout the project, I refactored the code multiple times to improve functionality and efficiency. For instance, I created reusable UI components in Angular, such as travel package cards and booking forms. This approach ensured consistency across the app, reduced code duplication, and sped up the development process. Reusable components made it easier to add new features since existing elements could be adapted as needed.

### Testing

Testing the APIs was crucial for making sure everything worked correctly in Travlr Getaways. I performed different kinds of tests, such as functional tests to ensure the API endpoints handled GET, POST, PUT, and DELETE requests correctly. Adding authentication for the admin portal introduced extra layers of security, which required checking that endpoints not only returned the correct data but also enforced proper access controls. Understanding the use of different request methods (like GET for fetching data and POST for creating new entries) was essential for implementing and testing the API endpoints effectively.

### Reflection

This course has been really helpful in my professional journey, giving me hands-on experience in full stack development. I’ve built up skills in using the MEAN stack to create scalable web applications, and I’ve learned best practices for organizing code, managing state, and securing web apps. These skills have made me a stronger candidate in the job market since I now have practical knowledge in modern web development technologies, backend architecture, and frontend frameworks like Angular. This experience has also boosted my confidence in tackling complex projects, setting me up for success in a software development career.


## Built With
This project utilizes the following frameworks and technologies:
- **Node.js**
- **Express**
- **MongoDB**
- **Angular**

## Getting Started
To install and run this application on your own machine, follow these steps:

## Installation
To install and run the Travlr Getaways application on your local machine, follow these steps:

1. Clone the repository:
   git clone https://github.com/MadiFleitas/cs465.git

2. Navigate to the server directory:
   cd cs465/app_server

3. Install server dependencies:
   npm install

4. Start the server:
   npm run start:server

5. In a new terminal, navigate to the admin directory:
   cd ../app_admin

6. Install frontend dependencies:
   npm install

7. Start the Angular development server:
   ng serve

8. Open your web browser and navigate to:
   - For the API: http://localhost:3000
   - For the Angular frontend: http://localhost:4200

## Functionality
The Travlr Getaways application features two main components:

- Customer-Facing Website: Users can:
  - Create and manage their accounts.
  - Search for travel packages based on location and price.
  - View their itineraries and book reservations.

- Admin Portal: Administrators can:
  - Log in securely to manage customer data.
  - Add, edit, or delete travel packages.
  - Update pricing and availability of trips.

## Testing
Testing for the Travlr Getaways application involves several methodologies:

- API Testing: Ensure all endpoints function correctly using tools like Postman to verify GET, POST, PUT, and DELETE requests.
- Unit Testing: Implement unit tests for critical components using frameworks such as Jasmine and Karma for Angular.
- Integration Testing: Validate interactions between the front end and back end to ensure seamless data flow and functionality.

## Roadmap
Future improvements for the Travlr Getaways application may include:

- Enhanced user authentication features, including OAuth for third-party logins.
- Improved UI/UX based on user feedback.
- Integration of a search filter for travel packages by multiple criteria.
- Addition of payment processing features for booking trips.
- Deployment to a cloud service for wider accessibility.
- 
  ## Contact
For any inquiries or collaboration opportunities, feel free to reach out to me:

- **Email**: [madison.a.fleitas@gmail.com](mailto:madison.a.fleitas@gmail.com)
- **GitHub**: [MadiFleitas](https://github.com/MadiFleitas)
- **LinkedIn**: [madison-fleitas-40b215185](https://www.linkedin.com/in/madison-fleitas-40b215185/)

## Acknowledgments
- Thanks to [Node.js](https://nodejs.org/) for providing the runtime environment.
- Appreciation to [Express.js](https://expressjs.com/) for simplifying server-side development.
- Special thanks to [MongoDB](https://www.mongodb.com/) for its flexible NoSQL database capabilities.
- Thanks to [Angular](https://angular.io/) for enabling the development of a dynamic single-page application.
