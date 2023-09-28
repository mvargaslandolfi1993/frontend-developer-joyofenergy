import { renderChart } from './chart.js'
import { getReadings, groupByDay, sortBy } from '../../services/reading/index.js'

const readings = await getReadings()

export default renderChart(sortBy(groupByDay(readings), 'time').slice(-30))
