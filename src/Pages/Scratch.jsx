import { Fragment } from "react"
import { useState } from "react"
import {Row} from "react"
const Scratch=()=>{
    // const user_info=[{"id":1,"age":30,"name":"John Doe","location":"New York","qualifications":["B.Sc. Computer Science","M.Sc. Data Science"]},
    // {"id":2,"age":25,"name":"Jane Smith","location":"Los Angeles","qualifications":["B.A. English","M.A. Creative Writing"]},
    // {"id":3,"age":40,"name":"Michael Johnson","location":"Chicago","qualifications":["MBA","B.Sc. Economics"]},
    // {"id":4,"age":28,"name":"Emily Davis","location":"Houston","qualifications":["B.Sc. Chemistry","Ph.D. Biochemistry"]},
    // {"id":5,"age":35,"name":"David Martinez","location":"Phoenix","qualifications":["B.Eng. Mechanical Engineering"]},{"id":6,"age":22,"name":"Sophia Brown","location":"Philadelphia","qualifications":["B.Sc. Psychology"]},{"id":7,"age":33,"name":"James Wilson","location":"San Antonio","qualifications":["B.Sc. Computer Science"]},{"id":8,"age":27,"name":"Olivia Garcia","location":"San Diego","qualifications":["B.Sc. Nursing"]},{"id":9,"age":45,"name":"William Lee","location":"Dallas","qualifications":["Ph.D. Physics"]},{"id":10,"age":29,"name":"Isabella White","location":"San Jose","qualifications":["B.A. Sociology","M.S.W. Social Work"]}]
   
// const [counter,setCounter]=useState(1)//destructure
    
//   const handleIncrement=()=>{
//     setCounter(counter+1)
//   }
//   const handleDecrement=()=>{
//     setCounter(counter-1)
//   }

// const [counter,setCounter]=useState({counterOne:0,counterTwo:0})

// const handleUpdate=(type)=>{
// if (type=="+")
// {setCounter(counter+1)}
// else
// {setCounter(counter-1)}
// }

// const handleIncrementone=()=>{
// setCounter({...counter,counterOne:counter.counterOne+1})
// }
// const handleDecrementone=()=>{
// setCounter({...counter,counterOne:counter.counterOne-1})
// }
// const handleIncrementtwo=()=>{
// setCounter({...counter,counterTwo:counter.counterTwo+1})
// }
// const handleDecrementtwo=()=>{
// setCounter({...counter,counterTwo:counter.counterTwo-1})
// }

const [array,SetArray]=useState([])
const handleAdd=()=>{
SetArray([...array,"New Data"])
// array.push("helloworld")    --->immutable.Changes are visible once updated(no real time changing)
// SetArray(array)
}
const handleRemove=()=>{
//  array.pop()              --->immutable / not preferred
//  SetArray(array)
const result=array.filter((item,index)=>index!=0)
    SetArray(result)
}
return <Fragment>

{/* {
arr.map((num,index)=>{
    return <div key={index}>{num}</div>
             })
 }  */}
 {/* {
user_info.map((user)=>
     {   return <div key={user.id}>
        <h5>{user.name}({user.age})</h5>
        <p>{user.location}</p>
 
     {
        user.qualifications.map((qualification,index)=>{
            return <div key={index}><p>{qualification}</p></div>
        })
     }
     </div> })
 } */}

<div className="d-flex  mt-4 flex-column align-items-center">

    <div className="text-center">
    <div>{array.join(",")}</div>
    <div className="d-flex gap-3">
    <button className="btn btn-primary mt-4" onClick={handleAdd}>Increment 1</button>
    <button className="btn btn-danger mt-4" onClick={handleRemove}>Decrement 1</button></div>
</div>

    {/* <div className="text-center">
    <div>{counter.counterTwo}</div>
    <div className="d-flex gap-3">
    <button className="btn btn-primary mt-4" onClick={handleIncrementtwo}>Increment 2</button>
    <button className="btn btn-danger mt-4" onClick={handleDecrementtwo}>Decrement 2</button></div>
</div> */}
</div>

</Fragment>
}
export default Scratch