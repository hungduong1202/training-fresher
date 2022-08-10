export class TaskService {
  apiUrl = "http://localhost:5000";

  async getTasks() {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  }

  async getTask(id) {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  }

  async updateTask(updTask) {
    const res = await fetch(`http://localhost:5000/tasks/${updTask.id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });

    const data = await res.json();

    console.log(data);
  }

  async createTask(newTask) {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newTask),
    });

    // const data = await res.json();
  }

  async deleteTask(id) {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });

    console.log(res);

    return res;
  }
}
