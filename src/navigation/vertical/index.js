import { BubbleController } from "chart.js";
import { Bubble } from "react-chartjs-2";
import { Mail, Home, Airplay, Circle, User, Menu, List } from "react-feather";

export default [
  {
    id: "home",
    title: "داشبورد",
    icon: <Home size={20} />,
    navLink: "/home",
  },

  {
    id: "users",
    title: "کاربران",
    icon: <User size={20} />,
    navLink: "/users",
  },

  {
    id: "Courses",
    title: "دوره ها",
    icon: <List size={20} />,
    navLink: "/Courses",
    children: [],
  },

  {
    id: "news",
    title: "اخبار",
    icon: <List size={20} />,
    navLink: "/news",
    children: [],
  },

  /*  {
    id: "smaplePage",
    title: "Sample Page",
    icon: <Airplay size={20} />,
    // navLink: "/sample",
    children: [
      {
        id: "invoiceList",
        title: "List",
        icon: <Circle size={12} />,
        navLink: "/apps/invoice/list",
      },
    ],
  }, */
];
