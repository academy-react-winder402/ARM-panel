// ** React Imports
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Store & Actions
// import { store } from '@store/store'
// import { deleteInvoice } from './store'

// ** Reactstrap Imports
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledTooltip,
  UncontrolledDropdown,
  Input,
  Button
} from 'reactstrap'

// ** Third Party Components
import {
  Eye,
  Send,
  Edit,
  Copy,
  Save,
  Info,
  Trash,
  PieChart,
  Download,
  TrendingUp,
  CheckCircle,
  MoreVertical,
  ArrowDownCircle,
  FileText,
  Archive
} from 'react-feather'

// ** Vars
const invoiceStatusObj = {
  Sent: { color: 'light-secondary', icon: Send },
  Paid: { color: 'light-success', icon: CheckCircle },
  Draft: { color: 'light-primary', icon: Save },
  Downloaded: { color: 'light-info', icon: ArrowDownCircle },
  'Past Due': { color: 'light-danger', icon: Info },
  'Partial Payment': { color: 'light-warning', icon: PieChart }
}

// ** renders client column
const renderClient = row => {
  const stateNum = Math.floor(Math.random() * 6),
    states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
    color = states[stateNum]

  if (row.title.length) {
    return <Avatar className='me-50' img={row.title} width='32' height='32' />
  } else {
    return <Avatar color={color} className='me-50' content={row.client ? row.client.name : 'John Doe'} initials />
  }
}

// ** Table columns
export const columns = [
  {
    name: <Input type='checkbox' id='basic-cb-checked' />,
    sortable: true,
    sortField: 'id',
    minWidth: '50px',
    // selector: row => row.id,
    cell: row => <Input type='checkbox' />
  },
  {
    name: <h5 style={{fontWeight:"bolder", margin:"5px 0"}}>نام</h5>,
    sortable: true,
    sortField: 'id',
    minWidth: '250px',
    // selector: row => row.id,
    cell: row => <Link style={{fontWeight:"bold"}}>mohammad hossein kalil pour</Link>
  },
  {
    name: <h5 style={{fontWeight:"bolder", margin:"5px 0"}}>ایمیل</h5>,
    sortable: true,
    sortField: 'id',
    minWidth: '240px',
    // selector: row => row.id,
    cell: row => <p style={{whiteSpace:"wrap", fontWeight:"bold"}}>amorrezaadf34@gmail.com</p>
  },
  {
    name: <h5 style={{fontWeight:"bolder", marginTop:"5px"}}>شماره موبایل</h5>,
    sortable: true,
    sortField: 'id',
    minWidth: '150px',
    // selector: row => row.id,
    cell: row => <p style={{whiteSpace:"wrap", fontWeight:"bold"}}>09112659985</p>
  },
  {
    name: <h5 style={{fontWeight:"bolder", margin:"5px 0"}}>تاریخ</h5>,
    sortable: true,
    sortField: 'id',
    minWidth: '150px',
    // selector: row => row.id,
    cell: row => <p style={{whiteSpace:"wrap", fontWeight:"bold"}}>1403/5/20</p>
  },
  {
    name: <h5 style={{fontWeight:"bolder", margin:"5px 0"}}>وضعیت</h5>,
    sortable: true,
    sortField: 'id',
    minWidth: '50px',
    // selector: row => row.id,
    cell: row => <Badge color='success'>فعال</Badge>
    // cell : row ==>{
    //   return (
    //     <Badge color={status[row.status].color} pill>
    //       {status[row.status].title}
    //     </Badge>
    //   )
    // }
  },
  {
    name: <h5 style={{fontWeight:"bolder", margin:"5px 0"}}>مدیریت</h5>,
    allowOverflow: true,
    minWidth: "220px",
    // selector: row => row.id,
    cell: () => {
      return(
        <div style={{display:"flex", justifyContent:"center", gap:"10px"}}>
          <UncontrolledDropdown>
            <DropdownToggle className='pe-1' tag='span'>
              <MoreVertical size={15} />
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
                <FileText size={15} />
                <span className='align-middle ms-50'>Details</span>
              </DropdownItem>
              <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
                <Archive size={15} />
                <span className='align-middle ms-50'>Archive</span>
              </DropdownItem>
              <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
                <Trash size={15} />
                <span className='align-middle ms-50'>Delete</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <Button.Ripple color='danger' size='sm'>حذف</Button.Ripple>
          <Button.Ripple color='primary' size='sm'>دسترسی</Button.Ripple>
        </div>
      )
    }
  },

]
