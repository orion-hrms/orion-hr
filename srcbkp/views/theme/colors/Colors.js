import PropTypes from "prop-types";
import React, { useEffect, useState, createRef } from "react";
import classNames from "classnames";
import { CRow, CCol, CCard, CCardHeader, CCardBody } from "@coreui/react";
import { DocsLink } from "../../../../../src/reusable";
import { API, graphqlOperation } from "aws-amplify";
import { listMeetingss } from "../../../graphql/queries";

const ThemeView = () => {
  //const [color, setColor] = useState('rgb(255, 255, 255)')
  //const ref = createRef()
  const [meetings, setMeetings] = useState("");

  useEffect(() => {
    //   const el = ref.current.parentNode.firstChild
    //   const varColor = window.getComputedStyle(el).getPropertyValue('background-color')
    //   setColor(varColor)
    getAllMeetingsDataToState();
  }, []);

  const getAllMeetingsDataToState = async () => {
    const result = await API.graphql(graphqlOperation(listMeetingss));
    const newResult = result.data.listMeetingss;
    console.log("inside Meetings", result.data.listMeetingss);
    setMeetings(newResult);
    console.log("meets", meetings);
  };

  return (
    <table className="table w-100">
      <tbody>
        <tr>
          <td className="text-medium-emphasis">Subject</td>
          <td className="font-weight-bold"> </td>
        </tr>
        <tr>
          <td className="text-medium-emphasis">Schedule</td>
          <td className="font-weight-bold"></td>
        </tr>
      </tbody>
    </table>
  );
};

const ThemeColor = ({ className, children }) => {
  const classes = classNames(className, "theme-color w-75 rounded mb-3");
  return (
    <CCol xl="2" md="4" sm="6" xs="12" className="mb-4">
      <div className={classes} style={{ paddingTop: "75%" }}></div>
      {children}
      <ThemeView />
    </CCol>
  );
};

ThemeColor.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const Colors = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          UpComing Meetings
          <DocsLink href="https://aws.amazon.com/chime/?chime-blog-posts.sort-by=item.additionalFields.createdDate&chime-blog-posts.sort-order=desc" />
        </CCardHeader>
        <CCardBody>
          <CRow>
            <ThemeColor className="bg-info">
              <h6>Brand Primary Color</h6>
            </ThemeColor>
            {/* <ThemeColor className="bg-secondary">
              <h6>Brand Secondary Color</h6>
            </ThemeColor>
            <ThemeColor className="bg-success">
              <h6>Brand Success Color</h6>
            </ThemeColor>
            <ThemeColor className="bg-danger">
              <h6>Brand Danger Color</h6>
            </ThemeColor>
            <ThemeColor className="bg-warning">
              <h6>Brand Warning Color</h6>
            </ThemeColor>
            <ThemeColor className="bg-info">
              <h6>Brand Info Color</h6>
            </ThemeColor>
            <ThemeColor className="bg-light">
              <h6>Brand Light Color</h6>
            </ThemeColor>
            <ThemeColor className="bg-dark">
              <h6>Brand Dark Color</h6>
            </ThemeColor> */}
          </CRow>
        </CCardBody>
      </CCard>
    </>
  );
};

export default Colors;
