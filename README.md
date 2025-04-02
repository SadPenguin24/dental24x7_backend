# Dental 24x7 - Backend API

Dental 24x7 is a Node.js-based backend service that provides RESTful API endpoints for managing online dental appointments. This system handles user authentication, appointment scheduling, and dentist management.

## Table of Contents

- [Features](https://chatgpt.com/c/67ec38e3-e304-8003-a90b-be2dbbb47b51#features)
- [Tech Stack](https://chatgpt.com/c/67ec38e3-e304-8003-a90b-be2dbbb47b51#tech-stack)
- [Installation](https://chatgpt.com/c/67ec38e3-e304-8003-a90b-be2dbbb47b51#installation)
- [API Endpoints](https://chatgpt.com/c/67ec38e3-e304-8003-a90b-be2dbbb47b51#api-endpoints)
- [Database Schema](https://chatgpt.com/c/67ec38e3-e304-8003-a90b-be2dbbb47b51#database-schema)
- [Error Handling](https://chatgpt.com/c/67ec38e3-e304-8003-a90b-be2dbbb47b51#error-handling)
- [Security Measures](https://chatgpt.com/c/67ec38e3-e304-8003-a90b-be2dbbb47b51#security-measures)

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

## Security Measures

- **JWT Authentication:** Secure user sessions.
- **Input Validation:** Prevents malicious data entries.
- **Rate Limiting:** Protects API from excessive requests.
- **CORS Policies:** Controls API access.

### Future Enhancements:

- **Admin Dashboard:** Manage appointments and users.
- **Email/SMS Notifications:** Reminders for upcoming appointments.
