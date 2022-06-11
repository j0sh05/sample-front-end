import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'


function App() {
  const [tasks, setState] = useState([
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

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
