// 引入vue
import VUe from 'vue';

// 引入vue-router
import VueRouter from 'vue-router';

// 引入组件
import HeroList from '../views/heroes/List.vue';
import WeaponList from '../views/weapons/List.vue';
import EquipList from '../views/equips/List.vue';

// 引入添加英雄的组件
import Add from '../views/heroes/Add.vue';

// 注册插件
VUe.use(VueRouter);

// 创建路由对象 配置路由规则
const router = new VueRouter({
    linkExactActiveClass: 'active',
    routes:[
        // 配置跟路径
        // {name:'home', path:'/', redirect:'/heroes'},
        {name:'home', path:'/', redirect:{name:'heroes'}},

        // 路由规则
        {name:'heroes', path:'/heroes', component:HeroList},
        {name:'weapons', path:'/weapons', component:WeaponList},
        {name:'equips', path:'/equips', component:EquipList},
        {name:'heroAdd', path:'/heroes/add', component:Add}
    ]
})

// 导出
export default router;
