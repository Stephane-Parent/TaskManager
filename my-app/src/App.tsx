import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router';
import { WorkOrderManager } from './pages/WorkOrderManager';
import { WorkOrderCreationForm } from './pages/WorkOrderCreationForm';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={WorkOrderManager} />
        <Route path="/createTask" Component={WorkOrderCreationForm} />
      </Routes>
    </div>
  );
};

export default App;
