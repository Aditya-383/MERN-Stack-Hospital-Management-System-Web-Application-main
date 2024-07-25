import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import { config}  from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import fileUpload from "express-fileupload";
import { errorMiddleware } from "./middlewares/error.js";
import messageRouter from "./router/messageRouter.js";
import userRouter from "./router/userRouter.js";
import appointmentRouter from "./router/appointmentRouter.js";

import emergencyRouter from "./router/emergencyRouter.js";

const app = express();


config({ path: "./config/config.env" });
console.log(process.env.FRONTEND_URL)

  const corsOptions = {
    origin: [process.env.FRONTEND_URL,process.env.DASHBOARD_URL],
    method :["GET" , "POST" , "PUT" , "DELETE" ] ,
    credentials: true 
  };
 
    
  app.use(cors(corsOptions));

   


app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
app.use("/api/v1/message", messageRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/appointment", appointmentRouter);
app.use("/api/v1/emergency", emergencyRouter);

dbConnection();

app.use(errorMiddleware);
export default app;

 

