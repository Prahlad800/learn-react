import { useState } from "react"
import Filter from "./filter"
import './Student_detaile.css'
export default function StudentDetaile(props) {
    const [selectedAge, setSelectedAge] = useState('')

    const Students=[
        {
            id: 1,
            name: "Amit Sharma",
            dob: "2005-03-15",
            age: 19,
            class: "12th",
            number: "9876543210"
        },
        {
            id: 2,
            name: "Priya Verma",
            dob: "2006-07-22",
            age: 18,
            class: "11th",
            number: "9876501234"
        },
        {
            id: 3,
            name: "Rahul Singh",
            dob: "2004-12-01",
            age: 20,
            class: "Graduation 1st Year",
            number: "9123456780"
        },
        {
            id: 4,
            name: "Neha Gupta",
            dob: "2007-02-10",
            age: 17,
            class: "10th",
            number: "9012345678"
        },
        {
            id: 5,
            name: "Arjun Yadav",
            dob: "2005-09-05",
            age: 19,
            class: "12th",
            number: "9812345670"
        },
        {
            id: 6,
            name: "Simran Kaur",
            dob: "2006-11-11",
            age: 18,
            class: "11th",
            number: "9898989898"
        },
        {
            id: 7,
            name: "Vikas Pandey",
            dob: "2008-01-20",
            age: 16,
            class: "9th",
            number: "9090909090"
        },
        {
            id: 8,
            name: "Anjali Mehta",
            dob: "2005-05-30",
            age: 19,
            class: "12th",
            number: "9797979797"
        },
        {
            id: 9,
            name: "Karan Patel",
            dob: "2007-04-18",
            age: 17,
            class: "10th",
            number: "9696969696"
        },
        {
            id: 10,
            name: "Riya Khan",
            dob: "2006-08-09",
            age: 18,
            class: "11th",
            number: "9595959595"
        }
    ]
    const filteredStudents = selectedAge
        ? Students.filter(student => student.age === Number(selectedAge))
        : Students


    return (
        <div className="student-list">
            <Filter selectedAge={selectedAge} onAgeChange={setSelectedAge} />
            <ul>
         { filteredStudents.map(student => (
                    <li key={student.id}>
                        {student.name} | {student.class} | Age: {student.age} | DOB: {student.dob} | Phone: {student.number}
                    </li>
                ))}
            </ul>
        </div>
    )
}