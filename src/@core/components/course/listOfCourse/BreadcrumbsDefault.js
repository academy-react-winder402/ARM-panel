// ** React Imports
import { Fragment } from "react";

// ** Reactstrap Imports
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

// ** Icons Imports
import { Link } from "react-router-dom";

const BreadcrumbsDefault = () => {
  return (
    <Fragment>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="#"> داشبورد </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="#"> لیست دوره </Link>
        </BreadcrumbItem>
      </Breadcrumb>
    </Fragment>
  );
};
export default BreadcrumbsDefault;
