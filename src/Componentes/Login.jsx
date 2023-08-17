import React from "react";
import { useNavigate, Link } from "react-router-dom";
import pb from '../lib/pocketbase';
import { useForm } from 'react-hook-form';
import useLogin from '../hooks/useLogin';
import useVerified, { requestVerificationMail } from '../hooks/useVerified';
import useGoogle from "../hooks/useGoogle";

export default function Login() {
    const { data: isVerified } = useVerified();
    const { mutate: login, isLoading, isError } = useLogin();
    const { mutate: loginGoogle } = useGoogle();
    const { register, handleSubmit, reset } = useForm();
    const isLoggedIn = pb.authStore.isValid;
    const navigate = useNavigate();

    async function onSubmit(data) {
        login({email: data.email, password: data.password});     
        reset();
    }

    async function onSubmitGoogle(data) {
        loginGoogle({email: data.email, password: data.password});     
        reset();
    }

    if (isLoggedIn) return navigate('/home');

    return (
        <div className="flex w-full max-w-sm mx-auto my-32 overflow-hidden rounded-lg shadow-lg lg:max-w-4xl">
            <div className="hidden bg-cover lg:block lg:w-1/2 bg-[url('/assets_dulce-cami/DulceCami.png')]"></div>

            <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                <div className="flex justify-center mx-auto">
                    <img className="w-auto h-7 sm:h-8" src="/assets_dulce-cami/cupcake.png" alt="" />
                </div>

                <p className="mt-3 text-2xl text-center text-[#c48056] font-semibold">
                    Bienvenido!
                </p>
                
                <button className="flex items-center w-full mt-4 text-[#c48056] transition-colors duration-300 transform border border-[#c48056] rounded-lg hover:opacity-70" onClick={onSubmitGoogle}>
                    <div className="px-4 py-2">
                        <svg className="w-6 h-6" viewBox="0 0 40 40">
                            <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                            <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                            <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                            <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                        </svg>
                    </div>

                    <span className="w-5/6 px-4 py-3 font-bold text-center">Iniciar con Google</span>
                </button>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b lg:w-1/4 border-[#c48056]"></span>
                        <p className="text-xs text-center text-[#c48056] uppercase cursor-default hover:underline">o iniciar
                            con email</p>

                        <span className="w-1/5 border-b lg:w-1/4 border-[#c48056]"></span>
                    </div>

                    <div className="mt-4">
                        <label className="block mb-2 text-sm font-medium text-[#c48056]">Email</label>
                        <input required className="block w-full px-4 py-2 text-gray-700 bg-[#fedfc3] border border-[#c48056] rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" {...register("email")}/>
                    </div>

                    <div className="mt-4">
                        <div className="flex justify-between">
                            <label className="block mb-2 text-sm font-medium text-[#c48056]">Contraseña</label>
                            <a href="#" className="text-xs text-[#c48056] hover:underline">Olvidó su Contraseña?</a>
                        </div>

                        <input required className="block w-full px-4 py-2 text-gray-700 bg-[#fedfc3] border border-[#c48056] rounded-lg focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300" type="password" {...register("password")}/>
                    </div>

                    <div className="mt-6">
                        <button type="submit" className="w-full px-6 py-3 text-lg font-medium tracking-wide text-[#fedfc3] capitalize transition-colors duration-300 transform bg-[#c48056] rounded-lg hover:bg-[#966546] focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                            Iniciar Sesión
                        </button>
                        {isLoading && <p className="py-2 text-[#c48056] text-xs font-semibold uppercase text-center">iniciando.....</p>}
                        {isError && <p className="py-2 text-red-600 text-xs font-medium uppercase text-center">email o contraseña invalidos</p>}
                    </div>
                </form>
                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b lg:w-1/4 border-[#c48056]"></span>

                    <p className="text-xs text-center text-[#c48056] uppercase">o <span className="text-xs text-center text-[#c48056] cursor-pointer uppercase hover:underline"><Link to='/registro' >registrate</Link></span> ahora!!</p>

                    <span className="w-1/5 border-b lg:w-1/4 border-[#c48056]"></span>
                </div>
            </div>
        </div>
    )
}