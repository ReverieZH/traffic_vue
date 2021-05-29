import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import trafficService from "@/views/trafficService";
import loginHome from "@/views/loginHome";
import VechilesService from "@/views/vechiles/VechilesService";
import DrivingLicenseService from "@/views/drivingLicense/DrivingLicenseService";
import choosePlateNumber from "@/views/vechiles/plateNumber/choosePlateNumber";
import BaseInfo from "@/views/vechiles/plateNumber/BaseInfo";
import InputPlateNumber from "@/views/vechiles/plateNumber/InputPlateNumber";
import ApplyStatus from "@/views/vechiles/plateNumber/ApplyStatus";
import choosedPlateNumber from "@/views/vechiles/plateNumber/choosedPlateNumber";
import UserApply from "@/views/vechiles/plateNumber/UserApply";
import CheckOutRead from "@/views/vechiles/checkout/CheckOutRead";

import ApplyCheckInfo from "@/views/vechiles/checkout/ApplyCheckInfo";
import ChooseDate from "@/views/vechiles/checkout/ChooseDate";
import ChooseCheckStation from "@/views/vechiles/checkout/ChooseCheckStation";
import ConfirmApplyCheck from "@/views/vechiles/checkout/ConfirmApplyCheck";
import ChooseTimePeriods from "@/views/vechiles/checkout/ChooseTimePeriods";
import CompleteReserve from "@/views/vechiles/checkout/CompleteReserve";
import UserCheck from "@/views/vechiles/checkout/UserCheck";
import UploadImage from "@/views/vechiles/exemptCheck/UploadImage";
import ExemptRead from "@/views/vechiles/exemptCheck/ExemptRead";
import ExemptCheckInfo from "@/views/vechiles/exemptCheck/ExemptCheckInfo";
import ChoosePost from "@/views/vechiles/exemptCheck/ChoosePost";
import UserExemptCheck from "@/views/vechiles/exemptCheck/UserExemptCheck";
import ViewApplyInfo from "@/views/vechiles/exemptCheck/ViewApplyInfo";
import DrivingLicenceBind from "@/views/drivingLicense/bind/DrivingLicenceBind";
import DrivingLicenceInfo from "@/views/drivingLicense/info/DrivingLicenceInfo";
import IllegalProcessService from "@/views/IllegalProcess/IllegalProcessService";
import VechileBind from "@/views/vechiles/bind/VechileBind";
import MonitorProcess from "@/views/IllegalProcess/monitorProcess/MonitorProcess";
import IllegalList from "@/views/IllegalProcess/monitorProcess/IllegalList";
import IllegalProcessRead from "@/views/IllegalProcess/monitorProcess/IllegalProcessRead";
import IllegalInfo from "@/views/IllegalProcess/monitorProcess/IllegalInfo";
import Login from "@/views/login/Login";
import Test from "@/Test";
import HomeTrafficService from "@/views/HomeTrafficService";
import Register from "@/views/login/Register";
import ChangeRead from "@/views/drivingLicense/change/ChangeRead";
import UserDeclare from "@/views/drivingLicense/change/UserDeclare";
import ConfirmInfo from "@/views/drivingLicense/change/ConfirmInfo";
import ChangeChoosePost from "@/views/drivingLicense/change/ChangeChoosePost";
import ViewChangeApply from "@/views/drivingLicense/change/ViewChangeApply";
import ListViewApplyInfo from "@/views/vechiles/exemptCheck/ListViewApplyInfo";
/*

const Home =() => import('../views/home/Home')
const Cart =() => import('../views/cart/Cart')
const Category =() => import('../views/category/Category')
const Profile =() => import('../views/profile/Profile')
*/


//安装插件
Vue.use(VueRouter)


