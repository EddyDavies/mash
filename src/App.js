import React, { useEffect, useState } from "react";
import { UserBar } from "./features/user-bar/UserBar";
import { MainForm } from "./features/main-form/Form";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [admin, setAdmin] = useState([]);

  return (
    <div className="App">
      <UserBar />
      <MainForm users={users} setUser={setUsers} />
    </div>
  );
}

export default App;
