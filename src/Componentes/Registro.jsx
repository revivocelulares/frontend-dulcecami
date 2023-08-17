import { useForm } from 'react-hook-form';
import pb from '../lib/pocketbase';
import { useState } from 'react';
import Modal from '../Componentes/Modal_Registro/Modal';

export default function Registro() {
    const { register, handleSubmit, reset } = useForm();
    const [registrando, setRegistrando] = useState(false);
    const [showModal, setShowModal] = useState(false);

    async function onSubmit(data) {
        setRegistrando(true);
        let info = {
            "username": data.email.split('@')[0],
            "email": data.email,
            "emailVisibility": true,
            "password": data.password,
            "passwordConfirm": data.password,
            "nombre_completo": data.nombre_apellido
        };
        const record = await pb.collection('Cliente').create(info);
        const search = await pb.collection('Cliente').getOne(record.id);

        let infoCart = {
            "CarritoItems": null,
            "idCliente": search.id
        }
        const carrito = await pb.collection('Carrito').create(infoCart);

        if(record) {
            const res = await pb.collection("Cliente").requestVerification(record.email);
            setRegistrando(false);
            setShowModal(true);
            reset();
        }
    }

    function openModal() {
        setShowModal(true);
    }

    function closeModal() {
        setShowModal(false);
    }

    return (
        <div className="flex w-full max-w-sm mx-auto my-32 overflow-hidden rounded-lg shadow-lg lg:max-w-4xl">
            <div className="hidden bg-cover lg:block lg:w-1/2 bg-[url('/assets_dulce-cami/DulceCami.png')]"></div>

            <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                <div className="flex justify-center mx-auto">
                    <img className="w-auto h-7 sm:h-8" src="/assets_dulce-cami/cupcake.png" alt="Cupcake" />
                </div>

                <p className="mt-3 text-2xl text-center text-[#c48056] font-semibold underline">
                    Formulario de Registro
                </p>
                
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex items-center justify-between mt-7">
                        <span className="w-1/5 border-b lg:w-1/4 border-[#c48056]"></span>
                        <p className="text-xs text-center text-[#c48056] uppercase cursor-default hover:underline">complete todos los campos</p>

                        <span className="w-1/5 border-b lg:w-1/4 border-[#c48056]"></span>
                    </div>
                    <div className="mt-4">
                        <label className="block mb-2 text-sm font-medium text-[#c48056]">Nombre y Apellido</label>
                        <input required className="block w-full px-4 py-2 text-gray-700 bg-[#fedfc3] border border-[#c48056] rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="text" {...register("nombre_apellido")}/>
                    </div>

                    <div className="mt-4">
                        <label className="block mb-2 text-sm font-medium text-[#c48056]">Email</label>
                        <input required className="block w-full px-4 py-2 text-gray-700 bg-[#fedfc3] border border-[#c48056] rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" {...register("email")}/>
                    </div>

                    <div className="mt-4">
                        <label className="block mb-2 text-sm font-medium text-[#c48056]">Contraseña</label>
                        <input required className="block w-full px-4 py-2 text-gray-700 bg-[#fedfc3] border border-[#c48056] rounded-lg focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300" type="password" {...register("password")}/>
                    </div>

                    <div className="mt-6">
                        <button type="submit" onClick={openModal} className="w-full px-6 py-3 text-lg font-medium tracking-wide text-[#fedfc3] capitalize transition-colors duration-300 transform bg-[#c48056] rounded-lg hover:bg-[#966546] focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                            Registrarse
                        </button>
                        {registrando && <p className="py-2 text-[#c48056] text-xs font-semibold uppercase text-center">procesando.....</p>}
                        {showModal && <Modal closeModal={closeModal} />}
                    </div>
                </form>
            </div>
        </div>
    );
}