import './index1.css';
//Input Container 
function TodoList({inputVal,writeTodo,addTodo}){//{} is important for props
    return (
        <>
            <h1>Todo List</h1>
            <div className="input-container">
                <input type="text" value={inputVal} onChange={writeTodo} placeholder='Enter the Task...'/>
                <button onClick={addTodo}> + </button>
            </div>
            
            

        </>
    )
}
export default TodoList 