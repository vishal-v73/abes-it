const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const userroute = require("./Routes/userRoutes");
const connectDB = require("./Config/db");

dotenv.config();
const app = express();
const Port = process.env.PORT || 3000;


connectDB();


app.use(cors({
  origin: 'http://localhost:5173',  
}));

app.use(express.json());
app.use("/", userroute);

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
