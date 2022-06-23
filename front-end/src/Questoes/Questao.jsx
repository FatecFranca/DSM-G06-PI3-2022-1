import { useState } from "react"



const Questao = (props, onChange) => {
    
    onChange = props.onChange
    props = props.props

    const [answer, setAnswer] = useState("P");
    const answer_id = props._id


    const handleChange = (e) => {
        setAnswer(e.target.value)
        onChange(props._id, e.target.value, props.number)
    }


    return (
        <div>
            <p>{props.number}-{props.enunciation}</p>
            <input 
            name={props.number}
            type="radio"
            value="Y"
            onChange={handleChange}
            checked={answer === "Y"}
            />
            <input 
            name={props.number}
            type="radio"
            value="N"
            onChange={handleChange}
            checked={answer === "N"}
            />
            <input 
            name={props.number}
            type="radio"
            value="X"
            onChange={handleChange}
            checked={answer === "X"}
            />
            <input 
            name={props.number}
            type="radio"
            value="P"
            onChange={handleChange}
            checked={answer === "P"}
            />

            <pre>{JSON.stringify(answer)}</pre>
            <pre>{JSON.stringify(answer_id)}</pre>
        </div>

    )

}

export default Questao


