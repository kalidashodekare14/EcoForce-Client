import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("pages/home.jsx"),
    route("about_us", "pages/about.jsx"),
    route("events", "pages/events.jsx"),
    route("donate", "pages/donate.jsx"),
    route("contact", "pages/contact.jsx"),
    route("signup", "pages/signup.jsx"),
    route("login", "pages/login.jsx"),
    route("profile", "pages/profile.jsx"),
    route("dashboard", "pages/dashboard/dashboard.jsx", [
        index("pages/dashboard/home.jsx"),
        route('my_donations', "pages/dashboard/donor/MyDonations.jsx"),
        route('donate_now', "pages/dashboard/donor/DonateNow.jsx"),
        route('transaction_history', "pages/dashboard/donor/TransactionHistory.jsx"),
    ])

] satisfies RouteConfig;
