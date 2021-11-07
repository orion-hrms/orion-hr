import React, { lazy } from "react";

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import { CChartLine } from "@coreui/react-chartjs";
import { getStyle, hexToRgba } from "@coreui/utils";
import CIcon from "@coreui/icons-react";

const WidgetsDropdown = lazy(() =>
  import("../components/widgets/WidgetsDropdown.js")
);
const WidgetsBrand = lazy(() =>
  import("../components/widgets/WidgetsBrand.js")
);

const Dashboard = () => {
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <>
      <WidgetsDropdown />
    </>
  );
};

export default Dashboard;
