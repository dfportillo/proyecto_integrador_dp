import React from "react";
// import './cartCss.css' 
import { CartList, Navbar } from "../../components";
import { CheckOutButton, ContinueButton } from "../../components/buttons";

function Cart() {
    return (
        <>
            <Navbar />
            <main>
                <CartList />
                <ContinueButton />
                <CheckOutButton />
            </main>
        </>
    )
}

export default Cart