(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/user_get_coupon/index"],{4288:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e("0075"),i=e("8061"),u=e("26cb"),s=a(e("5a44"));function a(t){return t&&t.__esModule?t:{default:t}}var c=function(){e.e("components/Authorize").then(function(){return resolve(e("45d8"))}.bind(null,e)).catch(e.oe)},r=function(){Promise.all([e.e("common/vendor"),e.e("components/home/index")]).then(function(){return resolve(e("afe9"))}.bind(null,e)).catch(e.oe)},l={components:{authorize:c,home:r},mixins:[s.default],data:function(){return{couponsList:[],loading:!1,loadend:!1,loadTitle:"加载更多",page:1,limit:20,isAuto:!1,isShowAuth:!1,type:0,navList:[{type:0,name:"通用券",count:0},{type:1,name:"品类券",count:0},{type:2,name:"商品券",count:0}],count:0}},computed:(0,u.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,n){t&&this.getUseCoupons()},deep:!0}},onLoad:function(){this.isLogin||(0,i.toLogin)()},onReachBottom:function(){this.getUseCoupons()},methods:{onLoadFun:function(){this.getUseCoupons()},authColse:function(t){this.isShowAuth=t},getCoupon:function(t,n){var e=this,i=e.couponsList;(0,o.setCouponReceive)(t).then((function(t){i[n].is_use=!0,e.$set(e,"couponsList",i),e.$util.Tips({title:"领取成功"})})).catch((function(t){return e.$util.Tips({title:t})}))},getUseCoupons:function(){var t=this;return!this.loadend&&(!this.loading&&(t.loading=!0,t.loadTitle="加载更多",void(0,o.getCoupons)({type:t.type,page:t.page,limit:t.limit}).then((function(n){var e=n.data.list,o=e.length<t.limit,i=t.$util.SplitArray(e,t.couponsList);n.data.count.forEach((function(n,e){t.navList[e].count=n,n&&t.count++})),t.$set(t,"couponsList",i),t.loadend=o,t.loading=!1,t.loadTitle=o?"我也是有底线的":"加载更多",t.page=t.page+1})).catch((function(n){t.loading=!1,t.loadTitle="加载更多"}))))},setType:function(t){this.type!==t&&(this.type=t,this.couponsList=[],this.page=1,this.loadend=!1,this.getUseCoupons())}}};n.default=l},4329:function(t,n,e){"use strict";e.r(n);var o=e("69f0"),i=e("6d0f");for(var u in i)"default"!==u&&function(t){e.d(n,t,(function(){return i[t]}))}(u);e("efc6");var s,a=e("f0c5"),c=Object(a["a"])(i["default"],o["b"],o["c"],!1,null,"f86b31f6",null,!1,o["a"],s);n["default"]=c.exports},"69f0":function(t,n,e){"use strict";var o;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return o}));var i=function(){var t=this,n=t.$createElement;t._self._c},u=[]},"6d0f":function(t,n,e){"use strict";e.r(n);var o=e("4288"),i=e.n(o);for(var u in o)"default"!==u&&function(t){e.d(n,t,(function(){return o[t]}))}(u);n["default"]=i.a},9155:function(t,n,e){},"9da1":function(t,n,e){"use strict";(function(t){e("8b08");o(e("66fd"));var n=o(e("4329"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},efc6:function(t,n,e){"use strict";var o=e("9155"),i=e.n(o);i.a}},[["9da1","common/runtime","common/vendor"]]]);