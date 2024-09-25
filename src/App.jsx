import { useState } from "react";
import { data } from "./data";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [users, setUsers] = useState(data);

  function handleCreate() {
    const newId = users.length;
    const newUser = {
      id: newId + 1,
      name: inputValue,
    };
    setUsers([...users, newUser]);
  }

  function handleEdit(index) {
    users[index].name = inputValue;
    setUsers([...users]);
  }

  function handleRemove(index) {
    const newUsers = users.filter((e, i) => i !== index);
    setUsers([...newUsers]);
  }

  return (
    <div>
      <h2>CRUD - Users</h2>

      <div>
        <label>User</label>
        <input
          type="text"
          placeholder="..."
          value={inputValue}
          onChange={({ target }) => setInputValue(target.value)}
        />
        <button onClick={() => handleCreate()}>send</button>

        {users.map((e, i) => (
          <div key={i}>
            <h5>{e.name}</h5>
            <button onClick={() => handleEdit(i)}>Edit</button>
            <button onClick={() => handleRemove(i)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
