import './CartItem.css'

function CartItem({ cartItem }) {
    return (
        <>
            <div className="cart-item">
                <div className='sub-title-color-size-wrapper'>
                    <span className="sub-title-cart">{cartItem.title}</span>
                    <span className="item-size-color">Talle:{cartItem.size} | Color:{cartItem.color}</span>
                </div>
                <div className="price-count-wrapper">
                    <span className="price">{cartItem.price}</span>
                    <span className="amount-box">
                        <span className="subs">
                            -
                        </span>
                        <span className="amount">
                            {cartItem.count}
                        </span>
                        <span className="add">
                            +
                        </span>
                    </span>
                </div>
            </div>
        </>
    )
}

export default CartItem