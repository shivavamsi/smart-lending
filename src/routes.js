// 1. Define route components.
import Home from "./components/pages/Home.vue";
import ApplyMain from "./components/pages/ApplyPage/ApplyMain.vue";
import Application from "./components/pages/ApplyPage/Application.vue";
import FAQ from "./components/pages/FAQ.vue";
import Contact from "./components/pages/Contact.vue";
import About from "./components/pages/About.vue";
import ViewReviews from "./components/pages/ReviewsPage/ViewReviews.vue";
import CreateReview from "./components/pages/ReviewsPage/CreateReview.vue";

// 2. Define routes
export default [{
        path: '/',
        component: Home
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/apply',
        component: ApplyMain
    },
    {
        path: '/application',
        name: 'Application',
        component: Application
    },
    {
        path: '/faq',
        component: FAQ
    },
    {
        path: '/contact',
        component: Contact
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/reviews/view',
        component: ViewReviews
    },
    {
        path: '/reviews/create',
        component: CreateReview
    }
]