import React from "react";

function Todo1({todo,index,delTodo}) {
  return (
    <div>
      <div className="todoList">
        <p>{todo}</p>
        <div className="action">
          <input type="checkbox"></input>
          <button onClick={()=>{
            return(
              delTodo(index)
            )
          }}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Todo1;
