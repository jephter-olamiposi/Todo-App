import { useState } from "react"
import { useEffect } from "react"
import TodoItem from "./component/TodoItem";
import TodoForm from "./component/TodoForm";
import EditTodoForm from "./component/EditTodoForm";

export default function App() {
  const [todos, setTodos] = useState([]);

  const [currentTodoText, setCurrentTodoText] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [CurrentTodoTextIndex, setCurrentTodoTextIndex] = useState(null)


  useEffect(() => {
    let todosFromLocalStorage = JSON.parse(
      window.localStorage.getItem('todos')
    );
    if (todosFromLocalStorage) {
      setTodos(todosFromLocalStorage);
    }
    else (
      setTodos([])
    )

  }, [])

  function addTodos(e) {
    e.preventDefault();
    let id = new Date().getTime();
    let todoText = currentTodoText;
    if (todoText === '') {
      alert('Please add some text in here')
      return;
    }
    setTodos((prevTodos) => {
      let updatedTodos = [...prevTodos, { id: id, text: todoText }]
      window.localStorage.setItem('todos', JSON.stringify(updatedTodos))
      return updatedTodos;
    })

    setCurrentTodoText('')
  }

  function deleteTodo(todoItem) {
    setTodos((prevTodos) => {
      let updatedTodos = todos.filter((item) => item.id !== todoItem.id);
      window.localStorage.setItem('todos', JSON.stringify(updatedTodos))
      return updatedTodos;
    })
  }
  function editTodo(todoItem) {
    setIsEditing(true);
    let updatedTodos = todos.filter((item) => item.id === todoItem.id);
    setCurrentTodoText(updatedTodos[0].text)
    setCurrentTodoTextIndex(updatedTodos[0].id)
  }
  function updateTodo(e) { 
    e.preventDefault();
    // let updatedTodoText= currentTodoText;
    //  console.log(updatedTodoText)

   let updatedTodos= todos.map((item) => {
    if(item.id === CurrentTodoTextIndex){
      item.text= currentTodoText
    }
    return item; 
  });
  setTodos([...updatedTodos]);
  window.localStorage.setItem('todos', JSON.stringify(updatedTodos))
  setIsEditing(false)
  setCurrentTodoText('')
}


  return (
    <>
      <div className=" flex justify-center items-center h-screen">

        <div className=" bg-slate-100 rounded-md p-8 h-fit  w-fit lg:w-8/12 shadow-lg flex flex-col justify-center items-center">

          <h1 className="text-6xl font-bold mb-5">Todo app </h1>
          <div className="w-full">
            {!isEditing && (
              <TodoForm addTodos={addTodos} currentTodoText={currentTodoText} setCurrentTodoText={setCurrentTodoText} />
            )}
            {isEditing && (
              <EditTodoForm updateTodo={updateTodo} currentTodoText={currentTodoText} setCurrentTodoText={setCurrentTodoText} setIsEditing={setIsEditing} />
            )}

            {todos.map((item) => {
              return <TodoItem key={item.id} deleteTodo={deleteTodo} editTodo={editTodo} todoItem={item} setIsEditing={setIsEditing} />
            })}

          </div>

        </div>

      </div>
    </>
  )
}