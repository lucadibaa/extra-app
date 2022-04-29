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

    return (
        <div>
            <div className="p-3">
                <SelectRange />
            </div>
            <div className="relative px-2 -mt-10 -mb-5">
                <DoughnutChart data={data} />
                <div className="absolute top-1/2 -translate-y-1/2 left-[26%] flex flex-col gap-2 text-center text-sm">
                    <div className="flex flex-col">
                        <span className="font-medium">Earnings:</span>
                        <span className="font-semibold text-[#7b9b68]">+ 852,00 €</span>
                    </div>
                </div>
            </div>

            <EarningsList />

        </div>
    )
}

export default Earnings
