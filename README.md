# Real-time Transaction & Audit Log System

## Project Overview
This project implements a secure peer-to-peer fund transfer system with an immutable audit log.  
It simulates real-world transaction handling where money is transferred atomically between users and every transaction is permanently recorded for auditing purposes.

The system is designed with a strong focus on **data consistency, security, and reliability**, following backend engineering best practices.

---

## Tech Stack
- **Node.js** with Express.js
- **PostgreSQL** database
- **Prisma ORM**
- **JWT (JSON Web Tokens)** for authentication
- **bcrypt** for password hashing
- **Plain HTML + JavaScript** frontend

---

## Features

### Backend
- User registration and login
- Secure JWT-based authentication
- Atomic fund transfer using database transactions
- Immutable audit log for every transaction
- Authenticated API to fetch transaction history

### Frontend
- Simple transfer form (receiver ID & amount)
- JWT-based authenticated requests
- Real-time update of transaction history after transfer
- Tabular view of audit logs

---

## Database Schema

### User
- `id`
- `name`
- `email` (unique)
- `password` (hashed)
- `balance`

### TransactionAudit
- `id`
- `senderId`
- `receiverId`
- `amount`
- `status`
- `timestamp`

---

## API Endpoints

### Register User


POST /auth/register


### Login User


POST /auth/login


### Transfer Funds (Atomic Transaction)


POST /transfer
Authorization: Bearer <JWT_TOKEN>


### Fetch Transaction History


GET /audit
Authorization: Bearer <JWT_TOKEN>


---

## Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone <repository-url>
cd Backend

2️⃣ Install Dependencies
npm install

3️⃣ Environment Variables

Create a .env file inside the Backend folder:

DATABASE_URL=postgresql://username:password@localhost:5432/transaction_db
JWT_SECRET=your_secret_key
PORT=5000

4️⃣ Run Database Migrations
.\node_modules\.bin\prisma migrate dev

5️⃣ Start Backend Server
node src/server.js


Server runs at:

http://localhost:5000

Frontend Usage

Navigate to:

Frontend/index.html


Open it in a browser

Paste a valid JWT token

Enter receiver ID and amount

Click Transfer

Transaction history updates instantly

Testing

APIs tested using VS Code REST Client

Database verified using Prisma Studio

Frontend tested via browser

Engineering Highlights

Uses database transactions to ensure atomic debit & credit

Prevents partial updates and inconsistent balances

Maintains immutable audit logs

Clear separation of backend and frontend logic

AI-assisted generation of transaction boilerplate and frontend structure

Author

Satyam Shukla
B.Tech Computer Engineering
Backend & Full Stack Development