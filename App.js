// Import the necessary React modules
import React, { useState } from 'react';
// Import the CSS file for styling
import './App.css';

// Define the functional component App
function App() {
    // Define state variables for tasks and input value using useState hook
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Function to handle input change event
  const handleInputChange = (event) => {
       // Update the inputValue state with the value entered in the input field
    setInputValue(event.target.value);
  };

// Function to add a task to the list
  const addTask = () => {
// Check if the input value is not empty
    if (inputValue.trim() !== '') {
// Add the input value to the tasks array using spread operator and update the tasks state
      setTasks([...tasks, inputValue]);
// Clear the input field by updating the inputValue state
      setInputValue('');
    } else {
// If input value is empty, display an alert
      alert('Please enter a task.');
    }
  };

  // Render the JSX structure
  return (
    <div className="container">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter task..."
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

// Export the component App
export default App;