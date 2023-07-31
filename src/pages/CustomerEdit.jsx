import React, { useState } from "react";
import axios from "axios";
import './CustomerEdit.css'
import { Fragment } from "react";
import Header from "../components/Header";

const CustomerEdit = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [editMode, setEditMode] = useState(false);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = async () => {
    try {
      setEditMode(false);
      await axios.put(`http://localhost:8000/users/${user.id}`, user);
      localStorage.setItem('user', JSON.stringify(user));
      alert('User data updated successfully!');
    } catch (error) {
      console.error('Error updating user data:', error);
      alert('Failed to update user data.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <Fragment>
    <Header/>
    <div className="customeredit">
      <br/><table className="cstmr-tbl">
        <thead>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td>Name</td>
            <td>
              {editMode ? (
                <input type="text" name="username" value={user.username} onChange={handleInputChange} />
              ) : (
                user.username
              )}
            </td>
          </tr>
          <tr>
            <td>Email</td>
            <td>
              {editMode ? (
                <input type="text" name="email" value={user.email} onChange={handleInputChange} />
              ) : (
                user.email
              )}
            </td>
          </tr>
          <tr>
            <td>Password</td>
            <td>
              {editMode ? (
                <input type="text" name="password" value={user.password} onChange={handleInputChange} />
              ) : (
                user.password
              )}
            </td>
          </tr>
          <tr>
            <td>Address</td>
            <td>
              {editMode ? (
                <input type="text" name="address" value={user.address} onChange={handleInputChange} />
              ) : (
                user.address
              )}
            </td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>
              {editMode ? (
                <input type="text" name="gender" value={user.gender} onChange={handleInputChange} />
              ) : (
                user.gender
              )}
            </td>
          </tr>
          <tr>
            <td>Number</td>
            <td>
              {editMode ? (
                <input type="text" name="number" value={user.number} onChange={handleInputChange} />
              ) : (
                user.number
              )}
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      {editMode ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <button onClick={handleEdit}>Edit details</button>
      )}
    </div>
    </Fragment>
  );
};

export default CustomerEdit;
