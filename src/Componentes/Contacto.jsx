import { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

function Contacto() {
    const [sending, setSending] = useState(false)

    async function handle_submit(event) {
        event.preventDefault()
        setSending(true)
        const data = {
            nombre: event.target.nombre.value,
            apellido: event.target.apellido.value,
            email: event.target.email.value,
            comentarios: event.target.comentarios.value
        }
        const response = await fetch('http://localhost:3001/api/contacto', {
             method: 'POST',
             body: JSON.stringify(data),
             headers: {
                "Content-type": "application/json"
             } 
            })
        if(!response.ok) {
            throw new Error(`Esto es un error HTTP: El status es ${response.status}`)
        }
        const vuelta = await response.json()
        if(vuelta.mensaje === 'mail enviado con exito') {
            setSending(false)
            event.target.reset()
        }
        
    }
    
    return (
        <>
            <Nav />
            {/* <h1 className="flex flex-row justify-center text-3xl text-[#c48056] font-semibold underline">Formulario de Contacto</h1> */}
            <form onSubmit={handle_submit} className="w-full max-w-lg m-auto mt-10">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block mb-2 uppercase text-sm font-medium text-[#c48056]" >
                        Nombre
                    </label>
                    <input required name="nombre" className="appearance-none block w-full bg-Ocre-DulceCami text-gray-700 border border-[#c48056] rounded-lg py-3 px-4 mb-3 leading-tight focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" />

                    </div>
                    <div className="w-full md:w-1/2 px-3">
                    <label className="block mb-2 uppercase text-sm font-medium text-[#c48056]" >
                        Apellido
                    </label>
                    <input required name="apellido" className="appearance-none block w-full bg-Ocre-DulceCami text-gray-700 border border-[#c48056] rounded-lg py-3 px-4 leading-tight focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                    <label className="block mb-2 uppercase text-sm font-medium text-[#c48056]" >
                        E-mail
                    </label>
                    <input required name="email" className="appearance-none block w-full bg-Ocre-DulceCami text-gray-700 border border-[#c48056] rounded-lg py-3 px-4 mb-3 leading-tight focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" />

                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                    <label className="block mb-2 uppercase text-sm font-medium text-[#c48056]" >
                        Comentarios
                    </label>
                    <textarea required name="comentarios" className=" appearance-none block w-full bg-Ocre-DulceCami text-gray-700 border border-[#c48056] rounded-lg py-3 px-4 mb-1 leading-tight focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300 h-24 resize-none" ></textarea>

                    </div>
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3">
                    <input type="submit" className="cursor-pointer w-full px-6 py-3 text-lg font-semibold tracking-wide text-[#fedfc3] capitalize transition-colors duration-300 transform bg-[#c48056] rounded-lg hover:bg-[#966546] focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"/>
                        
                    </div>
                    <div className="md:w-2/3">{ sending ? <p className="mx-6 text-[#c48056] font-semibold underline">Enviando comentarios por mail</p> : "" }</div>
                </div>
            </form>

            <div className="bottom-0 ">
                <Footer />
            </div>
        </>

    )
}

export default Contacto