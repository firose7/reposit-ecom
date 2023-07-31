import React, { useState, useEffect } from 'react';
import "./UsersList.css"

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
    password: '',
    gender: '',
    address: '',
    number: '',
  });

  useEffect(() => {
    fetch('http://localhost:8000/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleEdit = (id) => {
    setEditingId(id);
  };

  const handleSave = (id, updatedUser) => {
    fetch(`http://localhost:8000/users/${id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json',},
      body: JSON.stringify(updatedUser),
    })
      .then(() => setEditingId(null))
      .catch((error) => console.error('Error updating data:', error));
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:8000/users/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setUsers(users.filter((user) => user.id !== id));
      })
      .catch((error) => console.error('Error deleting data:', error));
  };

  const handleAddNewUser = () => {
  
    fetch(`http://localhost:8000/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers([...users, data]);
        setNewUser({
          username: '',
          email: '',
          password: '',
          gender: '',
          address: '',
          number: '',
        });
      })
      .catch((error) => console.error('Error adding new user:', error));
  };

  return (
    <div className='userList'>
      <h2 className='hd'>Customers List</h2>
      <table>
    <thead>
        <tr>
        <th>Username</th>
        <th>Email</th>
        <th>Password</th>
        <th>Gender</th>
        <th>Address</th>
        <th>Number</th>
        <th>Actions</th>
        </tr>
    </thead>
    <tbody>
    {users.map((user) => (
    <tr key={user.id}>
        <td>
        {editingId === user.id ? (
            <input type="text" className='edit' value={user.username} onChange={(e) => setUsers(
                users.map((u) => u.id === user.id ? {...u, username: e.target.value}: u)
                )} />):(user.username)}
        </td>
        <td>
        {editingId === user.id ? (
            <input type="text" className='edit' value={user.email} onChange={(e) => setUsers(
                users.map((u) => u.id === user.id ? { ...u, email: e.target.value } : u)
                )}/>):(user.email )}
        </td>
        <td>
        {editingId === user.id ? (
            <input type="password" className='edit' value={user.password} onChange={(e) => setUsers(
                users.map((u) =>  u.id === user.id? { ...u, password: e.target.value }: u)
                )}/> ):(user.password)}
        </td>
        <td>
        {editingId === user.id ? (
            <input type="text" className='edit' value={user.gender} onChange={(e) => setUsers(
                users.map((u) => u.id === user.id ? { ...u, gender: e.target.value }: u)
                )}/>):(user.gender)}
        </td>
        <td>
        {editingId === user.id ? (
            <input type="text" className='edit' value={user.address} onChange={(e) =>setUsers(
                users.map((u) =>u.id === user.id ? {...u, address: e.target.value } :u )
                )}/> ):(user.address)}
        </td>
        <td>
        {editingId === user.id ? (
            <input type="text" className='edit' value={user.number} onChange={(e) => setUsers(
                users.map((u) =>u.id === user.id ? { ...u, number: e.target.value } :u)
                )}/> ):(user.number)}
        </td>
        <td>
        {editingId === user.id ? (
            <button onClick={() => handleSave(user.id, user)}>Save</button>):(
            <>
            <button onClick={() => handleEdit(user.id)}>Edit</button>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
            </>
        )}
        </td>
        </tr>
        ))}
        </tbody>
      </table>

      <h2 className='hd'>Add New Customer</h2>
      <input
        type="text" className='add'
        placeholder="Username"
        value={newUser.username}
        onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
      /><br/>
      <input
        type="text" className='add'
        placeholder="Email"
        value={newUser.email}
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
      /><br/>
      <input
        type="password" className='add'
        placeholder="Password"
        value={newUser.password}
        onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
      /><br/>
      <input
        type="text" className='add'
        placeholder="Gender"
        value={newUser.gender}
        onChange={(e) => setNewUser({ ...newUser, gender: e.target.value })}
      /><br/>
      <input
        type="text" className='add'
        placeholder="Address"
        value={newUser.address}
        onChange={(e) => setNewUser({ ...newUser, address: e.target.value })}
      /><br/>
      <input
        type="text" className='add'
        placeholder="Mobile Number"
        value={newUser.number}
        onChange={(e) => setNewUser({ ...newUser, number: e.target.value })}
      /><br/>
      <button className='adduser' onClick={handleAddNewUser}>Add New User</button>
    </div>
  );
};

export default UserList;
