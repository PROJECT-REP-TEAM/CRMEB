(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/components/menus"],{"741e":function(t,n,e){"use strict";e.r(n);var a=e("e424"),i=e("a1d1");for(var u in i)"default"!==u&&function(t){e.d(n,t,(function(){return i[t]}))}(u);e("ffa1");var o,r=e("f0c5"),c=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);n["default"]=c.exports},"813b":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e("2344"),i=getApp(),u={name:"menus",props:{dataConfig:{type:Object,default:function(){}}},watch:{dataConfig:{immediate:!0,handler:function(t,n){t&&(this.menus=t.imgList.list,this.isShow=t.isShow.val)}}},data:function(){return{menus:[],name:this.$options.name,isIframe:!1,isShow:!0}},created:function(){this.isIframe=i.globalData.isIframe},mounted:function(){},methods:{menusTap:function(n){(0,a.goPage)().then((function(e){-1!=n.indexOf("http")||(-1==["/pages/goods_cate/goods_cate","/pages/order_addcart/order_addcart","/pages/user/index"].indexOf(n)?t.navigateTo({url:n}):t.switchTab({url:n}))}))}}};n.default=u}).call(this,e("543d")["default"])},a1d1:function(t,n,e){"use strict";e.r(n);var a=e("813b"),i=e.n(a);for(var u in a)"default"!==u&&function(t){e.d(n,t,(function(){return a[t]}))}(u);n["default"]=i.a},ce08:function(t,n,e){},e424:function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return a}));var i=function(){var t=this,n=t.$createElement;t._self._c},u=[]},ffa1:function(t,n,e){"use strict";var a=e("ce08"),i=e.n(a);i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/components/menus-create-component',
    {
        'pages/index/components/menus-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("741e"))
        })
    },
    [['pages/index/components/menus-create-component']]
]);
