import Student_details from "./Student_details";
import "./Student_list.css";

export default function Student_list(){
    const student  = [
      "Aarav",
      "Priya",
      "Rahul",
      "Sneha",
      "Vikram",
      "Anjali",
      "Rohan",
      "Kavya",
      "Siddharth",
      "Meera"
    ];
    return(
        <div className="student-list-container">
            <h3 className="student-list-title">Student List</h3> 
            <ul className="student-list">
                {student.map((name,index)=>(
                    <li key={index} className="student-list-item">
                        <Student_details name ={name} />
                    </li>
                ))}
            </ul>   
        </div>
    )
}