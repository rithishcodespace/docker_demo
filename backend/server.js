const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require("./Routes/userRoutes");
const PORT = 3000;

app.use(cors());
app.use(userRoutes);
app.listen(PORT,() => console.log("server successfully running on port "+PORT));