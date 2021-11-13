import React, { useState } from 'react'
import { Card, Col, Row, Nav, Table, Button, Progress } from 'react-bootstrap'
import { Doughnut } from 'react-chartjs-2'
const Traffic = ({ stateofPie }) => {
  return (
    <Card className='shadow-sm'>
      <Card.Header className='border-0'>
        <Row className='align-items-center'>
          <div className='col'>
            <h3 className='mb-0'>Social traffic</h3>
          </div>
          <div className='col text-right'>
            <Button
              color='primary'
              href='#pablo'
              onClick={e => e.preventDefault()}
              size='sm'
            >
              See all
            </Button>
          </div>
        </Row>
      </Card.Header>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan='2'>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>{' '}
    </Card>
  )
}
export default Traffic
