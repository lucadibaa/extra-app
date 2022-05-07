import { PlusIcon } from "@heroicons/react/outline"
import { useState } from "react"
import AddTransaction from "../components/assets/AddTransaction"
import EarningsList from "../components/earnings/EarningsList"
import DoughnutChart from "../components/reports/Doughnut"
import SelectRange from "../components/reports/SelectRange"

const Earnings = () => {

    const data = {
        labels: ['Salary', 'Gifts'],
        datasets: [
            {
                data: [852, 94],
                backgroundColor: [
                    'rgba(22, 85, 143, .85)',
                    'rgba(121, 126, 246, .8)',
                ],
                borderColor: [
                    '#16558F',
                    '#797EF6',
                ],
                borderWidth: .1,
            },
        ],
    }

    const [adding, setAdding] = useState(false)

    return (
        <div>
            <div className="flex justify-between items-center p-3">
                <SelectRange />
                <div onClick={() => setAdding(true)} className="flex justify-between items-center bg-[#00bcd4]/10 border border-[#00bcd4] rounded-md shadow-sm px-3 py-1.5 text-sm cursor-pointer">
                    <span>Add</span>
                    <PlusIcon className="h-3 ml-1" />
                </div>
            </div>
            <div className="relative px-2 -mb-5">
                <DoughnutChart data={data} />
                <div className="absolute top-1/2 -translate-y-1/2 left-[26%] flex flex-col gap-2 text-center text-sm">
                    <div className="flex flex-col">
                        <span className="font-medium">Earnings:</span>
                        <span className="font-semibold text-[#7b9b68]">+ 852,00 €</span>
                    </div>
                </div>
            </div>

            <EarningsList />

            <AddTransaction adding={adding} setAdding={setAdding} initialType={'Earning'} />
        </div>
    )
}

export default Earnings
