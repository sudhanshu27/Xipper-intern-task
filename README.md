# Xipper Full-Stack Developer Task

This repository contains the backend implementation of the Xipper assignment. The backend is built using **Node.js**, **Express**, **PostgreSQL**, and **Prisma ORM**.

## 🚀 Features Implemented

- PostgreSQL tables created as required  
- Prisma ORM setup for database connection  
- REST APIs built for necessary functionalities  
- Tested the APIs using Postman  

## 🚀 Folder Structure

```
Xipper-intern-task/
│── xipper-backend/
│   ├── prisma/                 # Prisma schema and migrations  
│   │   ├── schema.prisma  
│   │   ├── migrations/  
│   ├── src/  
│   │   ├── controllers/         # API logic  
│   │   ├── routes/              # API routes  
│   │   ├── middleware/          # Authentication & validation  
│   │   ├── utils/               # Helper functions  
│   │   ├── config/              # Configuration files  
│   ├── .env                     # Environment variables  
│   ├── package.json             # Dependencies    
│   ├── server.js                # Server entry point  
│  
│── xipper-frontend/ (Work in Progress)  
│   ├── public/                   # Static files  
│   ├── json-server/               # Mock API JSON files  
│   ├── src/  
│   │   ├── api/                   # API handling  
│   │   ├── components/            # React components  
│   │   ├── pages/                 # Page-based routing  
│   │   ├── assets/                # Images, icons, styles  
│   │   ├── App.js                 # Main component  
│   │   ├── index.js               # React entry point  
│   ├── package.json               # Frontend dependencies  
│   ├── README.md                  # Documentation  
```

## 🛠️ Setup Instructions

### Backend Setup

1. Clone the repository:  
   ```bash
   git clone https://github.com/sudhanshu27/Xipper-intern-task.git
   cd Xipper-intern-task/xipper-backend
   ```

2. Install dependencies:  
   ```bash
   npm install
   ```

3. Set up environment variables in a `.env` file:  
   ```plaintext
   DATABASE_URL=your_postgresql_connection_string
   ```

4. Run migrations:  
   ```bash
   npx prisma migrate dev
   ```

5. Start the backend server:  
   ```bash
   node server.js
   ```

### Frontend (Work in Progress)

The frontend is currently under development and will be completed soon.
