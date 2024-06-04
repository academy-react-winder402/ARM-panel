import React from 'react'
import { Col, Row, Button, Card } from 'reactstrap'
import BreadCrumbs from '../../@core/components/course/listOfCourse/Breadcrumbs'
import { User, BookOpen, Trash, Trash2 } from 'react-feather'
import StatsHorizontal from '../../@core/components/widgets/stats/StatsHorizontal'
import InvoiceList from './InvoicList'

const MembersList = () => {
  return (
    <div>
        <BreadCrumbs title='لیست کاربران ARM' data={[{ title: 'لیست کاربران' }]} />
        <Row>
          <Col className='d-grid mb-1 mb-lg-0' lg={3} md={12}>
            <Button.Ripple color='primary'><User size={20} style={{marginLeft:"5px"}}/>همه ی کاربران</Button.Ripple>
          </Col>
          <Col className='d-grid mb-1 mb-lg-0' lg={3} md={12}>
            <Button.Ripple color='flat-dark'><User size={20} style={{marginLeft:"5px"}}/>دانشجویان</Button.Ripple>
          </Col>
          <Col className='d-grid mb-1 mb-lg-0' lg={3} md={12}>
            <Button.Ripple color='flat-dark'><User size={20} style={{marginLeft:"5px"}}/>استادان</Button.Ripple>
          </Col>
          <Col className='d-grid mb-1 mb-lg-0' lg={3} md={12}>
            <Button.Ripple color='flat-dark'><User size={20} style={{marginLeft:"5px"}}/>مدیران</Button.Ripple>
          </Col>
        </Row>

        <Row className='pt-2'>
        <Col lg='3' sm='6'>
          <StatsHorizontal
            color='success'
            statTitle='کاربران فعال شما'
            icon={<User size={20} />}
          />
        </Col>

        <Col lg='3' sm='6'>
          <StatsHorizontal
            color='danger'
            statTitle='کاربران حذف شده'
            icon={<Trash2 size={20} />}
          />
        </Col>
        </Row>

        <Card>
          <div className='d-flex justify-content-between px-1 py-2 border bg-white' >
            <h2>تعداد کاربران فعال شما : 25</h2>
              <Button.Ripple color='primary'>
                <span>اضافه کردن کاربر </span>
                <User size={20} />
              </Button.Ripple>
          </div>
          <InvoiceList />
        </Card>
    </div>
  )
}

export default MembersList