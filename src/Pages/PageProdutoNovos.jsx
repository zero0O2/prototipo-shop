import Aside from "../components/Aside.jsx"
import { useParams } from "react-router-dom"
import {produtos} from "../../public/json/produtos.json"
import { useLayoutEffect } from "react"
import { gsap } from "gsap";

const PageProduto = () => {
    const {id} = useParams()
    const produto = produtos[id]
    let reset = produto.star

    useLayoutEffect(() => {
        let div = document.getElementById(`id`)
        div.innerHTML = ''
        const DisplayNota = () => {
            for(let i = 0; i < 5 ; i++){
                if(reset == 0 || reset < 0){
                    div.innerHTML += '☆'
                }else{
                    reset = reset - 1
                    div.innerHTML += '★'
                }
            }
        }
        
        DisplayNota()
    } ,[])

    useLayoutEffect(() => {
        gsap.from("#imageProdutoPage",{
            duration:1.5,
            ease: "expo.out",
            x:-300
        })
    } ,[])


    return(
        <>
            <Aside page={'home'}/>

            <div class="w-[100%] h-[560px] flex  shadow-2xl text-[var(--sexta)]">
                <div class="w-[100%] h-[100%] flex justify-center items-center ">
                    <img id="imageProdutoPage" class="h-[500px]" src={produto.img} alt="" />
                </div>
                <div class="w-[100%]  h-[100%] flex py-[100px] pb-[200px] flex-col items-center justify-between">
                    <div class="flex gap-y-[10px] flex-col items-center">
                        <h1 class="text-[30px]">{produto.name}</h1>
                        <p class="text-[25px] text-[var(--quinta)]">{produto.preco}</p>
                        <p id='id' class="text-[25px] text-[var(--quinta)]"></p>
                    </div>

                    <div class="flex hover:bg-[var(--terceira)]  cursor-pointer text-[25px] bg-[var(--primeira)] text-[var(--quarta)] w-[240px] h-[60px] justify-center items-center rounded-full">
                        <p class="">Comprar</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageProduto

