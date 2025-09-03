import { useState } from "react";
import Filters from "../Filter/Filters";
import Form from "./Form";
import "./List.css"; // CSS file

export default function List() {
  const [getdata, setdata] = useState(
    [
  {
    "full_name": "Rohan Sharma",
    "email": "rohan.sharma@example.com",
    "number": "9876543210",
    "date": "2005-02-15",
    "age": 20
  },
  {
    "full_name": "Anjali Verma",
    "email": "anjali.verma@example.com",
    "number": "9123456789",
    "date": "2010-06-20",
    "age": 15
  },
  {
    "full_name": "Suresh Gupta",
    "email": "suresh.gupta@example.com",
    "number": "9988776655",
    "date": "1990-11-30",
    "age": 35
  },
  {
    "full_name": "Nisha Agarwal",
    "email": "nisha.agarwal@example.com",
    "number": "9012345678",
    "date": "1975-04-01",
    "age": 50
  },
  {
    "full_name": "Vikram Patel",
    "email": "vikram.patel@example.com",
    "number": "9765432109",
    "date": "2000-09-10",
    "age": 25
  },
  {
    "full_name": "Pooja Kumar",
    "email": "pooja.kumar@example.com",
    "number": "9234567890",
    "date": "1998-07-22",
    "age": 27
  },
  {
    "full_name": "Manish Sharma",
    "email": "manish.sharma@example.com",
    "number": "9123456789",
    "date": "2008-03-05",
    "age": 17
  },
  {
    "full_name": "Kavita Singh",
    "email": "kavita.singh@example.com",
    "number": "9000111222",
    "date": "1985-12-18",
    "age": 40
  },
  {
    "full_name": "Amit Kumar",
    "email": "amit.kumar@example.com",
    "number": "9876543210",
    "date": "1995-08-15",
    "age": 30
  },
  {
    "full_name": "Priya Singh",
    "email": "priya.singh@example.com",
    "number": "9123456780",
    "date": "2000-01-10",
    "age": 25
  },
 
    {
    full_name: "Amit Kumar",
    email: "amit@example.com",
    number: "9876543210",
    date: "1995-08-15",
    age: "30"
  },
  {
    full_name: "Priya Singh",
    email: "priya@example.com",
    number: "9123456780",
    date: "2000-01-10",
    age: "25"
  }
  ]); // <-- array of objects
  const [getdataAge,setdataAge]= useState('')

  const passData = (data) => {
    setdata([...getdata, data]); // purana data + naya add
   // console.log("Form Data: ", data);
  };
  const ageValue =(dataAge)=>{
    setdataAge(dataAge)
    
  }
  //console.log(getdataAge)

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "blue", border: "1px black solid", background: "red" , }} >Details of Student</h1>
      <Form onSave={passData} />

      <h1 style={{ textAlign: "center", color: "blue",}}>List</h1>
      <Filters onAge={ageValue} />

      <div className="table-container">
        <div className="table-header">
          <span>Name</span>
          <span>Mail</span>
          <span>Phone</span>
          <span>DOB</span>
          <span>Age</span>
        </div>
        {getdata
          .filter(item => {
            if (!getdataAge) return true; // All Ages selected
            if(Number(item.age) <=  Number(getdataAge)) return true;
           // return Number(item.age)   Number(getdataAge);
          })
          .map((item, index) => (
            <div className="table-row" key={index}>
              <span>{item.full_name}</span>
              <span>{item.email}</span>
              <span>{item.number}</span>
              <span>{item.date}</span>
              <span>{item.age}</span>
            </div>
          ))}
      </div>
    </div>
  );
}
