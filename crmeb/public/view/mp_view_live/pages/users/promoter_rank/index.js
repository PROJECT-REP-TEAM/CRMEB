(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/promoter_rank/index"],{"62d5":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e("7e2a"),o=e("182f"),a=e("26cb"),s=u(e("db1b"));function u(t){return t&&t.__esModule?t:{default:t}}var c=function(){e.e("components/Authorize").then(function(){return resolve(e("65d8"))}.bind(null,e)).catch(e.oe)},r=function(){Promise.all([e.e("common/vendor"),e.e("components/home/index")]).then(function(){return resolve(e("d32b"))}.bind(null,e)).catch(e.oe)},f={components:{authorize:c,home:r},mixins:[s.default],data:function(){return{navList:["周榜","月榜"],active:0,page:1,limit:10,type:"week",loading:!1,loadend:!1,rankList:[],Two:{},One:{},Three:{},isAuto:!1,isShowAuth:!1}},computed:(0,a.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,n){t&&this.getRanklist()},deep:!0}},onLoad:function(){this.isLogin?this.getRanklist():(0,o.toLogin)()},methods:{onLoadFun:function(){this.getRanklist()},authColse:function(t){this.isShowAuth=t},getRanklist:function(){var t=this;t.loadend||t.loading||(t.loading=!0,(0,i.getRankList)({page:t.page,limit:t.limit,type:t.type}).then((function(n){var e=n.data;t.rankList.push.apply(t.rankList,e),1==t.page&&(t.One=t.rankList.shift()||{},t.Two=t.rankList.shift()||{},t.Three=t.rankList.shift()||{}),t.loadend=e.length<t.limit,t.loading=!1,t.$set(t,"rankList",t.rankList),t.One=t.One,t.Two=t.Two,t.Three=t.Three,t.page=t.page+1})).catch((function(n){t.loading=!1})))},switchTap:function(t){this.active!==t&&(this.active=t,this.type=t?"month":"week",this.page=1,this.loadend=!1,this.$set(this,"rankList",[]),this.Two={},this.One={},this.Three={},this.getRanklist())}},onReachBottom:function(){this.getRanklist()}};n.default=f},"870f":function(t,n,e){"use strict";e.r(n);var i=e("beb2"),o=e("fc29");for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);e("fcd7");var s,u=e("f0c5"),c=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,"ca82275c",null,!1,i["a"],s);n["default"]=c.exports},beb2:function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}));var o=function(){var t=this,n=t.$createElement;t._self._c},a=[]},f458:function(t,n,e){"use strict";(function(t){e("4acb");i(e("66fd"));var n=i(e("870f"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},fc29:function(t,n,e){"use strict";e.r(n);var i=e("62d5"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=o.a},fc5f:function(t,n,e){},fcd7:function(t,n,e){"use strict";var i=e("fc5f"),o=e.n(i);o.a}},[["f458","common/runtime","common/vendor"]]]);