import React, { useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Bar } from 'react-chartjs-2'
const BarChart = ({ data }) => {
  return (
    <Bar
      data={data}
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
          position: 'left'
        }
      }}
    />
  )
}
export default BarChart
