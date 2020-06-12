import React from 'react';

import AddTask from './Components/AddTask';
import TasksList from './Components/TasksList';
import './App.css';

function App() {
  return (
    <div>
      <TasksList/>
      <AddTask/>
    </div>
  );
}

export default App;
