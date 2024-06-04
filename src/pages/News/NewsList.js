// ** Reactstrap Imports
import { Row, Col, Card, Button } from 'reactstrap'

// ** Custom Components
import StatsHorizontal from '@components/widgets/stats/StatsHorizontal'
import Breadcrumbs from '@components/breadcrumbs'

// ** Icons Imports
import { BookOpen, Home, Plus} from 'react-feather'

// ** Styles
import '@styles/react/apps/app-users.scss'
import InvoiceList from '../../@core/components/NewsList/InvoicList'
export const NewsList = () => {
  return (
    <Card className='app-user-list px-1' style={{backgroundColor:"#fff"}}>
        <Breadcrumbs title='لیست اخبار ARM' data={[{ title: 'لیست اخبار' }]} />
        <Row>
        <Col lg='3' sm='6'>
          <StatsHorizontal
            color='primary'
            statTitle='اخبار فعال'
            icon={<BookOpen size={20} />}
            renderStats={<h3 className='fw-bolder mb-75'>42</h3>}
          />
        </Col>

        <Col lg='3' sm='6'>
          <StatsHorizontal
            color='success'
            statTitle='اخبار غیر فعال'
            icon={<BookOpen size={20} />}
            renderStats={<h3 className='fw-bolder mb-75'>53</h3>}
          />
        </Col>
        </Row>

        <Row>
        <div className='mt-2 px-2'>
          <div className='d-flex justify-content-between' >
              <h2>لیست اخبار فعال</h2>
              <Button.Ripple color='primary'>
                  <span className='m-1 ms-25'>اضافه کردن اخبار جدید</span>
                  <Plus size={14} />
              </Button.Ripple>
          </div>
        </div>
        </Row>

        <Row className='match-height'>
            <Col xs='12'>
                <InvoiceList />
            </Col>
        </Row>
    </Card>
  )
}

export default NewsList