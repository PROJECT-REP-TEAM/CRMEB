(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-user_coupon-index"],{"0bd0":function(t,e,n){"use strict";n.r(e);var i=n("6e7e"),o=n("93c2");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("d883"),n("b1e6");var c,r=n("f0c5"),s=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"a2cfee0e",null,!1,i["a"],c);e["default"]=s.exports},"15cc":function(t,e,n){"use strict";var i=n("d319"),o=n.n(i);o.a},"1f5f":function(t,e,n){"use strict";n.r(e);var i=n("53be"),o=n("e7c1");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("15cc");var c,r=n("f0c5"),s=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"33fc6ba5",null,!1,i["a"],c);e["default"]=s.exports},"3e56":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("2f62"),o={name:"Home",props:{},data:function(){return{top:"500"}},computed:(0,i.mapGetters)(["homeActive"]),methods:{setTouchMove:function(t){var e=this;t.touches[0].clientY<500&&t.touches[0].clientY>66&&(e.top=t.touches[0].clientY)},open:function(){this.homeActive?this.$store.commit("CLOSE_HOME"):this.$store.commit("OPEN_HOME")}},created:function(){}};e.default=o},"45d9":function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.getIndexData=a,e.getLogo=c,e.setFormId=r,e.getIndexCoupons=s,e.setCouponReceive=u,e.getCoupons=l,e.getUserCoupons=f,e.getNewCoupon=d,e.getArticleCategoryList=p,e.getArticleList=g,e.getArticleHotList=v,e.getArticleBannerList=h,e.getArticleDetails=b,e.loginMobile=m,e.verifyCode=w,e.registerVerify=y,e.phoneRegister=A,e.phoneRegisterReset=x,e.phoneLogin=C,e.switchH5Login=_,e.bindingPhone=k,e.bindingUserPhone=L,e.logout=O,e.getTemlIds=z,e.pink=M,e.getCity=E,e.getLiveList=Q,e.getDiy=U,e.follow=R,e.updatePhone=B,e.getCouponV2=P,e.getCouponNewUser=S,e.category=G,e.searchList=F,e.clearSearch=H,e.siteConfig=I;var o=i(n("e238"));function a(){return o.default.get("v2/index",{},{noAuth:!0})}function c(){return o.default.get("wechat/get_logo",{},{noAuth:!0})}function r(t){return o.default.post("wechat/set_form_id",{formId:t})}function s(t){return o.default.get("coupons",t,{noAuth:!0})}function u(t){return o.default.post("coupon/receive",{couponId:t})}function l(t){return o.default.get("v2/coupons",t,{noAuth:!0})}function f(t,e){return o.default.get("coupons/user/"+t,e)}function d(){return o.default.get("v2/new_coupon")}function p(){return o.default.get("article/category/list",{},{noAuth:!0})}function g(t,e){return o.default.get("article/list/"+t,e,{noAuth:!0})}function v(){return o.default.get("article/hot/list",{},{noAuth:!0})}function h(){return o.default.get("article/banner/list",{},{noAuth:!0})}function b(t){return o.default.get("article/details/"+t,{},{noAuth:!0})}function m(t){return o.default.post("login/mobile",t,{noAuth:!0})}function w(){return o.default.get("verify_code",{},{noAuth:!0})}function y(t,e,n,i){return o.default.post("register/verify",{phone:t,type:void 0===e?"reset":e,key:n,code:i},{noAuth:!0})}function A(t){return o.default.post("register",t,{noAuth:!0})}function x(t){return o.default.post("register/reset",t,{noAuth:!0})}function C(t){return o.default.post("login",t,{noAuth:!0})}function _(){return o.default.post("switch_h5",{from:"wechat"})}function k(t){return o.default.post("binding",t,{noAuth:!0})}function L(t){return o.default.post("user/binding",t)}function O(){return o.default.get("logout")}function z(){return o.default.get("wechat/teml_ids",{},{noAuth:!0})}function M(){return o.default.get("pink",{},{noAuth:!0})}function E(){return o.default.get("city_list",{},{noAuth:!0})}function Q(t,e){return o.default.get("wechat/live",{page:t,limit:e},{noAuth:!0})}function U(){return o.default.get("v2/diy/get_diy/moren",{},{noAuth:!0})}function R(){return o.default.get("wechat/follow",{},{noAuth:!0})}function B(t){return o.default.post("user/updatePhone",t,{noAuth:!0})}function P(){return o.default.get("v2/get_today_coupon",{},{noAuth:!0})}function S(){return o.default.get("v2/new_coupon",{},{noAuth:!0})}function G(t){return o.default.get("category",t,{noAuth:!0})}function F(t){return o.default.get("v2/user/search_list",t,{noAuth:!0})}function H(){return o.default.get("v2/user/clean_search")}function I(t){return o.default.get("site_config",t,{noAuth:!0})}},"4a46":function(t,e,n){var i=n("a8b2");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("36c76afe",i,!0,{sourceMap:!1,shadowMode:!1})},"53be":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticStyle:{"touch-action":"none"}},[n("v-uni-view",{staticClass:"home",staticStyle:{position:"fixed"},style:{top:t.top+"px"},attrs:{id:"right-nav"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.setTouchMove.apply(void 0,arguments)}}},[t.homeActive?n("v-uni-view",{staticClass:"homeCon bg-color",class:!0===t.homeActive?"on":""},[n("v-uni-navigator",{staticClass:"iconfont icon-shouye-xianxing",attrs:{"hover-class":"none",url:"/pages/index/index"}}),n("v-uni-navigator",{staticClass:"iconfont icon-caigou-xianxing",attrs:{"hover-class":"none",url:"/pages/order_addcart/order_addcart"}}),n("v-uni-navigator",{staticClass:"iconfont icon-yonghu1",attrs:{"hover-class":"none",url:"/pages/user/index"}})],1):t._e(),n("v-uni-view",{staticClass:"pictrueBox",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"pictrue"},[n("v-uni-image",{staticClass:"image",attrs:{src:!0===t.homeActive?"/static/images/close.gif":"/static/images/open.gif"}})],1)],1)],1)],1)},a=[]},6658:function(t,e,n){t.exports=n.p+"static/img/noCoupon.e524084b.png"},"6e7e":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"navbar acea-row row-around"},[i("v-uni-view",{staticClass:"item acea-row row-center-wrapper",class:{on:1===t.navOn},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onNav(1)}}},[t._v("未使用")]),i("v-uni-view",{staticClass:"item acea-row row-center-wrapper",class:{on:2===t.navOn},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onNav(2)}}},[t._v("已使用/过期")])],1),t.couponsList.length?i("v-uni-view",{staticClass:"coupon-list"},t._l(t.couponsList,(function(e,o){return i("v-uni-view",{key:o,staticClass:"item acea-row row-center-wrapper",class:{svip:4===e.receive_type}},[i("v-uni-view",{staticClass:"money",class:0==e._type?"moneyGray":""},[i("v-uni-view",[t._v("￥"),i("v-uni-text",{staticClass:"num"},[t._v(t._s(e.coupon_price))])],1),e.use_min_price>0?i("v-uni-view",{staticClass:"pic-num"},[t._v("满"+t._s(e.use_min_price)+"元可用")]):i("v-uni-view",{staticClass:"pic-num"},[t._v("无门槛券")])],1),i("v-uni-view",{staticClass:"text"},[i("v-uni-view",{staticClass:"condition"},[i("v-uni-view",{staticClass:"name line2"},[0===e.applicable_type?i("v-uni-view",{staticClass:"line-title",class:0===e._type?"bg-color-huic":"bg-color-check"},[t._v("通用劵")]):1===e.applicable_type?i("v-uni-view",{staticClass:"line-title",class:0===e._type?"bg-color-huic":"bg-color-check"},[t._v("品类券")]):i("v-uni-view",{staticClass:"line-title",class:0===e._type?"bg-color-huic":"bg-color-check"},[t._v("商品券")]),4===e.receive_type?i("v-uni-image",{staticClass:"pic",attrs:{src:n("dfc6")}}):t._e(),i("v-uni-text",[t._v(t._s(e.coupon_title))])],1)],1),i("v-uni-view",{staticClass:"data acea-row row-between-wrapper"},[i("v-uni-view",[t._v(t._s(e.add_time)+"-"+t._s(e.end_time))]),0==e._type?i("v-uni-view",{staticClass:"bnt gray"},[t._v(t._s(e._msg))]):i("v-uni-view",{staticClass:"bnt bg-color"},[t._v(t._s(e._msg))])],1)],1)],1)})),1):t._e(),t.couponsList.length||2!==t.page?t._e():i("v-uni-view",{staticClass:"noCommodity"},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{attrs:{src:n("6658")}})],1)],1),i("home")],1)},a=[]},8357:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".pictrueBox[data-v-33fc6ba5]{width:%?130?%;height:%?120?%}\n\n/*返回主页按钮*/.home[data-v-33fc6ba5]{position:fixed;color:#fff;text-align:center;z-index:9999;right:%?15?%;display:-webkit-box;display:-webkit-flex;display:flex}.home .homeCon[data-v-33fc6ba5]{border-radius:%?50?%;opacity:0;height:0;color:#e93323;width:0}.home .homeCon.on[data-v-33fc6ba5]{opacity:1;-webkit-animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);width:%?300?%;height:%?86?%;margin-bottom:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#e93323!important}.home .homeCon .iconfont[data-v-33fc6ba5]{font-size:%?48?%;color:#fff;display:inline-block;margin:0 auto}.home .pictrue[data-v-33fc6ba5]{width:%?86?%;height:%?86?%;border-radius:50%;margin:0 auto;background-color:#e93323}.home .pictrue .image[data-v-33fc6ba5]{width:100%;height:100%;border-radius:50%;-webkit-transform:rotate(90deg);transform:rotate(90deg);ms-transform:rotate(90deg);moz-transform:rotate(90deg);webkit-transform:rotate(90deg);o-transform:rotate(90deg)}",""]),t.exports=e},"93c2":function(t,e,n){"use strict";n.r(e);var i=n("cec5"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},a8b2:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.navbar[data-v-a2cfee0e]{position:fixed;top:0;left:0;width:100%;height:%?106?%;background-color:#fff;z-index:9}.navbar .item[data-v-a2cfee0e]{border-top:%?5?% solid transparent;border-bottom:%?5?% solid transparent;font-size:%?30?%;color:#999}.navbar .item.on[data-v-a2cfee0e]{border-bottom-color:#e93323;color:#282828}.coupon-list[data-v-a2cfee0e]{margin-top:%?122?%}.noCommodity[data-v-a2cfee0e]{margin-top:%?300?%}',""]),t.exports=e},aeb4:function(t,e,n){var i=n("c122");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("c91400d8",i,!0,{sourceMap:!1,shadowMode:!1})},b1e6:function(t,e,n){"use strict";var i=n("4a46"),o=n.n(i);o.a},c122:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".money[data-v-a2cfee0e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.pic-num[data-v-a2cfee0e]{color:#fff;font-size:%?24?%}.coupon-list .item .text .condition[data-v-a2cfee0e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.coupon-list .item .text .condition .name[data-v-a2cfee0e]{font-size:%?26?%;font-weight:500}.coupon-list .item .text .condition .pic[data-v-a2cfee0e]{width:%?30?%;height:%?30?%;display:block;margin-right:%?10?%;display:inline-block;vertical-align:middle}.condition .line-title[data-v-a2cfee0e]{width:%?70?%;height:%?32?%!important;line-height:%?30?%;text-align:center;box-sizing:border-box;background:#fff7f7;border:1px solid #e83323;opacity:1;border-radius:%?20?%;font-size:%?18?%!important;color:#e83323;margin-right:%?12?%;text-align:center;display:inline-block;vertical-align:middle}.condition .line-title.bg-color-huic[data-v-a2cfee0e]{border-color:#bbb!important;color:#bbb!important;background-color:#f5f5f5!important}",""]),t.exports=e},cec5:function(t,e,n){"use strict";var i=n("4ea4");n("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("45d9"),a=n("12f4"),c=n("2f62"),r=i(n("1f5f")),s={components:{home:r.default},data:function(){return{couponsList:[],loading:!1,isAuto:!1,isShowAuth:!1,navOn:1,page:1,limit:15,finished:!1}},computed:(0,c.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,e){t&&this.getUseCoupons()},deep:!0}},onLoad:function(){this.isLogin?this.getUseCoupons():(0,a.toLogin)()},onReachBottom:function(){this.getUseCoupons()},methods:{onNav:function(t){this.navOn=t,this.couponsList=[],this.page=1,this.finished=!1,this.getUseCoupons()},onLoadFun:function(){this.getUseCoupons()},authColse:function(t){this.isShowAuth=t},getUseCoupons:function(){var t=this;t.loading||t.finished||(t.loading=!0,uni.showLoading({title:"正在加载…"}),(0,o.getUserCoupons)(this.navOn,{page:this.page,limit:this.limit}).then((function(e){t.loading=!1,uni.hideLoading(),t.couponsList=t.couponsList.concat(e.data),t.finished=e.data.length<t.limit,t.page+=1})).catch((function(e){t.loading=!1,uni.showToast({title:e,icon:"none"})})))}}};e.default=s},d319:function(t,e,n){var i=n("8357");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("316ce335",i,!0,{sourceMap:!1,shadowMode:!1})},d883:function(t,e,n){"use strict";var i=n("aeb4"),o=n.n(i);o.a},dfc6:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADg0lEQVRYR72X34uUZRTHP+d5cUnzx0YmoRGVQXXTOq4GFVOB3uTOtF140S5Um0J4k5nQbQhBUFSsSEgUOl2k1FXjOP4BK0kXOzob1YWFxSq6FILuoG22z3PifXffcXb2/TXs5Hv1wvM93/N9zjnP85wjZPy0zCorFETIC/QpPALcF5gLf6ryu8CEEcawVGWQRhZqSQNplU3OsRd4HTBp+GBdcQglazjUM0A9ySZWgB7AzPbzqYG3MzmNAymjpsh+ETQKEilAK0GISwqbluT8tnHdwkhPkYl2vkUCtMpzznESWNUl5yFNwwgDUuB0K+8CAf7OHQGg286bIizkWyPRFODnXLdQU+1a2OMCWDcFNoc10RRgK4yy1ILLmjNl1HuJd+ZOMHCrTM4znM1q3w2cNeT8IxoIsBWOAG90Smy2fIcbf7lTsxB/xCuyW/QUq53lWhiNzGwrH8M8/iHu/Hsw/WNmsyZQcUbpFa0y5BzHOmWQrWVEFWYu4n56q1PzAG+EIbEVDgN7OmGQ9a8gm4/DVBl61qKTX6CXvoqm8O4GeyOO/rDMVjgj8PSiG2r9EKzdhv72Ady8sGDZbL8Idz3QFOAvuvprC3HLH0LW7QBvBXrh40gBCmf8CFwB7o9CmML89d34Gf31ffTyN8gTHyEb352Dz0fA/9Vr4+gv+5DerbDhVWR1H4iHOzcMf0/GRWDKFzALeFEIeeoUsu7F+Oy0CAhA9maw4+bnZnA/bE/Krk0W8OCbyJOfZxfQhtRLJXTyy1QBsSkIKjVMQxRNewTaMG58EG5djRcgXIktwtDKPPs93PNMNEmSgH+mcLWdiYcrLMLEYyhJaUgQoH98hl4+nna6g2M4LPB1EjI2DQkCguJzM8kRUIYzXcUmPw5r+heTxQm4cR43sStt9844eoPHaPYER0UYibOQe1+IXlrxKFyvRV8y0+fSBBz1iuwKBGiZnLvDz7Ex5CR8joM75A42JA4OLiuyz/d7uyX7Fs8tx49nX1rslrheNzX65QBugYAgFf4QYjmNsHKJTuLMGwby0tKeL2rL/z3B8wZO/g8iGsZQkAHGWtVFDyZz41ipW+kQoS7KSOvOQxHxo9lcTXzShU75oKmxP8x5e27Sh9MyOSvsFQmG01T8vAO/kShZx6GeQRIvhKyE+M2rtRQE8gp9Ag83x3P4S5kfzw1jCFXZwXSWQv4PB8M8tp2+a6cAAAAASUVORK5CYII="},e7c1:function(t,e,n){"use strict";n.r(e);var i=n("3e56"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a}}]);