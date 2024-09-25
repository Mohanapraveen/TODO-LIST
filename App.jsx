import TodoList from './TodoList/index.jsx'
import TodoCon from './TodoList/Todocon.jsx'
import {useState} from 'react'
import './App.css'

function App() {
  const[inputVal,setInputVal] = useState('')
  const[todos,setTodos]=useState([])

  function writeTodo(e){
    // console.log(e.target.value)
    setInputVal(e.target.value)
  }
  function addTodo(){
    if(inputVal!=''){
      setTodos((prevTodos) => [...prevTodos,inputVal])
      setInputVal('')
    }
  }
  function delTodo(todoIndex){
    setTodos((prevTodos)=>prevTodos.filter((prevTodos,prevTodosIndex)=>{
      return prevTodosIndex !=todoIndex
    }))
  }

  console.log(todos)
  return (
    <>
      <TodoList inputVal={inputVal} writeTodo={writeTodo} addTodo={addTodo}/>
      <TodoCon todos={todos} delTodo={delTodo} />
    </>
  )
}

export default App
