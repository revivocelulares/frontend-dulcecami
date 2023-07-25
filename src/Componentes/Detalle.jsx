import Nav from "./Nav"
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { add } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";

function Detalle() {
    const { idProducto } = useParams()
    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.product)

    const productoDetalle = products.find((item) => item.id === idProducto)
    const [valor, setValor] = useState("")

    function handle_change(event) {
      setValor(event.target.value)      
    }

    function handle_click() {
      dispatch(add(productoDetalle))
      alert('Procucto agregado al carrito de manera exitosa!!')
    }

    return (
        <>
        <Nav />
        {/* <h1 className="flex flex-row justify-center text-3xl text-[#c48056] font-semibold underline">Detalle</h1> */}
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#c48056] sm:text-4xl">{productoDetalle.nombreProducto}</h2>
              <p className="mt-4 mb-4 text-[#c48056]">
                {productoDetalle.descripcion}
              </p>
              <label className="mt-4 mb-4 text-[#c48056]">Tamaño:  
                <select name="selector" onChange={handle_change} className="mt-4 mb-4 mx-2 px-2 py-2 rounded-xl text-[#c48056]">
                  <option selected={true} disabled="disabled">Seleccione un tamaño</option>
                  <option value="chico">{productoDetalle.tamano[0]}</option>
                  <option value="grande">{productoDetalle.tamano[1]}</option>
                </select>
              </label>
              <p className="mt-4 mb-4 text-[#c48056]">Precio: <span className="mx-2 text-[#c48056] font-medium">${ !valor ? '' : (valor === 'grande' ? productoDetalle.precio_grande : productoDetalle.precio_chico) }</span></p>
              <button onClick={handle_click} className="w-7/12 px-6 py-3 text-lg font-semibold tracking-wide text-[#fedfc3] capitalize transition-colors duration-300 transform bg-[#c48056] rounded-lg hover:bg-[#966546] focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">Agrgar al Carrito</button>
              <p className="text-[#c48056] text-sm font-medium">
                <Link to={`/home`} className="hover:text-indigo-600">
                  Continuar Comprando<span aria-hidden="true"> &rarr;</span>
                </Link>
              </p>
            </div>
            <div className="block">
              <img
                src={`http://dulcecami.net.ar:8090/api/files/${productoDetalle.collectionId}/${productoDetalle.id}/${productoDetalle.imagen}`}
                alt={productoDetalle.nombreProducto}
                className="rounded-lg bg-gray-100"
              />
            </div>
          </div>
        </div>
        </>
    )
}

export default Detalle