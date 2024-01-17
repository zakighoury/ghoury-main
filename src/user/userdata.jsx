import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/users');
        setUsers(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='container'>
      <table className='table'>
        <thead>
          <tr>
            <th>name</th>
            <th>email</th>
            <th>password</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(users) && users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserData;
