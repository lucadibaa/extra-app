import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

const DoughnutChart = ({ data }) => {

    const options = {
        responsive: true,
        cutout: '70%',
        plugins: {
            legend: {
                position: 'right',
                align: 'center'
            }
        }
    }

    return (
        <Doughnut data={data} options={options} />
    )
}

export default DoughnutChart
