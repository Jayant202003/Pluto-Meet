# Pluto Meet

A full stack video conferencing web application built with React, Node.js, Express, Socket.io, and MongoDB. Supports real-time video/audio calls, screen sharing, in-call chat, and meeting history.

---

## 🌐 Live Demo

🔗 **https://pluto-meet.onrender.com**

---


## Features

- Real-time video and audio calls using WebRTC
- Screen sharing during meetings
- In-call text chat
- User authentication (register/login)
- Meeting history tracking per user
- Join meetings as a registered user or as a guest

## Tech Stack

**Frontend:** React, Material UI
**Backend:** Node.js, Express, Socket.io
**Database:** MongoDB (Mongoose)

## Getting Started

### Prerequisites
- Node.js and npm installed
- A MongoDB Atlas cluster (or local MongoDB instance)

### Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder:

Run the backend:
```bash
npm run dev
```

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

By default, the frontend connects to `http://localhost:8000` in development. See `frontend/src/environment.js` to configure this.

## Project Notes

This project was extended from an open-source video conferencing base project. My contributions include:
- Migrating the database connection to a self-hosted MongoDB Atlas cluster with environment-based configuration
- Adding proper error handling around the database connection
- Removing hardcoded credentials and securing secrets via `.env` / `.gitignore`
- Rebranding and restructuring project metadata

## License

This project is for educational/portfolio purposes.
