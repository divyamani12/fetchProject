const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// temporary data storage
let users = [
  { id: 1, name: "Divya", age: 22, occupation: "Developer" },
  { id: 2, name: "Mani", age: 25, occupation: "Designer" }
];

// ---------- GET (Read all) ----------
app.get("/api/users", (req, res) => {
  res.json(users);
});

// ---------- POST (Create new user) ----------
app.post("/api/users", (req, res) => {
  const newUser = { id: Date.now(), ...req.body };
  users.push(newUser);
  res.json({ message: "User added successfully", data: newUser });
});

// ---------- PUT (Update user) ----------
app.put("/api/users/:id", (req, res) => {
  const { id } = req.params;
  users = users.map(user =>
    user.id == id ? { ...user, ...req.body } : user
  );
  res.json({ message: "User updated successfully" });
});

// ---------- DELETE (Remove user) ----------
app.delete("/api/users/:id", (req, res) => {
  const { id } = req.params;
  users = users.filter(user => user.id != id);
  res.json({ message: "User deleted successfully" });
});

// ---------- SERVER ----------
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
