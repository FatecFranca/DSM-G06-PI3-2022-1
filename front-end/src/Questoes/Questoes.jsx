import './Questoes.css'
import api from '../service/api';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';





export default function Questoes() {
    const location = useLocation()
    const [questions, setQuestions] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            await api.get(`question/group/${location.state}`)
            .then(function (res) {
                console.log(res)
                setQuestions(res)
            })
            .catch((e) => (console.log(e)))
        };
        fetchData();
    },[])



    return (
        <>
        {questions && questions.data.map(d => (<p>{d.enunciation}</p>))}
        </>
    )
}