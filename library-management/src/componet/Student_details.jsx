import "./Student_details.css";
export default function Student_details(props) {
    return (
        <div className="student-card">
            <p className="student-name">Student: {props.name}</p>
        </div>
    )
}