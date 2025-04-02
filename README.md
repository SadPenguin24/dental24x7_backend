# Dental 24x7 - Backend API

Dental 24x7 is a Node.js-based backend service that provides RESTful API endpoints for managing online dental appointments. This system handles user authentication, appointment scheduling, and dentist management.

## Table of Contents

- [Features]()
- [Tech Stack]()
- [Installation]()
- [API Endpoints]()
- [Database Schema]()
- [Error Handling]()
- [Security Measures]()
- [Deployment]()

## Features

- **User Authentication:** Patients can register, log in, and manage their profiles.
- **Appointment Management:** Users can book, reschedule, or cancel appointments.
- **Dentist Management:** View available dentists and their schedules.
- **Admin Panel (Future Scope):** Manage users, appointments, and system settings.
- **Rate Limiting:** Prevents API abuse.

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JSON Web Tokens (JWT)
- **Validation:** Express Validator
- **Security:** CORS, bcrypt.js

## Installation

To set up the backend locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/SadPenguin24/dental24x7_backend.git
   ```

2. **Navigate to the backend directory:**

   ```bash
   cd dental24x7_backend
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Set up environment variables:**
   Create a `.env` file in the root directory and configure the following:

   ```env
   PORT=5000
   DATABASE_URL=your_database_url
   JWT_SECRET=your_secret_key
   ```

5. **Run the server:**

   ```bash
   npm run dev
   ```

   The API should now be running on `http://localhost:5000/`

## API Endpoints

| Method | Endpoint              | Description                 |
| ------ | --------------------- | --------------------------- |
| POST   | /api/auth/register    | Register a new user         |
| POST   | /api/auth/login       | Log in and receive a JWT    |
| GET    | /api/dentists         | Retrieve available dentists |
| POST   | /api/appointments     | Book a new appointment      |
| GET    | /api/appointments     | View user appointments      |
| PUT    | /api/appointments/:id | Reschedule an appointment   |
| DELETE | /api/appointments/:id | Cancel an appointment       |

## Database Schema

- **Users Table:** Stores patient data.
- **Dentists Table:** Contains information on available dentists.
- **Appointments Table:** Tracks appointment details.

## Error Handling

- Uses Express middleware to handle errors gracefully.
- Returns standardized error messages and status codes.

## Deployment

Technologies used for deployment are Kubernetes, Docker, and AWS.

I followed this video to learn more about Docker and AWS but I have no experience in Kubernetes but it is still interesting.

Unfortunately I wasn't able to

## Security Measures

- **JWT Authentication:** Secure user sessions.
- **Input Validation:** Prevents malicious data entries.
- **Rate Limiting:** Protects API from excessive requests.
- **CORS Policies:** Controls API access.

### Future Enhancements:

- **Admin Dashboard:** Manage appointments and users.
- **Email/SMS Notifications:** Reminders for upcoming appointments.
