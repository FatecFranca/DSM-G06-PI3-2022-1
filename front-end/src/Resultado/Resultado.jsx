import { useLocation } from "react-router-dom"
import api from "../service/api"
import { useState } from "react"
import { useEffect } from "react"



const Resultado = () => {
    // assessment_id = location.state
    const location = useLocation()
    const [resultado, setResultado] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const asnwersResult = await api.get(`/answer/assessment/${location.state}`)
            .then(res => setResultado(res.data))
            .catch(error => console.log(resultado))
        }
        fetchData();
    }, [])



    return(
        <div>
            <p>Sim : {resultado && resultado.filter(obj => {
                if(obj.objective_answer === "Y") {
                    return true;
                }
                return false;
            }).length}</p>
            <p>Não : {resultado && resultado.filter(obj => {
                if(obj.objective_answer === "N"){
                    return true;
                }
                return false;
            }).length}</p>
            <p>Não aplicável : {resultado && resultado.filter(obj => {
                if(obj.objective_answer === "X"){
                    return true;
                }
                return false;
            }).length}</p>
       
            <pre>{JSON.stringify(resultado, null, 2)}</pre>
        </div>
    )
}

export default Resultado