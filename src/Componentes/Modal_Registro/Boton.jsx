
export default function Boton({ text, handleClick }) {
    return (
        <>
            <button onClick={handleClick} className="bg-[#c48056] text-[#fedfc3] text-lg font-medium mx-auto my-6 px-2 py-1 rounded-lg hover:bg-[#966546]">
                {text}
            </button>
        </>
    );
}