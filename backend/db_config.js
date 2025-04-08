const mongoose = require("mongoose");

const mongo_URL = "mongodb://localhost:27017/FSD-IT-B";

mongoose.connect(mongo_URL)
  .then(() => {
    console.log("MONGODB Connected Successfully");
  })
  .catch(err => {
    console.log("DB Error", err.message);
  });

// Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true }
});

// Model
const User = mongoose.model("userdata", userSchema);

// Create user
const createUser = async () => {
  try {
    const newUser = new User({
      name: "Vishal",
      email: "vishal@gmail.com",
      age: 29
    });
    const user = await newUser.save();
    console.log("User Created Successfully", user);
  } catch (err) {
    console.log("User Creation Error", err.message);
  }
};

// Get users
const getUser = async () => {
  try {
    const users = await User.find();
    console.log("List of Users:", users);
  } catch (err) {
    console.log("User fetching Error", err.message);
  }
};

// Update user
const updateUser = async () => {
  try {
    const updatedUserData = await User.findOneAndUpdate(
      { name: "Vishal" },
      { $set: { name: "Verma" } },
      { new: true }
    );
    console.log("User Updated Successfully", updatedUserData);
  } catch (err) {
    console.log("User updation Error", err.message);
  }
};

// Delete user
const deleteUser = async () => {
  try {
    await User.deleteOne({ name: "Verma" });
    console.log("User Deleted Successfully");
  } catch (err) {
    console.log("User Deletion Error", err.message);
  }
};

// Run all actions
const app = async () => {
  await createUser();
  await updateUser();
  await getUser();
  await deleteUser();
  await getUser();
};

app();
