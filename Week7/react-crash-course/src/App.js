import { useState } from "react";
import AddTasks from "./components/AddTasks";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: false,
    },
  ]);

  // https://youtu.be/w7ejDZ8SWv8?t=4663

  const [showAddTask, setShowAddTask] = useState(false);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const addTask = (task) => {
    console.log(task);
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  const toggleReminder = (id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, reminder: !task.reminder } : task
    );
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <Header
        showAdd={() => {
          setShowAddTask(!showAddTask);
        }}
        status={showAddTask}
      />
      {showAddTask && <AddTasks addTask={addTask} />}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          toggleReminder={toggleReminder}
        />
      ) : (
        "No task to show"
      )}
    </div>
  );
}

export default App;
