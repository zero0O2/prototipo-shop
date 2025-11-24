import Carrossel from "./Carrossel.jsx"
import Categorias from "./Categorias.jsx"
import Lancamentos from "./Lancamentos.jsx"
import ProdutosApi from "./ProdutosApi.jsx"
import { useLayoutEffect , useEffect ,useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const banners = [
    '../../public/img/banner.png',
    '../../public/img/banner2.png',
    "../../public/img/image.png",
]

const Body = ({produtos}) => {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(".categoria",{
            y:150,
            duration:1.5,
            opacity: 0,
            delay:1,
            stagger:.3,
            ease: "expo.out",
            scrollTrigger:{
                trigger:".categoria",
                scrub:true,
                markers:false,
                start:"top bottom",
                end:"bottom 600vw"
            }
        })
        
    } , [])

    const [produtosApi,setProdutos] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(api => {
            setProdutos(api)
        })
    },[])
                            

    return(
        <>
            <div class=" flex flex-col h-[2400px]">
                <Carrossel>
                    {banners.map((e,index) =>( 
                        <img class="min-w-[100vw] h-[100%]" key={index} src={e} alt="" />
                    ))}
                </Carrossel>

                <Categorias/>

                <Lancamentos produtos={produtos}/>

                <div class=" h-[100%] mt-[80px] gap-y-[50px] flex flex-col pb-[50px] px-[60px] text-[var(--sexta)]">
                    <div class=" text-[40px]">
                        <h1>Produtos populates</h1>
                    </div>
                    <div class=" flex flex-wrap gap-y-[40px] gap-x-[80px] justify-center align-baseline h-[100%]">
                        {   
                            produtosApi.map((e)=>(
                                e.id < 17 ? <ProdutosApi key={e.id} element={e}/> : ''
                            ))
                            
                        }

                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Body 