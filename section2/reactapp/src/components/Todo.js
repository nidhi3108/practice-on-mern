import React from 'react'
import { useState } from 'react'
import './Todo.css'

const Todo = () => {
    const [todoList, setTodoList] = useState(['Sleep','Eat breakfast','sleep','Eat lunch','sleep','Eat dinner','sleep']);

     const [task, setTask] = useState("");

    const addNewTask=()=>{
        if(task){
        setTodoList([...todoList,task]);
        }
    }
    const removeTask=(index)=>{
         let temp=todoList;
         temp.splice(index,1);
          setTodoList([...temp]);
    }
    const showTodoList=()=>{
        return todoList.map((task, index)=>
         <div className='d-flex task-body justify-content-between'>
            <p>{task}</p>
            <button className='btn btn-info btn-lg float-right' onClick={()=>{removeTask(index)}}> <i className="fas fa-trash"></i></button>
        </div>);
    }
  return (
    <div className="container">
        <div className="card mt-5">
            <div className="card-body">
                <h3>Todo List</h3>
                <hr />
                <div className="input-group">
                    <input type="text" className="form-control" value={task} onChange={(e)=>{setTask(e.target.value)}}/>
                    <button onClick={addNewTask} className='btn btn-primary'>Add Task</button>
                </div>
                {showTodoList()}
            </div>
        </div>
         
    </div>
  )
}

export default Todo