import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import cors from 'cors'
import bodyParser from "body-parser";
import Auth from './routes/Auth.js'
import user from './routes/user.js'
import path from "node:path";
import { configDotenv } from "dotenv";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import cookieParser from "cookie-parser";
import {v2 as cloudinary} from 'cloudinary'
import verifyJWT from "./middleware/verifyJWT.js";
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
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(cors(corsOption))
app.use('/auth',Auth)
app.use('/user',verifyJWT,user)



cloudinary.config({ 
  cloud_name: process.env.CLD_NAME, 
  api_key: process.env.CLD_API_KEY, 
  api_secret: process.env.CLD_API_SECRET
});

io.on("connection", (socket) => {
  
  
});


app.get("/", async(req, reply) => {

  try {
    const data = await req.file();

    const buffer = await data.toBuffer();
    await new Promise((resolve) => {
      cloudinary.uploader
        .upload_chunked_stream({ tags }, (error, uploadResult) => {
          if (error) {
            reply.code(500).send({ error: 'Failed to upload image' });
          } else {
            resolve(uploadResult);
            reply.send({
              url: uploadResult.secure_url,
              public_id: uploadResult.public_id,
            });
          }
        })
        .end(buffer);
    });
  } catch (error) {
    console.error(error);
  }
});


  
server.listen(8080, () => {
  console.log("Runnings");
});
