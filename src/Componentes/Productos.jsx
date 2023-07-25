import { useEffect } from "react"
import { Link } from "react-router-dom"
import HashLoader from "react-spinners/HashLoader"
import { fetchProducts } from "../store/productSlice"
import { useDispatch, useSelector } from "react-redux"
import { estadosDeCarga } from "../store/productSlice"

const override = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'black'
}

function Productos() {
    const dispatch = useDispatch()
    const { data: products, status } = useSelector((state) => state.product)

    useEffect(() => {
        if(status === estadosDeCarga.IDLE) {
            dispatch(fetchProducts())
        }
    }, [])

    if (status === estadosDeCarga.LOADING) {
        return (
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <HashLoader 
                    color="#e3996a"
                    cssOverride={override}
                    size={150}
                    speedMultiplier={1.2}
                />
            </div>
        );
    }
    
    if (status === estadosDeCarga.ERROR) {
        return (
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h1>Algo anda muy mal!!!!!</h1>
            </div>
        );
    }

    return (            
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {products?.map((product) => (
                    <Link to={`/detail/${product.id}`} className="group" key={product.id}>
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                            <img
                            src={`http://dulcecami.net.ar:8090/api/files/${product.collectionId}/${product.id}/${product.imagen}`}
                            alt="Imagen del Producto"
                            className="h-full w-full object-cover object-center group-hover:opacity-75"
                            />
                        </div>
                        <h3 className="mt-4 text-sm text-gray-700">{product.nombreProducto}</h3>
                        <p className="mt-1 text-lg font-medium text-gray-700">$ {product.precio_grande}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Productos