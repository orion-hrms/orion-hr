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
    anchor: "Chat",
    to: "/chat",
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
    anchor: "Sprint Performance",
    to: "/sprintperf",
    icon: <CIcon icon="cil-chartPie" customClassName="nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },

  {
    _component: "CNavItem",
    as: NavLink,
    anchor: "Timesheet",
    to: "/timesheet",
    icon: <CIcon icon="cil-laptop" customClassName="nav-icon" />,
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
  // {
  //   _component: "CNavItem",
  //   as: NavLink,
  //   anchor: " Email",
  //   to: "/email",
  //   icon: <CIcon icon="cil-envelope-closed" customClassName="nav-icon" />,
  //   badge: {
  //     color: "info",
  //     text: "NEW",
  //   },
  // },
  {
    _component: "CNavItem",
    as: NavLink,
    anchor: " Data Insights",
    to: "/datainsight",
    icon: <CIcon icon="cilTags" customClassName="nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    _component: "CNavItem",
    as: NavLink,
    anchor: "AdminDashboard",
    to: "/AdminDashboard",
    icon: <CIcon icon="cil-warning" customClassName="nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
];

const _admin_nav = [
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
    anchor: "Chat",
    to: "/chat",
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
    anchor: "Sprint Performance",
    to: "/sprintperf",
    icon: <CIcon icon="cil-chartPie" customClassName="nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },

  {
    _component: "CNavItem",
    as: NavLink,
    anchor: "Timesheet",
    to: "/timesheet",
    icon: <CIcon icon="cil-laptop" customClassName="nav-icon" />,
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
  // {
  //   _component: "CNavItem",
  //   as: NavLink,
  //   anchor: " Email",
  //   to: "/email",
  //   icon: <CIcon icon="cil-envelope-closed" customClassName="nav-icon" />,
  //   badge: {
  //     color: "info",
  //     text: "NEW",
  //   },
  // },
  {
    _component: "CNavItem",
    as: NavLink,
    anchor: " Data Insights",
    to: "/datainsight",
    icon: <CIcon icon="cilTags" customClassName="nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  }
];

export default _nav;