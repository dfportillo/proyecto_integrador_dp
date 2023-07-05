import './BackButton.css'
import { Link } from 'react-router-dom'

function BackButton() {
    return (
        <>
            <div className='back-btn'>
                <Link to='/' className='btn-back'>Volver</Link>
            </div>
        </>
    )
}

export default BackButton