import React from 'react';

import { UserBar } from './features/user-bar/UserBar';

import { MainForm } from './features/main-form/Form';

import './App.css';

function App() {
  return (
    <div className="App">
      <UserBar />
      <MainForm/>
    </div>
       
  );
}

export default App;
