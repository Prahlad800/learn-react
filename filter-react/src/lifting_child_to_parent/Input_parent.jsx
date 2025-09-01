import { useState } from "react"
import Input_child from "./Input_child"
function Input_parent(){
    
    const [get,set]=useState("")
    const data3=(data)=>{
        set(data)
      //  console.log("data p :",data)

    }

    return(
        <div>
           <p>hi... i am parent</p>
           <p>child:{get} </p>
            <Input_child onsave={data3} />
        </div>
    )
}
export default Input_parent