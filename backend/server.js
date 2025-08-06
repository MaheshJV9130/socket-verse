import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import cors from 'cors'
import bodyParser from "body-parser";
import Auth from './routes/Auth.js'
import User from './routes/getUserData.js'
import path from "node:path";
import { configDotenv } from "dotenv";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import cookieParser from "cookie-parser";
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const env = path.join(__dirname , '.env')
const app = express();
const server = createServer(app);
const corsOption = {
    origin: 'http://localhost:3000',
    methods:['GET','POST'],
    credentials:true
}
const io = new Server(server,{cors:corsOption});
configDotenv({path:env})
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors(corsOption))
app.use('/auth',Auth)
app.use('/user',User)

io.on("connection", (socket) => {
  
  
});


app.get("/", (req, res) => {
  res.send("Hello");
});

server.listen(8080, () => {
  console.log("Runnings");
});
