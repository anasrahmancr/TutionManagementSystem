# Tution Management System

## Overview

The Tution Management System is a web application designed to manage tuition classes efficiently. It includes functionalities for managing students, teachers, and classes. The project uses ASP.NET Core for the backend and React.js for the frontend.

## Approach

### Backend
- **ASP.NET Core**: Utilized for creating RESTful APIs.
- **Entity Framework Core**: Implemented for database interactions.
- **SQL Server**: Used as the database.

### Frontend
- **React.js**: Employed for creating interactive user interfaces.
- **Tailwind CSS**: Used for styling the application.

## Setup and Running the Project

### Prerequisites
- Node.js and npm (for the frontend)
- .NET SDK (for the backend)
- SQL Server (for the database)

### Current Status
## Completed
- Basic project structure set up for both frontend and backend.
- Implemented backend APIs for managing students and teachers.
- Created initial frontend components and pages for login and dashboard.
## Incomplete
- Integration between backend APIs and frontend components.
- Complete UI design for various pages.
- Proper authentication and authorization mechanisms.
## Challenges Faced
- SSL Certificate Issues: Encountered SSL certificate trust issues while connecting to SQL Server. Resolved by configuring the database connection string to trust server certificates.
- API Integration: Due to time constraints, full integration between backend and frontend remains incomplete.
- Routing Issues in React: Faced issues with navigating between pages, resolved using useNavigate hook from react-router-dom.
## Next Steps and Solutions
- Complete API Integration: Implement frontend API calls to interact with the backend services.
- Enhance UI Design: Use Tailwind CSS to improve the overall look and feel of the application.
- Authentication: Implement JWT-based authentication for secure access.
- Error Handling: Add proper error handling mechanisms in both frontend and backend.
