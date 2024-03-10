import React, { useState } from 'react';
import { List, ListItem, ListItemText, TextField, Button } from '@mui/material';

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask.trim()]);
      setNewTask('');
    }
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <TextField
        label="New Task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        variant="outlined"
        size="small"
        style={{ marginRight: '10px' }}
      />
      <Button variant="contained" onClick={handleAddTask}>
        Add
      </Button>
      <List>
        {tasks.map((task, index) => (
          <ListItem key={index}>
            <ListItemText primary={task} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default ToDoList;