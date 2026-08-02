import "dotenv/config";
import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import express from "express";
import { createServer } from "node:http";

import { Server } from "socket.io";

import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketManager.js";

import cors from "cors";
import userRoutes from "./routes/users.routes.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);


app.set("port", (process.env.PORT || 8000))
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users", userRoutes);

const start = async () => {
    const mongoUri = process.env.MONGO_URI;

    if (!mongoUri) {
        console.error("MONGO_URI is not set. Add it to your .env file before starting the server.");
        process.exit(1);
    }

    try {
        const connectionDb = await mongoose.connect(mongoUri);
        console.log(`MongoDB connected: ${connectionDb.connection.host}`);
    } catch (err) {
        console.error("MongoDB connection failed:", err.message);
        process.exit(1);
    }

    server.listen(app.get("port"), () => {
        console.log(`Server listening on port ${app.get("port")}`);
    });
}

start();