import React, { useState } from "react";

import AddUsers from "./components/Users/AddUsers";
import UserList from "./components/Users/UserList";

const App = () => {
  const [users, setUsers] = useState([]);

  const addUserHandler = (enteredUser) => {
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers];
      updatedUsers.push({
        username: enteredUser.username,
        age: enteredUser.age,
        id: Math.random().toString(),
      });
      return updatedUsers;
    });
  };

  return (
    <div>
      <React.StrictMode>
        <section id="user-form">
          <AddUsers onAddUser={addUserHandler} />
        </section>
        {users.length > 0 && (
          <section id="users">
            <UserList users={users} />
          </section>
        )}
      </React.StrictMode>
    </div>
  );
};

export default App;
