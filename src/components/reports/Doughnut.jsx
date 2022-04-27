import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

const DoughnutChart = () => {

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
