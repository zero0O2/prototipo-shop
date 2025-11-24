
import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";

const Produtos = ({img,name,preco,star,id}) => {
    useLayoutEffect(() => {
        let reset = star
        let div = document.getElementById(`stars${id}`)
        div.innerHTML = ""
        const Star = ( ) => {
            for(let i = 0; i < 5 ; i++){
                
                if(reset == 0 || reset < 0 ){
                    div.innerHTML += "☆"
                }else{
                    reset = reset - 1
                    div.innerHTML += "★"
                }
            }
        }
        Star()
    } ,[])


    return(
        <>  
            <Link to={`/prototipo-shop/produto/${id}`}>
                <div class=" cursor-pointer flex flex-col h-[100%] w-[270px] justify-center items-center">
                    <div class="flex relative text-[var(--quarta)]">
                        <p class="flex absolute right-0 bg-[var(--primeira)] w-[70px] justify-center items-center rounded-full">Novo</p>
                        <img class="flex w-[100%] h-[100%]" src={img} alt="" />
                    </div>
                    <div class="flex flex-col justify-center text-center gap-y-[2px] items-center text-[var(--sexta)]">
                        <p>{name}</p>
                        <p class="text-[black]">{preco}</p>
                        <div id={`stars${id}`} class="flex text-[20px]">

                        </div>
                    </div>
                    <div class="mt-[20px]">
                        <div class="flex  bg-[var(--primeira)] text-[var(--quarta)] w-[130px] h-[30px] justify-center items-center rounded-full">
                            Ver opçôes
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Produtos