import { ChevronRightIcon } from "@heroicons/react/outline"
import { Link, useNavigate } from "react-router-dom"

const Home = () => {

    const navigate = useNavigate()

    return (
        <div>
            <div className="w-full h-40 bg-green-700" >
                <div className="relative bg-white flex items-center justify-between mx-2 p-3 top-10 h-24 border rounded-lg shadow-xl">
                    <span className="self-start justify-self-start text-lg">Your Balance:</span>
                    <div className="self-end justify-self-end text-xl">
                        <span className="font-semibold">4.177</span>
                        <span>,36 €</span>
                    </div>
                </div>
            </div>
            <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                <path d="M0.00,95 C250,115, 250,115,500.00,95 L500.00,0.00 L0.00,0.00 Z" className="stroke-0 fill-green-700"></path>
            </svg>

            <hr />

            <div className="w-full flex items-center justify-between my-4 px-2.5">
                <span className="font-semibold text-lg tracking-wider">Analisi delle spese</span>
                <button onClick={() => navigate('/reports')} className="flex items-center text-indigo-600"> {/* redirect to all analytics page */}
                    <span className="text-sm">Go to section</span>
                    <ChevronRightIcon className="h-3.5 ml-0.5" />
                </button>
            </div>
            <Link to="/reports">
                <div className="bg-white flex flex-col mx-2 p-4 border rounded-lg shadow-xl">
                    <span className="text-xs uppercase font-light mb-2.5">current month</span>
                    <div className="flex flex-col gap-2 mb-4">
                        <div className="flex items-center justify-between">
                            <span className="font-medium">Earnings</span>
                            <div>
                                <span className="font-semibold">+852</span>
                                <span>,00 €</span>
                            </div>
                        </div>
                        <div className="relative h-3 rounded-full border border-green-600">
                            <div className="absolute h-3 w-[88%] rounded-full bg-green-600" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                            <span className="font-medium">Expenses</span>
                            <div>
                                <span className="font-semibold">-104</span>
                                <span>,60 €</span>
                            </div>
                        </div>
                        <div className="relative h-3 rounded-full border border-red-600">
                            <div className="absolute h-3 w-[12%] rounded-full bg-red-600" />
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Home
