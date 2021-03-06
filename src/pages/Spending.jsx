import { PlusIcon } from "@heroicons/react/outline"
import { useState } from "react"
import AddTransaction from "../components/assets/AddTransaction"
import DoughnutChart from "../components/reports/Doughnut"
import SelectRange from "../components/reports/SelectRange"
import SpendingList from "../components/spending/SpendingList"

const Spending = () => {

    const [adding, setAdding] = useState(false)

    const categories = [
        {
            title: 'Restaurant',
            color: 'rgba(255, 87, 51, .8)',
            total: 36
        },
        {
            title: 'Grocery',
            color: 'rgba(88, 24, 69, .8)',
            total: 94
        },
        {
            title: 'Transports',
            color: 'rgba(51, 153, 255, .6)',
            total: 43,
            subCategories: [
                {
                    title: 'Fuel',
                    color: 'rgba(95, 15, 64, 1.0)',
                    total: 19
                },
                {
                    title: 'Bus',
                    color: 'rgba(154, 3, 30, 1.0)',
                    total: 10
                },
                {
                    title: 'Train',
                    color: 'rgba(251, 139, 36, 1.0)',
                    total: 14
                },
                {
                    title: 'Plane',
                    color: 'rgba(227, 100, 20, 1.0)',
                    total: 0
                }
            ]
        },
        {
            title: 'Free time',
            color: 'rgba(42, 80, 146, .8)',
            total: 158
        }
    ]

    const data = {
        labels: categories.map(c => c.title),
        datasets: [
            {
                data: categories.map(c => c.total),
                backgroundColor: categories.map(c => c.color),
                borderColor: categories.map(c => c.color),
                borderWidth: .1,
            },
        ],
    }

    return (
        <div>
            <div className="flex justify-between items-center p-3">
                <SelectRange />
                <div onClick={() => setAdding(true)} className="flex justify-between items-center bg-[#00bcd4]/10 border border-[#00bcd4] rounded-md shadow-sm px-3 py-1.5 text-sm">
                    <span>Add</span>
                    <PlusIcon className="h-3 ml-1" />
                </div>
            </div>
            <div className="relative px-2 -mb-5">
                <DoughnutChart data={data} />
                <div className="absolute top-1/2 -translate-y-1/2 left-[23%] flex flex-col gap-2 text-center text-sm">
                    <div className="flex flex-col">
                        <span className="font-medium">Spending:</span>
                        <span className="font-semibold text-[#FD5D5D]">- 94,00 ???</span>
                    </div>
                </div>
            </div>

            <SpendingList />

            <AddTransaction adding={adding} setAdding={setAdding} initialType={'Spending'} />

        </div>
    )
}

export default Spending
