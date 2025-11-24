import { MdCheckroom } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { CiHeadphones } from "react-icons/ci"
import Categoria from "./Categoria.jsx"


const Categorias = () => {
    return(
        <>
            <div className="ola" class=" flex flex-col gap-y-[40px] justify-between items-center my-[30px] px-[20px]">
                <h2 class="text-[36px] text-[var(--sexta)]">Categorias</h2>
                <div className="categorias" class=" flex w-[100%] justify-center items-center gap-[7vw]">
                    <div className="categoria" id="c1">
                        <Categoria name='Comidas' img={<IoFastFoodOutline class="text-[100px]"/>}/>
                    </div>
                    <div className="categoria" id="c2">
                        <Categoria name='Eletronicos' img={<CiHeadphones class="text-[100px]"/>}/>
                    </div>
                    <div className="categoria" id="c3">
                        <Categoria name='Roupas' img={<MdCheckroom class="text-[100px] "/>}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Categorias