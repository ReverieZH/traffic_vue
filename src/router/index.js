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
import Read from "@/views/vechiles/checkout/Read";
import ApplyCheckInfo from "@/views/vechiles/checkout/ApplyCheckInfo";
import ChooseDate from "@/views/vechiles/checkout/ChooseDate";
import ChooseCheckStation from "@/views/vechiles/checkout/ChooseCheckStation";
import ConfirmApplyCheck from "@/views/vechiles/checkout/ConfirmApplyCheck";
import ChooseTimePeriods from "@/views/vechiles/checkout/ChooseTimePeriods";
import CompleteReserve from "@/views/vechiles/checkout/CompleteReserve";
import UserCheck from "@/views/vechiles/checkout/UserCheck";
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
        component: trafficService,
    },{
        path: '/loginHome',
        component: loginHome,
        children:[
            {
                path:'vs',
                component:VechilesService
            },
            {
                path:'dl',
                component:DrivingLicenseService
            },
            {
                path: 'cpn',
                component: choosePlateNumber,
            },
            {
                path: 'baseInfo',
                component: BaseInfo,
            },
            {
                path: 'inputInfo',
                component: InputPlateNumber
            },
            {
                path: 'applyStatus',
                component: ApplyStatus
            },{
                path: 'choosedNumber',
                component: choosedPlateNumber
            },
            {
                path: 'userApply',
                component: UserApply
            },
            {
                path: 'applyCheck/read',
                component: Read
            },
            {
                path: 'applyCheck/baseInfo',
                component:ApplyCheckInfo
            },{
                path: 'applyCheck/chooseDate',
                component: ChooseDate
            },
            {
                path: "applyCheck/chooseStation",
                component: ChooseCheckStation,
            },
            {
                path: "applyCheck/choosePeriods",
                component: ChooseTimePeriods,
            },
            {
                path: "applyCheck/confirm",
                component: ConfirmApplyCheck,
            },
            {
                path: "applyCheck/complete",
                component: CompleteReserve,
            },
            {
                path: "applyCheck/userCheck",
                component: UserCheck,
            }
        ]
    }
]

const router =new VueRouter({
    routes,
    mode:'history'
})

export default router
