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
        // Admin
        route("overview", "pages/dashboard/admin/Overview.jsx"),
        route("manage_users", "pages/dashboard/admin/ManageUsers.jsx"),
        route("event_management", "pages/dashboard/admin/EventManagement.jsx"),
        route("donations", "pages/dashboard/admin/Donations.jsx"),
        route("report_and_analytics", "pages/dashboard/admin/Donations.jsx"),
        // Donor
        route("my_donations", "pages/dashboard/donor/MyDonations.jsx"),
        route("donate_now", "pages/dashboard/donor/DonateNow.jsx"),
        route("transaction_history", "pages/dashboard/donor/TransactionHistory.jsx"),
        // Volunteer
        route("available_events", "pages/dashboard/volunteer/AvailableEvents.jsx"),
        route("my_assigned_events", "pages/dashboard/volunteer/MyAssignedEvents.jsx"),
        route("progress_reports", "pages/dashboard/volunteer/ProgressReports.jsx"),
    ])

] satisfies RouteConfig;
