import logo from "./logo.svg";
import "./App.css";
import { getTasks, createTask, deleteTask, markAsDone } from './taskApi';
import { useState, useEffect } from 'react';

function App() {

  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const fetchTasks = async () => {
    const tasks = await getTasks();
    setTasks(tasks);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleCreateTask = (task) => {
    if (newTaskTitle.trim() === '') {
      alert('할 일을 입력하세요');
      return;
    }
    setTasks([]);
    createTask({ title: newTaskTitle }).then(fetchTasks);
    setNewTaskTitle('');
  };

  const handleDeleteTask = (id) => {
    setTasks([]);
    deleteTask(id).then(fetchTasks);
  };

  const handleMarkAsDone = (id) => {
    setTasks([]);
    markAsDone(id).then(fetchTasks);
  };

  return (
    <div className="app">
      <p className="app-title">장고 할일 목록앱</p>
      <div className="task-list">
        <div className="task-list-header">
          <p className="task-list-title">내가 지금 할일 목록</p>
        </div>
        <ul className="tasks">
          {tasks.length > 0 && tasks.map((task) => {
            return (
              <li className={`task ${task.done ? 'task-done' : ''}`} key={task.id}>
                <p className="task-title">{task.title}</p>
                <div className="task-buttons">
                  <button className="task-delete-button" onClick={() => handleDeleteTask(task.id)}>삭제</button>
                  <button className="task-done-button" onClick={() => handleMarkAsDone(task.id)}>완료</button>
                </div>
              </li>
            )
          })}
          {tasks.length === 0 && (
            <li className="task">
              <p className="task-title">할 일이 없습니다.</p>
            </li>
          )}
        </ul>
        <div className="add-task-form">
          <input
            type="text"
            className="add-task-input"
            placeholder="할 일을 입력하세요"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
          />
          <button className="add-task-button" onClick={() => handleCreateTask()}>할 일 추가</button>
        </div>
      </div>
    </div>
  );
}

export default App;
