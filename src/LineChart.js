import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

const BarChart = ({ chartData, linechartoption }) => {
  return (
    <div className="abschart">
      <Line
        data={chartData}
        options={linechartoption} />
    </div>
  )
}

export default BarChart