(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/points_mall/logistics_details"],{"2bd8":function(t,e,n){"use strict";(function(t){n("4acb");o(n("66fd"));var e=o(n("a0de"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"6fa9":function(t,e,n){"use strict";n.r(e);var o=n("e16b"),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=r.a},a0de:function(t,e,n){"use strict";n.r(e);var o=n("b3c2"),r=n("6fa9");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("c49f");var u,c=n("f0c5"),s=Object(c["a"])(r["default"],o["b"],o["c"],!1,null,"08ae9fc2",null,!1,o["a"],u);e["default"]=s.exports},b3c2:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var r=function(){var t=this,e=t.$createElement;t._self._c},i=[]},b91d:function(t,e,n){},c49f:function(t,e,n){"use strict";var o=n("b91d"),r=n.n(o);r.a},e16b:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("ac7d"),r=n("8abb"),i=(s(n("7d7f")),n("182f")),u=n("26cb"),c=s(n("db1b"));function s(t){return t&&t.__esModule?t:{default:t}}var d=function(){Promise.all([n.e("common/vendor"),n.e("components/recommend/index")]).then(function(){return resolve(n("9894"))}.bind(null,n)).catch(n.oe)},a=function(){n.e("components/Authorize").then(function(){return resolve(n("65d8"))}.bind(null,n)).catch(n.oe)},f={components:{recommend:d,authorize:a},mixins:[c.default],data:function(){return{orderId:"",product:{productInfo:{}},orderInfo:{},expressList:[],hostProduct:[]}},computed:(0,u.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,e){t&&(this.getExpress(),this.get_host_product())},deep:!0}},onLoad:function(t){if(!t.order_id)return this.$util.Tips({title:"缺少订单号"});this.orderId=t.order_id,this.isLogin?(this.getExpress(),this.get_host_product()):(0,i.toLogin)()},onReady:function(){},methods:{onLoadFun:function(){this.getExpress(),this.get_host_product()},copyOrderId:function(){t.setClipboardData({data:this.orderInfo.delivery_id})},getExpress:function(){var t=this,e=this;(0,r.getLogisticsDetails)(e.orderId).then((function(t){var n=t.data.express.result||{};e.$set(e,"orderInfo",t.data.order),e.$set(e,"expressList",n.list||[])})).catch((function(e){t.$util.Tips({title:e})}))},get_host_product:function(){var t=this;(0,o.getProductHot)().then((function(e){t.$set(t,"hostProduct",e.data)}))}}};e.default=f}).call(this,n("543d")["default"])}},[["2bd8","common/runtime","common/vendor"]]]);