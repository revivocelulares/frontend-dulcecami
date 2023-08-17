import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { decrementQuantity, incrementQuantity, remove } from "../store/cartSlice";
import { Link } from "react-router-dom";
import Info from "./Info";

function Carrito() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart);
    
    const handleRemove = (idProduct) => {
      dispatch(remove(idProduct));
    };

    const increment = (idProduct) => {
      dispatch(incrementQuantity(idProduct));
    };

    const decrement = (idProduct) => {
      dispatch(decrementQuantity(idProduct));
    };

    const handle_submit = (event) => {
      event.preventDefault();
      //alert('Acá se hará el pago!!');
    };

    const getTotal = () => {
      let totalQuantity = 0;
      let totalPrice = 0;
      products.cart.forEach(item => {
        totalQuantity += item.quantity;
        totalPrice += item.precio * item.quantity;
      });
      return {totalPrice, totalQuantity};
    };

    return (
        <>
            <Nav />
            <Info />
            {/* <h1 className="flex flex-row justify-center text-3xl text-[#c48056] font-semibold underline">Carrito de Compra</h1> */}
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-0">
            <form onSubmit={handle_submit} className="mt-12">
            <section aria-labelledby="cart-heading">
                <ul role="list" className="border-t border-b border-[#c48056] divide-y divide-[#c48056]">
                {products.cart.map((item) => (
                    <li key={item.id} className="flex py-6">
                        <div className="flex-shrink-0">
                            <img
                            src={`https://pocketbase.dulcecami.net.ar:8443/api/files/${item.collectionId}/${item.id}/${item.imagen}`}
                            alt=""
                            className="w-24 h-24 rounded-md object-center object-cover sm:w-32 sm:h-32"
                            />
                        </div>

                        <div className="ml-4 flex-1 flex flex-col sm:ml-6">
                            <div>
                            <div className="flex justify-between">
                                <h4 className="text-md">
                                  <p className="font-medium text-[#c48056]">
                                      {item.nombreProducto}<br/>
                                      Tamaño: {item.tamaño.charAt(0).toUpperCase() + item.tamaño.slice(1)}
                                  </p>
                                  <div className="flex flex-row items-center gap-3 text-[#c48056] font-medium">
                                    Cantidad: 
                                    <button onClick={() => decrement(item.id)}>-</button>
                                    <p className="p-1 underline ">{item.quantity}</p>
                                    <button onClick={() => increment(item.id)}>+</button>
                                  </div>
                                </h4>
                                <p className="ml-4 text-lg font-medium text-[#c48056] underline">$ {item.precio * item.quantity}</p>
                            </div>
                            </div>

                            <div className="mt-4 flex-1 flex items-end justify-between">
                            
                            <div className="ml-2">
                                <button onClick={() => handleRemove(item.id)} type="button" className="text-sm font-medium text-[#c48056] hover:text-red-500">
                                <span>Eliminar</span>
                                </button>
                            </div>
                            </div>
                        </div>
                    </li>
                ))}
                </ul>
          </section>

          <section aria-labelledby="summary-heading" className="mt-10">
            <h2 id="summary-heading" className="sr-only">
              Resumen del Pedido
            </h2>

            <div>
              <dl className="space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-base font-medium text-[#c48056] underline">Total a Pagar por {getTotal().totalQuantity} productos</dt>
                  <dd className="ml-4 text-lg font-medium text-[#c48056] underline">${getTotal().totalPrice}</dd>
                </div>
              </dl>
              <p className="mt-1 text-sm text-[#c48056]">Los pedidos se entregarán sólo Sábados y Domingos</p>
            </div>

            <div className="mt-10">
              <button type="submit" className="w-full px-6 py-3 text-lg font-semibold tracking-wide text-[#fedfc3] capitalize transition-colors duration-300 transform bg-[#c48056] rounded-lg hover:bg-[#966546] focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                Pagar
              </button>
            </div>

            <div className="mt-6 text-sm text-center">
              <p className="text-[#c48056] font-medium">
                <Link to={`/home`} className="hover:text-indigo-600">
                  Continuar Comprando<span aria-hidden="true"> &rarr;</span>
                </Link>
              </p>
            </div>
          </section>
          </form>
          </div>
          <Footer />
        </>
    )
}

export default Carrito