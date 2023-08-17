import pb from '../lib/pocketbase';
import useLogout from '../hooks/useLogout';
import useVerified, { requestVerificationMail } from '../hooks/useVerified';

export default function Info() {
    const logout = useLogout();
    const { data: isVerified } = useVerified();
    const isLoggedIn = pb.authStore.isValid;

    if (isLoggedIn)
        return (
            <div className='mt-3 w-auto flex items-center justify-center gap-16 font-semibold text-center text-[#c48056]'>
                <h3 className='text-center text-[#c48056]'>Seseión iniciada como: <span className='ml-2'>{pb.authStore.model.email}</span></h3>
                <p>Cuenta verificada:  {isVerified === true ? 'Si' : <span className="cursor-pointer underline" onClick={requestVerificationMail}>Enviar mail de verificación</span>}</p>
                <button className="w-auto px-2 py-1 text-lg font-medium tracking-wide text-[#fedfc3] capitalize transition-colors duration-300 transform bg-[#c48056] rounded-lg hover:bg-[#966546] focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50" 
                        onClick={logout}>
                    Cerrar Sesión
                </button>
            </div>
        )

    return (
        <>
        </>
    )
}