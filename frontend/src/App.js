import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  const loadTasks = async () => {
    const res = await axios.get("http://localhost:5000/tasks");
    setTasks(res.data);
  };

  const addTask = async () => {
    await axios.post("http://localhost:5000/tasks", { text });
    loadTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/tasks/${id}`);
    loadTasks();
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h2>Task Manager</h2>
      <input onChange={(e) => setText(e.target.value)} />
      <button onClick={addTask}>Add</button>

      {tasks.map((t, i) => (
        <div key={i}>
          <p>{t.text}</p>
          <button onClick={() => deleteTask(i)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
