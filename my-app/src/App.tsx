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

//TODO: Translation + i18n + pagingination handle (algo ordering back-end because of that) + creation multiples tasks + Delete/edit task + Move task in progress + Move task to complete
