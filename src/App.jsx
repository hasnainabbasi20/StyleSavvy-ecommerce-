
import './GlobalStyle.js'
import { BrowserRouter as Router ,Route , Routes } from 'react-router-dom'
import Header from './components/Header.jsx'
import {ThemeProvider} from "styled-components"
import Homepg from './pages/Homepg'
import Aboutpg from './pages/Aboutpg'
import Cartpg  from './pages/Cartpg'
import Contactpg from './pages/Contactpg'
import Errorpg from './pages/Errorpg'
import Products from './pages/Products'
import SingleProductpg from './pages/SingleProductpg'
import Checkout from './pages/Checkout.jsx'
import Footer from './components/Footer.jsx'



function App() {


  

  return (
    <>
    
  
<Router>
 <Header/>
  <Routes>

    <Route path='/' element={<Homepg/>} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path='/about' element={<Aboutpg/>} />
    <Route path='/contact' element={<Contactpg/>} />
    <Route path='/cart' element={<Cartpg/>} />
    <Route path='*' element={<Errorpg/>} />
    <Route path='/products' element={<Products/>} />
    <Route path='/singleproduct' element={<SingleProductpg/>} />
  </Routes>
  <Footer/>
</Router>

    </>
  )
}

export default App
