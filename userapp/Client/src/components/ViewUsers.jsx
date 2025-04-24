import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: ''
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("https://userapp7.onrender.com/users");
      console.log("API response:", res.data);
      setUsers(res.data);
    } catch (err) {
      console.error("User Fetching Error:", err.message);
      setError(err.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://userapp7.onrender.com/users", formData);
      setUsers(prev => [...prev, res.data]); // Add new user to list
      setFormData({ name: '', email: '', role: '' }); // Reset form
    } catch (err) {
      console.error("User Adding Error:", err.message);
      setError(err.message);
    }
  };

  const handleUpdate = async () => {
    const updatedUser = {
      email: "user@example.com", 
      name: "New Name",
      password: "newPassword123",
      role: "admin",
    };
  
    try {
      const response = await axios.put("https://userapp7.onrender.com/users", updatedUser);
      console.log("User updated:", response.data);
    } catch (error) {
      console.error("Error updating user:", error.response?.data || error.message);
    }
  };
  

  return (
    <div className="Content">
      <h3>Add New User</h3>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          name="name"
          placeholder="User Name"
          value={formData.name}
          onChange={handleChange}
          required
        />&nbsp;
        <input
          type="email"
          name="email"
          placeholder="User Email"
          value={formData.email}
          onChange={handleChange}
          required
        />&nbsp;
        <input
          type="text"
          name="role"
          placeholder="User Role"
          value={formData.role}
          onChange={handleChange}
          required
        />&nbsp;
        <button type="submit">Submit</button>
      </form>

      <h1>List of Users</h1>
      {error ? (
        <p style={{ color: 'red' }}>Error: {error}</p>
      ) : (
        <>
          {users.length === 0 
            ? <p>No users found.</p>
            : (
              <table>
                <thead>
                  <tr>
                    <th>Sr.No</th>
                    <th>User Name</th>
                    <th>User Email</th>
                    <th>User Role</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={user._id}>
                      <td>{index + 1}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                      <td>
                        <button onClick={()=>handleUpdate()}>Edit</button>&nbsp;
                        <button>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )
          }
        </>
      )}
    </div>
  );
};

export default ViewUsers;
