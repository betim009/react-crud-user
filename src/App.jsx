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

  function handleRemove(params) {
    return params;
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
            <button onClick={() => handleRemove}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
