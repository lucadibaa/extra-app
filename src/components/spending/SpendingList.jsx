import { RiMoneyEuroCircleLine } from "react-icons/ri"

const EarningsList = () => {
    return (
        <div className="h-full">
            <div className="w-full flex items-center justify-between bg-gray-100 border-b border-gray-300 py-1.5 px-2.5">
                <span className="font-medium uppercase tracking-wide text-sm">Spending Deatils</span>
            </div>
            <div className="divide-y">
                {
                    Array(2).fill().map(el => (
                        <div className="flex space-x-3.5 p-2.5">
                            <div className="w-10 h-10 flex items-center justify-center bg-[rgba(13,158,0,.1)] rounded-full">
                                {/* bg: rgba(121,126,246,.2), icon: GoGift text: rgba(121,126,246,.8) */}
                                <RiMoneyEuroCircleLine className="text-2xl text-[rgba(13,158,0,.5)]" />
                            </div>
                            <div className="flex items-center justify-between w-[calc(100%-60px)]">
                                <div className="flex flex-col justify-between h-full">
                                    <span className="font-semibold text-xs">23 APR 2022</span>
                                    <span className="text-sm truncate">Grocery</span>
                                </div>
                                <div className="flex items-center justify-center">
                                    <span className="font-semibold text-sm">-94,00 €</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default EarningsList
