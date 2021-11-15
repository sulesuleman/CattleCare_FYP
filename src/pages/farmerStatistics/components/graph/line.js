import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'

const LineChart = ({ data }) => {
  return (
    <Line
      data={data}
      options={{
        responsive: true,
        maintainAspectRatio: true,
        color:"#2cb178",
        backgroundColor:"#2cb178",
        title: {
          display: true,
          text: 'Average Rainfall per month',
          fontSize: 20
        },
        legend: {
          display: true,
          position: 'left',
        
        }
      }}
    />
  )
}
export default LineChart
