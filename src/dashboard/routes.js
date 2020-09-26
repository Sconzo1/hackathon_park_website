// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import ClearAllIcon from '@material-ui/icons/ClearAll';
import EventRoundedIcon from '@material-ui/icons/EventRounded';
// core components/layouts for Main layout
import DashboardPage from "dashboard/layouts/Home.js";
import UserProfile from "dashboard/layouts/UserProfile.js";
import Workers from "dashboard/layouts/Workers.js";
import Maps from "dashboard/layouts/Maps.js";
import NotificationsPage from "dashboard/layouts/Notifications.js";
import Attractions from "./layouts/Attractions";

const dashboardRoutes = [
    {
        path: "/home",
        name: "Главная",
        icon: Dashboard,
        component: DashboardPage,
        layout: "/admin"
    },
    {
        path: "/attractions",
        name: "Аттракционы",
        icon: ClearAllIcon,
        component: Attractions,
        layout: "/admin"
    },
    {
        path: "/user",
        name: "Профиль",
        icon: Person,
        component: UserProfile,
        layout: "/admin"
    },
    {
        path: "/events",
        name: "Мероприятия",
        icon: EventRoundedIcon,
        component: Workers,
        layout: "/admin"
    },
    {
        path: "/table",
        name: "Работники",
        icon: SupervisorAccountIcon,
        component: Workers,
        layout: "/admin"
    },
    {
        path: "/maps",
        name: "Карта",
        icon: LocationOn,
        component: Maps,
        layout: "/admin"
    },
    {
        path: "/notifications",
        name: "Уведомления",
        icon: Notifications,
        component: NotificationsPage,
        layout: "/admin"
    },
];

export default dashboardRoutes;
