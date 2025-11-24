
const Categoria = ({name,img}) => {
    return(
        <li className="categoria" class="w-[14vw] h-[10vw] flex flex-col justify-center items-center p-[10px] border-2 border-[var(--sexta)] text-[var(--sexta)] gap-y-[10px] rounded-2xl">
            {img}
            <p class="text-[2vw]">{name}</p>
        </li>
    )
}

export default Categoria