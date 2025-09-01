import './FormSubscription.css';
import {useState} from 'react';
const FormSubscription =(props)=>{
    // const [userTitle,setUserTitle]=useState("");
    // const [userDate,setUserDate]=useState("");
    // const [userAmount,setUserAmount]=useState("");
    const [form,setForm]=useState({userTitle:'Enter Subscription Title',userDate:'',userAmount:'Enter Amount'})
    const titleChangeHandler = (events) =>{
    //   setUserTitle(events.target.value)
    //   setForm({...form,userTitle:events.target.value})
      setForm((prevState)=>{
          return {...prevState,userTitle:events.target.value}
      })
      console.log(form)
    }
    const dateChangeHandler = (events) =>{
        // setForm({...form,userDate:events.target.value})
        setForm((prevState)=>{
            return {...prevState,userDate:events.target.value}
        })
        // setUserDate(events.target.value);
    }
    const amountChangeHandler = (events) =>{
        // setForm({...form,userAmount:events.target.value}) 
        setForm((prevState)=>{
            return {...prevState,userAmount:events.target.value}
        })
        console.log(form)
        // setUserAmount(events.target.value);
    }
    const submitHandler =(events)=>{
        events.preventDefault();
        const Subscription ={title:form.userTitle,amount:form.userAmount,date:new Date(form.userDate)};
        props.onSave(Subscription);
        console.log("on submit", Subscription)
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="new_subscription_controls">
              <div className="new_subscription_control">
                  <label>Title</label>
                  <input type="text" value={form.userTitle} onChange={titleChangeHandler}></input>
              </div>
              <div className="new_subscription_control">
                  <label>Date</label>
                  <input type="date" value={form.userDate} onChange={dateChangeHandler}></input>
              </div>
              <div className="new_subscription_control">
                  <label>Amount</label>
                  <input type="text" value={form.userAmount} onChange={amountChangeHandler}></input>
              </div>
            </div>
            <div className="new_subscription_actions">
            <button type="button" className="danger" onClick={props.onCancel}>Cancel</button>
            <button type="submit">Save</button>
            </div>
        </form>
    )
}
export default FormSubscription