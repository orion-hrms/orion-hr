import React from "react";
import CIcon from "@coreui/icons-react";
import { NavLink } from "react-router-dom";

const _nav = [
  {
    _component: "CNavItem",
    as: NavLink,
    anchor: "Dashboard",
    to: "/dashboard",
    icon: <CIcon name="cil-speedometer" customClassName="nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    _component: "CNavItem",
    as: NavLink,
    anchor: "Employees",
    to: "/employees",
    icon: <CIcon name="cil-people" customClassName="nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },

  {
    _component: "CNavItem",
    as: NavLink,
    anchor: "Meetings",
    to: "/meetings",
    icon: <CIcon name="cil-list" customClassName="nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },

  {
    _component: "CNavItem",
    as: NavLink,
    anchor: "Tickets",
    to: "/tickets",
    icon: <CIcon name="cil-warning" customClassName="nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },

  {
    _component: "CNavTitle",
    anchor: "Theme",
  },
  {
    _component: "CNavItem",
    as: NavLink,
    anchor: "Meetings",
    to: "/theme/colors",
    icon: <CIcon name="cil-drop" customClassName="nav-icon" />,
  },

  {
    _component: "CNavItem",
    as: NavLink,
    anchor: "Mails",
    to: "/theme/typography",
    icon: <CIcon name="cil-pencil" customClassName="nav-icon" />,
  },
];
export default _nav;
