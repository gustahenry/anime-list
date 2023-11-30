const InfoHead = (props) => {
    
    return(
        <div className="text-center mx-5">
            <p className="text-base font-semibold">{props.tipo}</p>
            <p className="text-2xl font-semibold">{props.valor}</p>
        </div>
    )
}

export default InfoHead;