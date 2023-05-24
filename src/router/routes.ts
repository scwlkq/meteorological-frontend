const routes = [
    {
        path: "/",
        redirect:'/login'
    },

    {
        path: "/test",
        component:import("../pages/test/TestPage.vue")
    },
    {
        path: "/login",
        component:import("../pages/login/LoginPage.vue")
    }
]

export default routes;