import Home from "../pages/Home.vue";
import Test from "../pages/Test.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        redirect: '/test',
        children: [
            {
                path: "/test",
                name: "Test",
                component: Test
            }
        ]
    },
]

export default routes;
