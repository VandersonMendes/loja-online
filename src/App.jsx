import './App.css'
import Header from './pages/Header';
// import Home from './pages/Home';
import Carrinho from './pages/Carrinho/Carrinho';
import Products from './pages/Products/Products';
import Page404 from './pages/Page404';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loading from "./servises/Loading"
const Home = lazy(() => import('./pages/Home'))
import { AppProvider } from './context/Context';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <AppProvider>
          <Header />
          <main>
            <Routes>
                  <Route path='/' element={
                    <Suspense fallback={<Loading/>}>
                      <Home></Home>
                    </Suspense>
                  }></Route>
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
