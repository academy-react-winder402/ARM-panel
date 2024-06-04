/* eslint-disable semi */
// ** React Imports
import { useEffect, useState } from "react";
import { useParams, Link, Await } from "react-router-dom";

// ** Store & Actions
// import { getUser } from "../store";
// import { useSelector, useDispatch } from "react-redux";

// ** Reactstrap Imports
import { Row, Col, Alert } from "reactstrap";
import UserInfoCard from "./UserInfoCard";

// ** Styles
import "@styles/react/apps/app-users.scss";
import axios from "axios";

const UserView = () => {
  const [data, setData] = useState({});

  const fetch = async () => {
    const fetchData = await axios.get(
      "https://classapi.sepehracademy.ir/api/Home/GetCoursesWithPagination"
    );
    setData(fetchData.data.courseFilterDtos[0]);
    console.log(fetchData.data.courseFilterDtos[0]);
  };
  useEffect(() => {
    // setData({
    //   sort,
    //   q: Value,
    //   sortColumn,
    //   page: currentPage,
    //   status: statusValue,
    // });

    fetch();
  }, []);

  // const dispatch = useDispatch();

  // ** Hooks
  const { id } = useParams();

  // ** Get suer on mount
  // useEffect(() => {
  //   dispatch(getUser(parseInt(id)));
  // }, [dispatch]);

  return (
    <div className="app-user-view">
      <Row>
        <Col xl="4" lg="5" xs={{ order: 1 }} md={{ order: 0, size: 5 }}>
          {/* <UserInfoCard data={data.classRoomName} /> */}
        </Col>
      </Row>
    </div>
  );
};

export default UserView;
