import Aside from "../components/Aside.jsx"
import Body from "../components/Body.jsx"
import { useEffect,useState } from "react"
import {produtos} from "../../public/json/produtos.json"

const Home = () => {
    
    const [api,setProdutos] = useState([])
    
    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
        .then(response => response.json())
        .then(data => {
            setProdutos(data)
        })

    
    },[])

    return(
        <>
            <Aside page={'home'}/>
            <Body produtos={produtos}/>
        </>
    )
}

export default Home

