import { BubbleController } from "chart.js";
import { Bubble } from "react-chartjs-2";
import { Mail, Home, Airplay, Circle, User, Menu, List, BookOpen, Coffee, Edit } from "react-feather";

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
    id: "courses",
    title: "دوره ها",
    icon: <List size={20} />,
    navLink: "/courses",
    children: [{
      id: "coursesList",
      title: "لیست دوره ها",
      icon: <BookOpen size={12} />,
      navLink: "/courses/coursesList",
    },
    {
      id: "yourCoursesList",
      title: "لیست دوره های شما",
      icon: <List size={12} />,
      navLink: "/courses/yourCoursesList",
    },
    {
      id: "reservedCourses",
      title: "دوره های رزرو شده کاربران",
      icon: <Coffee size={12} />,
      navLink: "/courses/reservedCourses",
    },
    {
      id: "addNewCourse",
      title: "ساخت دوره جدید",
      icon: <Edit size={12} />,
      navLink: "/courses/addNewCourse",
    },
  ],
  },

  {
    id: "news",
    title: "اخبار",
    icon: <List size={20} />,
    navLink: "/news",
    children: [{
      id: "newsList",
      title: "لیست اخبار",
      icon: <List size={12} />,
      navLink: "/news/newsList",
    },
    {
      id: "addNews",
      title: "ایجاد خبر جدید",
      icon: <List size={12} />,
      navLink: "/news/addNews",
    },
    {
      id: "newsGroup",
      title: "لیست دسته بندی",
      icon: <List size={12} />,
      navLink: "/news/newsGroup",
    },
  ],
  },
];
