import express, { Application } from "express";
import ConnectDb from "./db/data-base-connection";
import userRoutes from "./routes/user-route";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/user", userRoutes);
ConnectDb().then(() => {
  const PORT = process.env.PORT;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
