(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-user_get_coupon-index"],{"01ee":function(t,e,i){"use strict";i.r(e);var n=i("8620"),o=i("9b99");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("685a");var s,c=i("f0c5"),r=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"6897b247",null,!1,n["a"],s);e["default"]=r.exports},2178:function(t,e,i){"use strict";i.r(e);var n=i("5d8f"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},"2a17":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".pictrueBox[data-v-a68dde36]{width:%?130?%;height:%?120?%}\n\n/*返回主页按钮*/.home[data-v-a68dde36]{position:fixed;color:#fff;text-align:center;z-index:999;right:%?15?%;display:flex}.home .homeCon[data-v-a68dde36]{border-radius:%?50?%;opacity:0;height:0;color:var(--view-theme);width:0}.home .homeCon.on[data-v-a68dde36]{opacity:1;-webkit-animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);width:%?300?%;height:%?86?%;margin-bottom:%?20?%;display:flex;justify-content:center;align-items:center;background:var(--view-theme)!important}.home .homeCon .iconfont[data-v-a68dde36]{font-size:%?48?%;color:#fff;display:inline-block;margin:0 auto}.home .pictrue[data-v-a68dde36]{width:%?86?%;height:%?86?%;border-radius:50%;margin:0 auto;background-color:var(--view-theme)}.home .pictrue .image[data-v-a68dde36]{width:100%;height:100%;border-radius:50%;-webkit-transform:rotate(90deg);transform:rotate(90deg);ms-transform:rotate(90deg);moz-transform:rotate(90deg);webkit-transform:rotate(90deg);o-transform:rotate(90deg)}",""]),t.exports=e},"432b":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".nav[data-v-6897b247]{position:fixed;top:0;left:0;width:100%;height:%?106?%;background-color:#fff;font-size:%?30?%;color:#999;z-index:9}.nav .acea-row[data-v-6897b247]{border-top:%?5?% solid transparent;border-bottom:%?5?% solid transparent;cursor:pointer}.nav .acea-row.on[data-v-6897b247]{border-bottom-color:var(--view-theme);color:#282828}.coupon-list .pic-num[data-v-6897b247]{color:#fff;font-size:%?24?%}.coupon-list .item .text .condition[data-v-6897b247]{display:flex;align-items:center}.coupon-list .item .text .condition .name[data-v-6897b247]{font-size:%?26?%;font-weight:500;display:flex;align-items:center}.coupon-list .item .text .condition .pic[data-v-6897b247]{width:%?30?%;height:%?30?%;display:block;margin-right:%?10?%;display:inline-block;vertical-align:middle}.condition .line-title[data-v-6897b247]{width:%?70?%;height:%?32?%!important;line-height:%?30?%;text-align:center;box-sizing:border-box;background:#fff7f7;border:1px solid var(--view-theme);opacity:1;border-radius:%?20?%;font-size:%?18?%!important;color:var(--view-theme);margin-right:%?12?%;text-align:center;display:inline-block;vertical-align:middle}.condition .line-title.bg-color-huic[data-v-6897b247]{border-color:#bbb!important;color:#bbb!important;background-color:#f5f5f5!important}",""]),t.exports=e},"5d8f":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i("26cb"),a=n(i("c83f")),s={name:"Home",props:{},mixins:[a.default],data:function(){return{top:"545"}},computed:(0,o.mapGetters)(["homeActive"]),methods:{setTouchMove:function(t){var e=this;t.touches[0].clientY<545&&t.touches[0].clientY>66&&(e.top=t.touches[0].clientY)},open:function(){this.homeActive?this.$store.commit("CLOSE_HOME"):this.$store.commit("OPEN_HOME")}},created:function(){},beforeDestroy:function(){this.$store.commit("CLOSE_HOME")}};e.default=s},"685a":function(t,e,i){"use strict";var n=i("76d2"),o=i.n(n);o.a},"76d2":function(t,e,i){var n=i("432b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("b701afbe",n,!0,{sourceMap:!1,shadowMode:!1})},8620:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{style:t.colorStyle},[t.count>1?i("v-uni-view",{staticClass:"acea-row row-around nav"},[t._l(t.navList,(function(e){return[e.count?i("v-uni-view",{key:e.type,class:["acea-row","row-middle",t.type===e.type?"on":""],on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.setType(e.type)}}},[t._v(t._s(e.name))]):t._e()]}))],2):t._e(),t.count>1?i("v-uni-view",{staticStyle:{height:"106rpx"}}):t._e(),t.couponsList.length?i("v-uni-view",{staticClass:"coupon-list"},t._l(t.couponsList,(function(e,n){return i("v-uni-view",{key:n,staticClass:"item acea-row row-center-wrapper",class:{svip:4===e.receive_type}},[i("v-uni-view",{staticClass:"moneyCon acea-row row-center-wrapper"},[i("v-uni-view",{staticClass:"money",class:e.is_use?"moneyGray":""},[i("v-uni-view",[t._v("￥"),i("v-uni-text",{staticClass:"num"},[t._v(t._s(e.coupon_price))])],1),e.use_min_price>0?i("v-uni-view",{staticClass:"pic-num"},[t._v(t._s(t.$t("full"))+" "+t._s(e.use_min_price)+" "+t._s(t.$t("available")))]):i("v-uni-view",{staticClass:"pic-num"},[t._v(t._s(t.$t("no_spend")))])],1)],1),i("v-uni-view",{staticClass:"text"},[i("v-uni-view",{staticClass:"condition"},[i("v-uni-view",{staticClass:"name line2"},[0===e.type?i("v-uni-view",{staticClass:"line-title",class:1==e.is_use||2==e.is_use?"bg-color-huic":""},[t._v(t._s(t.$t("universal_coupon")))]):1===e.type?i("v-uni-view",{staticClass:"line-title",class:1==e.is_use||2==e.is_use?"bg-color-huic":""},[t._v(t._s(t.$t("category_coupons")))]):i("v-uni-view",{staticClass:"line-title",class:1==e.is_use||2==e.is_use?"bg-color-huic":""},[t._v(t._s(t.$t("commodity_voucher")))]),4===e.receive_type?i("v-uni-image",{staticClass:"pic",attrs:{src:"/static/images/fvip.png"}}):t._e(),t._v(t._s(e.title))],1)],1),i("v-uni-view",{staticClass:"data acea-row row-between-wrapper"},[e.coupon_time?i("v-uni-view",[t._v(t._s(t.$t("after_receiving"))+" "+t._s(e.coupon_time)+" "+t._s(t.$t("days_available")))]):i("v-uni-view",[t._v(t._s(e.start_use_time?e.start_use_time+"-":"")+t._s(e.end_use_time))]),1==e.is_use?i("v-uni-view",{staticClass:"bnt gray"},[t._v(t._s(t.$t("received")))]):2==e.is_use?i("v-uni-view",{staticClass:"bnt gray"},[t._v(t._s(t.$t("finished")))]):i("v-uni-view",{staticClass:"bnt bg-color",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.getCoupon(e.id,n)}}},[t._v(t._s(t.$t("get_it_now")))])],1)],1)],1)})),1):t._e(),t.couponsList.length?i("v-uni-view",{staticClass:"loadingicon acea-row row-center-wrapper"},[i("v-uni-text",{staticClass:"loading iconfont icon-jiazai",attrs:{hidden:0==t.loading}}),t._v(t._s(t.loadTitle))],1):t.couponsList.length||2!==t.page?t._e():i("v-uni-view",{staticClass:"noCommodity"},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{attrs:{src:"/static/images/noCoupon.png"}})],1)],1),i("home")],1)},a=[]},"8c5c":function(t,e,i){var n=i("2a17");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("15cfcc39",n,!0,{sourceMap:!1,shadowMode:!1})},"9b99":function(t,e,i){"use strict";i.r(e);var n=i("a6b8"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},a6b8:function(t,e,i){"use strict";var n=i("4ea4");i("4160"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i("7fe6"),a=i("c6cd3"),s=i("26cb"),c=n(i("f497")),r=n(i("c83f")),u={components:{home:c.default},mixins:[r.default],data:function(){return{couponsList:[],loading:!1,loadend:!1,loadTitle:"加载更多",page:1,limit:20,isAuto:!1,isShowAuth:!1,type:0,navList:[{type:0,name:"通用券",count:0},{type:1,name:"品类券",count:0},{type:2,name:"商品券",count:0}],count:0}},computed:(0,s.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,e){t&&this.getUseCoupons()},deep:!0}},onLoad:function(){this.isLogin?this.getUseCoupons():(0,a.toLogin)()},onReachBottom:function(){this.getUseCoupons()},methods:{onLoadFun:function(){this.getUseCoupons()},authColse:function(t){this.isShowAuth=t},getCoupon:function(t,e){var i=this,n=i.couponsList;(0,o.setCouponReceive)(t).then((function(t){n[e].is_use=!0,i.$set(i,"couponsList",n),i.$util.Tips({title:"领取成功"})})).catch((function(t){return i.$util.Tips({title:t})}))},getUseCoupons:function(){var t=this;return!this.loadend&&(!this.loading&&(t.loading=!0,t.loadTitle="加载更多",void(0,o.getCoupons)({type:t.type,page:t.page,limit:t.limit}).then((function(e){var i=e.data.list,n=i.length<t.limit,o=t.$util.SplitArray(i,t.couponsList);e.data.count.forEach((function(e,i){t.navList[i].count=e,e&&t.count++})),t.$set(t,"couponsList",o),t.loadend=n,t.loading=!1,t.loadTitle=n?"我也是有底线的":"加载更多",t.page=t.page+1})).catch((function(e){t.loading=!1,t.loadTitle="加载更多"}))))},setType:function(t){this.type!==t&&(this.type=t,this.couponsList=[],this.page=1,this.loadend=!1,this.getUseCoupons())}}};e.default=u},f497:function(t,e,i){"use strict";i.r(e);var n=i("f51e"),o=i("2178");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("f969");var s,c=i("f0c5"),r=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"a68dde36",null,!1,n["a"],s);e["default"]=r.exports},f51e:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{style:t.colorStyle},[i("v-uni-view",{staticStyle:{"touch-action":"none"}},[i("v-uni-view",{staticClass:"home",staticStyle:{position:"fixed"},style:{top:t.top+"px"},attrs:{id:"right-nav"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.setTouchMove.apply(void 0,arguments)}}},[t.homeActive?i("v-uni-view",{staticClass:"homeCon bg-color",class:!0===t.homeActive?"on":""},[i("v-uni-navigator",{staticClass:"iconfont icon-shouye-xianxing",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/index/index"}}),i("v-uni-navigator",{staticClass:"iconfont icon-caigou-xianxing",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/order_addcart/order_addcart"}}),i("v-uni-navigator",{staticClass:"iconfont icon-yonghu1",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/user/index"}})],1):t._e(),i("v-uni-view",{staticClass:"pictrueBox",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{staticClass:"image",attrs:{src:!0===t.homeActive?"/static/images/close.gif":"/static/images/open.gif"}})],1)],1)],1)],1)],1)},a=[]},f969:function(t,e,i){"use strict";var n=i("8c5c"),o=i.n(n);o.a}}]);