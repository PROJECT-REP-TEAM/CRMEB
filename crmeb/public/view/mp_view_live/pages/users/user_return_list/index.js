(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/user_return_list/index"],{"0173":function(t,e,n){"use strict";n.r(e);var i=n("d447"),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},"6d55":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement;t._self._c},r=[]},"6dc9":function(t,e,n){},8288:function(t,e,n){"use strict";n.r(e);var i=n("6d55"),o=n("0173");for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("ac6b");var a,u=n("f0c5"),d=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,"6bbc8ed3",null,!1,i["a"],a);e["default"]=d.exports},"8c05":function(t,e,n){"use strict";(function(t){n("4acb");i(n("66fd"));var e=i(n("8288"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},ac6b:function(t,e,n){"use strict";var i=n("6dc9"),o=n.n(i);o.a},d447:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("7513"),o=n("182f"),r=n("26cb"),a=u(n("db1b"));function u(t){return t&&t.__esModule?t:{default:t}}var d=function(){Promise.all([n.e("common/vendor"),n.e("components/home/index")]).then(function(){return resolve(n("d32b"))}.bind(null,n)).catch(n.oe)},s=function(){n.e("components/emptyPage").then(function(){return resolve(n("6ede"))}.bind(null,n)).catch(n.oe)},c=function(){n.e("components/Authorize").then(function(){return resolve(n("65d8"))}.bind(null,n)).catch(n.oe)},l={components:{home:d,emptyPage:s,authorize:c},mixins:[a.default],data:function(){return{type:0,loading:!1,loadend:!1,loadTitle:"加载更多",orderList:[],orderStatus:-3,page:1,limit:20,isAuto:!1,isShowAuth:!1,tabsList:[{key:0,name:"全部"},{key:1,name:"申请中"},{key:2,name:"待退货"},{key:3,name:"退款中"},{key:4,name:"已退款"}]}},computed:(0,r.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,e){t&&this.getOrderList()},deep:!0}},onLoad:function(){this.isLogin?this.getOrderList():(0,o.toLogin)()},onReachBottom:function(){this.getOrderList()},methods:{onLoadFun:function(){this.getOrderList()},authColse:function(t){this.isShowAuth=t},goOrderDetails:function(e){if(!e)return that.$util.Tips({title:"缺少订单号无法查看订单详情"});t.navigateTo({url:"/pages/users/order_details/index?order_id="+e+"&isReturen=1"})},changeTabs:function(t){this.type=t,this.loadend=!1,this.page=1,this.limit=20,this.orderList=[],this.getOrderList(t)},getOrderList:function(e){var n=this;n.loading||n.loadend||(n.loading=!0,n.loadTitle="",t.showLoading({title:"加载中"}),(0,i.getOrderList)({type:n.orderStatus,page:n.page,limit:n.limit,refund_type:e||n.type}).then((function(e){var i=e.data||[],o=i.length<n.limit;n.orderList=n.$util.SplitArray(i,n.orderList),n.$set(n,"orderList",n.orderList),n.loadend=o,n.loading=!1,n.loadTitle=o?"我也是有底线的":"加载更多",n.page=n.page+1,t.hideLoading()})).catch((function(e){t.hideLoading(),n.loading=!1,n.loadTitle="加载更多"})))}}};e.default=l}).call(this,n("543d")["default"])}},[["8c05","common/runtime","common/vendor"]]]);