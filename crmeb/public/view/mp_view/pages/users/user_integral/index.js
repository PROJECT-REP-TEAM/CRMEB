(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/user_integral/index"],{4868:function(t,n,e){"use strict";(function(t){e("8b08");i(e("66fd"));var n=i(e("5d82"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"588c":function(t,n,e){"use strict";var i=e("66a0"),a=e.n(i);a.a},"5d82":function(t,n,e){"use strict";e.r(n);var i=e("e6af"),a=e("734a");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("588c");var r,u=e("f0c5"),s=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"1408f929",null,!1,i["a"],r);n["default"]=s.exports},"66a0":function(t,n,e){},"734a":function(t,n,e){"use strict";e.r(n);var i=e("a383"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},a383:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e("7b58"),a=s(e("2dcf")),o=e("8061"),r=e("26cb"),u=s(e("5a44"));function s(t){return t&&t.__esModule?t:{default:t}}var c=function(){e.e("components/Authorize").then(function(){return resolve(e("45d8"))}.bind(null,e)).catch(e.oe)},l=function(){e.e("components/emptyPage").then(function(){return resolve(e("4ccf"))}.bind(null,e)).catch(e.oe)},f={components:{authorize:c,emptyPage:l},filters:{dateFormat:function(t){return(0,a.default)(1e3*t).format("YYYY-MM-DD")}},mixins:[u.default],data:function(){return{navList:[{name:"分值明细",icon:"icon-mingxi"},{name:"分值提升",icon:"icon-tishengfenzhi"}],current:0,page:1,limit:10,integralList:[],userInfo:{},loadend:!1,loading:!1,loadTitle:"加载更多",isAuto:!1,isShowAuth:!1,isTime:0}},computed:(0,r.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,n){t&&(this.getUserInfo(),this.getIntegralList())},deep:!0}},onLoad:function(){this.isLogin?(this.getUserInfo(),this.getIntegralList()):(0,o.toLogin)()},onReachBottom:function(){this.getIntegralList()},methods:{onLoadFun:function(){this.getUserInfo(),this.getIntegralList()},authColse:function(t){this.isShowAuth=t},getUserInfo:function(){var t=this;(0,i.postSignUser)({sign:1,integral:1,all:1}).then((function(n){t.$set(t,"userInfo",n.data);var e=n.data.clear_time,i=e-1209600,a=Date.parse(new Date)/1e3;t.isTime=i<a?1:0}))},getIntegralList:function(){var t=this;t.loading||t.loadend||(t.loading=!0,t.loadTitle="",(0,i.getIntegralList)({page:t.page,limit:t.limit}).then((function(n){var e=n.data,i=e.length<t.limit;t.integralList=t.$util.SplitArray(e,t.integralList),t.$set(t,"integralList",t.integralList),t.page=t.page+1,t.loading=!1,t.loadend=i,t.loadTitle=i?"哼~😕我也是有底线的~":"加载更多"}),(function(n){this.loading=!1,t.loadTitle="加载更多"})))},nav:function(t){this.current=t}}};n.default=f},e6af:function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var a=function(){var t=this,n=t.$createElement,e=(t._self._c,t.isTime?t._f("dateFormat")(t.userInfo.clear_time):null);t.$mp.data=Object.assign({},{$root:{f0:e}})},o=[]}},[["4868","common/runtime","common/vendor"]]]);