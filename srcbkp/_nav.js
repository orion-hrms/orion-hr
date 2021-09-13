import React from "react";
import CIcon from "@coreui/icons-react";
import { NavLink } from "react-router-dom";

const _nav = [
  {
    _component: "CNavItem",
    as: NavLink,
    anchor: "Dashboard",
    to: "/dashboard",
    icon: <CIcon icon="cil-speedometer" customClassName="nav-icon" />,
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
    icon: <CIcon icon="cil-people" customClassName="nav-icon" />,
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
    icon: <CIcon icon="cil-list" customClassName="nav-icon" />,
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
    icon: <CIcon icon="cil-warning" customClassName="nav-icon" />,
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
    icon: <CIcon icon="cil-drop" customClassName="nav-icon" />,
  },

  {
    _component: "CNavItem",
    as: NavLink,
    anchor: "Mails",
    to: "/theme/typography",
    icon: <CIcon icon="cil-pencil" customClassName="nav-icon" />,
  },
];
export default _nav;
