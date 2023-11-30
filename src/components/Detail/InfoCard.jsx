const InfoCard = (props) => {
    const isValorArray = Array.isArray(props.valor);
    return(
        <p>{props.tipo}:
        {isValorArray? (
            props.valor.map((producer)=>(
                <span className="px-1">{producer.name}</span>
              ))
        ) : (
            <span>{props.valor}</span>
        )}
        
        </p>
    )
}

export default InfoCard;