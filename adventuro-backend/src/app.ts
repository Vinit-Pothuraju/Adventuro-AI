import express from "express";

import cors from "cors"
import { User } from "./models/user.model";
import routes from "./routes";
const app = express();


app.use(cors());
app.use(express.json());

app.get("/health", (_, res) => {
  res.status(200).json({
    status: "OK",
    message: "Adventuro Backend is running"
  });
});
app.get("/users-test", async (_, res) => {
  const users = await User.find();
  res.json(users);
});


app.use("/api", routes);


export default app;
