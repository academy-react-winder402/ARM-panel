// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Custom Components
import StatsHorizontal from '@components/widgets/stats/StatsHorizontal'
import Breadcrumbs from '@components/breadcrumbs'

// ** Icons Imports
import { BookOpen } from 'react-feather'

// ** Styles
import '@styles/react/apps/app-users.scss'
import NewsListDiv from '../../@core/components/NewsList'
export const NewsList = () => {
  return (
    <div className='app-user-list px-1'>
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

        <NewsListDiv/>
    </div>
  )
}

export default NewsList