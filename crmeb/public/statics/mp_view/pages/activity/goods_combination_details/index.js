(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/activity/goods_combination_details/index"],{"17a6":function(t,e,i){"use strict";(function(t){i("6e38");o(i("66fd"));var e=o(i("23a7"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=i,t(e.default)}).call(this,i("543d")["createPage"])},"23a7":function(t,e,i){"use strict";i.r(e);var o=i("7d54"),n=i("533f");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("44b1");var s,a=i("f0c5"),u=Object(a["a"])(n["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],s);e["default"]=u.exports},3742:function(t,e,i){},"44b1":function(t,e,i){"use strict";var o=i("3742"),n=i.n(o);n.a},"533f":function(t,e,i){"use strict";i.r(e);var o=i("974b"),n=i.n(o);for(var r in o)"default"!==r&&function(t){i.d(e,t,(function(){return o[t]}))}(r);e["default"]=n.a},"7d54":function(t,e,i){"use strict";var o;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return o}));var n=function(){var t=this,e=t.$createElement,i=(t._self._c,t.attribute.productAttr.length&&t.skuArr.length>1?t.skuArr.slice(0,4):null);t._isMounted||(t.e0=function(e){t.H5ShareBox=!1}),t.$mp.data=Object.assign({},{$root:{l0:i}})},r=[]},"974b":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i("26cb"),n=i("c6cd"),r=i("4f72"),s=i("f15c"),a=(i("1346"),i("3474")),u=l(i("c83f")),c=i("7402");function l(t){return t&&t.__esModule?t:{default:t}}var h=getApp(),d=function(){i.e("components/Authorize").then(function(){return resolve(i("420f"))}.bind(null,i)).catch(i.oe)},p=function(){i.e("components/productConSwiper/index").then(function(){return resolve(i("86c2"))}.bind(null,i)).catch(i.oe)},f=function(){i.e("components/productWindow/index").then(function(){return resolve(i("1ae3"))}.bind(null,i)).catch(i.oe)},m=function(){i.e("components/userEvaluation/index").then(function(){return resolve(i("7a68"))}.bind(null,i)).catch(i.oe)},g=function(){i.e("components/countDown/index").then(function(){return resolve(i("2a88"))}.bind(null,i)).catch(i.oe)},b=function(){Promise.all([i.e("common/vendor"),i.e("components/kefuIcon/index")]).then(function(){return resolve(i("1a3e"))}.bind(null,i)).catch(i.oe)},$=function(){Promise.all([i.e("common/vendor"),i.e("components/jyf-parser/jyf-parser")]).then(function(){return resolve(i("9902"))}.bind(null,i)).catch(i.oe)},v=function(){i.e("components/cusPreviewImg/index").then(function(){return resolve(i("4a8b"))}.bind(null,i)).catch(i.oe)},S=function(){i.e("components/menuIcon").then(function(){return resolve(i("92ca"))}.bind(null,i)).catch(i.oe)},_=function(){i.e("components/homeList/index").then(function(){return resolve(i("a02b"))}.bind(null,i)).catch(i.oe)},I=t.getSystemInfoSync().statusBarHeight+"px",A={components:{productConSwiper:p,kefuIcon:b,authorize:d,"product-window":f,userEvaluation:m,countDown:g,cusPreviewImg:v,parser:$,menuIcon:S,homeList:_},computed:(0,o.mapGetters)({isLogin:"isLogin",userData:"userInfo"}),mixins:[u.default,c.sharePoster],data:function(){return{dataShow:0,navH:"",id:0,userInfo:{},itemNew:[],indicatorDots:!1,circular:!0,autoplay:!0,interval:3e3,duration:500,attribute:{cartAttr:!1,productAttr:[],productSelect:{}},productValue:[],isOpen:!1,attr:"请选择",attrValue:"",AllIndex:2,maxAllIndex:0,replyChance:"",limitNum:1,timeer:null,iSplus:!1,navList:["商品","评价","详情"],opacity:0,scrollY:0,topArr:[],toView:"",height:0,heightArr:[],lock:!1,scrollTop:0,storeInfo:{},pink_ok_sum:0,pink:[],replyCount:0,reply:[],imgUrls:[],sharePacket:"",tagStyle:{img:"width:100%;display:block;",table:"width:100%",video:"width:100%"},posters:!1,weixinStatus:!1,posterImageStatus:!1,canvasStatus:!1,storeImage:"",PromotionCode:"",posterImage:"",posterbackgd:"/static/images/posterbackgd.png",navActive:0,actionSheetHidden:!1,attrTxt:"",cart_num:"",isAuto:!1,isShowAuth:!1,AllIndexDefault:0,homeTop:20,returnShow:!0,H5ShareBox:!1,routineContact:0,skuArr:[],selectSku:{},showMenuIcon:!1,currentPage:!1,sysHeight:I}},watch:{isLogin:{handler:function(t,e){t&&(this.downloadFilePromotionCode(),this.combinationDetail())},deep:!0}},onLoad:function(e){var i=this,o=this,r=getCurrentPages();if(o.returnShow=1!==r.length,this.$nextTick((function(){var e=t.getMenuButtonBoundingClientRect(),o=t.createSelectorQuery().in(i);o.select("#home").boundingClientRect((function(t){i.homeTop=2*e.top+e.height-t.height})).exec()})),this.navH=h.globalData.navHeight,t.getSystemInfo({success:function(t){o.height=t.windowHeight}}),e.scene){var s=this.$util.getUrlParams(decodeURIComponent(e.scene));s.id&&(e.id=s.id),s.pid&&(h.globalData.spid=s.pid)}if(!e.id&&!e.scene)return this.$util.Tips({title:"缺少参数无法查看商品"},{tab:3,url:1});if(e.spid&&(h.globalData.spid=e.spid),e.hasOwnProperty("id"))this.id=e.id,this.isLogin?this.combinationDetail():(this.$Cache.set("login_back_url","/pages/activity/goods_combination_details/index?id=".concat(e.id)),(0,n.toLogin)());else try{var a=t.getStorageSync("comGoodsId");""!=a&&(this.id=a,this.combinationDetail())}catch(u){t.showToast({title:"参数错误",icon:"none",duration:1e3,mask:!0})}},methods:{moreNav:function(){this.currentPage=!this.currentPage},qrR:function(t){},showAll:function(){this.AllIndexDefault=this.AllIndex,this.AllIndex=this.pink.length},hideAll:function(){this.AllIndex=this.AllIndexDefault},authColse:function(t){this.isShowAuth=t},iptCartNum:function(t){this.$set(this.attribute.productSelect,"cart_num",t),this.$set(this,"cart_num",t)},returns:function(){return t.navigateBack({delta:1})},combinationDetail:function(){var e=this,i=e.id;(0,r.getCombinationDetail)(i).then((function(i){for(var o in e.dataShow=1,t.setNavigationBarTitle({title:i.data.storeInfo.title.substring(0,16)}),e.imgUrls=i.data.storeInfo.images,e.storeInfo=i.data.storeInfo,e.storeInfo.description=e.storeInfo.description.replace(/<img/gi,'<img style="max-width:100%;height:auto;float:left;display:block" '),e.attribute.productSelect.num=i.data.storeInfo.num,e.pink=i.data.pink,e.pindAll=i.data.pindAll,e.reply=i.data.reply?[i.data.reply]:[],e.replyCount=i.data.replyCount,e.itemNew=i.data.pink_ok_list,e.pink_ok_sum=i.data.pink_ok_sum,e.replyChance=i.data.replyChance,e.attribute.productAttr=i.data.productAttr,e.productValue=i.data.productValue,e.routineContact=Number(i.data.routine_contact_type),i.data.productValue){var n=i.data.productValue[o];e.skuArr.push(n)}e.$set(e,"selectSku",e.skuArr[0]);var r=["商品","详情"];i.data.replyCount&&r.splice(1,0,"评价"),e.$set(e,"navList",r),e.storeImage=e.storeInfo.image,e.downloadFilestoreImage(),e.DefaultSelect(),setTimeout((function(){e.infoScroll()}),500)})).catch((function(t){e.$util.Tips({title:t},{tab:3})}))},downloadFileAppCode:function(){var e=this;t.downloadFile({url:e.setDomain(e.PromotionCode),success:function(t){e.PromotionCode=t.tempFilePath},fail:function(){return e.$util.Tips({title:""})}})},DefaultSelect:function(){var t=this,e=t.attribute.productAttr,i=[];for(var o in this.productValue)if(this.productValue[o].quota>0){i=this.attribute.productAttr.length?o.split(","):[];break}for(var n=0;n<e.length;n++)this.$set(e[n],"index",i[n]);var r=t.productValue[i.join(",")];r&&e.length?(t.$set(t.attribute.productSelect,"store_name",t.storeInfo.title),t.$set(t.attribute.productSelect,"image",r.image),t.$set(t.attribute.productSelect,"price",r.price),t.$set(t.attribute.productSelect,"stock",r.stock),t.$set(t.attribute.productSelect,"unique",r.unique),t.$set(t.attribute.productSelect,"quota",r.quota),t.$set(t.attribute.productSelect,"quota_show",r.quota_show),t.$set(t.attribute.productSelect,"product_stock",r.product_stock),t.$set(t.attribute.productSelect,"cart_num",1),t.$set(t,"attrValue",i.join(",")),t.attrValue=i.join(",")):!r&&e.length?(t.$set(t.attribute.productSelect,"store_name",t.storeInfo.title),t.$set(t.attribute.productSelect,"image",t.storeInfo.image),t.$set(t.attribute.productSelect,"price",t.storeInfo.price),t.$set(t.attribute.productSelect,"quota",0),t.$set(t.attribute.productSelect,"quota_show",0),t.$set(t.attribute.productSelect,"product_stock",0),t.$set(t.attribute.productSelect,"stock",0),t.$set(t.attribute.productSelect,"unique",""),t.$set(t.attribute.productSelect,"cart_num",0),t.$set(t,"attrValue",""),t.$set(t,"attrTxt","请选择")):r||e.length||(t.$set(t.attribute.productSelect,"store_name",t.storeInfo.title),t.$set(t.attribute.productSelect,"image",t.storeInfo.image),t.$set(t.attribute.productSelect,"price",t.storeInfo.price),t.$set(t.attribute.productSelect,"stock",t.storeInfo.stock),t.$set(t.attribute.productSelect,"quota",0),t.$set(t.attribute.productSelect,"product_stock",0),t.$set(t.attribute.productSelect,"unique",t.storeInfo.unique||""),t.$set(t.attribute.productSelect,"cart_num",1),t.$set(t,"attrValue",""),t.$set(t,"attrTxt","请选择"))},infoScroll:function(){for(var e=this,i=[],o=[],n=0;n<e.navList.length;n++){var r=t.createSelectorQuery().in(this),s="#past"+n;this.replyCount||1!=n||(s="#past2"),r.select(s).boundingClientRect(),r.exec((function(t){var n=t[0].top,r=t[0].height;i.push(n),o.push(r),e.topArr=i,e.heightArr=o}))}},onLoadFun:function(t){this.userInfo=t,h.globalData.openPages="/pages/activity/goods_combination_details/index?id="+this.id+"&spid="+t.uid,this.combinationDetail()},selecAttr:function(){this.attribute.cartAttr=!0},onMyEvent:function(){this.$set(this.attribute,"cartAttr",!1),this.$set(this,"isOpen",!1)},ChangeCartNum:function(t){var e=this.productValue[this.attrValue];if(this.cart_num&&(e.cart_num=this.cart_num,this.attribute.productSelect.cart_num=this.cart_num),void 0!==e||this.attribute.productAttr.length||(e=this.attribute.productSelect),void 0!==e){e.stock,e.quota_show;var i=e.quota||0,o=e.product_stock||0,n=this.attribute.productSelect,r=this.storeInfo.num||0;if(void 0==e.cart_num&&(e.cart_num=1),t){n.cart_num++;var s=[];s.push(r),s.push(i),s.push(o);var a=Math.min.apply(null,s);n.cart_num>=a&&(this.$set(this.attribute.productSelect,"cart_num",a||1),this.$set(this,"cart_num",a||1)),this.$set(this,"cart_num",n.cart_num),this.$set(this.attribute.productSelect,"cart_num",n.cart_num)}else n.cart_num--,n.cart_num<1&&(this.$set(this.attribute.productSelect,"cart_num",1),this.$set(this,"cart_num",1)),this.$set(this,"cart_num",n.cart_num),this.$set(this.attribute.productSelect,"cart_num",n.cart_num)}},attrVal:function(t){this.attribute.productAttr[t.indexw].index=this.attribute.productAttr[t.indexw].attr_values[t.indexn]},ChangeAttr:function(t){this.$set(this,"cart_num",1);var e=this.productValue[t];this.$set(this,"selectSku",e),e?(this.$set(this.attribute.productSelect,"image",e.image),this.$set(this.attribute.productSelect,"price",e.price),this.$set(this.attribute.productSelect,"stock",e.stock),this.$set(this.attribute.productSelect,"unique",e.unique),this.$set(this.attribute.productSelect,"cart_num",1),this.$set(this.attribute.productSelect,"quota",e.quota),this.$set(this.attribute.productSelect,"quota_show",e.quota_show),this.$set(this,"attrValue",t),this.attrTxt="已选择"):(this.$set(this.attribute.productSelect,"image",this.storeInfo.image),this.$set(this.attribute.productSelect,"price",this.storeInfo.price),this.$set(this.attribute.productSelect,"stock",0),this.$set(this.attribute.productSelect,"unique",""),this.$set(this.attribute.productSelect,"cart_num",0),this.$set(this.attribute.productSelect,"quota",0),this.$set(this.attribute.productSelect,"quota_show",0),this.$set(this,"attrValue",""),this.attrTxt="已选择")},goProduct:function(){t.navigateTo({url:"/pages/goods_details/index?id="+this.storeInfo.product_id})},goCat:function(){var e=this;this.currentPage=!1;var i=this.productValue[this.attrValue];if(this.isOpen?this.attribute.cartAttr=!0:this.attribute.cartAttr=!this.attribute.cartAttr,!0===this.attribute.cartAttr&&0==this.isOpen)return this.isOpen=!0;if(this.attribute.productAttr.length&&void 0===i&&1==this.isOpen)return e.$util.Tips({title:"请选择属性"});var o={productId:e.storeInfo.product_id,secKillId:0,bargainId:0,combinationId:e.id,cartNum:e.cart_num,uniqueId:void 0!==i?i.unique:"",is_new:1};(0,s.postCartAdd)(o).then((function(i){e.isOpen=!1,t.navigateTo({url:"/pages/users/order_confirm/index?new=1&cartId="+i.data.cartId})})).catch((function(e){t.showToast({title:e,icon:"none"})}))},setCollect:function(){var t=this;this.storeInfo.userCollect?(0,s.collectDel)([this.storeInfo.product_id]).then((function(e){t.storeInfo.userCollect=!t.storeInfo.userCollect})):(0,s.collectAdd)(this.storeInfo.product_id).then((function(e){t.storeInfo.userCollect=!t.storeInfo.userCollect}))},open:function(t){this.showMenuIcon=t},listenerActionSheet:function(){this.currentPage=!1,0==this.isLogin?(0,n.toLogin)():this.posters=!0},listenerActionClose:function(){this.posters=!1},posterImageClose:function(){this.posterImageStatus=!1},setDomain:function(t){return t=t?t.toString():"",t.indexOf("https://")>-1?t:t.replace("http://","https://")},downloadFilePromotionCode:function(e){var i=this;(0,r.scombinationCode)(i.id).then((function(o){t.downloadFile({url:i.setDomain(o.data.code),success:function(t){i.$set(i,"isDown",!1),"function"==typeof e?e&&e(t.tempFilePath):i.$set(i,"PromotionCode",t.tempFilePath)},fail:function(){i.$set(i,"isDown",!1),i.$set(i,"PromotionCode","")}})})).catch((function(t){i.$set(i,"isDown",!1),i.$set(i,"PromotionCode","")}))},goFriend:function(){this.posters=!1},savePosterPath:function(){var e=this;t.getSetting({success:function(i){i.authSetting["scope.writePhotosAlbum"]?t.saveImageToPhotosAlbum({filePath:e.posterImage,success:function(t){e.posterImageClose(),e.$util.Tips({title:"保存成功",icon:"success"})},fail:function(t){e.$util.Tips({title:"保存失败"})}}):t.authorize({scope:"scope.writePhotosAlbum",success:function(){t.saveImageToPhotosAlbum({filePath:e.posterImage,success:function(t){e.posterImageClose(),e.$util.Tips({title:"保存成功",icon:"success"})},fail:function(t){e.$util.Tips({title:"保存失败"})}})}})}})},setShareInfoStatus:function(){var t=this,e=this.storeInfo,i=location.href;this.$wechat.isWeixin()&&(0,a.getUserInfo)().then((function(o){i=-1===i.indexOf("?")?i+"?spread="+o.data.uid:i+"&spread="+o.data.uid;var n={desc:e.store_info,title:e.store_name,link:i,imgUrl:e.image};t.$wechat.wechatEvevt(["updateAppMessageShareData","updateTimelineShareData"],n)}))},scroll:function(t){var e=this,i=t.detail.scrollTop,o=i/200;if(o=o>1?1:o,e.opacity=o,e.scrollY=i,e.$set(e,"showMenuIcon",!1),e.lock)e.lock=!1;else for(var n=0;n<e.topArr.length;n++)if(i<e.topArr[n]-h.globalData.navHeight/2+e.heightArr[n]){e.navActive=n;break}},tap:function(t,e){var i=t.id,o=(e=e,this);this.replyCount||"past1"!=i||(i="past2"),this.toView=i,this.navActive=e,this.lock=!0,this.scrollTop=e>0?o.topArr[e]-h.globalData.navHeight/2:o.topArr[e]},showImg:function(t){this.$refs.cusPreviewImg.open(this.selectSku.suk)},changeSwitch:function(t){var e=this.skuArr[t];this.$set(this,"selectSku",e);var i=e.suk.split(",");this.$set(this.attribute.productAttr[0],"index",i[0]),2==i.length?(this.$set(this.attribute.productAttr[0],"index",i[0]),this.$set(this.attribute.productAttr[1],"index",i[1])):3==i.length?(this.$set(this.attribute.productAttr[0],"index",i[0]),this.$set(this.attribute.productAttr[1],"index",i[1]),this.$set(this.attribute.productAttr[2],"index",i[2])):4==i.length&&(this.$set(this.attribute.productAttr[0],"index",i[0]),this.$set(this.attribute.productAttr[1],"index",i[1]),this.$set(this.attribute.productAttr[2],"index",i[2]),this.$set(this.attribute.productAttr[3],"index",i[3])),e&&(this.$set(this.attribute.productSelect,"image",e.image),this.$set(this.attribute.productSelect,"price",e.price),this.$set(this.attribute.productSelect,"stock",e.stock),this.$set(this.attribute.productSelect,"unique",e.unique),this.$set(this.attribute.productSelect,"vipPrice",e.vipPrice),this.$set(this,"attrTxt","已选择"),this.$set(this,"attrValue",e.suk))}},onShareAppMessage:function(){return{title:this.storeInfo.title,path:h.globalData.openPages,imageUrl:this.storeInfo.image}}};e.default=A}).call(this,i("543d")["default"])}},[["17a6","common/runtime","common/vendor"]]]);