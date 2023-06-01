import Home from "../pages/Home.vue";
import Test from "../pages/Test.vue";
import Test1 from "../pages/Test1.vue";
import Test2 from "../pages/Test2.vue";

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
            },
            {
                path: "/test1",
                name: "Test1",
                component: Test1
            },
            {
                path: "/test2",
                name: "Test2",
                component: Test2
            }
        ]
    },
]

export default routes;
