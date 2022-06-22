import './Questoes.css'
import api from '../service/api';
import {  useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Questao from './Questao';



export default function Questoes() {
    const location = useLocation()
    const [questions, setQuestions] = useState(null);
    const navigate = useNavigate()
    
    const assessment_id = location.state.assessment_id


    const [answers, setAnswers] = useState({})
    const handleInputChange = (id, value, number) => {
        setAnswers({...answers, [number] : {
        ["objective_answer"] : value ,
        ["question"] : id, 
        ["assessment"] : assessment_id}})
    }

    const handleSubmit = async () => {
        Object.entries(answers).map (item => {
            api.post("/answer/", item[1])
            .then(res => console.log(res))
            .catch(error => console.log(error))
        })
        .then(navigate("/checklist", {state : assessment_id}))
    }

    useEffect(() => {
        const fetchData = async () => {
            await api.get(`question/group/${location.state.questionGroupId}`)
                .then(function (res) {
                    setQuestions(res)
                })
                .catch((e) => (console.log(e)))
        };
        fetchData();
    }, [])



    return(
        <div>
            {questions && questions.data.map(d => (<Questao props={d} onChange={handleInputChange}/>))}

            <button onClick={handleSubmit}>Submit</button>
            
            <pre>{JSON.stringify(answers)}</pre>
        </div>
    )
}