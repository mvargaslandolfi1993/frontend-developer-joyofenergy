import { renderChart } from './chart.js'
import { getReadings, groupByDay, sortByTime } from '../../domain/readings/reading'

const readings = await getReadings()

export default renderChart(sortByTime(groupByDay(readings)).slice(-30))
