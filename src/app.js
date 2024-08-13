import React from 'react';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';

const App = () => {
    return (
        <div>
            <h1>Asana Clone</h1>
            <AddTaskForm />
            <TaskList />
        </div>
    );
};

export default App;