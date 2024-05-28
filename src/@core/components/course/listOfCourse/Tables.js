// ** React Imports
import { Fragment } from "react";

// ** Custom Components
import Breadcrumbs from "@components/breadcrumbs";

// ** Third Party Components
import { Row, Col } from "reactstrap";

import TableWithButtons from "./TableWithButtons";

// ** Styles
import "@styles/react/libs/tables/react-dataTable-component.scss";

const Tables = () => {
  return (
    <Fragment>
      <Breadcrumbs
        title="Datatables Basic"
        data={[{ title: "Datatables" }, { title: "Datatables Basic" }]}
      />
      <Row>
        <Col sm="12">
          <TableWithButtons />
        </Col>
      </Row>
    </Fragment>
  );
};

export default Tables;
