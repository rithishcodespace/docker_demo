const connectDB = require("../config/db");

exports.getProfile = async(req, res) => {
  try {
    const{id} = req.params;
    const db = await connectDB();
    const query = { userid: id };
    const user = await db.collection("users").findOne(query);
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
}

