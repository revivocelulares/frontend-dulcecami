import Footer from "./Footer"
import Info from "./Info"
import Nav from "./Nav"
import Productos from "./Productos"

function Home() {    
    return (
        <>
            <Nav />
            <Info />
            {/* <h1 className="flex flex-row justify-center text-3xl text-[#c48056] font-semibold underline">Productos</h1> */}
            <Productos />
            <Footer />
        </>
    )
}

export default Home