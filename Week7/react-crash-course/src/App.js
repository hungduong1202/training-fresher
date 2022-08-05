import { useEffect, useState } from "react";
import AddTasks from "./components/AddTasks";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import About from "./components/About";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const result = await fetchTasks();
      setTasks(result);
    };

    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  const [showAddTask, setShowAddTask] = useState(false);

  const deleteTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  const addTask = async (task) => {
    const res = await fetch(`http://localhost:5000/tasks`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    console.log(data);
    setTasks([...tasks, data]);
  };

  const toggleReminder = async (id) => {
    const taskToUpdate = await fetchTask(id);

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        ...taskToUpdate,
        reminder: !taskToUpdate.reminder,
      }),
    });

    const data = await res.json();

    const newTasks = tasks.map((task) =>
      task.id === data.id ? { ...task, reminder: data.reminder } : task
    );
    setTasks(newTasks);
  };

  return (
    <BrowserRouter>
      <div className="container">
        <Header
          showAdd={() => {
            setShowAddTask(!showAddTask);
          }}
          status={showAddTask}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
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
              </>
            }
          />

          <Route exact path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
