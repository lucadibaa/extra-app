import { ChevronRightIcon } from "@heroicons/react/outline"
import { RiMoneyEuroCircleLine } from "react-icons/ri"

const EarningsList = () => {
    return (
        <div className="h-full">
            <div className="w-full flex items-center justify-between bg-gray-100 border-b border-gray-300 py-1.5 px-2.5">
                <span className="font-medium uppercase tracking-wide text-sm">Earning Deatils</span>
            </div>
            <div className="divide-y">
                {
                    Array(2).fill().map(el => (
                        <div className="flex gap-3.5 p-2.5">
                            <div className="w-10 h-10 flex items-center justify-center bg-[rgba(13,158,0,.1)] rounded-full">
                                {/* bg: rgba(121,126,246,.2), icon: GoGift text: rgba(121,126,246,.8) */}
                                <RiMoneyEuroCircleLine className="text-2xl text-[rgba(13,158,0,.5)]" />
                            </div>
                            <div className="w-3/5 flex flex-col justify-between">
                                <span className="font-semibold text-xs">23 APR 2022</span>
                                <span className="text-sm truncate">Salary</span>
                            </div>
                            <div className="w-1/5 flex items-center justify-center">
                                <span className="font-semibold text-sm">+852,00 €</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default EarningsList
