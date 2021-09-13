import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { CRow, CCol, CCard, CCardHeader, CCardBody } from "@coreui/react";
import { DocsLink } from "../../../../../src/reusable";
import { API, graphqlOperation } from "aws-amplify";
import { listMeetingss } from "../../../graphql/queries";

const ThemeView = () => {
  const [meetings, setMeetings] = useState([]);
  console.log("meets early", meetings);
  //   const meetingLength = if((meetings )&& (meetings.items) && (meetings.items.length != 0)){
  //       return meetings.items.length;

  //   }
  const meetingLength = 1;

  console.log("meetlength 1", meetingLength);

  useEffect(() => {
    //   const el = ref.current.parentNode.firstChild
    //   const varColor = window.getComputedStyle(el).getPropertyValue('background-color')
    //   setColor(varColor)
    getAllMeetingsDataToState().then((newResult) => setMeetings(newResult));
  }, []);

  console.log("meetlength 2", meetingLength);

  const getAllMeetingsDataToState = async () => {
    const result = await API.graphql(graphqlOperation(listMeetingss));
    const newResult = result.data.listMeetingss;
    return newResult;
    // console.log('inside Meetings', result.data.listMeetingss)
    // console.log('newResult', newResult)
    // setMeetings(newResult)
  };
  console.log("meets late", meetings);

  //   var sleepCheck = function (numHours) {
  //     if (numHours >= 8) {
  //       console.log("You're getting plenty of sleep! Maybe even too much!")
  //     } else if (numHours < 8) {
  //       return 'Get some more shut eye!'
  //     }
  //   }
  //   sleepCheck(10)

  var meetingCount = function (meetings) {
    if (meetings && meetings.items && meetings.items.length > 0) {
      return true;
    }
    // else {
    //   console.log('ohNoo')
    // }
  };

  meetingCount();

  console.log("meetlength 3", meetingLength);
  return (
    <table className="table w-100">
      <tbody>
        {/* if ({meetings} &&{meetings.items}){
        {items.map((obj, index) => ( */}
        {/* {if } */}
        {/* {meetings.items.map((obj, index) => ( */}
        {/* <p>Hiiiii{meetings.items}</p> */}

        {meetingCount ? (
          // {meetings.items.map((obj, index) => (
          <>
            <tr>
              <td className="text-medium-emphasis">
                Departemnt {meetingCount}{" "}
              </td>
              <td className="font-weight-bold">Sales </td>
            </tr>

            <tr>
              <td className="text-medium-emphasis">Schedule </td>
              <td className="font-weight-bold">Today</td>
            </tr>
            <tr>
              <td className="text-medium-emphasis">Priority </td>
              <td className="font-weight-bold"> 3</td>
            </tr>
          </>
        ) : (
          // ))}

          <div>hiiiiii</div>
        )}
      </tbody>
    </table>
  );
};

const ThemeColor = ({ className, children }) => {
  const classes = classNames(className, "theme-color w-75 rounded mb-3");
  return (
    <CCol xl="2" md="4" sm="6" xs="12" className="mb-4">
      <div className={classes} style={{ paddingTop: "75%" }}>
        {" "}
        <p className="text-white text-center p-2"> Click to Join</p>
      </div>

      {children}
      <ThemeView />
    </CCol>
  );
};

ThemeColor.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const Meetings = () => {
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
              <h6>Interns joining in Aug</h6>
            </ThemeColor>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  );
};

export default Meetings;
