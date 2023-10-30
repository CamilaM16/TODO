import { createContext, useContext, useReducer, useState } from "react";

const TasksContext = createContext(null);
const TasksDispatchContext = createContext(null);
const TotalContext = createContext(null);

export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, []);
  const [total, setTotal] = useState(0);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        <TotalContext.Provider value={{ total, setTotal }}>
          {children}
        </TotalContext.Provider>
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}

export function useTotalContext() {
  return useContext(TotalContext);
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case "loadData": {
      return action.tasks;
    }
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          task: action.task,
          status: false,
        },
      ];
    }
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
