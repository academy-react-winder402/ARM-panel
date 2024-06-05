import { Breadcrumb } from "reactstrap";
import Breadcrumbs from "../../@core/components/course/listOfCourse/Breadcrumbs";
import { Fragment } from "react";
import UsersList from "../../@core/components/course/listOfCourse/UsersList";
const YourList = () => {
  return (
    <Fragment>
      <Breadcrumbs title="لیست دوره ها" />
      <UsersList />
    </Fragment>
  );
};

export default YourList;
