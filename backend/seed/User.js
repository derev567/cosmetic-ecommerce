const User = require("../models/User");

const users = [
  {
    "_id": "65c2526fdcd9253acfbaa731", 
    "name": "rishibakshi",
    "email": "deepakvishwakarmajs@gmail.com",
    "password": "$2a$10$f07xkdA5q0Qo8nIn82SPt.ZAatL3LkI4eZkG4MyL1BhPx1jfosNyK",
    "isVerified": true,
    "isAdmin": false,
    "__v": 0
},
{
  _id: "65b8e564ea5ce114184ccb96",
  name: "demo user",
  email: "demo@gmail.com",
  password:'$2a$10$GH8p5cAsGFEdYsLaSfTQ3e1eUs7KbLmVBltjbX4DDCj2eyO2KW/Ze',
  isVerified: true,
  isAdmin: false,
  __v: 0,
}

];

exports.seedUser = async () => {
  try {
    await User.insertMany(users);
    console.log("User seeded successfully");
  } catch (error) {
    console.log(error);
  }
};



// deepakme123@A