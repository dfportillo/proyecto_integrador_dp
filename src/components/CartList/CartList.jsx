import CartItem from '../CartItem/CartItem';
import './CartList.css'

const itemsMock = [ /*recursos disponibles */
    {
        id: 1,
        image: './recursos/Anteojos/ali-pazani-GwglcplmXDs-unsplash.jpg',
        title: 'anteojos 1',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur magnam iste minus ea asperiores autem.',
        sizes: ['S', 'M'],
        colors: ['Rojo', 'Violeta'],
        price: 1500
    },
    {
        id: 2,
        image: './recursos/Anteojos/Anteojos.jpg',
        title: 'anteojos 2',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur magnam iste minus ea asperiores autem.',
        sizes: ['S', 'M'],
        colors: ['Rojo', 'Violeta'],
        price: 5500
    },
    {
        id: 3,
        image: './recursos/Anteojos/apostolos-vamvouras-mKi4QEJXRCs-unsplash.jpg',
        title: 'anteojos 3',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur magnam iste minus ea asperiores autem.',
        sizes: ['S', 'M'],
        colors: ['Rojo', 'Violeta'],
        price: 1000
    },
]

const cartItemsMock = [  /* seleccion del carrito */
    { productId: 1, size: 'S', color: 'Rojo', count: 2 },
    { productId: 2, size: 'S', color: 'Violeta', count: 1 }
]

function CartList() {
    const cartItems = cartItemsMock.map(
        it => {
            const aux = itemsMock.find(
                i => i.id == it.productId
            );
            return {
                title: aux.title,
                size: it.size,
                color: it.color,
                price: aux.price,
                count: it.count
            }
        }
    ).map((val, index) => <CartItem cartItem={val} key={index} />)

    return (
        <>
            <div className="item-wrapper">
                {cartItems}
            </div>
        </>
    )
}

export default CartList