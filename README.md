# Real-time Transaction & Audit Log System

## Project Overview
This project implements a secure peer-to-peer fund transfer system with an immutable audit log.  
It simulates real-world financial transactions where funds are transferred atomically between users and every transaction is permanently recorded for auditing purposes.

The system focuses on backend engineering best practices such as data consistency, transactional integrity, authentication, and auditability.

---

## Tech Stack
- Node.js (Express.js)
- PostgreSQL
- Prisma ORM
- JWT (JSON Web Tokens) for authentication
- bcrypt for password hashing
- HTML + Vanilla JavaScript (Frontend)

---

## Features

### Backend
- User registration and login
- Secure JWT-based authentication
- Atomic fund transfer using database transactions
- Immutable audit log for all transactions
- Authenticated API to fetch transaction history

### Frontend
- Simple fund transfer form
- JWT-based authenticated requests
- Real-time update of transaction history after transfer
- Clear tabular display of audit logs

---

## Demo Video

A short screen recording demonstrating:
- Backend server startup
- User authentication and JWT generation
- Atomic fund transfer
- Real-time audit log update on the frontend

Demo Video Link:  
https://drive.google.com/file/d/1Ffp6IKceOAPdttmZbtUWdmlgzpGDQw-B/view?usp=sharing

---

## Database Schema

### User Table
- id (UUID, Primary Key)
- name (String)
- email (String, Unique)
- password (Hashed String)
- balance (Integer)

### TransactionAudit Table
- id (UUID, Primary Key)
- senderId (UUID)
- receiverId (UUID)
- amount (Integer)
- status (Boolean)
- timestamp (DateTime)

---

## API Documentation

### Register User
POST /auth/register
Content-Type: application/json

{
"name": "User Name",
"email": "user@example.com",
"password": "password123"
}

yaml
Copy code

---

### Login User
POST /auth/login
Content-Type: application/json

{
"email": "user@example.com",
"password": "password123"
}

yaml
Copy code

Response includes a JWT token used for authenticated requests.

---

### Transfer Funds (Atomic Transaction)
POST /transfer
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json

{
"receiverId": "receiver-user-id",
"amount": 200
}

yaml
Copy code

This operation is wrapped in a database transaction to ensure atomicity (debit and credit succeed or fail together).

---

### Fetch Transaction History (Audit Log)
GET /audit
Authorization: Bearer <JWT_TOKEN>

yaml
Copy code

Returns a list of transactions involving the authenticated user.

---

## Setup and Run Instructions

### Prerequisites
- Node.js (v18+ or LTS recommended)
- PostgreSQL installed and running
- Git

---

### Backend Setup

1. Clone the repository:
```bash
git clone https://github.com/Satyam180903/real-time-transaction-audit-log.git
cd Backend
Install dependencies:

bash
Copy code
npm install
Create a .env file inside the Backend folder:

env
Copy code
DATABASE_URL=postgresql://username:password@localhost:5432/transaction_db
JWT_SECRET=your_secret_key
PORT=5000
Run database migrations:

bash
Copy code
.\node_modules\.bin\prisma migrate dev
Start the backend server:

bash
Copy code
node src/server.js
Backend runs at:

arduino
Copy code
http://localhost:5000
Frontend Setup
Navigate to:

bash
Copy code
Frontend/index.html
Open the file in a browser
(Recommended: VS Code Live Server or direct browser open)

Paste a valid JWT token

Enter receiver ID and amount

Click Transfer

Transaction history updates instantly after a successful transfer.

Testing
APIs tested using VS Code REST Client

Database verified using Prisma Studio

Frontend tested using browser

Engineering Highlights
Uses database transactions to guarantee atomic fund transfers

Prevents partial updates and inconsistent balances

Maintains immutable audit logs

Clear separation of backend and frontend responsibilities

Scalable and secure API design

AI Tools Usage Log:
The following AI tools were used during development:

Generated initial boilerplate for Prisma database transactions to ensure atomic fund transfers.

Assisted in structuring backend controllers, routes, and authentication flow.

Assisted in creating the frontend HTML and JavaScript structure for transfer and history views.

Helped debug environment setup, Prisma configuration, and API testing workflow.

All generated content was reviewed, tested, and manually refined to meet project requirements and ensure correctness.

Author
Satyam Shukla
B.Tech Computer Engineering
Backend & Full Stack Development