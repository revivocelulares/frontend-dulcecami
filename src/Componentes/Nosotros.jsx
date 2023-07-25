import Nav from "./Nav";
import selvaNegra from "/assets_dulce-cami/selvanegra.png"
import cheeseCake from "/assets_dulce-cami/cheesecake.png"
import Footer from "./Footer";


function Nosotros() {
    return (
        <>
            <Nav />
            {/* <h1 className="flex flex-row justify-center text-3xl text-[#c48056] font-semibold underline">Acerca de Nosotros</h1> */}
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <img className="float-left w-1/4" src={selvaNegra} alt="Selva Negra" />
                <p className=" text-gray-500 text-justify mt-12 font-medium">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.</p>
            </div>
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <img className="float-right w-1/4" src={cheeseCake} alt="Selva Negra" />
                <p className="text-gray-500 text-justify mt-12 font-medium">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.</p>
            </div>
            <div>
                <br/>
                <br/>
                <Footer />
            </div>
            
        </>
    )
}

export default Nosotros