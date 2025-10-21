import { useEffect, useState } from "react";
import axios from "axios";

export default function FetchOne() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", age: "", occupation: "" });
  const baseURL = "http://localhost:5000/api/users";

  // ---------- GET ----------
  const fetchUsers = async () => {
    try {
      const res = await axios.get(baseURL);
      setUsers(res.data);
      console.log(res)
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // ---------- POST ----------
  const addUser = async () => {
    if (!form.name || !form.age || !form.occupation) return alert("Please fill all fields");
    try {
      await axios.post(baseURL, form);
      setForm({ name: "", age: "", occupation: "" });
      fetchUsers();
    } catch (err) {
      console.error("Error adding user:", err);
    }
  };

  // ---------- DELETE ----------
  const deleteUser = async (id) => {
    try {
      await axios.delete(`${baseURL}/${id}`);
      fetchUsers();
    } catch (err) {
      console.error("Error deleting user:", err);
    }
  };

  // ---------- UPDATE ----------
  const updateUser = async (id) => {
    const newOccupation = prompt("Enter new occupation:");
    if (newOccupation) {
      await axios.put(`${baseURL}/${id}`, { occupation: newOccupation });
      fetchUsers();
    }
  };

  return (
    <div style={{ display: "flex", gap: "40px", padding: "20px" }}>
      {/* Input Box */}
      <div style={{ width: "40%" }}>
        <h2>Add User</h2>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        /><br /><br />
        <input
          type="number"
          placeholder="Age"
          value={form.age}
          onChange={(e) => setForm({ ...form, age: e.target.value })}
        /><br /><br />
        <input
          type="text"
          placeholder="Occupation"
          value={form.occupation}
          onChange={(e) => setForm({ ...form, occupation: e.target.value })}
        /><br /><br />
        <button onClick={addUser}>Add</button>
      </div>

      {/* Display Box */}
      <div style={{ width: "50%" }}>
        <h2>Users List</h2>
        {users.map((u) => (
          <div key={u.id} style={{ border: "1px solid #ccc", margin: "5px", padding: "10px" }}>
            <p><b>Name:</b> {u.name}</p>
            <p><b>Age:</b> {u.age}</p>
            <p><b>Occupation:</b> {u.occupation}</p>
            <button onClick={() => updateUser(u.id)}>Update</button>{" "}
            <button onClick={() => deleteUser(u.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
