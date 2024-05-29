import { Breadcrumb } from "reactstrap";
import Breadcrumbs from "../../@core/components/course/listOfCourse/Breadcrumbs";
import { Fragment } from "react";
import UsersList from "../../@core/components/course/listOfCourse/UsersList";
import Tables from "../../@core/components/course/listOfCourse/Tables";
const YourList = () => {
  return (
    <Fragment>
      <Breadcrumbs title="لیست دوره ها" />
      <UsersList />
      <Tables />
    </Fragment>
  );
};

export default YourList;
