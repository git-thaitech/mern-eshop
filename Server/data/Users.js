import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin",
    email: "admin@eshop.net",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "User",
    email: "user@eshop.net",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
