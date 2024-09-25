import React from "react";
import './index1.css'
import './index.jsx'
import './Todo1.jsx'
import Todo1 from "./Todo1.jsx";
function TodoCon({todos,delTodo}) {
  return (
    <div className="container">
        {todos.map((todo,index)=>{
            return(
                <Todo1 todo={todo} index={index} delTodo={delTodo} />
            )
        })}
    </div>
  );
}

export default TodoCon;
