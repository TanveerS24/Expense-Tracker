import toast from "react-hot-toast";
import information from '../icons/information.png'

const ClickAround = () => {
    toast.custom((t) => (
        <div
            className={`${
            t.visible ? 'animate-custom-enter' : 'animate-custom-leave'
            } max-w-md w-full bg-slate-800 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
            <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                <img
                    className="h-10 w-10 rounded-full"
                    src={information}
                    alt="info icon"
                />
                </div>
                <div className="ml-3 flex-1 text-slate-200">
                    <p>Click around the login form!!</p>
                    </div>
                </div>
            </div>
        </div>
    ),
        {
            duration: 3000,
            position: 'bottom-left',
            style: { boxShadow: "0 2px 8px rgba(0,0,0,0.2)" },
        }
    )
}

export default ClickAround;