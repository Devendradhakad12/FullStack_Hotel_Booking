import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar'
import './user.scss'
function Users() {
  return (
    <div className="user">
    <Sidebar />
    <div className="userContainer">
      <Navbar />
      user
    </div>
  </div>
  )
}

export default Users;
