import { useParams } from "react-router-dom"
import Aside from "../components/Aside.jsx"
import { useEffect , useState , useLayoutEffect} from "react"
import gsap from "gsap"

const PageProduto = () => {
    
    const {id} = useParams()
    const [produtosApi,setProdutos] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(api => {
            setProdutos(api)
        })
    },[])

    const gerarEstrelas = (nota) => {
        let estrelas = "";

        for (let i = 0; i < 5; i++) {
            estrelas += i < nota ? "★" : "☆";
        }

        return estrelas;
    };


    if(!produtosApi.length){
        return 
    }
    
    const element = produtosApi[id-1]



    return(
        <>
            <Aside page={'home'}/>

            <div class="w-[100%] h-[560px] flex shadow-2xl text-[var(--sexta)]">
                <div class="w-[100%] h-[100%] flex justify-center items-center">
                    <img id="imageProdutoPage" class="h-[400px]" src={element.image} alt='' />
                </div>

                <div class="w-[100%] h-[100%] flex py-[100px] pb-[200px] flex-col items-center justify-between">
                    <div class="flex gap-y-[10px] flex-col items-center">
                        <h1 class="text-[30px]">{element.title}</h1>
                        <p class="text-[25px] text-[var(--quinta)]">R${element.price}</p>
                        <p id='id' class="text-[25px] text-[var(--quinta)]">
                            {
                                gerarEstrelas(Number.parseInt(element.rating.rate))
                            }
                        </p>
                    </div>

                    <div class="flex hover:bg-[var(--terceira)] cursor-pointer text-[25px] bg-[var(--primeira)] text-[var(--quarta)] w-[240px] h-[60px] justify-center items-center rounded-full">
                        <p>Comprar</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageProduto
