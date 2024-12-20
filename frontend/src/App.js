import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="app">
      <p className="app-title">장고 할일 목록앱</p>
      <div className="task-list">
        <div className="task-list-header">
          <p className="task-list-title">내가 지금 할일 목록</p>
        </div>
        <ul className="tasks">
          <li className="task">
            <p className="task-title">할 일 1</p>
            <div className="task-buttons">
              <button className="task-edit-button">수정</button>
              <button className="task-delete-button">삭제</button>
              <button className="task-done-button">완료</button>
            </div>
          </li>
          <li className="task">
            <p className="task-title">할 일 2</p>
            <div className="task-buttons">
              <button className="task-edit-button">수정</button>
              <button className="task-delete-button">삭제</button>
              <button className="task-done-button">완료</button>
            </div>
          </li>
          <li className="task">
            <p className="task-title">할 일 3</p>
            <div className="task-buttons">
              <button className="task-edit-button">수정</button>
              <button className="task-delete-button">삭제</button>
              <button className="task-done-button">완료</button>
            </div>
          </li>
        </ul>
        <div className="add-task-form">
          <input
            type="text"
            className="add-task-input"
            placeholder="할 일을 입력하세요"
          />
          <button className="add-task-button">할 일 추가</button>
        </div>
      </div>
    </div>
  );
}

export default App;
