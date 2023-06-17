import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {useState} from "react"
import Header from "./components/Header"
import Body from "./components/Body"
import About from './components/About'
import Counter from './components/Counter'
import { AppProvider } from './context/AppProvider'
import MyCart from './components/MyCart'

function App() {
 
  let [addToCart, setaddToCart] = useState([{}])
  function addTocartFn(heading,image)
  {
    setaddToCart([...addToCart,{"heading":heading,"image":image}])
  }
  return (
  <>
  <Router>
  <AppProvider>
 <Header/>
  <Routes>

  <Route exact path="/" element={<Body/>} />
  <Route exact path="about" element={<About/>} />
  <Route exact path="counter" element={<Counter/>}/>
 <Route exact path="cart" element={<MyCart/>}/>
  </Routes>
  </AppProvider>
  </Router>
  
  </>

    
  )
}

export default App
