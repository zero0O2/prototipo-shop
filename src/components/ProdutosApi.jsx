
import { useLayoutEffect } from "react"
import { Link } from "react-router-dom"

const ProdutosApi = ({element}) => {

    let reset = Number.parseInt(element.rating.rate)
    useLayoutEffect(() => {
            let div = document.getElementById(`notaApi${element.id}`)
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

    return(
        <>
            <Link to={`/prototipo-shop/produtos/${element.id}`} class=" cursor-pointer  h-[400px] pb-[20px] flex flex-col w-[270px] justify-between items-center">
                <div class="flex flex-col justify-center items-center gap-y-[30px]">
                    <div class="flex relative text-[var(--quarta)]">
                        <p class="flex absolute right-0 bg-[var(--primeira)] w-[70px] justify-center items-center rounded-full"></p>
                        <img class="flex h-[200px]" src={element.image} alt="" />
                    </div>
                    <div class="flex flex-col justify-center text-center gap-y-[2px] items-center text-[var(--sexta)]">
                        <p class="line-clamp-2 ">{element.title}</p>
                        <p class="text-[black]">R$ {element.price}</p>
                        <div id={`notaApi${element.id}`} class="flex text-[20px]">
                            
                        </div>
                    </div>
                </div>
                <div class="">
                    <div class="flex  bg-[var(--primeira)] text-[var(--quarta)] w-[130px] h-[30px] justify-center items-center rounded-full">
                        Ver opçôes
                    </div>
                </div>
            </Link>
        </>
    )
}

export default ProdutosApi