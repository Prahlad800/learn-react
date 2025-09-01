import { useState } from "react"
function Input_child(props){
    const [getinput,setinput]=useState('')
    const inputhadler=(events)=>{
        setinput(events.target.value);
      console.log("data = ",events.target.value)
      props.onsave(events.target.value)


    }

    return(
        <div>

            <p>hi... i am child</p>
            <input type="text" value={getinput} onChange={inputhadler} />
        </div>
    )
}
export default Input_child