const routes=[
    {
      path: '',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home
    },
    {
        path: '/service',
        component: HomeTrafficService,
    },{
        path: '/loginHome',
        component: loginHome,
        children:[
            {
                path:'vs',
                component:VechilesService,
                meta: {
                    requireAuth: true
                },
            },
            {
                path:'dl',
                component:DrivingLicenseService,
                meta: {
                    requireAuth: true
                },
            },
            {
                path: 'cpn',
                component: choosePlateNumber,
                meta: {
                    requireAuth: true
                },
            },
            {
                path: 'baseInfo',
                component: BaseInfo,
                meta: {
                    requireAuth: true
                },
            },
            {
                path: 'inputInfo',
                component: InputPlateNumber,
                meta: {
                    requireAuth: true
                },
            },
            {
                path: 'applyStatus',
                component: ApplyStatus,
                meta: {
                    requireAuth: true
                },
            },{
                path: 'choosedNumber',
                component: choosedPlateNumber,
                meta: {
                    requireAuth: true
                },
            },
            {
                path: 'userApply',
                component: UserApply,
                meta: {
                    requireAuth: true
                },
            },
            {
                path: 'applyCheck/read',
                component: CheckOutRead,
                meta: {
                    requireAuth: true
                },
            },
            {
                path: 'applyCheck/baseInfo',
                component:ApplyCheckInfo,
                meta: {
                    requireAuth: true
                },
            },{
                path: 'applyCheck/chooseDate',
                component: ChooseDate,
                meta: {
                    requireAuth: true
                },
            },
            {
                path: "applyCheck/chooseStation",
                component: ChooseCheckStation,
                meta: {
                    requireAuth: true
                },
            },
            {
                path: "applyCheck/choosePeriods",
                component: ChooseTimePeriods,
                meta: {
                    requireAuth: true
                },
            },
            {
                path: "applyCheck/confirm",
                component: ConfirmApplyCheck,
                meta: {
                    requireAuth: true
                },
            },
            {
                path: "applyCheck/complete",
                component: CompleteReserve,
                meta: {
                    requireAuth: true
                },
            },
            {
                path: "applyCheck/userCheck",
                component: UserCheck,
                meta: {
                    requireAuth: true
                },
            },
            {
                path: 'exemptCheck/read',
                component: ExemptRead,
                meta: {
                    requireAuth: true
                },
            },
            {
                path: "exemptCheck/info",
                component: ExemptCheckInfo,
                meta: {
                    requireAuth: true
                },
            },
            {
                path: "exemptCheck/choosePost",
                component: ChoosePost,
                meta: {
                    requireAuth: true
                },
            },
            {
                path: "exemptCheck/userApply",
                component: UserExemptCheck,
                meta: {
                    requireAuth: true
                },
            },
            {
                path: "exemptCheck/listview",
                component: ListViewApplyInfo,
                meta: {
                    requireAuth: true
                },
            },
            {
                path: "exemptCheck/viewInfo",
                component: ViewApplyInfo,
                meta: {
                    requireAuth: true
                },
            },
            {
                path:"drivingLicence/bind",
                component: DrivingLicenceBind,
                meta: {
                    requireAuth: true
                },
            },
            {
                path:"drivingLicence/info",
                component: DrivingLicenceInfo,
                meta: {
                    requireAuth: true
                },
            },
            {
                path:"ips",
                component: IllegalProcessService,
                meta: {
                    requireAuth: true
                },
            },
            {
                path:"vehicle/bind",
                component: VechileBind,
                meta: {
                    requireAuth: true
                },
            },
            {
                path:"illegal/process",
                component: MonitorProcess,
                meta: {
                    requireAuth: true
                },
            },
            {
                path: "illegal/read",
                component: IllegalProcessRead,
                meta: {
                    requireAuth: true
                },
            },
            {
                path:"illegal/list",
                component: IllegalList,
                meta: {
                    requireAuth: true
                },
            },
            {
                path:"illegal/illegalInfo",
                component: IllegalInfo,
                meta: {
                    requireAuth: true
                },
            },
            {
               path:"change/read",
                component: ChangeRead,
                meta: {
                    requireAuth: true
                },
            },
            {
                path:"change/declare",
                component: UserDeclare,
                meta: {
                    requireAuth: true
                },
            },
            {
                path:"change/confirm",
                component: ConfirmInfo,
                meta: {
                    requireAuth: true
                },
            },
            {
                path:"change/post",
                component: ChangeChoosePost,
                meta: {
                    requireAuth: true
                },
            },
            {
                path:"change/viewChange",
                component: ViewChangeApply,
                meta: {
                    requireAuth: true
                },
            },
        ],
        meta: {
            requireAuth: true
        },
    },
    {
    path: '/img',
        component: UploadImage
    },
    {
        path:'/login',
        component: Login
    },
    {
        path:'/register',
        component: Register
    },


]

const router =new VueRouter({
    routes,
    mode:'history'
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(res => res.meta.requireAuth)) {// 判断是否需要登录权限
        if (sessionStorage.getItem('username')) {// 判断是否登录
            next()
        } else {// 没登录则跳转到登录界面
            next({
                path: '/login',
                // query: {redirect: to.fullPath}
            })
        }
    } else {
        next()
    }
})

export default router
