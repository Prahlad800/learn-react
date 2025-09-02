import { useState } from "react";
import "./Form.css"; // CSS file import kiya

export default function Form(props) {
  const [getForm, setForm] = useState({
    full_name: "",
    email: "",
    number: "",
    date: "",
  });

  const handlAll = (events) => {
    setForm({ ...getForm, [events.target.name]: events.target.value });
  };

  const handlSub = (events) => {
    events.preventDefault();
    props.onSave(getForm);
  };

  return (
    <div className="form-container">
      <form onSubmit={handlSub}>
        <label className="form-label">Full name</label>
        <input
          type="text"
          name="full_name"
          className="form-input"
          onChange={handlAll}
          value={getForm.text}
        />

        <label className="form-label">Email</label>
        <input
          type="email"
          name="email"
          className="form-input"
          onChange={handlAll}
          value={getForm.email}
        />

        <label className="form-label">DOB</label>
        <input
          type="date"
          name="date"
          className="form-input"
          onChange={handlAll}
          value={getForm.date}
        />

        <label className="form-label">Phone number</label>
        <input
          type="number"
          name="number"
          className="form-input"
          onChange={handlAll}
          value={getForm.number}
        />

        <button type="submit" className="form-button">
          ADD
        </button>
      </form>
    </div>
  );
}
