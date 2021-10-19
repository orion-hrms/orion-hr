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
    anchor: "Sprint",
    to: "/sprint",
    icon: <CIcon icon="cil-graph" customClassName="nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    _component: "CNavItem",
    as: NavLink,
    anchor: "Forum",
    to: "/forum",
    icon: <CIcon icon="cil-pen" customClassName="nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    _component: "CNavItem",
    as: NavLink,
    anchor: "Survey",
    to: "/survey",
    icon: <CIcon icon="cil-calendar-check" customClassName="nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  
];

export default _nav;
