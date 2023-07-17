const Task = (props) => {
    return (
      <div
        className="task"
        style={{ backgroundColor: props.completed ? "yellow" : "white" }}
      >
        <h1 className="space1">{props.taskName}</h1>
        <button className="space2" onClick={() => props.completeTask(props.id)}> <i class="fa-solid fa-square-check"></i></button>
        <button className="space3" onClick={() => props.deleteTask(props.id)}> <i className="fa-solid fa-trash-can"></i> </button>
      </div>
    );
  };
  export default Task;
