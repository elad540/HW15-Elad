import React from "react";

const Admin = () => {
  // Dummy list of users
  const users = [
    { id: 1, username: "user1", email: "user1@example.com", isAdmin: false },
    { id: 2, username: "user2", email: "user2@example.com", isAdmin: false },
    { id: 3, username: "admin", email: "admin@example.com", isAdmin: true }
  ];

  const handleDeleteUser = (userId) => {
    console.log("Deleting user with ID:", userId);
  };

  const handleEditUser = (userId) => {
    console.log("Editing user with ID:", userId);
  };

  return (
    <div className="AdminPanel">
      <h1>Admin Panel</h1>
      <p>Welcome back!</p>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleEditUser(user.id)}>Edit</button>
                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
