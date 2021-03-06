import DoughnutChart from "../components/reports/Doughnut"
import OperationsList from "../components/reports/OperationsList"
import SelectRange from "../components/reports/SelectRange"

const Reports = () => {

    const data = {
        labels: ['Earnings', 'Expenses'],
        datasets: [
            {
                data: [852, 94],
                backgroundColor: [
                    'rgba(192, 237, 166, .8)',
                    'rgba(253, 93, 93, .7)',
                ],
                borderColor: [
                    '#C0EDA6',
                    '#FD5D5D',
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
                <div className="absolute top-1/2 -translate-y-1/2 left-[23%] flex flex-col gap-2 text-center text-sm">
                    <div className="flex flex-col">
                        <span className="font-medium">Earnings:</span>
                        <span className="font-semibold text-[#7b9b68]">+ 852,00 €</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-medium">Spending:</span>
                        <span className="font-semibold text-[#FD5D5D]">- 94,00 €</span>
                    </div>
                </div>
            </div>

            <OperationsList />

        </div>
    )
}

export default Reports
