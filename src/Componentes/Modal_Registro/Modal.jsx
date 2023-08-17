import Boton from './Boton';
import { useNavigate } from 'react-router';

function Modal({ closeModal }) {
    const navigate = useNavigate();

    function handleClick() {        
        closeModal();
        navigate('/');
    }

    function closeModalBgClick(event) {
        if(event.target.id === 'modal-bg') {
            closeModal();
        }
        navigate('/');
    }

    return (
        <div id="modal-bg" className="absolute top-0 left-0 w-screen h-screen bg-zinc-700/50 flex flex-col justify-center items-center" onClick={closeModalBgClick}>
            <div className="bg-[#fedfc3] text-[#c48056] text-center font-semibold md:w-6/12 w-10/12 max-w-screen-sm rounded-lg p-4 m-4 flex flex-col relative shadow-2xl">
                <a onClick={closeModal} className="absolute text-2xl right-5 hover:cursor-pointer">X</a>
                <h1 className="text-3xl pb-8">Registro Exitoso</h1>
                <div className="bg-[#c48056] w-full h-1 mx-auto mb-8"></div>
                <h2 className="text-xl pb-4">Ahora necesitamos verificar tu Email</h2>
                <p className="p-4">Enviaremos un email a tu casilla de correo</p>
                <p className="p-4">Asegúrate de hacer click en el enlace!!</p>
                <Boton handleClick={handleClick} text="Aceptar"/>
            </div>
        </div>
    );
}

export default Modal;