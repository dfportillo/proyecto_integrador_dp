import React from "react";
import "./indexCSS.css"
import {Navbar,SearchBox,ItemList} from "../../components"

function Index(){
    return(
        <>
            <Navbar isCart={true} />
            <main>
                <SearchBox />
                <ItemList />
            </main>

        </>
    )
}

export default Index