import {
    Homepage,
    WatchProductPage1,
    WatchProductPage2,
    NeckBand,
    Getintouch,
    TermsAndConditions,
    CommingSoon,
    FAQPage,
} from '../components/pages'

export const Routes = [
    {
        path: "/",
        title: "/home",
        exact: true,
        component: () => <Homepage />,
    },
    {
        path: "/watchproduct1",
        title: "/watchproduct1",
        exact: true,
        component: () => <WatchProductPage1 />,
    },
    {
        path: "/watchproduct2",
        title: "/watchproduct2",
        exact: true,
        component: () => <WatchProductPage2 />,
    },
    {
        path: "/neckband",
        title: "/neckband",
        exact: true,
        component: () => <NeckBand />,
    },
    {
        path: "/getintouch",
        title: "/getintouch",
        exact: true,
        component: () => <Getintouch />,
    },
    {
        path: "/termsandconditions",
        title: "/termsandconditions",
        exact: true,
        component: () => <TermsAndConditions />,
    },
    {
        path: "/faqs",
        title: "/faqs",
        exact: true,
        component: () => <FAQPage />,
    },
    {
        path: "/commingsoon",
        title: "/commingsoon",
        exact: true,
        component: () => <CommingSoon />,
    },


]