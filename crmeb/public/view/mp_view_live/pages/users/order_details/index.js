(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/order_details/index"],{2444:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("7513"),o=n("3334"),s=n("7e2a"),r=(d(n("7d7f")),n("182f")),a=n("26cb"),c=d(n("db1b")),u=n("2f6a");function d(t){return t&&t.__esModule?t:{default:t}}var f=function(){Promise.all([n.e("common/vendor"),n.e("components/home/index")]).then(function(){return resolve(n("d32b"))}.bind(null,n)).catch(n.oe)},l=function(){n.e("components/payment/index").then(function(){return resolve(n("9ed0"))}.bind(null,n)).catch(n.oe)},h=function(){n.e("components/orderGoods/index").then(function(){return resolve(n("6a25"))}.bind(null,n)).catch(n.oe)},p=function(){n.e("components/Authorize").then(function(){return resolve(n("65d8"))}.bind(null,n)).catch(n.oe)},_=function(){n.e("components/invoicePicker/index").then(function(){return resolve(n("26c5"))}.bind(null,n)).catch(n.oe)},v=function(){n.e("components/invoiceModal/index").then(function(){return resolve(n("b2ca"))}.bind(null,n)).catch(n.oe)},m={components:{payment:l,home:f,invoicePicker:_,invoiceModal:v,orderGoods:h,authorize:p},mixins:[c.default],data:function(){return{order_id:"",evaluate:0,cartInfo:[],pid:0,split:[],orderInfo:{system_store:{},_status:{}},system_store:{},isGoodsReturn:!1,status:{},refund_close:!1,isClose:!1,payMode:[{name:"微信支付",icon:"icon-weixinzhifu",value:"weixin",title:"使用微信快捷支付",payStatus:!0},{name:"余额支付",icon:"icon-yuezhifu",value:"yue",title:"当前可用余额：",number:0,payStatus:!0}],pay_close:!1,pay_order_id:"",totalPrice:"0",isAuto:!1,isShowAuth:!1,routineContact:0,express_num:"",invoice_func:!1,invoiceData:null,invoice_id:0,invChecked:"",moreBtn:!1,invShow:!1,aleartStatus:!1,special_invoice:!1,invList:[],virtual_type:0}},computed:(0,a.mapGetters)(["isLogin"]),onLoad:function(t){t.order_id&&this.$set(this,"order_id",t.order_id),t.invoice_id&&(this.invoice_id=t.invoice_id)},onShow:function(){this.isLogin?(this.getOrderInfo(),this.getUserInfo()):(0,r.toLogin)()},onHide:function(){this.isClose=!0},onReady:function(){},methods:{refundInput:function(){this.refund_close=!0},refundSubmit:function(){var t=this;if(!this.express_num.trim())return this.$util.Tips({title:"请输入物流单号"});(0,i.refundExpress)({express_id:this.express_num,id:this.orderInfo.id}).then((function(e){t.$util.Tips({title:"操作成功",icon:"success"},(function(){t.refund_close=!1,t.getOrderInfo()}))})).catch((function(e){t.$util.Tips({title:e})}))},goGoodCall:function(){var t=this;(0,u.getCustomer)("/pages/customer_list/chat?orderId=".concat(t.order_id))},openSubcribe:function(e){var n=e;t.showLoading({title:"正在加载"}),(0,o.openOrderRefundSubscribe)().then((function(e){t.hideLoading(),t.navigateTo({url:n})})).catch((function(e){t.hideLoading()}))},onChangeFun:function(t){var e=t,n=e.action||null,i=void 0!=e.value?e.value:null;n&&this[n]&&this[n](i)},makePhone:function(){t.makePhoneCall({phoneNumber:this.system_store.phone})},showMaoLocation:function(){if(!this.system_store.latitude||!this.system_store.longitude)return this.$util.Tips({title:"缺少经纬度信息无法查看地图！"});t.openLocation({latitude:parseFloat(this.system_store.latitude),longitude:parseFloat(this.system_store.longitude),scale:8,name:this.system_store.name,address:this.system_store.address+this.system_store.detailed_address,success:function(){}})},payClose:function(){this.pay_close=!1},pay_open:function(){this.pay_close=!0,this.pay_order_id=this.orderInfo.order_id,this.totalPrice=this.orderInfo.pay_price},pay_complete:function(){this.pay_close=!1,this.pay_order_id="",t.navigateTo({url:"/pages/order_pay_status/index?order_id="+this.orderInfo.order_id+"&msg=支付成功&type=3&totalPrice="+this.totalPrice}),this.getOrderInfo()},pay_fail:function(){this.pay_close=!1,this.pay_order_id=""},onLoadFun:function(){this.getOrderInfo(),this.getUserInfo()},getUserInfo:function(){var t=this;(0,s.getUserInfo)().then((function(e){t.payMode[1].number=e.data.now_money,t.$set(t,"payMode",t.payMode)}))},getOrderInfo:function(){var e=this,n=this;t.showLoading({title:"正在加载中"}),(0,i.getOrderDetail)(this.order_id).then((function(i){var o=i.data._status._type;t.hideLoading(),n.$set(n,"orderInfo",i.data),n.$set(n,"cartInfo",i.data.cartInfo),n.$set(n,"pid",i.data.pid),n.$set(n,"split",i.data.split),n.$set(n,"evaluate",3==o?3:0),n.$set(n,"system_store",i.data.system_store),n.$set(n,"invoiceData",i.data.invoice),n.$set(n,"invoice_func",i.data.invoice_func),n.$set(n,"special_invoice",i.data.special_invoice),n.$set(n,"virtual_type",i.data.virtual_type),n.$set(n,"routineContact",Number(i.data.routine_contact_type)),0!=e.orderInfo.refund_status&&3!=e.orderInfo.refund_status&&(e.isGoodsReturn=!0),n.invoice_id&&!n.invoiceData&&(n.invChecked=n.invoice_id||"",e.invoiceApply()),n.payMode.map((function(t){"weixin"==t.value&&(t.payStatus=!!i.data.pay_weixin_open),"alipay"==t.value&&(t.payStatus=!!i.data.ali_pay_status),"yue"==t.value&&(t.payStatus=1==i.data.yue_pay_status)})),n.getOrderStatus()})).catch((function(e){t.hideLoading(),n.$util.Tips({title:e},"/pages/users/order_list/index")}))},invCancel:function(){this.invChecked="",this.invTitle="不开发票",this.invShow=!1},invSub:function(e){var n=this;this.invChecked=e;var i={order_id:this.order_id,invoice_id:this.invChecked};(0,s.makeUpinvoice)(i).then((function(e){t.showToast({title:"申请成功",icon:"success"}),n.invShow=!1,n.aleartStatus=!0,n.getOrderInfo()})).catch((function(e){t.showToast({title:e,icon:"none"})}))},invClose:function(){this.invShow=!1,this.getInvoiceList()},invoiceApply:function(){this.getInvoiceList(),this.moreBtn=!1,this.invShow=!0},aleartStatusChange:function(){this.moreBtn=!1,this.aleartStatus=!0},getInvoiceList:function(){var e=this;t.showLoading({title:"正在加载…"}),(0,s.invoiceList)().then((function(n){t.hideLoading(),e.invList=n.data.map((function(t){return t.id=t.id.toString(),t}));var i=e.invList.find((function(t){return t.id==e.invChecked}));if(i){var o="";o+=1===i.header_type?"个人":"企业",o+=1===i.type?"普通":"专用",o+="发票",e.invTitle=o}})).catch((function(e){t.showToast({title:e,icon:"none"})}))},more:function(){this.moreBtn=!this.moreBtn},copy:function(){t.setClipboardData({data:this.orderInfo.order_id})},copyAddress:function(){t.setClipboardData({data:this.orderInfo._status.refund_name+this.orderInfo._status.refund_phone+this.orderInfo._status.refund_address,success:function(){t.Tips({title:"复制成功",icon:"success"})}})},goTel:function(){t.makePhoneCall({phoneNumber:this.orderInfo.delivery_id})},getOrderStatus:function(){var t=this.orderInfo||{},e=t._status||{_type:0},n={},i=parseInt(e._type),o=t.delivery_type,s=t.seckill_id?parseInt(t.seckill_id):0,r=t.bargain_id?parseInt(t.bargain_id):0,a=t.discount_id?parseInt(t.discount_id):0,c=t.combination_id?parseInt(t.combination_id):0;n={type:9==i?-9:i,class_status:0},1==i&&c>0&&(n.class_status=1),2==i&&"express"==o&&(n.class_status=2),2==i&&(n.class_status=3),4!=i&&0!=i||(n.class_status=4),s||r||c||a||3!=i&&4!=i||(n.class_status=5),this.$set(this,"status",n)},goJoinPink:function(){t.navigateTo({url:"/pages/activity/goods_combination_status/index?id="+this.orderInfo.pink_id})},goOrderConfirm:function(){var e=this;(0,i.orderAgain)(e.orderInfo.order_id).then((function(e){return t.navigateTo({url:"/pages/users/order_confirm/index?new=1&cartId="+e.data.cateId})})).catch((function(t){return e.$util.Tips({title:t})}))},confirmOrder:function(e){var n=this;t.showModal({title:"确认收货",content:"为保障权益，请收到货确认无误后，再确认收货",success:function(t){t.confirm&&(0,i.orderTake)(e||n.order_id).then((function(t){return n.$util.Tips({title:"操作成功",icon:"success"},(function(){n.getOrderInfo()}))})).catch((function(t){return n.$util.Tips({title:t})}))}})},delOrder:function(){var e=this;t.showModal({title:"删除订单",content:"确定删除该订单",success:function(t){if(t.confirm)(0,i.orderDel)(e.order_id).then((function(t){return-2==e.status.type?e.$util.Tips({title:"删除成功",icon:"success"},{tab:5,url:"/pages/users/user_return_list/index"}):e.$util.Tips({title:"删除成功",icon:"success"},{tab:5,url:"/pages/users/order_list/index"})})).catch((function(t){return e.$util.Tips({title:t})}));else if(t.cancel)return e.$util.Tips({title:"已取消"})}})},cancelOrder:function(){var e=this;t.showModal({title:"提示",content:"确认取消该订单?",success:function(t){t.confirm?(0,i.orderCancel)(e.orderInfo.order_id).then((function(t){e.$util.Tips({title:t.msg},{tab:3})})).catch((function(){e.getDetail()})):t.cancel}})}}};e.default=m}).call(this,n("543d")["default"])},"3d95":function(t,e,n){"use strict";(function(t){n("4acb");i(n("66fd"));var e=i(n("d708"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"6ff9":function(t,e,n){"use strict";n.r(e);var i=n("2444"),o=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=o.a},b79c:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=(t._self._c,(parseFloat(t.orderInfo.total_price)+parseFloat(t.orderInfo.vip_true_price)).toFixed(2)),i=t.orderInfo.pay_postage>0?parseFloat(t.orderInfo.pay_postage).toFixed(2):null,o=t.orderInfo.coupon_id?parseFloat(t.orderInfo.coupon_price).toFixed(2):null,s=t.orderInfo.use_integral>0?parseFloat(t.orderInfo.deduction_price).toFixed(2):null,r=parseFloat(t.orderInfo.pay_price).toFixed(2),a=(0==t.isGoodsReturn||9==t.status.type||t.orderInfo.refund_type||t.orderInfo.is_apply_refund)&&0!=t.status.type?[0,3].includes(t.orderInfo.refund_status):null;t._isMounted||(t.e0=function(e){t.refund_close=!1},t.e1=function(e){t.refund_close=!1},t.e2=function(e){t.aleartStatus=!1},t.e3=function(e){t.aleartStatus=!1},t.e4=function(e){t.moreBtn=!1}),t.$mp.data=Object.assign({},{$root:{g0:n,g1:i,g2:o,g3:s,g4:r,g5:a}})},s=[]},b84f:function(t,e,n){"use strict";var i=n("f4c9"),o=n.n(i);o.a},bdae:function(t,e,n){},bffa:function(t,e,n){},d1b5:function(t,e,n){"use strict";var i=n("bffa"),o=n.n(i);o.a},d708:function(t,e,n){"use strict";n.r(e);var i=n("b79c"),o=n("6ff9");for(var s in o)"default"!==s&&function(t){n.d(e,t,(function(){return o[t]}))}(s);n("ecf6"),n("d1b5"),n("b84f");var r,a=n("f0c5"),c=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,"3fdcf88d",null,!1,i["a"],r);e["default"]=c.exports},ecf6:function(t,e,n){"use strict";var i=n("bdae"),o=n.n(i);o.a},f4c9:function(t,e,n){}},[["3d95","common/runtime","common/vendor"]]]);