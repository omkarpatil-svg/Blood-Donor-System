# 🩸 Blood Donor Management System

A full-stack MERN web application that connects blood donors with patients in need during medical emergencies — automating donor search, emergency requests, and email notifications.

---

## 🚀 Live Demo

> Frontend: `http://localhost:3000`  
> Backend API: `http://localhost:5000`

---

## ✨ Features

- **Donor Registration** — Register donors with blood group, city, phone & email
- **Smart Search** — Filter donors by blood group and city in real-time
- **Emergency Request** — Find matching donors instantly during a crisis
- **Auto Email Alerts** — Nodemailer sends emergency emails to donor inboxes
- **Email Audit Logs** — Every email logged with status (sent/failed) and timestamp

---

## 🛠️ Tech Stack

| Layer    | Technology                        |
|----------|-----------------------------------|
| Frontend | React.js, Bootstrap 5, Axios      |
| Backend  | Node.js, Express.js               |
| Database | MongoDB + Mongoose                |
| Email    | Nodemailer (Gmail SMTP)           |
| Config   | dotenv                            |

---

## 📁 Project Structure

```
blood-donor-system/
├── backend/
│   ├── config/
│   │   ├── db.js
│   │   └── emailService.js
│   ├── models/
│   │   ├── Donor.js
│   │   ├── Emergency.js
│   │   └── EmailLog.js
│   ├── routes/
│   │   └── donorRoutes.js
│   ├── .env.example
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       │   ├── Navbar.js
│       │   └── Footer.js
│       └── pages/
│           ├── Home.js
│           ├── RegisterDonor.js
│           ├── SearchDonor.js
│           ├── EmergencyRequest.js
│           └── EmailLogs.js
├── .gitignore
└── README.md
```

---

## ⚙️ Setup & Installation

### Prerequisites
- Node.js v14+
- MongoDB (local or Atlas)

### 1. Clone the repository
```bash
git clone https://github.com/your-username/blood-donor-system.git
cd blood-donor-system
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` folder:
```env
MONGODB_URI=mongodb://localhost:27017/blooddonor
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
NODE_ENV=development
```

> For `EMAIL_PASSWORD`, generate a Gmail App Password:  
> Google Account → Security → 2-Step Verification → App Passwords

Start the backend:
```bash
node server.js
```

### 3. Frontend Setup
```bash
cd frontend
npm install
npm start
```

---

## 🔌 API Endpoints

| Method   | Route                              | Description                  |
|----------|------------------------------------|------------------------------|
| POST     | `/donor/add`                       | Register a new donor         |
| GET      | `/donor/search/:bloodGroup/:city`  | Search donors                |
| DELETE   | `/donor/delete/:id`                | Remove a donor               |
| POST     | `/donor/send-emergency-email`      | Send emergency email         |
| GET      | `/donor/email-logs`                | Get all email logs           |
| GET      | `/donor/email-logs/:bloodGroup`    | Filter logs by blood group   |

---

## 🔒 Environment Variables

Never commit your `.env` file. Use `.env.example` as a reference:

```env
MONGODB_URI=
EMAIL_USER=
EMAIL_PASSWORD=
NODE_ENV=development
```

---


## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> *Every Drop Counts. Every Second Matters.*
