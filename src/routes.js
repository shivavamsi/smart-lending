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
        path: '/smart-lending/',
        name: 'home',
        component: Home
    },
    {
        path: '/smart-lending/apply',
        name: 'apply',
        component: ApplyMain
    },
    {
        path: '/smart-lending/application',
        name: 'application',
        component: Application
    },
    {
        path: '/smart-lending/faq',
        name: 'faq',
        component: FAQ
    },
    {
        path: '/smart-lending/contact',
        name: 'contact',
        component: Contact
    },
    {
        path: '/smart-lending/about',
        name: 'about',
        component: About
    },
    {
        path: '/smart-lending/reviews/view',
        name: 'view-reviews',
        component: ViewReviews
    },
    {
        path: '/smart-lending/reviews/create',
        name: 'create-review',
        component: CreateReview
    }
]