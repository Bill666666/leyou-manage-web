import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

function route (path, file, name, children) {
  return {
    exact: true,
    path,
    name,
    children,
    component: () => import('../pages' + file)
  }
}

export default new Router({
  routes: [
    route("/login",'/Login',"Login"),// /login路径，路由到登录组件
    {
      path:"/", // 根路径，路由到 Layout组件
      component: () => import('../pages/Layout'),
      redirect:"/index/dashboard",
      children:[ // 其它所有组件都是 Layout的子组件
        route("/index/dashboard","/Dashboard","Dashboard"),//首页-统计

        route("/item/category",'/item/Category',"Category"),//商品管理-分类管理
        route("/item/brand",'/item/MyBrand',"MyBrand"),//商品管理-品牌管理
        route("/item/specification",'/item/specification/Specification',"Specification"),//商品管理-规格参数
        route("/item/list",'/item/Goods',"Goods"),//商品管理-商品列表

        route("/user/statistics",'/user/Statistics',"Statistics"),//会员管理-会员统计
        route("/user/management",'/user/Management',"Management"),//会员管理-会员管理

        route("/trade/promotion",'/trade/Promotion',"Promotion"),//销售管理-促销管理
        route("/trade/trade",'/trade/Trade',"Trade"),//销售管理-交易统计
        route("/trade/order",'/trade/Order',"Order"),//销售管理-订单管理
        route("/trade/logistics",'/trade/Logistics',"Logistics"),//销售管理-物流管理

        route("/auth/auth",'/auth/Auth',"Auth"),//权限管理-权限管理
        route("/auth/role",'/auth/Role',"Role"),//权限管理-角色管理
        route("/auth/member",'/auth/Member',"Member")//权限管理-人员管理
      ]
    }
  ]
})
