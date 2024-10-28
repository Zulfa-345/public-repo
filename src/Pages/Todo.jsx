import { Fragment } from "react"
import { useState } from "react"
import { FaCheck, FaCheckCircle, FaTrash } from "react-icons/fa"
import { FaCircleXmark, FaXmark } from "react-icons/fa6"
import { v4 } from "uuid"

const Todo=()=>{
    const [todoList,setTodoList]=useState([])
    const [task,setTask]=useState("")

    const handleAddTask=()=>{
      const objTask={  id:v4(),
        title:task,
        createdAt: new Date().toLocaleString("en-IN"),
        updatedAt: new Date().toLocaleString("en-IN"),
        completed: false
    }
     setTodoList([...todoList,objTask])
     setTask("")

}

    const handleRemove=(rid)=>{
        const res=(todoList.filter((item)=>item.id!=rid))
       setTodoList(res)
    }
   const handlestatusUpdate=(uid)=>{
      const res=todoList.map(item=>{
        if(item.id==uid){
            let status;
            if(item.completed)
                {
                    status=false
                } 
                else
                {
                    status=true
                }
             return {...item,completed:status,updatedAt:new Date().toLocaleString("en-IN").toUpperCase}
            }
            return item  })
            setTodoList(res)
   }

return  <div className="d-flex flex-column align-items-center mt-5">
        <div className="w-50">
        <input type="text" onChange={(event)=>setTask(event.target.value)} value={task} placeholder="Enter task" name="todo" className="p-2 w-100 border-2 border-secondary" style={{outline:"none"}}></input>
        <button onClick={handleAddTask} className="p-1 w-100 bg-secondary text-light border-0 mt-3">Add List</button>
     
    </div>
    <div className="w-50 mt-3 d-flex flex-column gap-2">
        {
            todoList.map((item)=>{
            return <div key={item.id} className="p-2 bg-secondary d-flex justify-content-between text-dark w-100">
                <div style={{width:"90%"}} className="text-truncate d-flex gap-3">
                {item.completed && <div><FaCheckCircle color="green"/></div>}
                {!item.completed && <div><FaCircleXmark color="red" /></div>}
                    {item.title}
                    
                </div>
        <div style={{width:"10%"}} className="text-center}">
            <FaTrash cursor={"pointer"} onClick={()=>handleRemove(item.id)}/>
                <FaCheck cursor={"pointer"} onClick={()=>handlestatusUpdate(item.id)}/>
            </div>
            
        </div>
        })
    }
   </div>
    </div>

}
export default Todo