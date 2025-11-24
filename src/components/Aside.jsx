import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const Aside = ({page}) => {

    return(
        <>
            <div class="flex flex-col items-baseline  justify-baseline top-0 h-[120px] bg-[var(--quarta)] shadow-sm shadow-[#00000018]">
                <div class="flex min-h-[80px] w-[100%] items-center justify-center gap-x-[50px] bg-[var(--primeira)] px-[20px]">
                    <Link to={"/prototipo-shop"}>
                        <img class="min-w-[60px] w-[60px] min-h-[60px] h-[60px] rounded-full border-[3px] border-[white]" src="https://i.pinimg.com/736x/6e/a1/f8/6ea1f812d05065311ba9cc1ca788e21c.jpg" alt="" />
                    </Link>
                    <div class="flex justify-between w-[500px] h-[40px] rounded-full border-[2px] border-[white] bg-[var(--quarta)] ">
                        <input class="max-w-[450px] w-[100%] min-w-[50px] rounded-l-full px-[20px] outline-none text-[black] " type="text" />
                        <button class="bg-[var(--primeira)] w-[50px] rounded-r-full flex justify-center items-center text-[20px] text-[white] cursor-pointer" ><CiSearch /></button>
                    </div>
                    <div class="flex items-center gap-x-[20px] text-[white] ">
                        <CiHeart  class="text-[28px] cursor-pointer"/>
                        <FiShoppingCart  class="text-[20px] cursor-pointer"/>
                    </div>
                </div>
                <div class="flex w-[100%] h-[100%] justify-center items-center px-[20px]">
                    <ul class="flex w-[100%] justify-center items-center gap-x-[25px] text-[var(--sexta)]">
                        <Link to={"/prototipo-shop"} class={`cursor-pointer ${page == 'home'? 'text-[var(--quinta)]' : 'text-[var(--sexta)]'}`}>
                            <p>Home</p>
                        </Link>
                        <Link to={"/prototipo-shop/shop"} class={`cursor-pointer ${page == 'shop'? 'text-[var(--quinta)]' : 'text-[var(--sexta)]'}`}>
                            <p>Shop</p>
                        </Link>
                        <Link to={"/prototipo-shop/produtos"} class={`cursor-pointer ${page == 'produtos'? 'text-[var(--quinta)]' : 'text-[var(--sexta)]'}`}>
                            <p>Produtos</p>
                        </Link>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Aside