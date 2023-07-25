import logoDulceCami from "/assets_dulce-cami/DulceCami1.png"
import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer className="bg-[#fedfc3]">
            <div className="container px-6 py-8 mx-auto">
                <div className="flex flex-col items-center text-center">
                    <img className="w-[140px] h-[140px]" src={logoDulceCami} alt="Logo Dulce Cami" />
                    
                    <div className="flex flex-wrap justify-center mt-6 -mx-4">
                        <Link to="/home" className="mx-4 text-sm text-[#c48056] font-semibold transition-colors duration-300 hover:text-[#966546] hover:underline " aria-label="Reddit"> Shop </Link>
                        
                        <Link to="/about" className="mx-4 text-sm text-[#c48056] font-semibold transition-colors duration-300 hover:text-[#966546] hover:underline " aria-label="Reddit"> Nosotros </Link>
                        
                        <Link to="/contact" className="mx-4 text-sm text-[#c48056] font-semibold transition-colors duration-300 hover:text-[#966546] hover:underline " aria-label="Reddit"> Contacto </Link>

                        <Link to="#" className="mx-4 text-sm text-[#c48056] font-semibold transition-colors duration-300 hover:text-[#966546] hover:underline " aria-label="Reddit"> Política de Privacidad </Link>

                        <Link to="#" className="mx-4 text-sm text-[#c48056] font-semibold transition-colors duration-300 hover:text-[#966546] hover:underline " aria-label="Reddit"> Términos de Uso </Link>
                    </div>

                </div>

                <hr className="my-6 border-[#c48056] md:my-10" />

                <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                    <p className="text-sm text-[#c48056] font-semibold">© Copyright 2023. <a className="hover:text-[#966546] hover:underline" href="https://worldwidelab.dev">World Wide Lab</a> - Todos los Derechos Reservados.</p>

                    <div className="flex -mx-2">
                        <a href="#" className="mx-2 text-[#c48056] transition-colors duration-300 hover:text-[#966546]" aria-label="Facebook">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 22 22" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                                </path>
                            </svg>
                        </a>

                        <a href="#" className="mx-2 text-[#c48056] transition-colors duration-300 hover:text-[#966546]" aria-label="Instagram">
                            <svg className="w-5 h-5 fill-current" 
                                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 18 18"> 
                                <path 
                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/> 
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;