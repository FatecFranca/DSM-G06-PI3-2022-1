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
            await api.get(`/answer/assessment/${location.state}`)
            .then(res => setResultado(res.data))
            .catch(error => console.log(error))
        }
        fetchData();
        console.log(resultado)
    }, [])

    return(
        <pre>{JSON.stringify(resultado, null, 2)}</pre>
    )
}

export default Resultado