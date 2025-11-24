import Produtos from "./Produtos.jsx"


const Lancamentos = ({produtos}) => {
    return(
        <div class=" flex flex-col justify-baseline items-center  w-[100%] gap-y-[30px] mt-[50px]">
            <h2 class="text-[30px]  text-[var(--sexta)]">Lançamentos</h2>
            <div class="flex w-[90%] justify-evenly items-center">
                {
                    produtos.map((element) => (
                        
                        <Produtos key={element.id} id={element.id} name={element.name} preco={element.preco} star={element.star} img={element.img} />
                    
                    ))
                }

            </div>
        </div>

    )
}

export default Lancamentos