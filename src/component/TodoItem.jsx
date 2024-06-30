import React from 'react'

function TodoItem({todoItem, deleteTodo, editTodo }) {
  return (
    <div className='w-full  ' >

    <div key={todoItem.id} className="m-5 p-4 rounded-md bg-slate-200 flex justify-between items-center  max-w-fulll md:flex-wrap flex justify-between items-center  flex justify-between items-center  text-wrap md:text-balance"> {todoItem.text} 
    <div className='flex gap-2.5'>
        <button onClick={() => deleteTodo(todoItem)} className='bg-slate-300 p-2 ml-4 rounded-md hover:bg-slate-500 active:bg-slate-600 focus:outline-none focus:ring focus:ring-slate-500'>Delete Todo</button>
        <button onClick={() => editTodo(todoItem)} className='bg-slate-300 p-2  rounded-md hover:bg-slate-500 active:bg-slate-600 focus:outline-none focus:ring focus:ring-slate-500 '>Edit</button>
    </div>
    </div>
    </div>
  );
}

export default TodoItem;