(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods_cate-goods_cate"],{1309:function(t,e,n){"use strict";n.r(e);var i=n("7b6a"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"156c":function(t,e,n){"use strict";n.r(e);var i=n("3ab5"),a=n("5921");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("554b");var o,u=n("f0c5"),c=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"1918f290",null,!1,i["a"],o);e["default"]=c.exports},"1b2a":function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.getProductDetail=r,e.getProductCode=o,e.collectAdd=u,e.collectDel=c,e.postCartAdd=s,e.getCategoryList=l,e.getProductslist=d,e.getHomeProducts=f,e.getProductHot=g,e.collectAll=h,e.getGroomList=p,e.getCollectUserList=v,e.getReplyList=b,e.getReplyConfig=w,e.getSearchKeyword=m,e.storeListApi=_;var a=i(n("0405"));function r(t){return a.default.get("product/detail/"+t,{},{noAuth:!0})}function o(t){return a.default.get("product/code/"+t,{})}function u(t,e){return a.default.post("collect/add",{id:t,product:void 0===e?"product":e})}function c(t,e){return a.default.post("collect/del",{id:t,category:void 0===e?"product":e})}function s(t){return a.default.post("cart/add",t)}function l(){return a.default.get("category",{},{noAuth:!0})}function d(t){return a.default.get("products",t,{noAuth:!0})}function f(t){return a.default.get("home/products",t,{noAuth:!0})}function g(t,e){return a.default.get("product/hot",{page:void 0===t?1:t,limit:void 0===e?4:e},{noAuth:!0})}function h(t,e){return a.default.post("collect/all",{id:t,category:void 0===e?"product":e})}function p(t,e){return a.default.get("groom/list/"+t,e,{noAuth:!0})}function v(t){return a.default.get("collect/user",t)}function b(t,e){return a.default.get("reply/list/"+t,e)}function w(t){return a.default.get("reply/config/"+t)}function m(){return a.default.get("search/keyword",{},{noAuth:!0})}function _(t){return a.default.get("store_list",t)}},"22f2":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("3bc5"),a=n("928f"),r=getApp(),o={name:"tabBar",props:{pagePath:null,dataConfig:{type:Object,default:function(){}}},watch:{dataConfig:{immediate:!0,handler:function(t,e){t&&(this.isShow=t.isShow.val)}}},data:function(){return{name:this.$options.name,page:"/pages/index/index",tabbar:[],isShow:!0,isIframe:r.globalData.isIframe}},created:function(){},mounted:function(){var t=this;(0,i.getDiy)().then((function(e){var n=e.data.tabBar.default.tabBarList.list;t.tabbar=n})).catch((function(t){uni.showToast({title:t,icon:"none"})}))},methods:{changeTab:function(t){var e=this;(0,a.goPage)().then((function(n){e.page=t.link,uni.reLaunch({url:e.page})}))}}};e.default=o},3615:function(t,e,n){var i=n("f5d6");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("762428d4",i,!0,{sourceMap:!1,shadowMode:!1})},"3ab5":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[t.isShow&&t.tabbar.length&&!t.isIframe?n("v-uni-view",{staticClass:"uni-tabbar acea-row row-around row-middle"},t._l(t.tabbar,(function(e,i){return n("v-uni-view",{key:i,staticClass:"uni-tabbar_item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.changeTab(e)}}},[n("v-uni-view",{staticClass:"uni-tabbar_icon"},[e.link==t.pagePath?n("v-uni-image",{attrs:{mode:"aspectFit",src:e.imgList[0]}}):n("v-uni-image",{attrs:{mode:"aspectFit",src:e.imgList[1]}})],1),n("v-uni-view",{staticClass:"uni-tabbar_label",class:{active:e.link==t.pagePath}},[t._v(t._s(e.name))])],1)})),1):t._e(),t.isIframe&&t.tabbar.length?n("v-uni-view",{staticClass:"uni-tabbar acea-row row-around row-middle"},t._l(t.tabbar,(function(e,i){return n("v-uni-view",{key:i,staticClass:"uni-tabbar_item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.changeTab(e)}}},[n("v-uni-view",{staticClass:"uni-tabbar_icon"},[e.link==t.pagePath?n("v-uni-image",{attrs:{mode:"aspectFit",src:e.imgList[0]}}):n("v-uni-image",{attrs:{mode:"aspectFit",src:e.imgList[1]}})],1),n("v-uni-view",{staticClass:"uni-tabbar_label",class:{active:e.link==t.pagePath}},[t._v(t._s(e.name))])],1)})),1):t._e(),t.isIframe&&!t.tabbar.length?n("v-uni-view",{staticClass:"empty-img uni-tabbar acea-row row-around row-middle"},[t._v("暂无数据，请设置")]):t._e()],1)},r=[]},"3bc5":function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.getIndexData=r,e.getLogo=o,e.setFormId=u,e.getIndexCoupons=c,e.setCouponReceive=s,e.getCoupons=l,e.getUserCoupons=d,e.getNewCoupon=f,e.getArticleCategoryList=g,e.getArticleList=h,e.getArticleHotList=p,e.getArticleBannerList=v,e.getArticleDetails=b,e.loginMobile=w,e.verifyCode=m,e.registerVerify=_,e.phoneRegister=y,e.phoneRegisterReset=A,e.phoneLogin=C,e.switchH5Login=x,e.bindingPhone=S,e.bindingUserPhone=L,e.logout=k,e.getTemlIds=P,e.pink=I,e.getCity=T,e.getLiveList=z,e.getDiy=M,e.follow=O,e.updatePhone=R,e.getCouponV2=$,e.getCouponNewUser=D,e.category=j,e.searchList=B,e.clearSearch=V,e.siteConfig=E;var a=i(n("0405"));function r(){return a.default.get("v2/index",{},{noAuth:!0})}function o(){return a.default.get("wechat/get_logo",{},{noAuth:!0})}function u(t){return a.default.post("wechat/set_form_id",{formId:t})}function c(t){return a.default.get("coupons",t,{noAuth:!0})}function s(t){return a.default.post("coupon/receive",{couponId:t})}function l(t){return a.default.get("v2/coupons",t,{noAuth:!0})}function d(t,e){return a.default.get("coupons/user/"+t,e)}function f(){return a.default.get("v2/new_coupon")}function g(){return a.default.get("article/category/list",{},{noAuth:!0})}function h(t,e){return a.default.get("article/list/"+t,e,{noAuth:!0})}function p(){return a.default.get("article/hot/list",{},{noAuth:!0})}function v(){return a.default.get("article/banner/list",{},{noAuth:!0})}function b(t){return a.default.get("article/details/"+t,{},{noAuth:!0})}function w(t){return a.default.post("login/mobile",t,{noAuth:!0})}function m(){return a.default.get("verify_code",{},{noAuth:!0})}function _(t,e,n,i){return a.default.post("register/verify",{phone:t,type:void 0===e?"reset":e,key:n,code:i},{noAuth:!0})}function y(t){return a.default.post("register",t,{noAuth:!0})}function A(t){return a.default.post("register/reset",t,{noAuth:!0})}function C(t){return a.default.post("login",t,{noAuth:!0})}function x(){return a.default.post("switch_h5",{from:"wechat"})}function S(t){return a.default.post("binding",t,{noAuth:!0})}function L(t){return a.default.post("user/binding",t)}function k(){return a.default.get("logout")}function P(){return a.default.get("wechat/teml_ids",{},{noAuth:!0})}function I(){return a.default.get("pink",{},{noAuth:!0})}function T(){return a.default.get("city_list",{},{noAuth:!0})}function z(t,e){return a.default.get("wechat/live",{page:t,limit:e},{noAuth:!0})}function M(){return a.default.get("v2/diy/get_diy/moren",{},{noAuth:!0})}function O(){return a.default.get("wechat/follow",{},{noAuth:!0})}function R(t){return a.default.post("user/updatePhone",t,{noAuth:!0})}function $(){return a.default.get("v2/get_today_coupon",{},{noAuth:!0})}function D(){return a.default.get("v2/new_coupon",{},{noAuth:!0})}function j(t){return a.default.get("category",t,{noAuth:!0})}function B(t){return a.default.get("v2/user/search_list",t,{noAuth:!0})}function V(){return a.default.get("v2/user/clean_search")}function E(t){return a.default.get("site_config",t,{noAuth:!0})}},4011:function(t,e,n){var i=n("b5aa");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("58896e5c",i,!0,{sourceMap:!1,shadowMode:!1})},"554b":function(t,e,n){"use strict";var i=n("4011"),a=n.n(i);a.a},5921:function(t,e,n){"use strict";n.r(e);var i=n("22f2"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"7b6a":function(t,e,n){"use strict";var i=n("4ea4");n("ac1f"),n("498a"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("156c")),r=n("1b2a"),o={components:{tabBar:a.default},data:function(){return{navlist:[],productList:[],navActive:0,number:"",height:0,hightArr:[],toView:""}},onLoad:function(t){this.getAllCategory()},onReady:function(){},methods:{infoScroll:function(){var t=this,e=t.productList.length;this.number=t.productList[e-1].children.length,uni.getSystemInfo({success:function(e){t.height=e.windowHeight*(750/e.windowWidth)-98}});for(var n=[],i=0;i<e;i++){var a=uni.createSelectorQuery().in(this),r="#b"+i;a.select(r).boundingClientRect(),a.exec((function(e){var i=e[0].top;n.push(i),t.hightArr=n}))}},tap:function(t,e){this.toView=e,this.navActive=t},getAllCategory:function(){var t=this;(0,r.getCategoryList)().then((function(e){t.productList=e.data,setTimeout((function(){t.infoScroll()}),500)}))},scroll:function(t){for(var e=t.detail.scrollTop,n=this.hightArr,i=0;i<n.length;i++)e>=0&&e<n[1]-n[0]?this.navActive=0:e>=n[i]-n[0]&&e<n[i+1]-n[0]?this.navActive=i:e>=n[n.length-1]-n[0]&&(this.navActive=n.length-1)},searchSubmitValue:function(t){if(!(this.$util.trim(t.detail.value).length>0))return this.$util.Tips({title:"请填写要搜索的产品信息"});uni.navigateTo({url:"/pages/goods_list/index?searchValue="+t.detail.value})}}};e.default=o},"8cd6":function(t,e,n){"use strict";n.r(e);var i=n("d52b"),a=n("1309");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("b38f");var o,u=n("f0c5"),c=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"0cae22af",null,!1,i["a"],o);e["default"]=c.exports},"928f":function(t,e,n){"use strict";n("99af"),n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.goShopDetail=a,e.goPage=r;var i=getApp();function a(t,e){return new Promise((function(n){t.activity&&"1"===t.activity.type?uni.navigateTo({url:"/pages/activity/goods_seckill_details/index?id=".concat(t.activity.id,"&time=").concat(t.activity.time,"&status=1")}):t.activity&&"2"===t.activity.type?uni.navigateTo({url:"/pages/activity/goods_bargain_details/index?id=".concat(t.activity.id,"&bargain=").concat(e)}):t.activity&&"3"===t.activity.type?uni.navigateTo({url:"/pages/activity/goods_combination_details/index?id=".concat(t.activity.id)}):n(t)}))}function r(){return new Promise((function(t){if(0!=i.globalData.isIframe)return!1;t(!0)}))}},b38f:function(t,e,n){"use strict";var i=n("3615"),a=n.n(i);a.a},b5aa:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.borderShow[data-v-1918f290]{position:fixed}.borderShow .uni-tabbar[data-v-1918f290]::after{content:" ";position:absolute;left:0;top:0;width:100%;height:100%;border:1px dashed #007aff;box-sizing:border-box}.uni-tabbar[data-v-1918f290]{position:fixed;bottom:0;left:0;z-index:9999;width:100%;height:%?98?%;height:calc(98rpx+ constant(safe-area-inset-bottom));height:calc(%?98?% + env(safe-area-inset-bottom));padding-bottom:calc(constant(safe-area-inset-bottom));padding-bottom:calc(env(safe-area-inset-bottom));box-sizing:border-box;border-top:solid %?1?% #f3f3f3;background-color:#fff;box-shadow:0 0 %?17?% %?1?% hsla(0,0%,80.8%,.32)}.uni-tabbar .uni-tabbar_item[data-v-1918f290]{font-size:%?20?%;text-align:center}.uni-tabbar .uni-tabbar_icon[data-v-1918f290]{height:%?50?%;width:%?50?%;text-align:center;margin:0 auto}.uni-tabbar .uni-tabbar_icon uni-image[data-v-1918f290]{width:100%;height:100%}.uni-tabbar .uni-tabbar_label[data-v-1918f290]{font-size:%?24?%;color:#282828}.uni-tabbar .uni-tabbar_label.active[data-v-1918f290]{color:#e93323}',""]),t.exports=e},d52b:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"productSort copy-data"},[n("v-uni-view",{staticClass:"header acea-row row-center-wrapper"},[n("v-uni-view",{staticClass:"acea-row row-between-wrapper input"},[n("v-uni-text",{staticClass:"iconfont icon-sousuo"}),n("v-uni-input",{attrs:{type:"text",placeholder:"点击搜索商品信息","confirm-type":"search",name:"search","placeholder-class":"placeholder"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.searchSubmitValue.apply(void 0,arguments)}}})],1)],1),n("v-uni-view",{staticClass:"aside"},t._l(t.productList,(function(e,i){return n("v-uni-view",{key:i,staticClass:"item acea-row row-center-wrapper",class:i==t.navActive?"on":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tap(i,"b"+i)}}},[n("v-uni-text",[t._v(t._s(e.cate_name))])],1)})),1),n("v-uni-view",{staticClass:"conter"},[n("v-uni-scroll-view",{style:"height:"+t.height+"rpx;",attrs:{"scroll-y":"true","scroll-into-view":t.toView,"scroll-with-animation":"true"},on:{scroll:function(e){arguments[0]=e=t.$handleEvent(e),t.scroll.apply(void 0,arguments)}}},[t._l(t.productList,(function(e,i){return[n("v-uni-view",{key:i+"_0",staticClass:"listw",attrs:{id:"b"+i}},[n("v-uni-view",{staticClass:"title acea-row row-center-wrapper"},[n("v-uni-view",{staticClass:"line"}),n("v-uni-view",{staticClass:"name"},[t._v(t._s(e.cate_name))]),n("v-uni-view",{staticClass:"line"})],1),n("v-uni-view",{staticClass:"list acea-row"},[t._l(e.children,(function(e,i){return[n("v-uni-navigator",{key:i+"_0",staticClass:"item acea-row row-column row-middle",attrs:{"hover-class":"none",url:"/pages/goods_list/index?sid="+e.id+"&title="+e.cate_name}},[n("v-uni-view",{staticClass:"picture"},[e.pic?n("v-uni-image",{attrs:{src:e.pic}}):n("v-uni-image",{attrs:{src:"/static/images/sort-img.png"}})],1),n("v-uni-view",{staticClass:"name line1"},[t._v(t._s(e.cate_name))])],1)]}))],2)],1)]})),t.number<15?n("v-uni-view",{style:"height:"+(t.height-300)+"rpx;"}):t._e()],2)],1),n("v-uni-view",{staticClass:"uni-p-b-98"}),n("tabBar",{attrs:{pagePath:"/pages/goods_cate/goods_cate"}})],1)},r=[]},f5d6:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.productSort .header[data-v-0cae22af]{width:100%;height:%?96?%;background-color:#fff;position:fixed;left:0;right:0;top:0;z-index:9;border-bottom:%?1?% solid #f5f5f5}.productSort .header .input[data-v-0cae22af]{width:%?700?%;height:%?60?%;background-color:#f5f5f5;border-radius:%?50?%;box-sizing:border-box;padding:0 %?25?%}.productSort .header .input .iconfont[data-v-0cae22af]{font-size:%?35?%;color:#555}.productSort .header .input .placeholder[data-v-0cae22af]{color:#999}.productSort .header .input uni-input[data-v-0cae22af]{font-size:%?26?%;height:100%;width:%?597?%}.productSort .aside[data-v-0cae22af]{position:fixed;width:24%;left:0;top:0;background-color:#f7f7f7;overflow-y:auto;overflow-x:hidden;height:auto;margin-top:%?96?%;\r\n  /* 兼容 IOS<11.2 */bottom:calc(100rpx+ constant(safe-area-inset-bottom));\r\n  /* 兼容 IOS>11.2 */bottom:calc(%?100?% + env(safe-area-inset-bottom))}.productSort .aside .item[data-v-0cae22af]{height:%?100?%;width:100%;font-size:%?26?%;color:#424242}.productSort .aside .item.on[data-v-0cae22af]{background-color:#fff;border-left:%?4?% solid #fc4141;width:100%;text-align:center;color:#fc4141;font-weight:700}.productSort .conter[data-v-0cae22af]{margin:%?96?% 0 0 %?180?%;padding:0 %?14?%;background-color:#fff}.productSort .conter .listw[data-v-0cae22af]{padding-top:%?20?%}.productSort .conter .listw .title[data-v-0cae22af]{height:%?90?%}.productSort .conter .listw .title .line[data-v-0cae22af]{width:%?100?%;height:%?2?%;background-color:#f0f0f0}.productSort .conter .listw .title .name[data-v-0cae22af]{font-size:%?28?%;color:#333;margin:0 %?30?%;font-weight:700}.productSort .conter .list[data-v-0cae22af]{-webkit-flex-wrap:wrap;flex-wrap:wrap}.productSort .conter .list .item[data-v-0cae22af]{width:%?177?%;margin-top:%?26?%}.productSort .conter .list .item .picture[data-v-0cae22af]{width:%?120?%;height:%?120?%;border-radius:50%}.productSort .conter .list .item .picture uni-image[data-v-0cae22af]{width:100%;height:100%;border-radius:50%}.productSort .conter .list .item .name[data-v-0cae22af]{font-size:%?24?%;color:#333;height:%?56?%;line-height:%?56?%;width:%?120?%;text-align:center}',""]),t.exports=e}}]);