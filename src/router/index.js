import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Test from '../components/Test'
import Shop from '../components/MasterDataManager/Shop'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/Home',
            name: 'Home page',
            component: Home,
            children: [{
                path: '1-1',
                name: '1-1',
                component: Shop
            }, {
                path: '1-2',
                name: '1-2',
                component: HelloWorld
            }, {
                path: '*',
                name: 'Test',
                component: Test
            }]
        }
    ]
})
