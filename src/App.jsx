import Index from './page/indexMioMio/Index'
import Cart from './page/cart/Cart'
import Detail from './page/detail/Detail'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { DataProvider } from './data/context';
import DataSources from './data'

function App() {

  return (
    <BrowserRouter>
      <DataProvider value={DataSources}>
        <div className='app'>
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/Detail/:id' element={<Detail />} />
          </Routes>
        </div>
      </DataProvider>
    </BrowserRouter>
  )
}

export default App
