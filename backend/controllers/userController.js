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

exports.updateProfile = async(req, res) => {
  try {
    const db = await connectDB();
    const{id} = req.params; 
    const userObj = req.body;
    userObj.userid = id; 
    const query = { userid: id };
    const newValues = { $set: userObj };

    const result = await db.collection("users").updateOne(query, newValues, { upsert: true });

    console.log("Successfully updated or inserted");
    res.json({ message: "Profile updated successfully", result });
  } catch (err) {
    console.error("Error updating profile:", err);
    res.status(500).json({ message: "Server error" });
  }
}


