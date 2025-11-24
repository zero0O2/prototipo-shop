import { useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";


const Carrossel = ({children: banners}) => {
    console.log(banners.value)
    const [curr , setCurr] = useState(0)

    const prev = () => setCurr((curr) => ( curr === 0 ? banners.length - 1 : curr - 1))
    const next = () => setCurr((curr) => ( curr === banners.length - 1 ? 0 : curr + 1))

    return(
        <>  
            <div class="relative flex  items-center shadow-2xl">
                <div class="flex  overflow-hidden aspect-20/9 max-h-[500px] min-h-[200px] w-[100vw]">
                    <div id="" class="flex w-[100vw] transition-transform ease-out duration-500" style={{transform:`translateX(-${curr*100}%)`}}>
                        {banners}
                    </div>
                </div>
                <MdNavigateNext onClick={next} class="absolute text-[5vw] right-0 border-[0.04em] border-[#ffffff] text-[#ffffff] rounded-full mx-[20px] cursor-pointer" />
                <MdNavigateBefore onClick={prev} class="absolute text-[5vw] left-0 border-[0.04em] border-[#ffffff] text-[#ffffff] rounded-full mx-[20px] cursor-pointer"/>
            </div>
        </>
    )
}

export default Carrossel