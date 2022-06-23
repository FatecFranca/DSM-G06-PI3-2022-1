import { useState } from "react"



const Questao = (props, onChange) => {

    
    onChange = props.onChange
    props = props.props

    const [answer, setAnswer] = useState("P");
    const answer_id = props._id
    const [comment, setComment] = useState('');



    const handleChange = (e) => {
        if(e.target.id === "quest_comment") {
            setComment(e.target.value)
            return onChange(props._id, answer, props.number, e.target.value)
        }
        setAnswer(e.target.value)
        onChange(props._id, e.target.value, props.number, comment)
    }

    
    return (
        <main className="container">
        <div style={{width: '50%'}} className="question">
            <p>{props.number}-{props.enunciation}</p>
            <div className="answ_Y">
            <input 
            name={props.number}
            type="radio"
            value="Y"
            onChange={handleChange}
            checked={answer === "Y"}
            />
            <label> - Sim</label>  
            </div>

            <div className="answ_N">
            <input 
            name={props.number}
            type="radio"
            value="N"
            onChange={handleChange}
            checked={answer === "N"}
            />
            <label> - Não</label>
            </div>

            <div className="answ_X">
            <input 
            name={props.number}
            type="radio"
            value="X"
            onChange={handleChange}
            checked={answer === "X"}
            />
            <label> - Não aplicável</label>  
            </div>

            <div className="answ_P">
            <input 
            name={props.number}
            type="radio"
            value="P"
            onChange={handleChange}
            checked={answer === "P"}
            />
            <label> - Pular</label>   
            </div>

            <div className="answ_coment">

              <label>Comentário</label>
              <textarea 
              style={{marginLeft: '10px'}}
              id="quest_comment" 
              placeholder="" 
              type="text"
              onChange={handleChange}
              
              ></textarea>

            </div>

            <pre>{JSON.stringify(answer)}</pre>
            <pre>{JSON.stringify(answer_id)}</pre>
        </div>
        </main>

    )

}

export default Questao


