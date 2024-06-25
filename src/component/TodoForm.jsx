import React from 'react'

function TodoForm({addTodos, currentTodoText, setCurrentTodoText}) {
  return (
    <div>
              <form className='flex  gap-x-2 justify-center' onSubmit={addTodos}>
              <input  type="text" className="  p-2 w-2/3 border-gray-50 rounded-md"
              value={currentTodoText} 
              onChange={(e) => setCurrentTodoText(e.target.value)} 
              placeholder="Enter Todos Here" />
              <button className='bg-slate-300 p-2  rounded-md hover:bg-slate-500 active:bg-slate-600 focus:outline-none focus:ring focus:ring-slate-500 ' type="submit">Add Todo</button>

            </form>
    </div>

  )
}

export default TodoForm