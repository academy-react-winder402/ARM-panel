import { Breadcrumb } from "reactstrap";
import Breadcrumbs from "../../@core/components/course/listOfCourse/Breadcrumbs";
import { Fragment } from "react";
import UsersList from "../../@core/components/course/listOfCourse/UsersList";
import Tables from "../../@core/components/course/listOfCourse/Tables";
// import { Row, Col } from "reactstrap";
const YourList = () => {
  return (
    <Fragment>
      <Breadcrumbs
        title="Profile"
        data={[{ title: "Pages" }, { title: "Profile" }]}
      />
      <UsersList />
      <Tables />
    </Fragment>
  );
};

export default YourList;
