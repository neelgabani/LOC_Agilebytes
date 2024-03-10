// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
    linking:"/"
  },
  {
    icon: UilClipboardAlt,
    heading: "Notes",
    linking:"/"
  },
  {
    icon: UilUsersAlt,
    heading: "Student Grps",
    linking:"/"
  },
  {
    icon: UilPackage,
    heading: 'Video Conferencing',
    linking:'/video'
  },
  {
    icon: UilChart,
    heading: 'Progress',
    linking:'/'
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Machine Learning",
    color: {
      backGround: "black", // Grey color
      // boxShadow: "0px 10px 20px 0px #CCCCCC", // Same grey color for boxShadow
    },
    
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },

  {
    title: "Design",
    color: {
      backGround: "black",
      // boxShadow: "0px 10px 20px 0px #CCCCCC",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },

  {
    title: "Finance",
    color: {
      backGround:
        "black",
      // boxShadow: "0px 10px 20px 0px #CCCCCC",
    },
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "has joined the Machine Learning student group.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "Isha Mistry",
    noti: "has joined the Design study group.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Pammi",
    noti: "has joined the Finance study group.",
    time: "2 hours ago",
  },
];
