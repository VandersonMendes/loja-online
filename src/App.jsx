import './App.css'
import Header from './pages/Header';
import Home from './pages/Home';
import Carrinho from './pages/Carrinho/Carrinho';
import Products from './pages/Products/Products';
import Footer from './pages/Footer';
import Page404 from './pages/Page404';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AppProvider } from './context/Context';
function App() {
  return (
    <div className='App'>
        <BrowserRouter>
          <AppProvider>
            <Header />
            <main>
              <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/carrinho' element={<Carrinho />}></Route>
                <Route path='/products' element={<Products />}></Route>
                <Route path='*' element={<Page404 />} />
              </Routes>
            </main>
          </AppProvider>
        </BrowserRouter>

    </div>
  )
}

export default App
