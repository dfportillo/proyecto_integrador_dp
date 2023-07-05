import './detailCss.css'
import { Navbar,ItemDetail } from '../../components'
import { Link, useParams } from 'react-router-dom'
import { BackButton,AddToCartButton } from '../../components/buttons'


const itemsMock = [
    {
        id: 1,
        image: '../recursos/Anteojos/ali-pazani-GwglcplmXDs-unsplash.jpg',
        title: 'anteojos 1',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur magnam iste minus ea asperiores autem.',
        sizes: ['S', 'M'],
        colors: ['Rojo', 'Violeta'],
        price: 1500
    },
    {
        id: 2,
        image: '../recursos/Anteojos/Anteojos.jpg',
        title: 'anteojos 2',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur magnam iste minus ea asperiores autem.',
        sizes: ['S', 'M'],
        colors: ['Rojo', 'Violeta'],
        price: 5500
    },
    {
        id: 3,
        image: '../recursos/Anteojos/apostolos-vamvouras-mKi4QEJXRCs-unsplash.jpg',
        title: 'anteojos 3',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur magnam iste minus ea asperiores autem.',
        sizes: ['S', 'M'],
        colors: ['Rojo', 'Violeta'],
        price: 1000
    },
]

function Detail() {
    const { id } = useParams();
    const item = itemsMock.find((item) => item.id == id)
    return (
        <>
            <Navbar isCart={true}/>
            <main>
                <BackButton />
                <ItemDetail item={item}/>
                <AddToCartButton />
            </main>
        </>
    )
}

export default Detail