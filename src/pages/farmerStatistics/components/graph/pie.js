import React, { useState } from 'react'
import { Pie } from 'react-chartjs-2'

const PieChart = ({ stateofPie }) => {
  return (
    <Pie
      data={stateofPie}
      options={{
        responsive: true,
        maintainAspectRatio: true,
        title: {
          display: true,
          text: 'Average Rainfall per month',
          fontSize: 20
        },
        legend: {
          display: true,
          position: 'right'
        }
      }}
    />
  )
}
export default PieChart
