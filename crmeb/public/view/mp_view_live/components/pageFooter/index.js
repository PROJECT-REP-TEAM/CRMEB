(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/pageFooter/index"],{"3e11":function(t,e,n){"use strict";var r=n("712c"),a=n.n(r);a.a},"41ac":function(t,e,n){"use strict";n.r(e);var r=n("f15d"),a=n("b528");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("3e11");var i,u=n("f0c5"),c=Object(u["a"])(a["default"],r["b"],r["c"],!1,null,"27f1ce34",null,!1,r["a"],i);e["default"]=c.exports},4346:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,a=n("26cb"),o=(n("ffa8"),n("7513"));function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f=(r={name:"pageFooter",props:{noTop:{type:Boolean,default:!0},status:{type:Number|String,default:1},countNum:{type:Number|String,default:0}},computed:u({},(0,a.mapState)({configData:function(t){return t.app.pageFooter}}))},c(r,"computed",(0,a.mapGetters)(["isLogin","cartNum"])),c(r,"watch",{configData:{handler:function(e,n){var r=this,a=t.createSelectorQuery().in(this);this.newData=e,this.$nextTick((function(){a.select("#target").boundingClientRect((function(e){t.$emit("footHeight",e.height),e&&(r.footHeight=e.height+50)})).exec()}))},deep:!0},cartNum:function(e,n){this.$store.commit("indexData/setCartNum",e+""),e>0?t.setTabBarBadge({index:Number(t.getStorageSync("FOOTER_ADDCART")),text:e+""}):wx.hideTabBarRedDot({index:Number(t.getStorageSync("FOOTER_ADDCART"))})}}),c(r,"created",(function(){var t=getCurrentPages(),e=t[t.length-1].route;this.activeRouter="/"+e})),c(r,"onShow",(function(){})),c(r,"mounted",(function(){this.newData=this.$store.state.app.pageFooter,this.newData.status&&this.newData.status.status?t.hideTabBar():t.showTabBar(),this.isLogin&&this.getCartNum()})),c(r,"data",(function(){return{newData:{},activeRouter:"/",footHeight:0}})),c(r,"methods",{goRouter:function(e){var n=getCurrentPages();if(n.length)var r=n[n.length-1].$page.fullPath;else r="";e.link!=r&&t.switchTab({url:e.link,fail:function(n){t.redirectTo({url:e.link})}})},getCartNum:function(){var t=this,e=this;(0,o.getCartCounts)().then((function(n){e.cartCount=n.data.count,t.$store.commit("indexData/setCartNum",n.data.count>99?"...":n.data.count)}))}}),r);e.default=f}).call(this,n("543d")["default"])},"712c":function(t,e,n){},b528:function(t,e,n){"use strict";n.r(e);var r=n("4346"),a=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=a.a},f15d:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var a=function(){var t=this,e=t.$createElement;t._self._c},o=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/pageFooter/index-create-component',
    {
        'components/pageFooter/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("41ac"))
        })
    },
    [['components/pageFooter/index-create-component']]
]);
