import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarToggler,
  CCreateNavItem,
} from "@coreui/react";

import CIcon from "@coreui/icons-react";

import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

// sidebar nav config
import { _nav } from "../_nav";

const AppSidebar = () => {
  const dispatch = useDispatch();
  const unfoldable = useSelector((state) => state.sidebarUnfoldable);
  const sidebarShow = useSelector((state) => state.sidebarShow);

  return (
    <CSidebar
      position="fixed"
      selfHiding="md"
      unfoldable={unfoldable}
      show={sidebarShow}
      onShow={() => console.log("show")}
      onHide={() => {
        dispatch({ type: "set", sidebarShow: false });
      }}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/">
        ORION HRMS
      </CSidebarBrand>
      <CSidebarNav>
        <CCreateElement
          items={_nav.items}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle,
          }}
        />
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() =>
          dispatch({ type: "set", sidebarUnfoldable: !unfoldable })
        }
      />
    </CSidebar>
  );
};

export default React.memo(AppSidebar);
