import { useState } from "react";
export const TodoForm = () => {
  const [task, setTask] = useState("");
  console.log(task);
  return (
    <form>
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};
