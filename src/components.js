import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions/taskActions';

const AddTaskForm = () => {
    const [taskName, setTaskName] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!taskName) return;
        const newTask = { id: Date.now(), name: taskName };
        dispatch(addTask(newTask));
        setTaskName('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={taskName} 
                onChange={(e) => setTaskName(e.target.value)} 
                placeholder="Add a new task"
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default AddTaskForm;

import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const TaskList = () => {
    const tasks = useSelector(state => state.task.tasks);

    return (
        <div>
            {tasks.map(task => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    );
};

export default TaskList;

