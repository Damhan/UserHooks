import React, {useState} from 'react';
import './App.css';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';

const App = () => {

  const usersData = []

  const [users, setUsers] = useState(usersData)

  const [editing, setEditing] = useState(false)

  const initialEditState = {id:null, name:'', username:''}

  const [currentUser, setCurrentUser] = useState(initialEditState)

  const editUser = user => {
    setEditing(true)
    setCurrentUser({id:user.id, name:user.name, username:user.username})
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map(user=> (user.id == id ? updatedUser : user)))
  }

  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const deleteUser = id => {
    setEditing(false)
    setUsers(users.filter(user => user.id !== id))
  }

  return (
    <div className="container">
      <h1>CRUD User App With Hooks</h1>
      <div className="flex-row">
      <div className="flex-large">
      {editing ? (
        <div>
          <h2>Edit user</h2>
          <EditUserForm
            editing={editing}
            setEditing={setEditing}
            currentUser={currentUser}
            updateUser={updateUser}
          />
        </div>
      ) : (
        <div>
          <h2>Add user</h2>
          <AddUserForm addUser={addUser} />
        </div>
      )}
    </div>
        <div className="flex-large">
          <h2>View Users</h2>
          <UserTable users={users} deleteUser={deleteUser} editUser = {editUser}/>
        </div>
      </div>
    </div>
  );
}

export default App;
