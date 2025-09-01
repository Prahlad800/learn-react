import './Card2.css'

export default function Card2(props){
    return(
        <div className="card2">
            <div className="card2-content">{props.children}</div>
            <button className="card2-btn" onClick={props.increment}>
                {props.text}
            </button>
        </div>
    )
}