import DoughnutChart from "../components/reports/Doughnut"
import SelectRange from "../components/reports/SelectRange"

const Reports = () => {
    return (
        <div>
            <div className="p-3">
                <SelectRange />
            </div>
            <div className="relative px-2 -my-10">
                <DoughnutChart />
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
        </div>
    )
}

export default Reports
