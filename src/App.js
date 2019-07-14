import React, {useState} from 'react';
import './App.css';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';

const App = () => {

  const usersData = [
    
  ]

  const [users, setUsers] = useState(usersData)

  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  return (
    <div className="container">
      <h1>CRUD User App With Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add a User</h2>
          <AddUserForm addUser={addUser}/>
        </div>
        <div className="flex-large">
          <h2>View Users</h2>
          <UserTable users={users} />
        </div>
      </div>
    </div>
  );
}

export default App;
