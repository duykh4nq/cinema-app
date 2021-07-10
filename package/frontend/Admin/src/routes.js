import CGUD from "views/CGUD.js";
import Statistical from "views/Statistical.js";
import TableList from "views/TableList.js";

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
    path: "/list",
    name: "List",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-bullet-list-67",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/add",
    name: "Add",
    rtlName: "طباعة",
    icon: "tim-icons icon-pencil",
    component: CGUD,
    layout: "/admin",
  },
];
export default routes;
