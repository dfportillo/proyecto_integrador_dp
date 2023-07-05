import Index from './page/indexMioMio/Index'
import Cart from './page/cart/Cart'
import Detail from './page/detail/Detail'
import {Routes,Route,BrowserRouter} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route path='/' element={<Index />}/>
          <Route path='/Cart' element={<Cart />}/>
          <Route path='/Detail/:id' element={<Detail />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
