/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import CGUD from "views/CGUD.jsx";
import Dashboard from "views/Dashboard.js";
import TableList from "views/TableList.js";
import UserProfile from "views/UserProfile.js";

var routes = [
  {
    path: "/statistical",
    name: "Statistical",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-bar-32",
    component: Dashboard,
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
