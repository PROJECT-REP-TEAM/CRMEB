(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order_pay_status-index"],{"4a00":function(t,i,n){"use strict";var e=n("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=e(n("a281")),o=n("331f"),s=(n("6ca5"),n("1e55")),r=n("26cb"),d=e(n("882e")),c={components:{lotteryModel:a.default},mixins:[d.default],data:function(){return{loading:!1,lotteryLoading:!1,orderLottery:!1,orderId:"",order_pay_info:{paid:1,_status:{}},isAuto:!1,isShowAuth:!1,status:0,msg:"",couponsHidden:!0,couponList:[],options:{}}},computed:(0,r.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,i){t&&this.getOrderPayInfo()},deep:!0}},onLoad:function(t){if(this.options=t,!t.order_id)return this.$util.Tips({title:"缺少参数无法查看订单支付状态"},{tab:3,url:1});this.orderId=t.order_id,this.status=t.status||0,this.msg=t.msg||""},onShow:function(){this.isLogin?this.getOrderPayInfo():(0,s.toLogin)()},methods:{getOrderLottery:function(t){this.orderLottery=t,this.lotteryLoading=!0},openTap:function(){this.$set(this,"couponsHidden",!this.couponsHidden)},onLoadFun:function(){this.getOrderPayInfo()},getOrderPayInfo:function(){var t=this,i=this;uni.showLoading({title:"正在加载中"}),(0,o.getOrderDetail)(i.orderId).then((function(n){uni.hideLoading(),i.$set(i,"order_pay_info",n.data),uni.setNavigationBarTitle({title:n.data.paid?"支付成功":"未支付"}),t.loading=!0,t.getOrderCoupon()})).catch((function(i){t.loading=!0,uni.hideLoading()}))},getOrderCoupon:function(){var t=this;(0,o.orderCoupon)(t.orderId).then((function(i){t.couponList=i.data}))},goIndex:function(t){uni.switchTab({url:"/pages/index/index"})},goPink:function(t){uni.navigateTo({url:"/pages/activity/goods_combination_status/index?id="+t})},goOrderDetails:function(t){var i=this;uni.redirectTo({url:"/pages/users/order_details/index?order_id="+i.orderId})}}};i.default=c},"5dbf":function(t,i,n){"use strict";var e=n("c918"),a=n.n(e);a.a},"8ed4":function(t,i,n){var e=n("24fb");i=e(!1),i.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.coupons .title[data-v-392014a2]{margin:%?30?% 0 %?25?% 0}.coupons .title .line[data-v-392014a2]{width:%?70?%;height:1px;background:#dcdcdc}.coupons .title .name[data-v-392014a2]{font-size:%?24?%;color:#999;margin:0 %?10?%}.coupons .list[data-v-392014a2]{padding:0 %?20?%}.coupons .list .item[data-v-392014a2]{margin-bottom:%?20?%;box-shadow:0 2px 10px 0 rgba(0,0,0,.06)}.coupons .list .item .price[data-v-392014a2]{width:%?236?%;height:%?160?%;font-size:%?26?%;color:#fff;font-weight:800}.coupons .list .item .price uni-text[data-v-392014a2]{font-size:%?54?%}.coupons .list .item .text[data-v-392014a2]{width:%?385?%}.coupons .list .item .text .name[data-v-392014a2]{font-size:#282828;font-size:%?30?%}.coupons .list .item .text .priceMin[data-v-392014a2]{font-size:%?24?%;color:#999;margin-top:%?10?%}.coupons .list .item .text .time[data-v-392014a2]{font-size:%?24?%;color:#999;margin-top:%?15?%}.coupons .list .open[data-v-392014a2]{font-size:%?24?%;color:#999;margin-top:%?30?%}.coupons .list .open .iconfont[data-v-392014a2]{font-size:%?25?%;margin:%?5?% 0 0 %?10?%}.payment-status[data-v-392014a2]{background-color:#fff;margin:%?195?% %?30?% 0 %?30?%;border-radius:%?10?%;padding:%?1?% 0 %?28?% 0}.payment-status .icons[data-v-392014a2]{font-size:%?70?%;width:%?140?%;height:%?140?%;border-radius:50%;color:#fff;text-align:center;line-height:%?140?%;text-shadow:0 4px 0 hsla(0,0%,100%,.5);border:%?6?% solid #f5f5f5;margin:%?-76?% auto 0 auto;background-color:#999}.payment-status .icons.icon-iconfontguanbi[data-v-392014a2]{text-shadow:0 4px 0 #6c6d6d}.payment-status .iconfont.fail[data-v-392014a2]{text-shadow:0 4px 0 #7a7a7a}.payment-status .status[data-v-392014a2]{font-size:%?32?%;font-weight:700;text-align:center;margin:%?25?% 0 %?37?% 0}.payment-status .wrapper[data-v-392014a2]{border:%?1?% solid #eee;margin:0 %?30?% %?47?% %?30?%;padding:%?35?% 0;border-left:0;border-right:0}.payment-status .wrapper .item[data-v-392014a2]{font-size:%?28?%;color:#282828}.payment-status .wrapper .item ~ .item[data-v-392014a2]{margin-top:%?20?%}.payment-status .wrapper .item .itemCom[data-v-392014a2]{color:#666}.payment-status .returnBnt[data-v-392014a2]{width:%?630?%;height:%?86?%;border-radius:%?50?%;color:#fff;font-size:%?30?%;text-align:center;line-height:%?86?%;margin:0 auto %?20?% auto}',""]),t.exports=i},a355:function(t,i,n){"use strict";n.r(i);var e=n("c6a5"),a=n("e71b");for(var o in a)"default"!==o&&function(t){n.d(i,t,(function(){return a[t]}))}(o);n("5dbf");var s,r=n("f0c5"),d=Object(r["a"])(a["default"],e["b"],e["c"],!1,null,"392014a2",null,!1,e["a"],s);i["default"]=d.exports},c6a5:function(t,i,n){"use strict";var e;n.d(i,"b",(function(){return a})),n.d(i,"c",(function(){return o})),n.d(i,"a",(function(){return e}));var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{style:t.colorStyle},[t.orderLottery&&t.order_pay_info.paid||!t.loading||!t.lotteryLoading?t._e():n("v-uni-view",{staticClass:"payment-status"},[t.order_pay_info.paid||"offline"==t.order_pay_info.pay_type?n("v-uni-view",{staticClass:"iconfont icons icon-duihao2 bg-color"}):n("v-uni-view",{staticClass:"iconfont icons icon-iconfontguanbi"}),"offline"!=t.order_pay_info.pay_type?n("v-uni-view",{staticClass:"status"},[t._v(t._s(t.order_pay_info.paid?"订单支付成功":"订单支付失败"))]):n("v-uni-view",{staticClass:"status"},[t._v("订单创建成功")]),n("v-uni-view",{staticClass:"wrapper"},[n("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[n("v-uni-view",[t._v("订单编号")]),n("v-uni-view",{staticClass:"itemCom"},[t._v(t._s(t.orderId))])],1),n("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[n("v-uni-view",[t._v("下单时间")]),n("v-uni-view",{staticClass:"itemCom"},[t._v(t._s(t.order_pay_info._add_time))])],1),n("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[n("v-uni-view",[t._v("支付方式")]),n("v-uni-view",{staticClass:"itemCom"},[t._v(t._s(t.order_pay_info._status._payType||"暂未支付"))])],1),n("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[n("v-uni-view",[t._v("支付金额")]),n("v-uni-view",{staticClass:"itemCom"},[t._v(t._s(t.order_pay_info.pay_price))])],1),0==t.order_pay_info.paid&&"offline"!=t.order_pay_info.pay_type?n("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[n("v-uni-view",[t._v("失败原因")]),n("v-uni-view",{staticClass:"itemCom"},[t._v(t._s(2==t.status?"取消支付":t.msg))])],1):t._e()],1),0==t.status?n("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goOrderDetails.apply(void 0,arguments)}}},[n("v-uni-button",{staticClass:"returnBnt bg-color",attrs:{formType:"submit","hover-class":"none"}},[t._v("查看订单")])],1):t._e(),0==t.order_pay_info.paid&&1==t.status?n("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goOrderDetails.apply(void 0,arguments)}}},[n("v-uni-button",{staticClass:"returnBnt bg-color",attrs:{"hover-class":"none"}},[t._v("重新购买")])],1):t._e(),0==t.order_pay_info.paid&&2==t.status?n("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goOrderDetails.apply(void 0,arguments)}}},[n("v-uni-button",{staticClass:"returnBnt bg-color",attrs:{"hover-class":"none"}},[t._v("重新支付")])],1):t._e(),t.order_pay_info.pink_id&&0!=t.order_pay_info.paid&&2!=t.status&&1!=t.status?n("v-uni-button",{staticClass:"returnBnt cart-color",attrs:{formType:"submit","hover-class":"none"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goPink(t.order_pay_info.pink_id)}}},[t._v("邀请好友参团")]):n("v-uni-button",{staticClass:"returnBnt cart-color",attrs:{formType:"submit","hover-class":"none"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goIndex.apply(void 0,arguments)}}},[t._v("返回首页")]),t.$wechat.isWeixin()||t.order_pay_info.paid?t._e():n("v-uni-button",{staticClass:"returnBnt cart-color",attrs:{formType:"submit","hover-class":"none"},on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.getOrderPayInfo.apply(void 0,arguments)}}},[t._v("刷新支付状态")]),t.couponList.length?n("v-uni-view",{staticClass:"coupons"},[n("v-uni-view",{staticClass:"title acea-row row-center-wrapper"},[n("v-uni-view",{staticClass:"line"}),n("v-uni-view",{staticClass:"name"},[t._v("赠送优惠券")]),n("v-uni-view",{staticClass:"line"})],1),n("v-uni-view",{staticClass:"list"},[t._l(t.couponList,(function(i,e){return e<2||!t.couponsHidden?n("v-uni-view",{key:e,staticClass:"item acea-row row-between-wrapper"},[n("v-uni-view",{staticClass:"moneyCon acea-row row-between-wrapper"},[n("v-uni-view",{staticClass:"price acea-row row-center-wrapper"},[n("v-uni-view",[t._v("￥"),n("v-uni-text",[t._v(t._s(i.coupon_price))])],1)],1)],1),n("v-uni-view",{staticClass:"text"},[n("v-uni-view",{staticClass:"name line1"},[t._v(t._s(i.coupon_title))]),n("v-uni-view",{staticClass:"priceMin"},[t._v("满"+t._s(i.use_min_price)+"元可用")]),n("v-uni-view",{staticClass:"time"},[t._v("有效期:"+t._s(i.add_time?i.add_time+"-":"")+t._s(i.end_time))])],1)],1):t._e()})),t.couponList.length>2?n("v-uni-view",{staticClass:"open acea-row row-center-wrapper",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.openTap.apply(void 0,arguments)}}},[t._v(t._s(t.couponsHidden?"展开更多":"关闭展开")),n("v-uni-text",{staticClass:"iconfont",class:1==t.couponsHidden?"icon-xiangxia":"icon-xiangshang"})],1):t._e()],2)],1):t._e()],1),n("lotteryModel",{directives:[{name:"show",rawName:"v-show",value:t.orderLottery&&t.order_pay_info.paid&&t.loading&&t.lotteryLoading,expression:"orderLottery && order_pay_info.paid && loading && lotteryLoading"}],attrs:{options:t.options},on:{orderDetails:function(i){arguments[0]=i=t.$handleEvent(i),t.goOrderDetails.apply(void 0,arguments)},lotteryShow:function(i){arguments[0]=i=t.$handleEvent(i),t.getOrderLottery.apply(void 0,arguments)}}})],1)},o=[]},c918:function(t,i,n){var e=n("8ed4");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=n("4f06").default;a("9f5cfd68",e,!0,{sourceMap:!1,shadowMode:!1})},e71b:function(t,i,n){"use strict";n.r(i);var e=n("4a00"),a=n.n(e);for(var o in e)"default"!==o&&function(t){n.d(i,t,(function(){return e[t]}))}(o);i["default"]=a.a}}]);