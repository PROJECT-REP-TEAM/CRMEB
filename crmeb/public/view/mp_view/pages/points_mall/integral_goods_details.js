(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/points_mall/integral_goods_details"],{"39ba":function(t,e,i){"use strict";(function(t){i("8b08");r(i("66fd"));var e=r(i("5b45"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("543d")["createPage"])},"5b45":function(t,e,i){"use strict";i.r(e);var r=i("f774"),u=i("d199");for(var o in u)"default"!==o&&function(t){i.d(e,t,(function(){return u[t]}))}(o);i("d01d");var s,n=i("f0c5"),a=Object(n["a"])(u["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],s);e["default"]=a.exports},c282:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,u=i("26cb"),o=i("dffe"),s=(i("26e4"),i("8061")),n=i("6be9"),a=(i("7b58"),c(i("5a44")));function c(t){return t&&t.__esModule?t:{default:t}}function l(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var h=getApp(),d=function(){i.e("components/productConSwiper/index").then(function(){return resolve(i("0b82"))}.bind(null,i)).catch(i.oe)},p=function(){i.e("pages/points_mall/component/productWindow").then(function(){return resolve(i("7e50"))}.bind(null,i)).catch(i.oe)},f=function(){i.e("components/userEvaluation/index").then(function(){return resolve(i("e60a"))}.bind(null,i)).catch(i.oe)},m=function(){Promise.all([i.e("common/vendor"),i.e("components/kefuIcon/index")]).then(function(){return resolve(i("baae"))}.bind(null,i)).catch(i.oe)},b=function(){i.e("components/Authorize").then(function(){return resolve(i("45d8"))}.bind(null,i)).catch(i.oe)},g=function(){Promise.all([i.e("common/vendor"),i.e("components/mp-html/mp-html")]).then(function(){return resolve(i("3710"))}.bind(null,i)).catch(i.oe)},$=function(){i.e("components/countDown/index").then(function(){return resolve(i("f9ca"))}.bind(null,i)).catch(i.oe)},S=function(){i.e("components/cus-previewImg/cus-previewImg").then(function(){return resolve(i("58bf"))}.bind(null,i)).catch(i.oe)},v=(r={computed:(0,u.mapGetters)(["isLogin"]),mixins:[a.default],data:function(){return{dataShow:0,id:0,time:0,countDownHour:"00",countDownMinute:"00",countDownSecond:"00",storeInfo:[],imgUrls:[],parameter:{navbar:"1",return:"1",title:"抢购详情页",color:!1},attribute:{cartAttr:!1,productAttr:[],productSelect:{}},productValue:[],isOpen:!1,attr:"请选择",attrValue:"",status:1,isAuto:!1,isShowAuth:!1,iShidden:!1,limitNum:1,iSplus:!1,replyCount:0,reply:[],replyChance:0,navH:"",navList:["商品","详情"],opacity:0,scrollY:0,topArr:[],toView:"",height:0,heightArr:[],lock:!1,scrollTop:0,tagStyle:{img:"width:100%;display:block;",table:"width:100%",video:"width:100%"},datatime:"",navActive:0,meunHeight:0,backH:"",posters:!1,weixinStatus:!1,posterImageStatus:!1,storeImage:"",PromotionCode:"",posterImage:"",actionSheetHidden:!1,cart_num:1,homeTop:20,returnShow:!0,H5ShareBox:!1,routineContact:0,skuArr:[],selectSku:{}}},components:{productConSwiper:d,productWindow:p,userEvaluation:f,kefuIcon:m,"jyf-parser":g,countDown:$,cusPreviewImg:S,authorize:b}},l(r,"computed",(0,u.mapGetters)(["isLogin"])),l(r,"watch",{isLogin:{handler:function(t,e){t&&this.getIntegralProductDetail()},deep:!0}}),l(r,"onLoad",(function(e){var i=this,r=this,u=getCurrentPages();r.returnShow=1!==u.length,t.getSystemInfo({success:function(t){r.height=t.windowHeight,t.statusBarHeight}}),this.isLogin&&(0,n.silenceBindingSpread)(),this.navH=h.globalData.navHeight;var o=t.getMenuButtonBoundingClientRect();if(this.meunHeight=o.height,this.backH=r.navH/2+this.meunHeight/2,e.scene){var a=this.$util.getUrlParams(decodeURIComponent(e.scene));if(!a.id)return this.$util.Tips({title:"缺少参数无法查看商品"},{tab:3,url:1});this.id=a.id,a.pid&&(h.globalData.spid=a.pid),a.time&&(this.datatime=a.time)}e.id&&(this.id=e.id,this.datatime=Number(e.time),this.status=e.status),this.isLogin?this.getIntegralProductDetail():(0,s.toLogin)(),this.$nextTick((function(){var e=t.getMenuButtonBoundingClientRect(),r=t.createSelectorQuery().in(i);r.select("#home").boundingClientRect((function(t){i.homeTop=2*e.top+e.height-t.height})).exec()}))})),l(r,"methods",{iptCartNum:function(t){this.$set(this.attribute.productSelect,"cart_num",t),this.$set(this,"cart_num",t)},returns:function(){t.navigateBack()},onLoadFun:function(t){this.isAuto&&(this.isAuto=!1,this.isShowAuth=!1,this.getIntegralProductDetail())},getIntegralProductDetail:function(){var e=this,i=this;(0,o.getIntegralProductDetail)(i.id).then((function(r){e.dataShow=1;var u=r.data.storeInfo.title;for(var o in e.storeInfo=r.data.storeInfo,e.imgUrls=r.data.storeInfo.images,e.storeInfo.description=e.storeInfo.description.replace(/<img/gi,'<img style="max-width:100%;height:auto;float:left;display:block" '),e.attribute.productAttr=r.data.productAttr,e.productValue=r.data.productValue,e.attribute.productSelect.num=r.data.storeInfo.num,e.replyCount=r.data.replyCount,e.reply=r.data.reply?[r.data.reply]:[],e.replyChance=r.data.replyChance,i.routineContact=r.data.routine_contact_type,r.data.productValue){var s=r.data.productValue[o];i.skuArr.push(s)}e.$set(e,"selectSku",i.skuArr[0]),t.setNavigationBarTitle({title:u.substring(0,7)+"..."}),i.DefaultSelect(),h.globalData.openPages="/pages/activity/goods_seckill_details/index?id="+i.id+"&time="+i.time+"&status="+i.status+"&scene="+i.storeInfo.uid})).catch((function(t){i.$util.Tips({title:t},{tab:3})}))},setShare:function(){this.$wechat.isWeixin()&&this.$wechat.wechatEvevt(["updateAppMessageShareData","updateTimelineShareData","onMenuShareAppMessage","onMenuShareTimeline"],{desc:this.storeInfo.info,title:this.storeInfo.title,link:location.href,imgUrl:this.storeInfo.image}).then((function(t){})).catch((function(t){}))},DefaultSelect:function(){var t=this,e=t.attribute.productAttr,i=[];for(var r in this.productValue)if(this.productValue[r].quota>0){i=this.attribute.productAttr.length?r.split(","):[];break}for(var u=0;u<e.length;u++)this.$set(e[u],"index",i[u]);var o=this.productValue[i.join(",")];o&&e.length?(t.$set(t.attribute.productSelect,"store_name",t.storeInfo.title),t.$set(t.attribute.productSelect,"image",o.image),t.$set(t.attribute.productSelect,"price",o.price),t.$set(t.attribute.productSelect,"stock",o.stock),t.$set(t.attribute.productSelect,"unique",o.unique),t.$set(t.attribute.productSelect,"quota",o.quota),t.$set(t.attribute.productSelect,"quota_show",o.quota_show),t.$set(t.attribute.productSelect,"product_stock",o.product_stock),t.$set(t.attribute.productSelect,"cart_num",1),t.$set(t,"attrValue",i.join(",")),t.attrValue=i.join(",")):!o&&e.length?(t.$set(t.attribute.productSelect,"store_name",t.storeInfo.title),t.$set(t.attribute.productSelect,"image",t.storeInfo.image),t.$set(t.attribute.productSelect,"price",t.storeInfo.price),t.$set(t.attribute.productSelect,"quota",0),t.$set(t.attribute.productSelect,"quota_show",0),t.$set(t.attribute.productSelect,"product_stock",0),t.$set(t.attribute.productSelect,"stock",0),t.$set(t.attribute.productSelect,"unique",""),t.$set(t.attribute.productSelect,"cart_num",0),t.$set(t,"attrValue",""),t.$set(t,"attrTxt","请选择")):o||e.length||(t.$set(t.attribute.productSelect,"store_name",t.storeInfo.title),t.$set(t.attribute.productSelect,"image",t.storeInfo.image),t.$set(t.attribute.productSelect,"price",t.storeInfo.price),t.$set(t.attribute.productSelect,"stock",t.storeInfo.stock),t.$set(t.attribute.productSelect,"quota",t.storeInfo.quota),t.$set(t.attribute.productSelect,"product_stock",t.storeInfo.product_stock),t.$set(t.attribute.productSelect,"unique",t.storeInfo.unique||""),t.$set(t.attribute.productSelect,"cart_num",1),t.$set(t.attribute.productSelect,"quota",o.quota),t.$set(t.attribute.productSelect,"product_stock",o.product_stock),t.$set(t,"attrValue",""),t.$set(t,"attrTxt","请选择"))},selecAttr:function(){this.attribute.cartAttr=!0},onMyEvent:function(){this.$set(this.attribute,"cartAttr",!1),this.$set(this,"isOpen",!1)},ChangeCartNum:function(t){var e=this.productValue[this.attrValue];if(this.cart_num&&(e.cart_num=this.cart_num,this.attribute.productSelect.cart_num=this.cart_num),void 0!==e||this.attribute.productAttr.length||(e=this.attribute.productSelect),void 0!==e){e.stock,e.quota_show,e.quota,e.product_stock;var i=this.attribute.productSelect;this.storeInfo.num;if(void 0==e.cart_num&&(e.cart_num=1),t)i.cart_num<this.attribute.productSelect.quota&&(i.cart_num++,this.$set(this.attribute.productSelect,"cart_num",i.cart_num),this.$set(this,"cart_num",i.cart_num),this.$set(this.attribute.productSelect,"cart_num",i.cart_num));else{if(1==i.cart_num)return;i.cart_num--,this.$set(this,"cart_num",i.cart_num),this.$set(this.attribute.productSelect,"cart_num",i.cart_num)}}},attrVal:function(t){this.attribute.productAttr[t.indexw].index=this.attribute.productAttr[t.indexw].attr_values[t.indexn]},ChangeAttr:function(t){this.$set(this,"cart_num",1);var e=this.productValue[t];this.$set(this,"selectSku",e),e?(this.$set(this.attribute.productSelect,"image",e.image),this.$set(this.attribute.productSelect,"price",e.price),this.$set(this.attribute.productSelect,"stock",e.stock),this.$set(this.attribute.productSelect,"unique",e.unique),this.$set(this.attribute.productSelect,"cart_num",1),this.$set(this.attribute.productSelect,"quota",e.quota),this.$set(this.attribute.productSelect,"quota_show",e.quota_show),this.$set(this,"attrValue",t),this.attrTxt="已选择"):(this.$set(this.attribute.productSelect,"image",this.storeInfo.image),this.$set(this.attribute.productSelect,"price",this.storeInfo.price),this.$set(this.attribute.productSelect,"stock",0),this.$set(this.attribute.productSelect,"unique",""),this.$set(this.attribute.productSelect,"cart_num",0),this.$set(this.attribute.productSelect,"quota",0),this.$set(this.attribute.productSelect,"quota_show",0),this.$set(this,"attrValue",""),this.attrTxt="已选择")},scroll:function(t){var e=this,i=t.detail.scrollTop,r=i/200;if(r=r>1?1:r,e.opacity=r,e.scrollY=i,e.lock)e.lock=!1;else for(var u=0;u<e.topArr.length;u++)if(i<e.topArr[u]-h.globalData.navHeight/2+e.heightArr[u]){e.navActive=u;break}},tap:function(t,e){var i=t.id,r=(e=e,this);this.toView=i,this.navActive=e,this.lock=!0,this.scrollTop=e>0?r.topArr[e]-h.globalData.navHeight/2:r.topArr[e]},showImg:function(t){this.$refs.cusPreviewImg.open(this.selectSku.suk)},changeSwitch:function(t){var e=this.skuArr[t];this.$set(this,"selectSku",e);var i=e.suk.split(",");this.$set(this.attribute.productAttr[0],"index",i[0]),2==i.length?(this.$set(this.attribute.productAttr[0],"index",i[0]),this.$set(this.attribute.productAttr[1],"index",i[1])):3==i.length?(this.$set(this.attribute.productAttr[0],"index",i[0]),this.$set(this.attribute.productAttr[1],"index",i[1]),this.$set(this.attribute.productAttr[2],"index",i[2])):4==i.length&&(this.$set(this.attribute.productAttr[0],"index",i[0]),this.$set(this.attribute.productAttr[1],"index",i[1]),this.$set(this.attribute.productAttr[2],"index",i[2]),this.$set(this.attribute.productAttr[3],"index",i[3])),e&&(this.$set(this.attribute.productSelect,"image",e.image),this.$set(this.attribute.productSelect,"price",e.price),this.$set(this.attribute.productSelect,"stock",e.stock),this.$set(this.attribute.productSelect,"unique",e.unique),this.$set(this.attribute.productSelect,"vipPrice",e.vipPrice),this.$set(this,"attrTxt","已选择"),this.$set(this,"attrValue",e.suk))},goCat:function(){var e=this.productValue[this.attrValue];return this.isOpen?this.attribute.cartAttr=!0:this.attribute.cartAttr=!this.attribute.cartAttr,!0===this.attribute.cartAttr&&0==this.isOpen?this.isOpen=!0:this.attribute.productAttr.length&&void 0===e&&1==this.isOpen?h.$util.Tips({title:"请选择属性"}):this.cart_num<=0?h.$util.Tips({title:"请选择数量"}):(this.isOpen=!1,void t.navigateTo({url:"/pages/points_mall/integral_order?unique=".concat(e.unique,"&num=").concat(this.cart_num||1)}))}}),r);e.default=v}).call(this,i("543d")["default"])},d01d:function(t,e,i){"use strict";var r=i("d41c"),u=i.n(r);u.a},d199:function(t,e,i){"use strict";i.r(e);var r=i("c282"),u=i.n(r);for(var o in r)"default"!==o&&function(t){i.d(e,t,(function(){return r[t]}))}(o);e["default"]=u.a},d41c:function(t,e,i){},f774:function(t,e,i){"use strict";i.d(e,"b",(function(){return u})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return r}));var r={cusPreviewImg:function(){return i.e("components/cus-previewImg/cus-previewImg").then(i.bind(null,"58bf"))}},u=function(){var t=this,e=t.$createElement,i=(t._self._c,t.attribute.productAttr.length&&t.skuArr.length>1?t.skuArr.slice(0,4):null);t.$mp.data=Object.assign({},{$root:{l0:i}})},o=[]}},[["39ba","common/runtime","common/vendor"]]]);