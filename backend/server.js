const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3000;

app.use(cors());
app.listen(PORT,() => console.log("server successfully running on port "+PORT));