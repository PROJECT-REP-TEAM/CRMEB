(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/recommend/index"],{"18d1":function(t,n,e){"use strict";e.r(n);var u=e("2c6a"),a=e.n(u);for(var r in u)"default"!==r&&function(t){e.d(n,t,(function(){return u[t]}))}(r);n["default"]=a.a},"2c6a":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=e("26cb"),a=e("2344"),r=o(e("db1b"));function o(t){return t&&t.__esModule?t:{default:t}}var c={computed:(0,u.mapGetters)(["uid"]),props:{hostProduct:{type:Array,default:function(){return[]}}},mixins:[r.default],data:function(){return{}},methods:{goDetail:function(n){(0,a.goShopDetail)(n,this.uid).then((function(e){t.navigateTo({url:"/pages/goods_details/index?id=".concat(n.id)})}))}}};n.default=c}).call(this,e("543d")["default"])},"440f":function(t,n,e){"use strict";var u;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return u}));var a=function(){var t=this,n=t.$createElement;t._self._c},r=[]},5272:function(t,n,e){"use strict";var u=e("f861"),a=e.n(u);a.a},9894:function(t,n,e){"use strict";e.r(n);var u=e("440f"),a=e("18d1");for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);e("5272");var o,c=e("f0c5"),i=Object(c["a"])(a["default"],u["b"],u["c"],!1,null,"628ebb5a",null,!1,u["a"],o);n["default"]=i.exports},f861:function(t,n,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/recommend/index-create-component',
    {
        'components/recommend/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("9894"))
        })
    },
    [['components/recommend/index-create-component']]
]);
