import './ItemDetail.css'

function ItemDetail ({item}){
    return(
        <>
        <div className='detail-wrapper'>
                    <div className='detail'>
                        <img 
                            src={item.image} 
                            alt={item.title}
                            />
                        <div className='detail-element-content'>
                            <span className='sub-title'>{item.title}</span>
                            <span className='detail-text'>
                                {item.description}
                            </span>
                            <span className='color-selection'>Colores: {item.colors.map((c,i) => 
                            <span key={i}>{c} </span>)}</span>
                            <span className='size-selection'>Tallas: {
                                item.sizes.map((s,i) => (
                                    <span key={i}>{s} </span>
                                ))
                            }</span>
                            <span className='price'>Precio:{item.price}</span>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default ItemDetail