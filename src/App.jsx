import Index from './page/indexMioMio/Index'
import Cart from './page/cart/Cart'
import Detail from './page/detail/Detail'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

//

import { DataProvider } from './data/context';
import DataSources from './data'
import { Provider } from 'react-redux';
import { store } from './redux';

function App() {

  return (
    <Provider store={store}>
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
    </Provider>
  )
}

export default App
