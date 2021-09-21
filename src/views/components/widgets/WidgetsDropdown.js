import { API, graphqlOperation } from "aws-amplify";
import React, { useState, useEffect } from "react";
import { listEmployeedetails } from "../../../graphql/queries";
import { useHistory } from "react-router-dom";

import {
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetDropdown,
} from "@coreui/react";
import { getStyle } from "@coreui/utils";
import { CChartBar, CChartLine } from "@coreui/react-chartjs";
import CIcon from "@coreui/icons-react";

const showAnalysis = () => {
  // <p>
  //   Check out{" "}
  //   <a
  //     href="https://www.freecodecamp.org/"
  //     target="_blank"
  //     rel="noopener noreferrer"
  //   >
  //     freeCodeCamp
  //   </a>
  //   .
  // </p>;
  // location.href = "http://localhost:8868/,'_blank'";
  window.open(
    "http://localhost:8866/",
    "_blank" // <- This is what makes it open in a new window.
  );
};
const OpenEmployeeData = () => {
  location.href = "http://localhost:8868/,'_blank'";
};

const WidgetsDropdown = () => {
  // const result = API.graphql(graphqlOperation(listEmployeedetails));

  const history = useHistory();

  const [inidata] = "";
  const [empdata, setEmpdata] = useState([]);

  useEffect(() => {
    getAllEmpDataToState();
  }, [inidata]);

  const navigateTo = () => history.push("/employees");
  const getAllEmpDataToState = async () => {
    const result = await API.graphql(graphqlOperation(listEmployeedetails));
    console.log("inside before build 1", result);
    const empcount = result.data.listEmployeedetails.items.length;
    setEmpdata(empcount);

    console.log("ressss", result, empcount);
  };

  return (
    <CRow>
      <CCol sm="6" lg="3">
        <CWidgetDropdown
          className="mb-4"
          color="primary"
          value={empdata}
          change={<>{/* (-12.4% <CIcon icon="cil-arrow-bottom" />) */}</>}
          title="Users"
          to="/employees"
          // onClick={() => OpenEmployeeData()}
          action={
            <CDropdown alignment="end">
              <CDropdownToggle
                color="transparent"
                caret={false}
                className="p-0"
              >
                <CIcon
                  icon="cil-options"
                  className="text-high-emphasis-inverse"
                />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem onClick={navigateTo}>
                  Open Employees Data
                </CDropdownItem>
                {/* <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here...</CDropdownItem>
                <CDropdownItem disabled>Disabled action</CDropdownItem> */}
              </CDropdownMenu>
            </CDropdown>
          }
          chart={
            <CChartLine
              className="mt-3 mx-3"
              style={{ height: "70px" }}
              data={{
                labels: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                ],
                datasets: [
                  {
                    label: "My First dataset",
                    backgroundColor: "transparent",
                    borderColor: "rgba(255,255,255,.55)",
                    pointBackgroundColor: getStyle("--cui-primary"),
                    data: [65, 59, 84, 84, 51, 55, 40],
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                maintainAspectRatio: false,
                scales: {
                  x: {
                    grid: {
                      display: false,
                      drawBorder: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    min: 30,
                    max: 89,
                    display: false,
                    grid: {
                      display: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
                elements: {
                  line: {
                    borderWidth: 1,
                    tension: 0.4,
                  },
                  point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                  },
                },
              }}
            />
          }
        />
      </CCol>
      {/* <CCol sm="6" lg="3">
        <CWidgetDropdown
          className="mb-4"
          color="info"
          value="40+"
          change={
            <>
              (40.9% <CIcon icon="cil-arrow-top" />)
            </>
          }
          title="Tickets"
          action={
            <CDropdown alignment="end">
              <CDropdownToggle
                color="transparent"
                caret={false}
                className="p-0"
              >
                <CIcon
                  icon="cil-options"
                  className="text-high-emphasis-inverse"
                />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here...</CDropdownItem>
                <CDropdownItem disabled>Disabled action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          }
          chart={
            <CChartLine
              className="mt-3 mx-3"
              style={{ height: "70px" }}
              data={{
                labels: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                ],
                datasets: [
                  {
                    label: "My First dataset",
                    backgroundColor: "transparent",
                    borderColor: "rgba(255,255,255,.55)",
                    pointBackgroundColor: getStyle("--cui-info"),
                    data: [1, 18, 9, 17, 34, 22, 11],
                  },
                ],
              }}
              getDatasetAtEvent={(dataset, event) => {
                console.log("init1");
                console.log(dataset);
                console.log(event);
              }}
              getElementAtEvent={(element, event) => {
                console.log("init2");
                console.log(element);
                console.log(event);
              }}
              getElementsAtEvent={(element, event) => {
                console.log("init3");
                console.log(element);
                console.log(event);
              }}
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                maintainAspectRatio: false,
                scales: {
                  x: {
                    grid: {
                      display: false,
                      drawBorder: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    min: -9,
                    max: 39,
                    display: false,
                    grid: {
                      display: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
                elements: {
                  line: {
                    borderWidth: 1,
                  },
                  point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                  },
                },
              }}
            />
          }
        />
      </CCol> */}
      <CCol sm="6" lg="3">
        <CWidgetDropdown
          className="mb-4"
          color="warning"
          // value="2.49%"
          change={
            <>
              (84.7% <CIcon icon="cil-arrow-top" />)
            </>
          }
          title="Show Analysis"
          onClick={() => showAnalysis()}
          action={
            <CDropdown alignment="end">
              <CDropdownToggle
                color="transparent"
                caret={false}
                className="p-0"
              >
                <CIcon
                  icon="cil-options"
                  className="text-high-emphasis-inverse"
                />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem
                  onClick={() => <a href="http://localhost:8868/"></a>}
                >
                  Action
                </CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here...</CDropdownItem>
                <CDropdownItem disabled>Disabled action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          }
          chart={
            <CChartLine
              className="mt-3"
              style={{ height: "70px" }}
              data={{
                labels: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                ],
                datasets: [
                  {
                    label: "My First dataset",
                    backgroundColor: "rgba(255,255,255,.2)",
                    borderColor: "rgba(255,255,255,.55)",
                    data: [78, 81, 80, 45, 34, 12, 40],
                    fill: true,
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                maintainAspectRatio: false,
                scales: {
                  x: {
                    display: false,
                  },
                  y: {
                    display: false,
                  },
                },
                elements: {
                  line: {
                    borderWidth: 2,
                    tension: 0.4,
                  },
                  point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                  },
                },
              }}
            />
          }
        />
      </CCol>
      {/* <CCol sm="6" lg="3">
        <CWidgetDropdown
          className="mb-4"
          color="danger"
          value="43"
          change={
            <>
              (-23.6% <CIcon icon="cil-arrow-bottom" />)
            </>
          }
          title="Notifications"
          action={
            <CDropdown alignment="end">
              <CDropdownToggle
                color="transparent"
                caret={false}
                className="p-0"
              >
                <CIcon
                  icon="cil-options"
                  className="text-high-emphasis-inverse"
                />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here...</CDropdownItem>
                <CDropdownItem disabled>Disabled action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          }
          chart={
            <CChartBar
              className="mt-3 mx-3"
              style={{ height: "70px" }}
              data={{
                labels: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                  "January",
                  "February",
                  "March",
                  "April",
                ],
                datasets: [
                  {
                    label: "My First dataset",
                    backgroundColor: "rgba(255,255,255,.2)",
                    borderColor: "rgba(255,255,255,.55)",
                    data: [
                      78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84,
                      67, 82,
                    ],
                    barPercentage: 0.6,
                  },
                ],
              }}
              options={{
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                scales: {
                  x: {
                    grid: {
                      display: false,
                      drawTicks: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    grid: {
                      display: false,
                      drawBorder: false,
                      drawTicks: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
              }}
            />
          }
        />
      </CCol> */}
    </CRow>
  );
};

export default WidgetsDropdown;
