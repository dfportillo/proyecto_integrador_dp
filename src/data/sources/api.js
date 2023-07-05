export const ApiDataSource = () => ({ // se escribe asi entre parentesis pq es un objeto dentro de una funcion flecha
    endpoint: '',
        async getAllProducts(){
        const res = await fetch(`${this.endpoint}/products`)
        const data = await res.json()
    },
    async postCheckOut(checkOutData){

    }

})



// un objeto dado de la siguiente manera
// { endpoint: '', async getAllProducts() { ... } }