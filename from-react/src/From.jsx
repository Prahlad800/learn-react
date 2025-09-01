import './From.css';
import React,{useState} from 'react';

const From = () => {
   const [get,set]=useState({full_name:'Enter your name',mobile_number:'Enter your mobile number',DOD:'',email:'Enter your email'})
    const handleFullName=(events)=>{
        set( {...get, full_name : events.target.value})
      
        }
    const handleMobile=(events)=>{
        set( {...get,mobile_number:events.target.value})
        }
    const handleDOB=(events)=>{
        set({ ...get,DOD:events.target.value})
        }
    const handleEmail=(events)=>{
        set({ ...get,email:events.target.value})
        }
    const handlesubmit= (events)=>{
       events.preventDefault()
        const sub={
            full_namea:get.full_name,
            mobile_number:get.mobile_number,
            DOB:get.DOD,
            email:get.email
        }
        console.log(sub)

    }
    return (
        <div className="form-container" >
            <form className="custom-form" onSubmit={handlesubmit}>
                <h2>Registration Form</h2>
                <div className="form-group">
                    <label>Full Name</label>
                    <input type="text"  onChange={handleFullName} value={get.full_name} placeholder="Enter your name" />
                </div>
                <div className="form-group">
                    <label>Mobile Number</label>
                    
                    <input type="number" onChange={handleMobile} value={get.mobile_number} placeholder="Enter your mobile number" />
                </div>
                <div className="form-group">
                    <label>DOB</label>
                    <input type="date" value={get.DOB} onChange={handleDOB} />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" onChange={handleEmail} placeholder="Enter your email" />
                </div>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
}
export default From;

//  