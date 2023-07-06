import './App.css'
import Header from './pages/Header';
import Home from './pages/Home';
import Carrinho from './pages/Carrinho/Carrinho';
import Footer from './pages/Footer';
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
              </Routes>
            </main>
            <Footer />
          </AppProvider>
        </BrowserRouter>

    </div>
  )
}

export default App
