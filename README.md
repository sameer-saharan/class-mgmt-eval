# Classroom Management Web Application

## Project Description
This is a simple Classroom Management web application built with **Node.js**, **Express**, and **MongoDB**. It provides RESTful APIs to manage classes, students, and enrollments, allowing users to:

- Create and list classes
- Register students
- Enroll students in classes
- List all students in a class

This application uses Mongoose for schema definitions and database interaction.

---

## Features

### Core Features
- **Class Management**:
  - Create a class
  - List all classes (with optional filtering and pagination)

- **Student Management**:
  - Register a student
  - Validate required fields

- **Enrollment Management**:
  - Enroll a student in a class
  - Retrieve all students enrolled in a specific class

### Error Handling
- Handles cases where resources (class or student) do not exist
- Returns appropriate HTTP status codes and error messages

---

## Installation & Setup

### Prerequisites
Ensure you have the following installed on your machine:
- **Node.js** (v14 or higher)
- **MongoDB** (local or remote instance)

### Steps to Run

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd classroom-management
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start MongoDB**:
   Ensure MongoDB is running on your system or update the connection string in `config/db.js`.

4. **Run the application**:
   ```bash
   npm start
   ```
   This will start the server on `http://localhost:3000`.

5. **Run in development mode** (with hot-reloading):
   ```bash
   npm run dev
   ```

---

## API Endpoints

### Classes
- **POST** `/api/classes`
  - Create a new class.
  - **Request Body**:
    ```json
    {
      "name": "Class Name",
      "subject": "Subject Name",
      "teacherName": "Teacher's Name",
      "startDate": "YYYY-MM-DD",
      "endDate": "YYYY-MM-DD"
    }
    ```

- **GET** `/api/classes`
  - List all classes.

### Students
- **POST** `/api/students`
  - Register a new student.
  - **Request Body**:
    ```json
    {
      "firstName": "John",
      "lastName": "Doe",
      "email": "johndoe@example.com"
    }
    ```

### Enrollments
- **POST** `/api/enrollments/:classId/enroll`
  - Enroll a student in a class.
  - **Request Body**:
    ```json
    {
      "studentId": "<Student ID>"
    }
    ```

- **GET** `/api/classes/:classId/students`
  - Retrieve all students enrolled in a specific class.

---


## Error Handling
The application uses a global error-handling middleware to ensure consistent error responses. Common errors include:
- **400 Bad Request**: Invalid data in the request body.
- **404 Not Found**: Resource not found (e.g., invalid class or student ID).
- **500 Internal Server Error**: Unexpected server errors.

---

