(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/customer_list/index"],{"04e4":function(t,n,e){},"351a":function(t,n,e){"use strict";e.r(n);var o=e("4888"),r=e.n(o);for(var u in o)"default"!==u&&function(t){e.d(n,t,(function(){return o[t]}))}(u);n["default"]=r.a},4888:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e("3023"),r=function(){Promise.all([e.e("common/vendor"),e.e("components/home/index")]).then(function(){return resolve(e("1f5f"))}.bind(null,e)).catch(e.oe)},u={name:"CustomerList",components:{home:r},data:function(){return{list:[],productId:0,orderId:""}},methods:{getList:function(){var t=this;(0,o.serviceList)().then((function(n){t.list=n.data}))},goPage:function(n){t.navigateTo({url:"/pages/customer_list/chat?uid="+n.uid+"&productId="+this.productId+"&orderId="+this.orderId})}},onLoad:function(t){this.getList(),t.productId&&(this.productId=t.productId),t.orderId&&(this.orderId=t.orderId)}};n.default=u}).call(this,e("543d")["default"])},8484:function(t,n,e){"use strict";var o;e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return o}));var r=function(){var t=this,n=t.$createElement;t._self._c},u=[]},abb1:function(t,n,e){"use strict";(function(t){e("cdba");o(e("66fd"));var n=o(e("e018"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},ac17:function(t,n,e){"use strict";var o=e("04e4"),r=e.n(o);r.a},e018:function(t,n,e){"use strict";e.r(n);var o=e("8484"),r=e("351a");for(var u in r)"default"!==u&&function(t){e.d(n,t,(function(){return r[t]}))}(u);e("ac17");var c,i=e("f0c5"),d=Object(i["a"])(r["default"],o["b"],o["c"],!1,null,"19bbe5d7",null,!1,o["a"],c);n["default"]=d.exports}},[["abb1","common/runtime","common/vendor"]]]);