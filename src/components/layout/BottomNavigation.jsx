// import { FcDoughnutChart, FcPositiveDynamic, FcNegativeDynamic } from 'react-icons/fc'
import { BiHomeAlt } from 'react-icons/bi'
import { RiDonutChartLine } from 'react-icons/ri'
import { IoTrendingUp, IoTrendingDown } from 'react-icons/io5'

const BottomNavigation = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow border-b z-40">
            <nav className="flex justify-between items-center mx-3">
                <span className="font-semibold py-1.5 text-[#00bcd4] tracking-wide">ExTra</span>

                <div className="fixed bottom-0 left-0 h-14 w-full bg-white shadow-[0_-1px_12px_hsla(174,63%,15%,.15)] border-t grid content-center rounded-t-xl">
                    <ul className="flex justify-around text-[#1f242e]">
                        <li className="flex flex-col items-center font-medium">
                            <BiHomeAlt className="text-2xl" />
                            <span className="text-xs">Home</span>
                        </li>
                        <li className="flex flex-col items-center font-medium">
                            <RiDonutChartLine className="text-2xl text-[#00bcd4]" />
                            <span className="text-xs text-[#00bcd4]">Reports</span>
                        </li>
                        <li className="flex flex-col items-center font-medium">
                            <IoTrendingUp className="text-2xl" />
                            <span className="text-xs">Earnings</span>
                        </li>
                        <li className="flex flex-col items-center font-medium">
                            <IoTrendingDown className="text-2xl" />
                            <span className="text-xs">Spending</span>
                        </li>
                    </ul>
                </div>

            </nav>
        </header>
    )
}

export default BottomNavigation
