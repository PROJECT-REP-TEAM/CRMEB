(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-order_details-index"],{"0eba":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADz0lEQVRoQ9XXOU/jQBQH8DcWIAEFFIiCAiiwPaYACgqgpWdP9oDd/SAL7L3fZO/7aPgEQEEBFChxQIICCqCAAgpAntV/FFvZxGeSSeyRIkVYsd9v3nvzDMvn88+J6AUpWI7jzFiW9VfBrb1bMnxTidA0bUbXdWUICVCNEELc4Jz/UZEJD9AAxE3O+e96I/4DZBFRAVCNIKJbpmn+qlcmfAFZQgQCGoC4bZrmz1ozEQrAzQuFwjPHcV5W86CLiws6OjqiwcFB358zxu4YhvGjmnu7v4kEVIs4PT0lAC4vL+WzVCFiAYrl9IyIYmUCwa+urtL09DS1tbXR3t5eFOKuYRjfq8lEbEBcBILf2tqi4eFhOjg4oNHRURlXFEIIMcs5/5YUkQgQhUC5rK2t0cTEhNx5YPb39z3EysoKjY+Py2t+S9O0WV3XEyESA8IQqPmNjQ2ampry4nMR+MPAwAB1d3eHbrIQ4h7n/GvcTFQFCEOgVE5OTuROuwsILAR/eHhIPT09tLOzI8vMbwkh7nPOv8RBVA1IinCDAQ4NPjk5KSEh64Fpmp+jEDUB4iA6Ozupq6uLOjo6ZGa2t7e9nT8/PyfLsuj6+lpe91mRiJoBeKht20tCiFflASDglpYWr3SOj4/p6uqKRkZG6OzsTH4KhYJEBM0JInpomuanoEzUBRCGcB+8ubkpmxj90NvbK5sdPYCdx7ELVNDp5DjOnGVZH/0QdQOEIdC4CBRNDAgWygYl1N/fT319fXJqh51QjLE5wzAqEHUFILBcLrfEGKsoJyDwQbCtra0SgXLCrqOZkZnd3V1qb28PPJ0cx5m3LOtDaSbqDghD4Br6Ai94WCglBO/Oj7GxMdnkYeXEGJs3DMNDKAFEIZAJd+cBwkJPDA0NyWZGmeEVBDC/00nTtEe6rr/H75QBwhAIGoHhg9eP5eVluevICAZh6cALOp2EEI855++UAqIygR1eX1+XweM7MoOAUUboFeCAwfeA9UQ5oHg6LQohXpcH4b4n4XjFqwX6AbMBcwEw9ETAgPNu1RBAGALXUPOY1ggeGGQAPVL6PqV8kAU9oPTvtm37ZsJtVmQkSfDKm9gPFYRA8yIDmA1xdt69d8NKKE4mkIGo/xfKN6UpgOLptMgYq2jsOKWofBLHDSKXy9WMaFoGXGStiKYDai2nVACKc2JBCPEmbvk19RQKCtK27cSI1GTARSVFpA6QtJxSCUiCSC0gLiLVgOIRu8AYCzydUg+IQmQCAEQ+n39KRG9T8zKXdGAFITKTARdcnonMAcozkUlAKSKzABfxD1g6MhgWGnxpAAAAAElFTkSuQmCC"},"0fee":function(e,t,i){"use strict";var a=i("1f53"),o=i.n(a);o.a},"150f":function(e,t,i){"use strict";(function(e){var a=i("4ea4");i("d81d"),i("acd8"),i("e25e"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i("be17"),n=i("f61b"),r=i("57f0"),s=a(i("99d5")),d=a(i("84d1")),c=a(i("c428")),u=a(i("5cfb")),l=i("6dd0"),v=i("2f62"),f={components:{payment:d.default,home:s.default,orderGoods:c.default},data:function(){return{order_id:"",evaluate:0,cartInfo:[],orderInfo:{system_store:{},_status:{}},system_store:{},isGoodsReturn:!1,status:{},isClose:!1,payMode:[{name:"微信支付",icon:"icon-weixinzhifu",value:"weixin",title:"微信快捷支付",payStatus:!0},{name:"支付宝支付",icon:"icon-zhifubao",value:"alipay",title:"支付宝支付",payStatus:!0},{name:"余额支付",icon:"icon-yuezhifu",value:"yue",title:"可用余额:",number:0,payStatus:!0}],pay_close:!1,pay_order_id:"",totalPrice:"0",isAuto:!1,isShowAuth:!1}},computed:(0,v.mapGetters)(["isLogin"]),onLoad:function(e){e.order_id&&this.$set(this,"order_id",e.order_id)},onShow:function(){this.isLogin?(this.getOrderInfo(),this.getUserInfo()):(0,l.toLogin)()},onHide:function(){this.isClose=!0},onReady:function(){this.$nextTick((function(){var e=this,t=new u.default(".copy-data");t.on("success",(function(){e.$util.Tips({title:"复制成功"})}))}))},methods:{goGoodCall:function(){var e=this;uni.navigateTo({url:"/pages/customer_list/chat?orderId=".concat(e.order_id)})},openSubcribe:function(e){var t=e;uni.showLoading({title:"正在加载"}),(0,n.openOrderRefundSubscribe)().then((function(e){uni.hideLoading(),uni.navigateTo({url:t})})).catch((function(){uni.hideLoading()}))},onChangeFun:function(e){var t=e,i=t.action||null,a=void 0!=t.value?t.value:null;i&&this[i]&&this[i](a)},makePhone:function(){uni.makePhoneCall({phoneNumber:this.system_store.phone})},showMaoLocation:function(){if(!this.system_store.latitude||!this.system_store.longitude)return this.$util.Tips({title:"缺少经纬度信息无法查看地图！"});uni.openLocation({latitude:parseFloat(this.system_store.latitude),longitude:parseFloat(this.system_store.longitude),scale:8,name:this.system_store.name,address:this.system_store.address+this.system_store.detailed_address,success:function(){}})},payClose:function(){this.pay_close=!1},pay_open:function(){this.pay_close=!0,this.pay_order_id=this.orderInfo.order_id,this.totalPrice=this.orderInfo.pay_price},pay_complete:function(){this.pay_close=!1,this.pay_order_id="",this.getOrderInfo()},pay_fail:function(){this.pay_close=!1,this.pay_order_id=""},onLoadFun:function(){this.getOrderInfo(),this.getUserInfo()},getUserInfo:function(){var e=this;(0,r.getUserInfo)().then((function(t){e.payMode[2].number=t.data.now_money,e.$set(e,"payMode",e.payMode)}))},getOrderInfo:function(){var e=this,t=this;uni.showLoading({title:"正在加载中"}),(0,o.getOrderDetail)(this.order_id).then((function(i){var a=i.data._status._type;uni.hideLoading(),t.$set(t,"orderInfo",i.data),t.$set(t,"cartInfo",i.data.cartInfo),t.$set(t,"evaluate",3==a?3:0),t.$set(t,"system_store",i.data.system_store),0!=e.orderInfo.refund_status&&(e.isGoodsReturn=!0),t.payMode.map((function(e){"weixin"==e.value&&(e.payStatus=!!i.data.pay_weixin_open),"alipay"==e.value&&(e.payStatus=!!i.data.ali_pay_status),"yue"==e.value&&(e.payStatus=1==i.data.yue_pay_status)})),t.getOrderStatus()})).catch((function(e){uni.hideLoading(),t.$util.Tips({title:e},"/pages/users/order_list/index")}))},goTel:function(){uni.makePhoneCall({phoneNumber:this.orderInfo.delivery_id})},getOrderStatus:function(){var e=this.orderInfo||{},t=e._status||{_type:0},i={},a=parseInt(t._type),o=e.delivery_type,n=e.seckill_id?parseInt(e.seckill_id):0,r=e.bargain_id?parseInt(e.bargain_id):0,s=e.combination_id?parseInt(e.combination_id):0;i={type:9==a?-9:a,class_status:0},1==a&&s>0&&(i.class_status=1),2==a&&"express"==o&&(i.class_status=2),2==a&&(i.class_status=3),4!=a&&0!=a||(i.class_status=4),n||r||s||3!=a&&4!=a||(i.class_status=5),this.$set(this,"status",i)},goJoinPink:function(){uni.navigateTo({url:"/pages/activity/goods_combination_status/index?id="+this.orderInfo.pink_id})},goOrderConfirm:function(){var e=this;(0,o.orderAgain)(e.orderInfo.order_id).then((function(e){return uni.navigateTo({url:"/pages/users/order_confirm/index?new=1&cartId="+e.data.cateId})})).catch((function(t){return e.$util.Tips({title:t})}))},confirmOrder:function(){var e=this;uni.showModal({title:"确认收货",content:"为保障权益，请收到货确认无误后，再确认收货",success:function(t){t.confirm&&(0,o.orderTake)(e.order_id).then((function(t){return e.$util.Tips({title:"操作成功",icon:"success"},(function(){e.getOrderInfo()}))})).catch((function(t){return e.$util.Tips({title:t})}))}})},delOrder:function(){var e=this;(0,o.orderDel)(this.order_id).then((function(t){return e.$util.Tips({title:"删除成功",icon:"success"},{tab:5,url:"/pages/users/order_list/index"})})).catch((function(t){return e.$util.Tips({title:t})}))},cancelOrder:function(){var e=this;uni.showModal({title:"提示",content:"确认取消该订单?",success:function(t){t.confirm?(0,o.orderCancel)(e.orderInfo.order_id).then((function(t){e.$util.Tips({title:t.msg},{tab:3})})).catch((function(){e.getDetail()})):t.cancel}})}}};t.default=f}).call(this,i("5a52")["default"])},"1f53":function(e,t,i){var a=i("6c4f");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var o=i("4f06").default;o("7a6bb2d6",a,!0,{sourceMap:!1,shadowMode:!1})},2267:function(e,t,i){"use strict";i.r(t);var a=i("9b40"),o=i("9f49e");for(var n in o)"default"!==n&&function(e){i.d(t,e,(function(){return o[e]}))}(n);i("fd9b"),i("c1f1");var r,s=i("f0c5"),d=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,"ea8fe0a8",null,!1,a["a"],r);t["default"]=d.exports},"2ec4":function(e,t,i){e.exports=i.p+"static/img/writeOff.e1bf8d03.jpg"},"4ed0":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADW0lEQVRYR7VXPWgUURCeeXdHLqCQRrDQKoIa9Nh9L4VWxtqICSgqaKUBywgGFQUVFBRT2BlIyoABBQNGsFMrC/PeHucRFbQy4IGFEYS9Y80bmXNPNjGX27eJWx3c/Hwz8828GYSUX19f35ZisXgEEQeIqB8RdwDA9li9RkSLiDhPRK/q9frzhYWFn2lMYychpVSvtfaKEOIMABQ7ycf/162100KIu1rrz+vptAUQR3wDEUcBIJ/S8WqxX0T0oF6v32qXkTUBlEql3YVC4QkA7MvoeLVaNYqi45VK5ePqP/4BIKVUiDiXqO8mYQDmyaAxRicNrgAQR/7qPzhv+axFUTSQzMRfAFzz7u7uN1nSTkTM+LuI2A8AQx1SVg3D8GCLE38BSCnvI+KljPke01qPl0qlHYVC4UsnG0Q0bowZY7kmACnlLkR8n5Xt3KZBENzzff+cEGKqEwAA4O7Ya4z51ATg+/6kEOJ8CsV2ImywjIhe2iCstVNBEIxgXPtvDkNmAzhXqNbDMNyGUsqTiDizWVZd7BDRKVRKPQSACy6Kmyg7wRl4G7ePq92qtfZWo9F4kc/ne/L5/DtE7HExQkTznIGvroOH5zs7Z2flcnkp5tH3tARMgKwxAHJBDQCj1lpm/CwAnDXGzEkpBxHxmaOdprgzACKaQcTj3MvMYp5oSqlJAMjUxplKwMiJaNYYM8y/lVI8/XhBcf1qGyHhiNZ6yvf9fiHEW1fPcRBNEmZqwyiKdlYqlUUpJS8tN7MAAIAJ9H3/lBDikaOBqtZ6f/yOvEHEA476TXFr7elMo5jb0Bhz0fO8nlwux2M8y8r2ZxTHJHJi8fLy8nC5XJ71PG8ol8s9jeu55DiIprTWI5me40T9ryHibSK6TkQfhBC8R6b5Vj7HcS1TLSS8/RhjtrKO53nHAOAHIvYKISYcSsHr+tXmIGrBdVjJmrXjAcQcQMT7jrvE2itZzIU9APCy09tARJ8AoAoAA451rwHAYa31h1bg/6zl8WDhud46u9LUNI1MzVp7NAiC+aTwmoeJUooz8TjLhtwGCWfrRDLythlIcqJYLG74NAOA8TAM7zidZsko4o35MgA4HacAME1E93jzXa8+Ha/jZEa6uroGhRCH1jvPrbWvG43GXNrz/DdRW4puNUAnEQAAAABJRU5ErkJggg=="},"6c4f":function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.orderGoods[data-v-514d78fe]{background-color:#fff;margin-top:%?12?%}.orderGoods .total[data-v-514d78fe]{width:100%;height:%?86?%;padding:0 %?30?%;border-bottom:%?2?% solid #f0f0f0;font-size:%?30?%;color:#282828;line-height:%?86?%;box-sizing:border-box}',""]),e.exports=t},"6f83":function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.goodCall[data-v-ea8fe0a8]{color:#e93323;text-align:center;width:100%;height:%?86?%;padding:0 %?30?%;border-bottom:%?1?% solid #eee;font-size:%?30?%;line-height:%?86?%;background:#fff}.goodCall .icon-kefu[data-v-ea8fe0a8]{font-size:%?36?%;margin-right:%?15?%}.order-details .header[data-v-ea8fe0a8]{padding:0 %?30?%;height:%?150?%}.order-details .header.on[data-v-ea8fe0a8]{background-color:#666!important}.order-details .header .pictrue[data-v-ea8fe0a8]{width:%?110?%;height:%?110?%}.order-details .header .pictrue uni-image[data-v-ea8fe0a8]{width:100%;height:100%}.order-details .header .data[data-v-ea8fe0a8]{color:hsla(0,0%,100%,.8);font-size:%?24?%;margin-left:%?27?%}.order-details .header .data.on[data-v-ea8fe0a8]{margin-left:0}.order-details .header .data .state[data-v-ea8fe0a8]{font-size:%?30?%;font-weight:700;color:#fff;margin-bottom:%?7?%}.order-details .header .data .time[data-v-ea8fe0a8]{margin-left:%?20?%}.order-details .nav[data-v-ea8fe0a8]{background-color:#fff;font-size:%?26?%;color:#282828;padding:%?25?% 0}.order-details .nav .navCon[data-v-ea8fe0a8]{padding:0 %?40?%}.order-details .nav .on[data-v-ea8fe0a8]{color:#e93323}.order-details .nav .progress[data-v-ea8fe0a8]{padding:0 %?65?%;margin-top:%?10?%}.order-details .nav .progress .line[data-v-ea8fe0a8]{width:%?100?%;height:%?2?%;background-color:#939390}.order-details .nav .progress .iconfont[data-v-ea8fe0a8]{font-size:%?25?%;color:#939390;margin-top:%?-2?%}.order-details .address[data-v-ea8fe0a8]{font-size:%?26?%;color:#868686;background-color:#fff;margin-top:%?13?%;padding:%?35?% %?30?%}.order-details .address .name[data-v-ea8fe0a8]{font-size:%?30?%;color:#282828;margin-bottom:%?15?%}.order-details .address .name .phone[data-v-ea8fe0a8]{margin-left:%?40?%}.order-details .line[data-v-ea8fe0a8]{width:100%;height:%?3?%}.order-details .line uni-image[data-v-ea8fe0a8]{width:100%;height:100%;display:block}.order-details .wrapper[data-v-ea8fe0a8]{background-color:#fff;margin-top:%?12?%;padding:%?30?%}.order-details .wrapper .item[data-v-ea8fe0a8]{font-size:%?28?%;color:#282828}.order-details .wrapper .item ~ .item[data-v-ea8fe0a8]{margin-top:%?20?%}.order-details .wrapper .item .conter[data-v-ea8fe0a8]{color:#868686;width:%?460?%;text-align:right}.order-details .wrapper .item .conter .copy[data-v-ea8fe0a8]{font-size:%?20?%;color:#333;border-radius:%?3?%;border:%?1?% solid #666;padding:%?3?% %?15?%;margin-left:%?24?%}.order-details .wrapper .actualPay[data-v-ea8fe0a8]{border-top:%?1?% solid #eee;margin-top:%?30?%;padding-top:%?30?%}.order-details .wrapper .actualPay .money[data-v-ea8fe0a8]{font-weight:700;font-size:%?30?%}.order-details .footer[data-v-ea8fe0a8]{width:100%;height:%?100?%;position:fixed;bottom:0;left:0;background-color:#fff;padding:0 %?30?%;box-sizing:border-box}.order-details .footer .bnt[data-v-ea8fe0a8]{width:%?176?%;height:%?60?%;text-align:center;line-height:%?60?%;border-radius:%?50?%;color:#fff;font-size:%?27?%}.order-details .footer .bnt.cancel[data-v-ea8fe0a8]{color:#aaa;border:%?1?% solid #ddd}.order-details .footer .bnt ~ .bnt[data-v-ea8fe0a8]{margin-left:%?18?%}.order-details .writeOff[data-v-ea8fe0a8]{background-color:#fff;margin-top:%?13?%;padding-bottom:%?30?%}.order-details .writeOff .title[data-v-ea8fe0a8]{font-size:%?30?%;color:#282828;height:%?87?%;border-bottom:1px solid #f0f0f0;padding:0 %?30?%;line-height:%?87?%}.order-details .writeOff .grayBg[data-v-ea8fe0a8]{background-color:#f2f5f7;width:%?590?%;height:%?384?%;border-radius:%?20?% %?20?% 0 0;margin:%?50?% auto 0 auto;padding-top:%?55?%;position:relative}.order-details .writeOff .grayBg .written[data-v-ea8fe0a8]{position:absolute;top:0;right:0;width:%?60?%;height:%?60?%}.order-details .writeOff .grayBg .written uni-image[data-v-ea8fe0a8]{width:100%;height:100%}.order-details .writeOff .grayBg .pictrue[data-v-ea8fe0a8]{width:%?290?%;height:%?290?%;margin:0 auto}.order-details .writeOff .grayBg .pictrue uni-image[data-v-ea8fe0a8]{width:100%;height:100%;display:block}.order-details .writeOff .gear[data-v-ea8fe0a8]{width:%?590?%;height:%?30?%;margin:0 auto}.order-details .writeOff .gear uni-image[data-v-ea8fe0a8]{width:100%;height:100%;display:block}.order-details .writeOff .num[data-v-ea8fe0a8]{background-color:#f0c34c;width:%?590?%;height:%?84?%;color:#282828;font-size:%?48?%;margin:0 auto;border-radius:0 0 %?20?% %?20?%;text-align:center;padding-top:%?4?%}.order-details .writeOff .rules[data-v-ea8fe0a8]{margin:%?46?% %?30?% 0 %?30?%;border-top:1px solid #f0f0f0;padding-top:%?10?%}.order-details .writeOff .rules .item[data-v-ea8fe0a8]{margin-top:%?20?%}.order-details .writeOff .rules .item .rulesTitle[data-v-ea8fe0a8]{font-size:%?28?%;color:#282828}.order-details .writeOff .rules .item .rulesTitle .iconfont[data-v-ea8fe0a8]{font-size:%?30?%;color:#333;margin-right:%?8?%;margin-top:%?5?%}.order-details .writeOff .rules .item .info[data-v-ea8fe0a8]{font-size:%?28?%;color:#999;margin-top:%?7?%}.order-details .writeOff .rules .item .info .time[data-v-ea8fe0a8]{margin-left:%?20?%}.order-details .map[data-v-ea8fe0a8]{height:%?86?%;font-size:%?30?%;color:#282828;line-height:%?86?%;border-bottom:1px solid #f0f0f0;margin-top:%?13?%;background-color:#fff;padding:0 %?30?%}.order-details .map .place[data-v-ea8fe0a8]{font-size:%?26?%;width:%?176?%;height:%?50?%;border-radius:%?25?%;line-height:%?50?%;text-align:center}.order-details .map .place .iconfont[data-v-ea8fe0a8]{font-size:%?27?%;height:%?27?%;line-height:%?27?%;margin:%?2?% %?3?% 0 0}.order-details .address .name .iconfont[data-v-ea8fe0a8]{font-size:%?34?%;margin-left:%?10?%}.refund[data-v-ea8fe0a8]{padding:0 %?30?% %?30?%;margin-top:%?24?%;background-color:#fff}.refund .title[data-v-ea8fe0a8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?30?%;color:#333;height:%?86?%;border-bottom:1px solid #f5f5f5}.refund .title uni-image[data-v-ea8fe0a8]{width:%?32?%;height:%?32?%;margin-right:%?10?%}.refund .con[data-v-ea8fe0a8]{padding-top:%?25?%;font-size:%?28?%;color:#868686}',""]),e.exports=t},8717:function(e,t,i){e.exports=i.p+"static/img/line.05bf1c84.jpg"},8827:function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,".qs-btn[data-v-ea8fe0a8]{width:auto;height:%?60?%;text-align:center;line-height:%?60?%;border-radius:%?50?%;color:#fff;font-size:%?27?%;padding:0 3%;color:#aaa;border:1px solid #ddd;margin-right:%?20?%}",""]),e.exports=t},"8f56":function(e,t,i){"use strict";i("4160"),i("a9e3"),i("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={props:{evaluate:{type:Number,default:0},cartInfo:{type:Array,default:function(){return[]}},orderId:{type:String,default:""},jump:{type:Boolean,default:!1}},data:function(){return{totalNmu:""}},watch:{cartInfo:function(e,t){var i=0;e.forEach((function(e,t){i+=e.cart_num})),this.totalNmu=i}},methods:{evaluateTap:function(e,t){uni.navigateTo({url:"/pages/users/goods_comment_con/index?unique="+e+"&uni="+t})},jumpCon:function(e){this.jump&&uni.navigateTo({url:"/pages/goods_details/index?id=".concat(e)})}}};t.default=a},"9b40":function(e,t,i){"use strict";var a;i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return n})),i.d(t,"a",(function(){return a}));var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("v-uni-view",{staticClass:"order-details"},[a("v-uni-view",{staticClass:"header bg-color acea-row row-middle",class:e.isGoodsReturn?"on":""},[0==e.isGoodsReturn?a("v-uni-view",{staticClass:"pictrue"},[a("v-uni-image",{attrs:{src:e.orderInfo.status_pic}})],1):e._e(),a("v-uni-view",{staticClass:"data",class:e.isGoodsReturn?"on":""},[a("v-uni-view",{staticClass:"state"},[e._v(e._s(e.orderInfo._status._msg))]),a("v-uni-view",[e._v(e._s(e.orderInfo.add_time_y)),a("v-uni-text",{staticClass:"time"},[e._v(e._s(e.orderInfo.add_time_h))])],1)],1)],1),0==e.isGoodsReturn?a("v-uni-view",[a("v-uni-view",{staticClass:"nav"},[a("v-uni-view",{staticClass:"navCon acea-row row-between-wrapper"},[a("v-uni-view",{class:0==e.status.type||-9==e.status.type?"on":""},[e._v("待付款")]),a("v-uni-view",{class:1==e.status.type?"on":""},[e._v(e._s(1==e.orderInfo.shipping_type?"待发货":"待核销"))]),1==e.orderInfo.shipping_type?a("v-uni-view",{class:2==e.status.type?"on":""},[e._v("待收货")]):e._e(),a("v-uni-view",{class:3==e.status.type?"on":""},[e._v("待评价")]),a("v-uni-view",{class:4==e.status.type?"on":""},[e._v("已完成")])],1),a("v-uni-view",{staticClass:"progress acea-row row-between-wrapper"},[a("v-uni-view",{staticClass:"iconfont",class:(0==e.status.type||-9==e.status.type?"icon-webicon318":"icon-yuandianxiao")+" "+(e.status.type>=0?"font-color":"")}),a("v-uni-view",{staticClass:"line",class:e.status.type>0?"bg-color":""}),a("v-uni-view",{staticClass:"iconfont",class:(1==e.status.type?"icon-webicon318":"icon-yuandianxiao")+" "+(e.status.type>=1?"font-color":"")}),1==e.orderInfo.shipping_type?a("v-uni-view",{staticClass:"line",class:e.status.type>1?"bg-color":""}):e._e(),1==e.orderInfo.shipping_type?a("v-uni-view",{staticClass:"iconfont",class:(2==e.status.type?"icon-webicon318":"icon-yuandianxiao")+" "+(e.status.type>=2?"font-color":"")}):e._e(),a("v-uni-view",{staticClass:"line",class:e.status.type>2?"bg-color":""}),a("v-uni-view",{staticClass:"iconfont",class:(3==e.status.type?"icon-webicon318":"icon-yuandianxiao")+" "+(e.status.type>=3?"font-color":"")}),a("v-uni-view",{staticClass:"line",class:e.status.type>3?"bg-color":""}),a("v-uni-view",{staticClass:"iconfont",class:(4==e.status.type?"icon-webicon318":"icon-yuandianxiao")+" "+(e.status.type>=4?"font-color":"")})],1)],1),e.orderInfo.refund_reason?a("v-uni-view",{staticClass:"refund"},[a("v-uni-view",{staticClass:"title"},[a("v-uni-image",{attrs:{src:i("4ed0"),mode:""}}),e._v("商家拒绝退款")],1),a("v-uni-view",{staticClass:"con"},[e._v("拒绝原因："+e._s(e.orderInfo.refund_reason))])],1):e._e(),e.orderInfo.verify_code&&1==e.orderInfo.paid?a("v-uni-view",{staticClass:"writeOff"},[a("v-uni-view",{staticClass:"title"},[e._v("核销信息")]),a("v-uni-view",{staticClass:"grayBg"},[2==e.orderInfo.status?a("v-uni-view",{staticClass:"written"},[a("v-uni-image",{attrs:{src:i("0eba")}})],1):e._e(),a("v-uni-view",{staticClass:"pictrue"},[a("v-uni-image",{attrs:{src:e.orderInfo.code}})],1)],1),a("v-uni-view",{staticClass:"gear"},[a("v-uni-image",{attrs:{src:i("2ec4")}})],1),a("v-uni-view",{staticClass:"num"},[e._v(e._s(e.orderInfo._verify_code))]),a("v-uni-view",{staticClass:"rules"},[2==e.orderInfo.shipping_type?a("v-uni-view",{staticClass:"item"},[a("v-uni-view",{staticClass:"rulesTitle acea-row row-middle"},[a("v-uni-text",{staticClass:"iconfont icon-shijian"}),e._v("核销时间")],1),a("v-uni-view",{staticClass:"info"},[e._v("每日："),a("v-uni-text",{staticClass:"time"},[e._v(e._s(e.orderInfo.system_store.day_time))])],1)],1):e._e(),a("v-uni-view",{staticClass:"item"},[a("v-uni-view",{staticClass:"rulesTitle acea-row row-middle"},[a("v-uni-text",{staticClass:"iconfont icon-shuoming1"}),e._v("使用说明")],1),a("v-uni-view",{staticClass:"info"},[e._v(e._s(2==e.orderInfo.shipping_type?"可将二维码出示给店员扫描或提供数字核销码":"可将二维码出示给配送员进行核销"))])],1)],1)],1):e._e(),2==e.orderInfo.shipping_type?a("v-uni-view",{staticClass:"map acea-row row-between-wrapper"},[a("v-uni-view",[e._v("自提地址信息")]),a("v-uni-view",{staticClass:"place cart-color acea-row row-center-wrapper",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.showMaoLocation.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"iconfont icon-weizhi"}),e._v("查看位置")],1)],1):e._e(),1===e.orderInfo.shipping_type?a("v-uni-view",{staticClass:"address"},[a("v-uni-view",{staticClass:"name"},[e._v(e._s(e.orderInfo.real_name)),a("v-uni-text",{staticClass:"phone"},[e._v(e._s(e.orderInfo.user_phone))])],1),a("v-uni-view",[e._v(e._s(e.orderInfo.user_address))])],1):a("v-uni-view",{staticClass:"address",staticStyle:{"margin-top":"0"}},[a("v-uni-view",{staticClass:"name",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.makePhone.apply(void 0,arguments)}}},[e._v(e._s(e.orderInfo.system_store.name)),a("v-uni-text",{staticClass:"phone"},[e._v(e._s(e.orderInfo.system_store.phone))]),a("v-uni-text",{staticClass:"iconfont icon-tonghua font-color"})],1),a("v-uni-view",[e._v(e._s(e.orderInfo.system_store._detailed_address))])],1),1===e.orderInfo.shipping_type?a("v-uni-view",{staticClass:"line"},[a("v-uni-image",{attrs:{src:i("8717")}})],1):e._e()],1):e._e(),a("orderGoods",{attrs:{evaluate:e.evaluate,orderId:e.order_id,cartInfo:e.cartInfo,jump:!0}}),a("div",{staticClass:"goodCall",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goGoodCall.apply(void 0,arguments)}}},[a("span",{staticClass:"iconfont icon-kefu"}),a("span",[e._v("联系客服")])]),a("v-uni-view",{staticClass:"wrapper"},[a("v-uni-view",{staticClass:"item acea-row row-between"},[a("v-uni-view",[e._v("订单编号：")]),a("v-uni-view",{staticClass:"conter acea-row row-middle row-right"},[e._v(e._s(e.orderInfo.order_id)),a("v-uni-text",{staticClass:"copy copy-data",attrs:{"data-clipboard-text":e.orderInfo.order_id}},[e._v("复制")])],1)],1),a("v-uni-view",{staticClass:"item acea-row row-between"},[a("v-uni-view",[e._v("下单时间：")]),a("v-uni-view",{staticClass:"conter"},[e._v(e._s((e.orderInfo.add_time_y||"")+" "+(e.orderInfo.add_time_h||0)))])],1),a("v-uni-view",{staticClass:"item acea-row row-between"},[a("v-uni-view",[e._v("支付状态：")]),e.orderInfo.paid?a("v-uni-view",{staticClass:"conter"},[e._v("已支付")]):a("v-uni-view",{staticClass:"conter"},[e._v("未支付")])],1),a("v-uni-view",{staticClass:"item acea-row row-between"},[a("v-uni-view",[e._v("支付方式：")]),a("v-uni-view",{staticClass:"conter"},[e._v(e._s(e.orderInfo._status._payType))])],1),e.orderInfo.mark?a("v-uni-view",{staticClass:"item acea-row row-between"},[a("v-uni-view",[e._v("买家留言：")]),a("v-uni-view",{staticClass:"conter"},[e._v(e._s(e.orderInfo.mark))])],1):e._e(),e.orderInfo.refund_reason_wap_explain?a("v-uni-view",{staticClass:"item acea-row row-between"},[a("v-uni-view",[e._v("退款留言：")]),a("v-uni-view",{staticClass:"conter"},[e._v(e._s(e.orderInfo.refund_reason_wap_explain))])],1):e._e()],1),e.isGoodsReturn?a("v-uni-view",{staticClass:"wrapper"},[a("v-uni-view",{staticClass:"item acea-row row-between"},[a("v-uni-view",[e._v("收货人：")]),a("v-uni-view",{staticClass:"conter"},[e._v(e._s(e.orderInfo.real_name))])],1),a("v-uni-view",{staticClass:"item acea-row row-between"},[a("v-uni-view",[e._v("联系电话：")]),a("v-uni-view",{staticClass:"conter"},[e._v(e._s(e.orderInfo.user_phone))])],1),a("v-uni-view",{staticClass:"item acea-row row-between"},[a("v-uni-view",[e._v("收货地址：")]),a("v-uni-view",{staticClass:"conter"},[e._v(e._s(e.orderInfo.user_address))])],1)],1):e._e(),0!=e.orderInfo.status?a("v-uni-view",["express"==e.orderInfo.delivery_type?a("v-uni-view",{staticClass:"wrapper"},[a("v-uni-view",{staticClass:"item acea-row row-between"},[a("v-uni-view",[e._v("配送方式：")]),a("v-uni-view",{staticClass:"conter"},[e._v("发货")])],1),a("v-uni-view",{staticClass:"item acea-row row-between"},[a("v-uni-view",[e._v("快递公司：")]),a("v-uni-view",{staticClass:"conter"},[e._v(e._s(e.orderInfo.delivery_name||""))])],1),a("v-uni-view",{staticClass:"item acea-row row-between"},[a("v-uni-view",[e._v("快递号：")]),a("v-uni-view",{staticClass:"conter"},[e._v(e._s(e.orderInfo.delivery_id||""))])],1)],1):"send"==e.orderInfo.delivery_type?a("v-uni-view",{staticClass:"wrapper"},[a("v-uni-view",{staticClass:"item acea-row row-between"},[a("v-uni-view",[e._v("配送方式：")]),a("v-uni-view",{staticClass:"conter"},[e._v("送货")])],1),a("v-uni-view",{staticClass:"item acea-row row-between"},[a("v-uni-view",[e._v("配送人姓名：")]),a("v-uni-view",{staticClass:"conter"},[e._v(e._s(e.orderInfo.delivery_name||""))])],1),a("v-uni-view",{staticClass:"item acea-row row-between"},[a("v-uni-view",[e._v("联系电话：")]),a("v-uni-view",{staticClass:"conter acea-row row-middle row-right"},[e._v(e._s(e.orderInfo.delivery_id||"")),a("v-uni-text",{staticClass:"copy",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goTel.apply(void 0,arguments)}}},[e._v("拨打")])],1)],1)],1):"fictitious"==e.orderInfo.delivery_type?a("v-uni-view",{staticClass:"wrapper"},[a("v-uni-view",{staticClass:"item acea-row row-between"},[a("v-uni-view",[e._v("虚拟发货：")]),a("v-uni-view",{staticClass:"conter"},[e._v("已发货，请注意查收")])],1),e.orderInfo.fictitious_content?a("v-uni-view",{staticClass:"item acea-row row-between"},[a("v-uni-view",[e._v("虚拟备注：")]),a("v-uni-view",{staticClass:"conter"},[e._v(e._s(e.orderInfo.fictitious_content))])],1):e._e()],1):e._e()],1):e._e(),a("v-uni-view",{staticClass:"wrapper"},[a("v-uni-view",{staticClass:"item acea-row row-between"},[a("v-uni-view",[e._v("商品总价：")]),a("v-uni-view",{staticClass:"conter"},[e._v("￥"+e._s((parseFloat(e.orderInfo.total_price)+parseFloat(e.orderInfo.vip_true_price)).toFixed(2)))])],1),e.orderInfo.pay_postage>0?a("v-uni-view",{staticClass:"item acea-row row-between"},[a("v-uni-view",[e._v("配送运费：")]),a("v-uni-view",{staticClass:"conter"},[e._v("￥"+e._s(parseFloat(e.orderInfo.pay_postage).toFixed(2)))])],1):e._e(),e.orderInfo.vip_true_price?a("v-uni-view",{staticClass:"item acea-row row-between"},[a("v-uni-view",[e._v("会员商品优惠：")]),a("v-uni-view",{staticClass:"conter"},[e._v("-￥"+e._s(parseFloat(e.orderInfo.vip_true_price).toFixed(2)))])],1):e._e(),e.orderInfo.coupon_id?a("v-uni-view",{staticClass:"item acea-row row-between"},[a("v-uni-view",[e._v("优惠券抵扣：")]),a("v-uni-view",{staticClass:"conter"},[e._v("-￥"+e._s(parseFloat(e.orderInfo.coupon_price).toFixed(2)))])],1):e._e(),e.orderInfo.use_integral>0?a("v-uni-view",{staticClass:"item acea-row row-between"},[a("v-uni-view",[e._v("积分抵扣：")]),a("v-uni-view",{staticClass:"conter"},[e._v("-￥"+e._s(parseFloat(e.orderInfo.deduction_price).toFixed(2)))])],1):e._e(),a("v-uni-view",{staticClass:"actualPay acea-row row-right"},[e._v("实付款："),a("v-uni-text",{staticClass:"money font-color"},[e._v("￥"+e._s(parseFloat(e.orderInfo.pay_price).toFixed(2)))])],1)],1),a("v-uni-view",{staticStyle:{height:"120rpx"}}),0==e.isGoodsReturn||9==e.status.type?a("v-uni-view",{staticClass:"footer acea-row row-right row-middle"},[0==e.status.type||-9==e.status.type?a("v-uni-view",{staticClass:"qs-btn",on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.cancelOrder.apply(void 0,arguments)}}},[e._v("取消订单")]):e._e(),0==e.status.type?a("v-uni-view",{staticClass:"bnt bg-color",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.pay_open(e.orderInfo.order_id)}}},[e._v("立即付款")]):1===e.orderInfo.paid&&0===e.orderInfo.refund_status?a("v-uni-navigator",{staticClass:"bnt cancel",attrs:{"hover-class":"none",url:"/pages/users/goods_return/index?orderId="+e.orderInfo.order_id}},[e._v("申请退款")]):e._e(),1==e.status.class_status?a("v-uni-view",{staticClass:"bnt bg-color",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goJoinPink.apply(void 0,arguments)}}},[e._v("查看拼团")]):e._e(),"express"==e.orderInfo.delivery_type&&3==e.status.class_status&&2==e.status.type?a("v-uni-navigator",{staticClass:"bnt cancel",attrs:{"hover-class":"none",url:"/pages/users/goods_logistics/index?orderId="+e.orderInfo.order_id}},[e._v("查看物流")]):e._e(),3==e.status.class_status?a("v-uni-view",{staticClass:"bnt bg-color",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.confirmOrder.apply(void 0,arguments)}}},[e._v("确认收货")]):e._e(),4==e.status.type?a("v-uni-view",{staticClass:"bnt cancel",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.delOrder.apply(void 0,arguments)}}},[e._v("删除订单")]):e._e(),5==e.status.class_status?a("v-uni-view",{staticClass:"bnt bg-color",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goOrderConfirm.apply(void 0,arguments)}}},[e._v("再次购买")]):e._e()],1):e._e()],1),a("home"),a("payment",{attrs:{payMode:e.payMode,pay_close:e.pay_close,order_id:e.pay_order_id,totalPrice:e.totalPrice},on:{onChangeFun:function(t){arguments[0]=t=e.$handleEvent(t),e.onChangeFun.apply(void 0,arguments)}}})],1)},n=[]},"9f49e":function(e,t,i){"use strict";i.r(t);var a=i("150f"),o=i.n(a);for(var n in a)"default"!==n&&function(e){i.d(t,e,(function(){return a[e]}))}(n);t["default"]=o.a},b1f6:function(e,t,i){var a=i("8827");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var o=i("4f06").default;o("dd9195f4",a,!0,{sourceMap:!1,shadowMode:!1})},c1f1:function(e,t,i){"use strict";var a=i("b1f6"),o=i.n(a);o.a},c428:function(e,t,i){"use strict";i.r(t);var a=i("dc48"),o=i("f0ed");for(var n in o)"default"!==n&&function(e){i.d(t,e,(function(){return o[e]}))}(n);i("0fee");var r,s=i("f0c5"),d=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,"514d78fe",null,!1,a["a"],r);t["default"]=d.exports},dc48:function(e,t,i){"use strict";var a;i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return n})),i.d(t,"a",(function(){return a}));var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"orderGoods"},[i("v-uni-view",{staticClass:"total"},[e._v("共"+e._s(e.totalNmu)+"件商品")]),i("v-uni-view",{staticClass:"goodWrapper"},e._l(e.cartInfo,(function(t,a){return i("v-uni-view",{key:a,staticClass:"item acea-row row-between-wrapper",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.jumpCon(t.product_id)}}},[i("v-uni-view",{staticClass:"pictrue"},[t.productInfo.attrInfo?i("v-uni-image",{attrs:{src:t.productInfo.attrInfo.image}}):i("v-uni-image",{attrs:{src:t.productInfo.image}})],1),i("v-uni-view",{staticClass:"text"},[i("v-uni-view",{staticClass:"acea-row row-between-wrapper"},[i("v-uni-view",{staticClass:"name line1"},[e._v(e._s(t.productInfo.store_name))]),i("v-uni-view",{staticClass:"num"},[e._v("x "+e._s(t.cart_num))])],1),t.productInfo.attrInfo?i("v-uni-view",{staticClass:"attr line1"},[e._v(e._s(t.productInfo.attrInfo.suk))]):e._e(),t.productInfo.attrInfo?i("v-uni-view",{staticClass:"money font-color"},[e._v("￥"+e._s(t.productInfo.attrInfo.price))]):i("v-uni-view",{staticClass:"money font-color"},[e._v("￥"+e._s(t.productInfo.price))]),0==t.is_reply&&3==e.evaluate?i("v-uni-view",{staticClass:"evaluate",on:{click:function(i){i.stopPropagation(),arguments[0]=i=e.$handleEvent(i),e.evaluateTap(t.unique,e.orderId)}}},[e._v("评价")]):1==t.is_reply&&3==e.evaluate?i("v-uni-view",{staticClass:"evaluate"},[e._v("已评价")]):e._e()],1)],1)})),1)],1)},n=[]},eddc:function(e,t,i){var a=i("6f83");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var o=i("4f06").default;o("10071771",a,!0,{sourceMap:!1,shadowMode:!1})},f0ed:function(e,t,i){"use strict";i.r(t);var a=i("8f56"),o=i.n(a);for(var n in a)"default"!==n&&function(e){i.d(t,e,(function(){return a[e]}))}(n);t["default"]=o.a},fd9b:function(e,t,i){"use strict";var a=i("eddc"),o=i.n(a);o.a}}]);