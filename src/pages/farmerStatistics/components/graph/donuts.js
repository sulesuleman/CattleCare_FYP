import React, { useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Doughnut } from 'react-chartjs-2'
const DoughnutChart = ({ stateofPie }) => {
  return (
    <Doughnut
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
export default DoughnutChart
