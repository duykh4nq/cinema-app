import CGUD from "views/CGUD.js";
import Statistical from "views/Statistical.js";
import TableList from "views/TableList.js";
import UserProfile from "views/UserProfile.js";

var routes = [
  {
    path: "/statistical",
    name: "Statistical",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-bar-32",
    component: Statistical,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/list",
    name: "List",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-bullet-list-67",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/CGUD",
    name: "Thêm xoá sửa",
    rtlName: "طباعة",
    icon: "tim-icons icon-pencil",
    component: CGUD,
    layout: "/admin",
  },
];
export default routes;
