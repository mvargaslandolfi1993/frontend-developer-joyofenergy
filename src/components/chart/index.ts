import { renderChart } from './chart.js'
import { getReadings, groupByDay, sortBy } from '../../services/reading/index.js'
import { renderCart } from '../card/index.js'

const readings = await getReadings()

const filteredReadings = sortBy(groupByDay(readings), 'time').slice(-30)

const cost = filteredReadings.reduce((accumulator: number, currentValue: any) => {
  const total = currentValue.value * 0.138

  return accumulator + total
}, 0)

const consumption = filteredReadings.reduce((accumulator: number, currentValue: any) => {
  return accumulator + currentValue.value
}, 0)

const footprint = filteredReadings
  .reduce((accumulator: number, currentValue: any) => {
    const total = currentValue.value * 0.0002532
    return accumulator + total
  }, 0)
  .toFixed(4)

const card = document.getElementById('card-1')

if (card) {
  card.innerHTML += renderCart('Cost', Math.round(cost), '$')
}

const card2 = document.getElementById('card-2')

if (card2) {
  card2.innerHTML += renderCart('Consumption', Math.round(consumption), 'kWh')
}

const card3 = document.getElementById('card-3')

if (card3) {
  card3.innerHTML += renderCart('Footprint', footprint, 'Tonnes')
}

export const chart = renderChart(filteredReadings)
