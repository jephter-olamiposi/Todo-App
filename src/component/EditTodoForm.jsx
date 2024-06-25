import React from 'react'

function EditTodoForm({updateTodo, currentTodoText, setCurrentTodoText , setIsEditing}) {
  return (
    <div>
    <form  onSubmit={updateTodo} className='flex  gap-x-2 justify-center'>
    <input type="text" className=" p-2 w-3/5 border-gray-50 rounded-md "
    value={currentTodoText} 
    onChange={(e) => setCurrentTodoText(e.target.value)} 
    placeholder="Enter Todos Here" />
    <div className='flex gap-x-2'>
    <button className='bg-slate-300 p-2  rounded-md hover:bg-slate-500 active:bg-slate-600 focus:outline-none focus:ring focus:ring-slate-500 ' type="submit">Save</button>
    <button className='bg-slate-300 p-2  rounded-md hover:bg-slate-500 active:bg-slate-600 focus:outline-none focus:ring focus:ring-slate-500 ' onClick={()=>{
            setCurrentTodoText('')
            setIsEditing(false)
    }}>Cancel</button>
    </div>
  </form>
</div>
  )
}

export default EditTodoForm