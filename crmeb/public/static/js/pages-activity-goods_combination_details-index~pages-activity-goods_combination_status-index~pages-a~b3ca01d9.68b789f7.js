(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-activity-goods_combination_details-index~pages-activity-goods_combination_status-index~pages-a~b3ca01d9"],{"1ae3":function(t,e,a){"use strict";a.r(e);var n=a("6f4e"),i=a("552f");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("53ff");var r,c=a("f0c5"),u=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"29841a29",null,!1,n["a"],r);e["default"]=u.exports},"53ff":function(t,e,a){"use strict";var n=a("76fb"),i=a.n(n);i.a},"552f":function(t,e,a){"use strict";a.r(e);var n=a("b08e"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},"6f4e":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{style:t.colorStyle},[n("v-uni-view",{staticClass:"product-window",class:(!0===t.attr.cartAttr?"on":"")+" "+(t.iSbnt?"join":"")+" "+(t.iScart?"joinCart":"")},[n("v-uni-view",{staticClass:"textpic acea-row row-between-wrapper"},[n("v-uni-view",{staticClass:"pictrue",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showImg()}}},[n("v-uni-image",{attrs:{src:t.attr.productSelect.image}})],1),n("v-uni-view",{staticClass:"text"},[n("v-uni-view",{staticClass:"line1"},[t._v(t._s(t.attr.productSelect.store_name))]),n("v-uni-view",{staticClass:"money font-color"},[n("v-uni-view",{staticClass:"acea-row row-middle"},[t._v("￥"),n("v-uni-text",{staticClass:"num"},[t._v(t._s(t.attr.productSelect.price))]),t.is_vip>0&&t.attr.productSelect.vip_price?n("v-uni-text",{staticClass:"vip-money"},[t._v("￥"+t._s(t.attr.productSelect.vip_price))]):t._e(),t.is_vip>0&&t.attr.productSelect.vip_price?n("v-uni-view",{staticClass:"vipImg"},[n("v-uni-image",{attrs:{src:a("8f2f")}})],1):t._e()],1),t.isShow?n("v-uni-text",{staticClass:"stock"},[t._v("库存: "+t._s(t.attr.productSelect.stock))]):t._e(),t.limitNum?n("v-uni-text",{staticClass:"stock"},[t._v(t._s(t.type?"库存":"限量")+": "+t._s(t.attr.productSelect.quota))]):t._e()],1)],1),n("v-uni-view",{staticClass:"iconfont icon-guanbi",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closeAttr.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"rollTop"},[n("v-uni-view",{staticClass:"productWinList"},t._l(t.attr.productAttr,(function(e,a){return n("v-uni-view",{key:a,staticClass:"item"},[n("v-uni-view",{staticClass:"title"},[t._v(t._s(e.attr_name))]),n("v-uni-view",{staticClass:"listn acea-row row-middle"},t._l(e.attr_value,(function(i,o){return n("v-uni-view",{key:o,staticClass:"itemn",class:e.index===i.attr?"on":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tapAttr(a,o)}}},[t._v(t._s(i.attr))])})),1)],1)})),1),n("v-uni-view",{staticClass:"cart acea-row row-between-wrapper"},[n("v-uni-view",{staticClass:"title"},[t._v("数量")]),n("v-uni-view",{staticClass:"carnum acea-row row-left"},[t.attr.productSelect.cart_num<=1?n("v-uni-view",{staticClass:"item reduce acea-row row-center-wrapper",class:t.attr.productSelect.cart_num<=1?"on":""},[n("v-uni-text",{staticClass:"iconfont icon-shangpinshuliang-jian"})],1):n("v-uni-view",{staticClass:"item reduce acea-row row-center-wrapper",class:t.attr.productSelect.cart_num<=1?"on":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.CartNumDes.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"iconfont icon-shangpinshuliang-jian"})],1),n("v-uni-view",{staticClass:"item num acea-row row-middle"},[n("v-uni-input",{attrs:{type:"number","data-name":"productSelect.cart_num"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.bindCode(t.attr.productSelect.cart_num)}},model:{value:t.attr.productSelect.cart_num,callback:function(e){t.$set(t.attr.productSelect,"cart_num",e)},expression:"attr.productSelect.cart_num"}})],1),t.iSplus?n("v-uni-view",{staticClass:"item plus acea-row row-center-wrapper",class:t.attr.productSelect.cart_num>=t.attr.productSelect.stock?"on":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.CartNumAdd.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"iconfont icon-shangpinshuliang-jia"})],1):n("v-uni-view",{staticClass:"item plus",class:t.attr.productSelect.cart_num>=t.attr.productSelect.quota||t.attr.productSelect.cart_num>=t.attr.productSelect.product_stock||t.attr.productSelect.cart_num>=t.attr.productSelect.num||"seckill"==t.type&&t.attr.productSelect.cart_num>=t.attr.productSelect.once_num?"on":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.CartNumAdd.apply(void 0,arguments)}}},[t._v("+")])],1)],1)],1),t.iSbnt&&t.attr.productSelect.product_stock>0&&t.attr.productSelect.quota>0?n("v-uni-view",{staticClass:"joinBnt bg-color",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goCat.apply(void 0,arguments)}}},[t._v("我要参团")]):t.iSbnt&&t.attr.productSelect.quota<=0||t.iSbnt&&t.attr.productSelect.product_stock<=0?n("v-uni-view",{staticClass:"joinBnt on"},[t._v("已售罄")]):t._e(),t.iScart&&t.attr.productSelect.stock?n("v-uni-view",{staticClass:"joinBnt bg-color",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goCat.apply(void 0,arguments)}}},[t._v("确定")]):t.iScart&&!t.attr.productSelect.stock?n("v-uni-view",{staticClass:"joinBnt on"},[t._v("已售罄")]):t._e()],1),n("v-uni-view",{staticClass:"mask",attrs:{hidden:!1===t.attr.cartAttr},on:{touchmove:function(e){e.preventDefault(),arguments[0]=e=t.$handleEvent(e)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.closeAttr.apply(void 0,arguments)}}})],1)},o=[]},"74a5":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.vip-money[data-v-29841a29]{color:#282828;font-size:%?28?%;font-weight:700;margin-left:%?6?%}.vipImg[data-v-29841a29]{width:%?68?%;height:%?27?%}.vipImg uni-image[data-v-29841a29]{width:100%;height:100%}.product-window[data-v-29841a29]{position:fixed;bottom:0;width:100%;left:0;background-color:#fff;z-index:100;border-radius:%?16?% %?16?% 0 0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);transition:all .3s cubic-bezier(.25,.5,.5,.9);padding-bottom:%?140?%;padding-bottom:calc(140rpx+ constant(safe-area-inset-bottom));padding-bottom:calc(%?140?% + env(safe-area-inset-bottom))}.product-window.on[data-v-29841a29]{-webkit-transform:translateZ(0);transform:translateZ(0)}.product-window.join[data-v-29841a29]{padding-bottom:%?30?%}.product-window.joinCart[data-v-29841a29]{padding-bottom:%?30?%;z-index:10000}.product-window .textpic[data-v-29841a29]{padding:0 %?130?% 0 %?30?%;margin-top:%?29?%;position:relative}.product-window .textpic .pictrue[data-v-29841a29]{width:%?150?%;height:%?150?%}.product-window .textpic .pictrue uni-image[data-v-29841a29]{width:100%;height:100%;border-radius:%?10?%}.product-window .textpic .text[data-v-29841a29]{width:%?410?%;font-size:%?32?%;color:#202020}.product-window .textpic .text .money[data-v-29841a29]{font-size:%?24?%;margin-top:%?40?%}.product-window .textpic .text .money .num[data-v-29841a29]{font-size:%?36?%}.product-window .textpic .text .money .stock[data-v-29841a29]{color:#999;margin-left:%?6?%}.product-window .textpic .iconfont[data-v-29841a29]{position:absolute;right:%?30?%;top:%?-5?%;font-size:%?35?%;color:#8a8a8a}.product-window .rollTop[data-v-29841a29]{max-height:%?500?%;overflow:auto;margin-top:%?36?%}.product-window .productWinList .item ~ .item[data-v-29841a29]{margin-top:%?36?%}.product-window .productWinList .item .title[data-v-29841a29]{font-size:%?30?%;color:#999;padding:0 %?30?%}.product-window .productWinList .item .listn[data-v-29841a29]{padding:0 %?30?% 0 %?16?%}.product-window .productWinList .item .listn .itemn[data-v-29841a29]{border:1px solid #f2f2f2;font-size:%?26?%;color:#282828;padding:%?7?% %?33?%;border-radius:%?25?%;margin:%?20?% 0 0 %?14?%;background-color:#f2f2f2}.product-window .productWinList .item .listn .itemn.on[data-v-29841a29]{color:var(--view-theme);background:var(--view-minorColorT);border-color:var(--view-theme)}.product-window .productWinList .item .listn .itemn.limit[data-v-29841a29]{color:#999;text-decoration:line-through}.product-window .cart[data-v-29841a29]{margin-top:%?36?%;padding:0 %?30?%}.product-window .cart .title[data-v-29841a29]{font-size:%?30?%;color:#999}.product-window .cart .carnum[data-v-29841a29]{height:%?54?%;margin-top:%?24?%}.product-window .cart .carnum .iconfont[data-v-29841a29]{font-size:%?25?%}.product-window .cart .carnum uni-view[data-v-29841a29]{width:%?84?%;text-align:center;height:100%;line-height:%?54?%;color:#282828;font-size:%?45?%}.product-window .cart .carnum .reduce[data-v-29841a29]{border-right:0;border-radius:%?6?% 0 0 %?6?%;line-height:%?48?%;font-size:%?60?%}.product-window .cart .carnum .reduce.on[data-v-29841a29]{color:#dedede}.product-window .cart .carnum .plus[data-v-29841a29]{border-left:0;border-radius:0 %?6?% %?6?% 0;line-height:%?46?%}.product-window .cart .carnum .plus.on[data-v-29841a29]{color:#dedede}.product-window .cart .carnum .num[data-v-29841a29]{background:#f2f2f2;color:#282828;font-size:%?28?%}.product-window .joinBnt[data-v-29841a29]{font-size:%?30?%;width:%?620?%;height:%?86?%;border-radius:%?50?%;text-align:center;line-height:%?86?%;color:#fff;margin:%?21?% auto 0 auto}.product-window .joinBnt.on[data-v-29841a29]{background-color:#bbb;color:#fff}',""]),t.exports=e},"76fb":function(t,e,a){var n=a("74a5");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("7b6c339b",n,!0,{sourceMap:!1,shadowMode:!1})},"8f2f":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAWCAYAAAC/kK73AAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAALqADAAQAAAABAAAAFgAAAADgC/V5AAAEaUlEQVRIDcVWXWhUVxD+7t64MWY3UUpt1C7ZrCn+NA+lfWmhBZtSGkRBUSmlLVQI5MEK2h8IQhv7YCkV+2ShoPSpxlKfLBbSomKfQoohiubHraklCfUniiTdotm4e3u+s8zduTe7SRNSPHDv3DPzzcx35sw5u04sFjsIBx0Ijcpo5VQkEoHjOAhL13UDemIER2wYL3PxEyl68ZE5Y8013Gw2eyEajZrM2KTBbsStMPMKEyQgTfDAXNv5refaf6F+jFHqcY0S5cjTxmHI+NLzPPtNqfVWaV5i51zbRT9fP4kblpY4lWHy3AIm1smJkzm3Vc9FLz56rnEL9bPJ1MsnTp0mryskeCGTeLoGO3c04s74Q0xOTvmLETvxLc0JPNNQi+s3JtDyagLxWBS3xh/YHXlraz02rq1BU2OtkXFsTNVgQyqOwT/+LrtjwkFkyVPAA2uId5AIKySPzCn/Gk5i4FoCm7f1WOLEaPvgueVIjzRgV1s/un9Yg2sjT6C1fcDGunj8FrJOI7KPlsLJmfbKe6ievgIPcXSlX8SRzrEZB5yx9WDjzxiZTOZgVVVVB8nk83lr5w5wzkE5kE5gQ+MocrmcndPO24L4rW+kEMkP4djJFdZuVmQrSYzE+/r0k/j+pxG72MItk8IX769FS/3P6Eq9hKvDE4F8zKvJF5hQGxqSREt+y/zAJ9fhRm6idXeTT4akaG97dwXykVU488sNnzDDi53fPOKyCNG3Hx2GU1GDXZvivp/kk9z05ShLnJXUTgzOh3rK7p4xTGVT2P12tcWJnnJ9fT/O/9bg+5tz7n/Tl4OS8bWfnUdivl3nEzwxHGWJ0yjgsKQzn1M/1iK5Jh3Ate97Dk5+Esc6R329ATOc9ZHE7Fgdl/b29xrgTt/E2d5/LFbskk/PS/Y4g7AS7GU6Se+Ge/7wV5fxzvYcDnz8Aj4/3Gvxm5srMJ55Hj0XL/l+pjsDRBh/z7a7aNuy0h5MmE1Y4j1A5dQ59N1rxtmeP/2DTrIc5KHPWFniBNIpTFrIU46OTeDO/Zfx5nYPh770sLquGvV1Qzh5Zp1NRv9CMv5YFSosye9mVuL2/SVwPLMoc6v82pc11+EyXPnd9LkB6zwSR1d+VuLMPlflT5yaxv7WfqxeFcMHe541lUnjo0+LVySTFSpe7HPGPdGVxXenhyxBkhSyIukXLhr9qCd+1h7XK6QTV06dlp8d6rb374d7m/DaKzmM3F4XsNPPOPHl663Kqou3VDguMTqPtvN7VuI2gQERGD79OujV9Hpsef0hnqq9hOOdk4HF0Y99Qu6SXOIyhsTV8ebKR+ycxCWJThpOcuToKJYvG8Qjrw7ffHt5RqUsa1VBxqRO4jC2xA9LQgWnZfB3lKjiKNxhxbntQ+lBysIv3sz/67YH2Yclenex/P5TxYW7rgx1ugK6Uhqn9cQvlt+8Km6zmher9rgrP6+KC3Fd0cWqoN4ZHV/r9Y4tqOKygMdaeSFRQi4toftfVMlkct5x/wVdnDQsdMc+ngAAAABJRU5ErkJggg=="},b08e:function(t,e,a){"use strict";var n=a("4ea4");a("a9e3"),a("ac1f"),a("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("c83f")),o={mixins:[i.default],props:{attr:{type:Object,default:function(){}},limitNum:{type:Number,value:0},isShow:{type:Number,value:0},iSbnt:{type:Number,value:0},iSplus:{type:Number,value:0},iScart:{type:Number,value:0},is_vip:{type:Number,value:0},type:{type:String,default:""}},data:function(){return{}},mounted:function(){},methods:{getpreviewImage:function(){uni.previewImage({urls:this.attr.productSelect.image.split(","),current:this.attr.productSelect.image})},goCat:function(){this.$emit("goCat")},bindCode:function(t){this.$emit("iptCartNum",this.attr.productSelect.cart_num)},closeAttr:function(){this.$emit("myevent")},CartNumDes:function(){this.$emit("ChangeCartNum",!1)},CartNumAdd:function(){this.$emit("ChangeCartNum",!0)},tapAttr:function(t,e){var a=this;a.$emit("attrVal",{indexw:t,indexn:e}),this.$set(this.attr.productAttr[t],"index",this.attr.productAttr[t].attr_values[e]);var n=a.getCheckedValue().join(",");a.$emit("ChangeAttr",n)},getCheckedValue:function(){for(var t=this.attr.productAttr,e=[],a=0;a<t.length;a++)for(var n=0;n<t[a].attr_values.length;n++)t[a].index===t[a].attr_values[n]&&e.push(t[a].attr_values[n]);return e},showImg:function(){this.$emit("getImg")}}};e.default=o},f15c:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.getProductDetail=o,e.getProductCode=r,e.collectAdd=c,e.collectDel=u,e.postCartAdd=d,e.getCategoryList=s,e.getProductslist=l,e.getProductHot=p,e.collectAll=v,e.getGroomList=f,e.getCollectUserList=m,e.getReplyList=w,e.getReplyConfig=g,e.getSearchKeyword=h,e.storeListApi=A,e.storeDiscountsList=b,e.postCartNum=C,e.getAttr=S,e.getHomeProducts=x,e.getPresellProductDetail=_;var i=n(a("9011"));function o(t){return i.default.get("product/detail/"+t,{},{noAuth:!0})}function r(t){return i.default.get("product/code/"+t,{})}function c(t,e){return i.default.post("collect/add",{id:t,product:void 0===e?"product":e})}function u(t,e){return i.default.post("collect/del",{id:t,category:void 0===e?"product":e})}function d(t){return i.default.post("cart/add",t)}function s(){return i.default.get("category",{},{noAuth:!0})}function l(t){return i.default.get("products",t,{noAuth:!0})}function p(t,e){return i.default.get("product/hot",{page:void 0===t?1:t,limit:void 0===e?4:e},{noAuth:!0})}function v(t,e){return i.default.post("collect/all",{id:t,category:void 0===e?"product":e})}function f(t,e){return i.default.get("groom/list/"+t,e,{noAuth:!0})}function m(t){return i.default.get("collect/user",t)}function w(t,e){return i.default.get("reply/list/"+t,e)}function g(t){return i.default.get("reply/config/"+t)}function h(){return i.default.get("search/keyword",{},{noAuth:!0})}function A(t){return i.default.get("store_list",t)}function b(t){return i.default.get("store_discounts/list/"+t,{},{noAuth:!0})}function C(t){return i.default.post("v2/set_cart_num",t)}function S(t,e){return i.default.get("v2/get_attr/"+t+"/"+e)}function x(t){return i.default.get("home/products",t,{noAuth:!0})}function _(t){return i.default.get("advance/detail/"+t)}}}]);