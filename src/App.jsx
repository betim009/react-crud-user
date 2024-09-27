import { useState } from "react";
import { data } from "./data";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [users, setUsers] = useState(data);

  function handleCreate() {
    return null;
  }

  function handleEdit(params) {
    return params;
  }

  function handleRemove(index) {
    const newUsers = users.filter((e, i) => i !== index);
    setUsers([...newUsers])
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
          onChange={() => {}}
        />
        <button onClick={() => handleCreate}>send</button>

        {users.map((e, i) => (
          <div key={i}>
            <h5>{e.name}</h5>
            <button onClick={() => handleEdit}>Edit</button>
            <button onClick={() => handleRemove(i)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
