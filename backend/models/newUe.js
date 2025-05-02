import User from "./User.js";
import connectDB from '../db/connectDB.js';
import mongoose from "mongoose";

async function saveUser() {
  try {
    await connectDB(); // Wait for the database connection to complete
    console.log('Database connected successfully.');

    const newuser = User({
      name: 'ifa',
      email: 'ighisu@ewfi.com',
      password: "ifieufiew"
    });

    const savedUser = await newuser.save(); // Await the save operation as it's asynchronous
    console.log('User saved successfully:', savedUser);

  } catch (error) {
    console.error('Error saving user:', error);
    // Handle the error appropriately (e.g., exit the process)
    process.exit(1);
  } finally {

    await mongoose.disconnect();
    console.log('Database disconnected.');
  }
}

saveUser();