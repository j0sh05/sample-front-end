import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'


function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Do homework',
        day: 'Tomorrow at 3 pm',
        reminder: true
    },
    {
        id: 2, 
        text: 'Sleep',
        day: 'In like 3 hours',
        reminder: false
    },
    {
        id: 3, 
        text: 'Eat at Cafe',
        day: 'Everyday',
        reminder: true
    }
])

// Delete Task

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id  ))
}

// Toggle Reminder

const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id 
  ? { ...task, reminder: !task.reminder } : task))
}

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks 
          tasks={tasks} 
          onDelete={deleteTask}
          onToggle={toggleReminder}
        /> 
      ) : (
        'No Tasks To Show'
      )}
    </div>
  );
}

export default App;
