import React from 'react'
import { Button, Row, Col } from 'reactstrap';
import { Home, Plus } from 'react-feather';
import InvoiceList from './InvoicList';

export const NewsListDiv = () => {
  return (
    <div className='mt-2'>
        <div className='d-flex justify-content-between' >
            <h2>لیست اخبار فعال</h2>
            <Button.Ripple color='primary'>
                <span className='m-1 ms-25'>اضافه کردن اخبار جدید</span>
                <Plus size={14} />
            </Button.Ripple>
        </div>
        <Row className='match-height'>
            <Col xs='12'>
                <InvoiceList />
            </Col>
        </Row>
    </div>
  )
}

export default NewsListDiv;