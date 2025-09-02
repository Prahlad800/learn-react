import { useState } from "react";
import Filters from "../Filter/Filters";
import Form from "./Form";
import "./List.css"; // CSS file

export default function List() {
  const [getdata, setdata] = useState([]); // <-- array of objects

  const passData = (data) => {
    setdata([...getdata, data]); // purana data + naya add
    console.log("Form Data: ", data);
  };

  return (
    <div>
      <Form onSave={passData} />

      <h1>List</h1>
      <Filters/>

      <div className="table-container">
        <div className="table-header">
          <span>Name</span>
          <span>Mail</span>
          <span>Phone</span>
          <span>DOB</span>
        </div>

        {getdata.map((item, index) => (
          <div className="table-row" key={index}>
            <span>{item.full_name}</span>
            <span>{item.email}</span>
            <span>{item.phone}</span>
            <span>{item.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
