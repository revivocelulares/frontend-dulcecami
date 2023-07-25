import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Componentes/Home"
import Carrito from "./Componentes/Carrito"
import Nosotros from "./Componentes/Nosotros"
import Contacto from "./Componentes/Contacto"
import Detalle from "./Componentes/Detalle"
import Login from "./Componentes/Login"
import Registro from "./Componentes/Registro"
import { Provider } from "react-redux"
import store from "./store/store"

function App() {

  return (
    <main>
      <Provider store={store}>
        <BrowserRouter>  
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/registro' element={<Registro />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<Nosotros />} />
            <Route path="/cart" element={<Carrito />} />
            <Route path="/contact" element={<Contacto />} />
            <Route path="/detail/:idProducto" element={<Detalle />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </main>
  )
}

export default App
