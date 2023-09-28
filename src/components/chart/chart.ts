import * as chartJs from 'chart.js'
import IReading from '../../domain/readings/IReading'

let chart: chartJs.Chart<any, number[], string>;

export const formatDateLabel = (timestamp: number) => {
  const date = new Date(timestamp)
  const month = date.getMonth()
  const day = date.getDate()

  const formatPart = (value: number) => {
    return value < 10 ? `0${value}` : `${value}`
  }

  return `${formatPart(day)}/${formatPart(month + 1)}`
}

export const renderChart = (readings: Array<IReading>) => {
  chartJs.Chart.defaults.font.size = 10;

  (chartJs.Chart.register as (...args: chartJs.ChartComponentLike[]) => void).apply(
    null,
    //@ts-ignore
    Object.values(chartJs).filter((chartClass) => chartClass.id),
  )

  const labels = readings.map(({ time }) => {
    return formatDateLabel(time)
  })

  const values = readings.map(({ value }) => value)

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'kWh usage',
        data: values,
        fill: true,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
        borderWidth: 0.2,
        backgroundColor: '#5A8EDA',
        borderRadius: 10,
      },
    ],
  }

  if (chart) {
    chart.destroy()
  }

  chart = new chartJs.Chart('usageChart', {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          grid: {
            display: false,
          },
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
      maintainAspectRatio: false,
    },
  })
}
