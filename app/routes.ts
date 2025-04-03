import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("pages/home.jsx"),
    route("about_us", "pages/about.jsx"),
    route("events", "pages/events.jsx"),
    route("donate", "pages/donate.jsx"),
    route("contact", "pages/contact.jsx"),
    route("signup", "pages/signup.jsx"),
    route("login", "pages/login.jsx"),

] satisfies RouteConfig;
