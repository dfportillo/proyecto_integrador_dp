import './AddToCartButton.css'
import { Link } from 'react-router-dom'

function AddToCartButton(){
    return(
        <>
            <div className='btn-detail-wrapper'>
                    <Link to='/Cart' className='btn-detail'>LO QUIERO</Link>
                </div>
        </>
    )
}

export default AddToCartButton