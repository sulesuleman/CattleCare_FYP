import React, { useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const StatCard = ({ title, progress, increase, time, arrow }) => {
  return (
    <Card className='card-stats'>
      <Card.Body>
        <Row>
          <div className='col'>
            <Card.Title tag='h5' className='text-uppercase text-muted mb-0 '>
              {title}
            </Card.Title>
            <span className='h2 font-weight-bold mb-0'>{progress}</span>
          </div>
          <Col className='col-auto'>
            <div className='icon icon-shape bg-info text-white rounded-circle shadow'>
              <i className='fas fa-percent' />
            </div>
          </Col>
        </Row>
        <p className='mt-3 mb-0 text-muted text-sm'>
          <span className='text-success mr-2'>
            <i className='fas fa-arrow-up' /> {increase}
          </span>{' '}
          <span className='text-nowrap'>{time}</span>
        </p>
      </Card.Body>
    </Card>
  )
}
export default StatCard;
