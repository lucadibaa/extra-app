import { ChevronRightIcon } from "@heroicons/react/outline"
import { MdOutlineTrain } from "react-icons/md"

const OperationsList = () => {
    return (
        <div className="h-full">
            <div className="w-full flex items-center justify-between bg-gray-100 border-b border-gray-300 py-1 px-2.5">
                <span className="font-medium">Operations</span>
                <button className="flex items-center text-indigo-600"> {/* redirect to all operations page */}
                    <span className="text-sm">Show all</span>
                    <ChevronRightIcon className="h-3.5 ml-0.5" />
                </button>
            </div>
            <div className="divide-y">
                {
                    Array(8).fill().map(el => (
                        <div className="flex space-x-3.5 p-2.5">
                            <div className="w-10 h-10 flex items-center justify-center bg-[rgba(51,153,255,.2)] rounded-full">
                                <MdOutlineTrain className="text-2xl text-[rgba(51,153,255,.6)]" />
                                {/* bus: MdOutlineDirectionsBus, plane: GiAirplaneDeparture */}
                            </div>
                            <div className="flex items-center justify-between w-[calc(100%-60px)]">
                                <div className="flex flex-col justify-between h-full">
                                    <span className="font-semibold text-xs">23 APR 2022</span>
                                    <span className="text-sm truncate">Biglietto Treno</span>
                                </div>
                                <div className="flex items-center justify-center">
                                    <span className="font-semibold text-sm">-3,20 €</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default OperationsList
