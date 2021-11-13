import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Card, Col, Row, Nav, Table, Button, Progress } from 'react-bootstrap'
import {
  StatCard,
  DoughnutChart,
  LineChart,
  BarChart,
  PieChart,
  Performance,
  Traffic
} from './components'
import './index.css'
var data = [30, 40, 35, 50, 49, 60, 70, 91, 125]
const FarmerPage = () => {
  const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)'
      }
    ]
  }

  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
  const stateofPie = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: [
          '#B21F00',
          '#C9DE00',
          '#2FDE00',
          '#00A6B4',
          '#6800B4'
        ],
        hoverBackgroundColor: [
          '#501800',
          '#4B5000',
          '#175000',
          '#003350',
          '#35014F'
        ],
        data: [65, 59, 80, 81, 56]
      }
    ]
  }
  const [greetingMsg, setGreetingMsg] = useState(() => {
    let today = new Date()
    let curHr = today.getHours()
    if (curHr < 12) {
      return 'good morning'
    } else if (curHr < 18) {
      return 'good afternoon'
    } else {
      return 'good evening'
    }
  })
  return (
    <div className='dashboard_page_container'>
      <div>
        <div style={{ width: 'fit-content' }}>
          <h1 className='greeting_msg'>{greetingMsg}!</h1>
          <motion.div
            style={{ height: 5, backgroundColor: '#2cb178' }}
            initial={{ width: 0 }}
            animate={{
              width: '70%',
              transition: {
                duration: 1,
                delay: 0.5
              }
            }}
          ></motion.div>
        </div>
        <p className='stat_msg'>
          Here is what's going on with your business today
        </p>
      </div>
      <div className=''>
        <Row className='gx-3 gy-5 mt-5'>
          <Col lg='6' xl='3'>
            <StatCard
              title={'Traffic'}
              progress={'350,897'}
              increase={'3.48%'}
              time={'Since last month'}
              arrow={'up'}
            />
          </Col>
          <Col lg='6' xl='3'>
            <StatCard
              title={'New users'}
              progress={'2,356'}
              increase={'3.48%'}
              time={'Since last month'}
              arrow={'down'}
            />
          </Col>
          <Col lg='6' xl='3'>
            <StatCard
              title={'Sales'}
              progress={'350,897'}
              increase={'3.48%'}
              time={'Since last month'}
              arrow={'up'}
            />
          </Col>
          <Col lg='6' xl='3'>
            <StatCard
              title={'Performance'}
              progress={'350,897'}
              increase={'3.48%'}
              time={'Since last month'}
              arrow={'up'}
            />
          </Col>
        </Row>
        <Row>
          <Col className='mb-5 mb-xl-0' xl='6'>
            <div style={{ height: '200px', width: '400px' }}>
              <LineChart data={data} />
            </div>
          </Col>
          <Col className='mb-5 mb-xl-0' xl='6'>
            <div style={{ height: '200px', width: '400px' }}>
              <BarChart data={data} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col className='mb-5 mb-xl-0' xl='6'>
            <div style={{ height: '400px', width: '400px' }}>
              <PieChart data={stateofPie} />
            </div>
          </Col>
          <Col className='mb-5 mb-xl-0' xl='6'>
            <div style={{ height: '400px', width: '400px' }}>
              <DoughnutChart data={stateofPie} />
            </div>
          </Col>
        </Row>
        <Row className='mt-5'>
          <Col className='mb-5 mb-xl-0' xl='12'>
            <Performance />
          </Col>
          <Col xl='12'>
            <Traffic />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default FarmerPage
