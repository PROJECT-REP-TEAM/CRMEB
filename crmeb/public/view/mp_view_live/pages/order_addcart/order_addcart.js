(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order_addcart/order_addcart"],{"3ad1":function(t,e,i){"use strict";i.r(e);var a=i("e9f8"),r=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=r.a},"3f92":function(t,e,i){"use strict";i.r(e);var a=i("6e74"),r=i("3ad1");for(var n in r)"default"!==n&&function(t){i.d(e,t,(function(){return r[t]}))}(n);i("57a6"),i("4f67");var c,s=i("f0c5"),o=Object(s["a"])(r["default"],a["b"],a["c"],!1,null,"33b52e90",null,!1,a["a"],c);e["default"]=o.exports},"439c":function(t,e,i){},"4a48":function(t,e,i){},"4f67":function(t,e,i){"use strict";var a=i("439c"),r=i.n(a);r.a},"57a6":function(t,e,i){"use strict";var a=i("4a48"),r=i.n(a);r.a},"6e74":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var r=function(){var t=this,e=t.$createElement;t._self._c},n=[]},"9d22":function(t,e,i){"use strict";(function(t){i("4acb");a(i("66fd"));var e=a(i("3f92"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("543d")["createPage"])},e9f8:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a,r=l(i("a34a")),n=i("7513"),c=i("ac7d"),s=i("182f"),o=i("26cb"),u=l(i("db1b"));i("ffa8");function l(t){return t&&t.__esModule?t:{default:t}}function d(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function h(t,e,i,a,r,n,c){try{var s=t[n](c),o=s.value}catch(u){return void i(u)}s.done?e(o):Promise.resolve(o).then(a,r)}function f(t){return function(){var e=this,i=arguments;return new Promise((function(a,r){var n=t.apply(e,i);function c(t){h(n,a,r,c,s,"next",t)}function s(t){h(n,a,r,c,s,"throw",t)}c(void 0)}))}}var p=0,v=function(){Promise.all([i.e("common/vendor"),i.e("pages/index/components/tabBar")]).then(function(){return resolve(i("7e99"))}.bind(null,i)).catch(i.oe)},m=function(){Promise.all([i.e("common/vendor"),i.e("components/recommend/index")]).then(function(){return resolve(i("9894"))}.bind(null,i)).catch(i.oe)},g=function(){i.e("components/productWindow/index").then(function(){return resolve(i("128b"))}.bind(null,i)).catch(i.oe)},S=function(){i.e("components/Authorize").then(function(){return resolve(i("65d8"))}.bind(null,i)).catch(i.oe)},$=function(){Promise.all([i.e("common/vendor"),i.e("components/pageFooter/index")]).then(function(){return resolve(i("41ac"))}.bind(null,i)).catch(i.oe)},_={components:{pageFooter:$,recommend:m,productWindow:g,tabBar:v,authorize:S},mixins:[u.default],data:function(){return{canShow:!1,cartCount:0,goodsHidden:!0,footerswitch:!0,hostProduct:[],cartList:{valid:[],invalid:[]},isAllSelect:!1,selectValue:[],selectCountPrice:0,isAuto:!1,isShowAuth:!1,hotScroll:!1,hotPage:1,hotLimit:10,loading:!1,loadend:!1,loadTitle:"我也是有底线的",page:1,limit:20,loadingInvalid:!1,loadendInvalid:!1,loadTitleInvalid:"加载更多",pageInvalid:1,limitInvalid:20,attr:{cartAttr:!1,productAttr:[],productSelect:{}},productValue:[],storeInfo:{},attrValue:"",attrTxt:"请选择",cartId:0,product_id:0,sysHeight:p,footerSee:!1,newData:{},activeRouter:""}},computed:(0,o.mapGetters)(["isLogin"]),onLoad:function(e){t.hideTabBar();var i=this;0==i.isLogin&&(0,s.toLogin)();var a=getCurrentPages(),r=a[a.length-1].route;this.activeRouter="/"+r},onShow:function(){this.canShow=!1,1==this.isLogin&&(this.hotPage=1,this.hostProduct=[],this.hotScroll=!1,this.getHostProduct(),this.loadend=!1,this.page=1,this.cartList.valid=[],this.getCartList(),this.loadendInvalid=!1,this.pageInvalid=1,this.cartList.invalid=[],this.getInvalidList(),this.getCartNum(),this.goodsHidden=!0,this.footerswitch=!0,this.hostProduct=[],this.hotScroll=!1,this.hotPage=1,this.hotLimit=10,this.cartList={valid:[],invalid:[]},this.isAllSelect=!1,this.selectValue=[],this.selectCountPrice=0,this.cartCount=0,this.isShowAuth=!1)},methods:(a={authColse:function(t){this.isShowAuth=t},reGoCat:function(){var t=this,e=t.productValue[this.attrValue];if(t.attr.productAttr.length&&void 0===e)return t.$util.Tips({title:"产品库存不足，请选择其它"});var i={id:t.cartId,product_id:t.product_id,num:t.attr.productSelect.cart_num,unique:void 0!==t.attr.productSelect?t.attr.productSelect.unique:""};(0,n.getResetCart)(i).then((function(e){t.attr.cartAttr=!1,t.$util.Tips({title:"添加购物车成功",success:function(){t.loadend=!1,t.page=1,t.cartList.valid=[],t.getCartList(),t.getCartNum()}})})).catch((function(e){return t.$util.Tips({title:e.msg})}))},onMyEvent:function(){this.$set(this.attr,"cartAttr",!1)},reElection:function(t){this.getGoodsDetails(t)},getGoodsDetails:function(e){t.showLoading({title:"加载中",mask:!0});var i=this;i.cartId=e.id,i.product_id=e.product_id,(0,c.getProductDetail)(e.product_id).then((function(e){t.hideLoading(),i.attr.cartAttr=!0;var a=e.data.storeInfo;i.$set(i,"storeInfo",a),i.$set(i.attr,"productAttr",e.data.productAttr),i.$set(i,"productValue",e.data.productValue),i.DefaultSelect()})).catch((function(e){t.hideLoading()}))},ChangeAttr:function(t){var e=this.productValue[t];e&&e.stock>0?(this.$set(this.attr.productSelect,"image",e.image),this.$set(this.attr.productSelect,"price",e.price),this.$set(this.attr.productSelect,"stock",e.stock),this.$set(this.attr.productSelect,"unique",e.unique),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"attrValue",t),this.$set(this,"attrTxt","已选择")):(this.$set(this.attr.productSelect,"image",this.storeInfo.image),this.$set(this.attr.productSelect,"price",this.storeInfo.price),this.$set(this.attr.productSelect,"stock",0),this.$set(this.attr.productSelect,"unique",""),this.$set(this.attr.productSelect,"cart_num",0),this.$set(this,"attrValue",""),this.$set(this,"attrTxt","请选择"))},DefaultSelect:function(){var t=this.attr.productAttr,e=[];for(var i in this.productValue)if(this.productValue[i].stock>0){e=this.attr.productAttr.length?i.split(","):[];break}for(var a=0;a<t.length;a++)this.$set(t[a],"index",e[a]);var r=this.productValue[e.sort().join(",")];r&&t.length?(this.$set(this.attr.productSelect,"store_name",this.storeInfo.store_name),this.$set(this.attr.productSelect,"image",r.image),this.$set(this.attr.productSelect,"price",r.price),this.$set(this.attr.productSelect,"stock",r.stock),this.$set(this.attr.productSelect,"unique",r.unique),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"attrValue",e.sort().join(",")),this.$set(this,"attrTxt","已选择")):!r&&t.length?(this.$set(this.attr.productSelect,"store_name",this.storeInfo.store_name),this.$set(this.attr.productSelect,"image",this.storeInfo.image),this.$set(this.attr.productSelect,"price",this.storeInfo.price),this.$set(this.attr.productSelect,"stock",0),this.$set(this.attr.productSelect,"unique",""),this.$set(this.attr.productSelect,"cart_num",0),this.$set(this,"attrValue",""),this.$set(this,"attrTxt","请选择")):r||t.length||(this.$set(this.attr.productSelect,"store_name",this.storeInfo.store_name),this.$set(this.attr.productSelect,"image",this.storeInfo.image),this.$set(this.attr.productSelect,"price",this.storeInfo.price),this.$set(this.attr.productSelect,"stock",this.storeInfo.stock),this.$set(this.attr.productSelect,"unique",this.storeInfo.unique||""),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"attrValue",""),this.$set(this,"attrTxt","请选择"))},attrVal:function(t){this.$set(this.attr.productAttr[t.indexw],"index",this.attr.productAttr[t.indexw].attr_values[t.indexn])},ChangeCartNum:function(t){var e=this.productValue[this.attrValue];if(void 0!==e||this.attr.productAttr.length||(e=this.attr.productSelect),void 0!==e){var i=e.stock||0,a=this.attr.productSelect;t?(a.cart_num++,a.cart_num>i&&(this.$set(this.attr.productSelect,"cart_num",i||1),this.$set(this,"cart_num",i||1))):(a.cart_num--,a.cart_num<1&&(this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"cart_num",1)))}},iptCartNum:function(t){this.$set(this.attr.productSelect,"cart_num",t)},subDel:function(t){var e=this,i=e.selectValue;if(!(i.length>0))return e.$util.Tips({title:"请选择产品"});(0,n.cartDel)(i).then((function(t){e.loadend=!1,e.page=1,e.cartList.valid=[],e.getCartList(),e.getCartNum()}))},getSelectValueProductId:function(){var t=this,e=t.cartList.valid,i=t.selectValue,a=[];if(i.length>0)for(var r in e)t.inArray(e[r].id,i)&&a.push(e[r].product_id);return a},subCollect:function(t){var e=this,i=e.selectValue;if(!(i.length>0))return e.$util.Tips({title:"请选择产品"});e.getSelectValueProductId();(0,c.collectAll)(e.getSelectValueProductId().join(",")).then((function(t){return e.$util.Tips({title:t.msg,icon:"success"})})).catch((function(t){return e.$util.Tips({title:t})}))},subOrder:function(e){var i=this,a=i.selectValue;if(!(a.length>0))return i.$util.Tips({title:"请选择产品"});t.navigateTo({url:"/pages/users/order_confirm/index?cartId="+a.join(",")})},checkboxAllChange:function(t){var e=t.detail.value;e.length>0?this.setAllSelectValue(1):this.setAllSelectValue(0)},setAllSelectValue:function(t){var e=this,i=[],a=e.cartList.valid;if(a.length>0){var r=a.map((function(a){return t?(e.footerswitch?a.attrStatus?(a.checked=!0,i.push(a.id)):a.checked=!1:(a.checked=!0,i.push(a.id)),e.isAllSelect=!0):(a.checked=!1,e.isAllSelect=!1),a}));e.$set(e.cartList,"valid",r),e.selectValue=i,e.switchSelect()}},checkboxChange:function(t){var e=this,i=t.detail.value,a=e.cartList.valid,r=[],n=[],c=[],s=a.map((function(t){return e.inArray(t.id,i)?e.footerswitch?t.attrStatus?(t.checked=!0,r.push(t)):t.checked=!1:(t.checked=!0,r.push(t)):(t.checked=!1,n.push(t)),t}));e.footerswitch&&(c=n.filter((function(t){return!t.attrStatus}))),e.$set(e.cartList,"valid",s),e.isAllSelect=s.length===r.length+c.length,e.selectValue=i,e.switchSelect()},inArray:function(t,e){for(var i in e)if(e[i]==t)return!0;return!1},switchSelect:function(){var t=this,e=t.cartList.valid,i=t.selectValue,a=0;if(i.length<1)t.selectCountPrice=a;else{for(var r in e)t.inArray(e[r].id,i)&&(a=t.$util.$h.Add(a,t.$util.$h.Mul(e[r].cart_num,e[r].truePrice)));t.selectCountPrice=a}}},d(a,"iptCartNum",(function(t){var e=this.cartList.valid[t];e.cart_num&&this.setCartNum(e.id,e.cart_num),this.switchSelect()})),d(a,"blurInput",(function(t){var e=this.cartList.valid[t];e.cart_num||(e.cart_num=1,this.$set(this.cartList,"valid",this.cartList.valid))})),d(a,"subCart",(function(t){var e=this,i=!1,a=e.cartList.valid[t];a.cart_num=Number(a.cart_num)-1,a.cart_num<1&&(i=!0),a.cart_num<=1?(a.cart_num=1,a.numSub=!0):(a.numSub=!1,a.numAdd=!1),0==i&&e.setCartNum(a.id,a.cart_num,(function(i){e.cartList.valid[t]=a,e.getCartNum(),e.switchSelect()}))})),d(a,"addCart",(function(t){var e=this,i=e.cartList.valid[t];i.cart_num=Number(i.cart_num)+1;var a=i.productInfo;a.hasOwnProperty("attrInfo")&&i.cart_num>=i.productInfo.attrInfo.stock?(i.cart_num=i.productInfo.attrInfo.stock,i.numAdd=!0,i.numSub=!1):(i.numAdd=!1,i.numSub=!1),e.setCartNum(i.id,i.cart_num,(function(a){e.cartList.valid[t]=i,e.getCartNum(),e.switchSelect()}))})),d(a,"setCartNum",(function(t,e,i){(0,n.changeCartNum)(t,e).then((function(t){i&&i(t.data)}))})),d(a,"getCartNum",(function(){var t=this,e=this;(0,n.getCartCounts)().then((function(i){e.cartCount=i.data.count,t.$store.commit("indexData/setCartNum",i.data.count>99?"..":i.data.count),i.data.count>0?wx.setTabBarBadge({index:2,text:i.data.count+""}):wx.hideTabBarRedDot({index:2})}))})),d(a,"getCartData",(function(t){var e=this;return new Promise((function(i,a){(0,n.getCartList)(t).then((function(t){i(t.data)})).catch((function(t){e.loading=!1,e.canShow=!0,e.$util.Tips({title:t})}))}))})),d(a,"getCartList",(function(){var e=this;return f(r.default.mark((function i(){var a,c;return r.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:t.showLoading({title:"加载中",mask:!0}),a=e,c={page:a.page,limit:a.limit,status:1},(0,n.getCartCounts)().then(function(){var i=f(r.default.mark((function i(n){var s,o,u,l,d,h,f,p;return r.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:a.cartCount=n.data.count,s=0;case 2:if(!(s<Math.ceil(a.cartCount/a.limit))){i.next=20;break}return i.next=5,e.getCartData(c);case 5:if(o=i.sent,u=o.valid,l=a.$util.SplitArray(u,a.cartList.valid),[{numSub:!0},{numSub:!1}],[{numAdd:!0},{numAdd:!1}],d=[],l.length>0)for(h in l)1==l[h].cart_num?l[h].numSub=!0:l[h].numSub=!1,f=l[h].productInfo,f.hasOwnProperty("attrInfo")&&l[h].cart_num==l[h].productInfo.attrInfo.stock||l[h].cart_num==l[h].productInfo.stock?l[h].numAdd=!0:l[h].numAdd=!1,l[h].attrStatus?(l[h].checked=!0,d.push(l[h].id)):l[h].checked=!1;a.$set(a.cartList,"valid",l),c.page=a.page+1,a.selectValue=d,p=l.filter((function(t){return t.attrStatus})),a.isAllSelect=p.length==d.length&&p.length,a.switchSelect();case 17:s++,i.next=2;break;case 20:a.loading=!1,e.canShow=!0,t.hideLoading();case 23:case"end":return i.stop()}}),i)})));return function(t){return i.apply(this,arguments)}}());case 4:case"end":return i.stop()}}),i)})))()})),d(a,"getInvalidList",(function(){var t=this;if(this.loadendInvalid)return!1;if(this.loadingInvalid)return!1;var e={page:t.pageInvalid,limit:t.limitInvalid,status:0};(0,n.getCartList)(e).then((function(e){var i=e.data,a=i.invalid,r=a.length<t.limitInvalid,n=t.$util.SplitArray(a,t.cartList.invalid);t.$set(t.cartList,"invalid",n),t.loadendInvalid=r,t.loadTitleInvalid=r?"我也是有底线的":"加载更多",t.pageInvalid=t.pageInvalid+1,t.loadingInvalid=!1})).catch((function(e){t.loadingInvalid=!1,t.loadTitleInvalid="加载更多"}))})),d(a,"getHostProduct",(function(){var t=this;t.hotScroll||(0,c.getProductHot)(t.hotPage,t.hotLimit).then((function(e){t.hotPage++,t.hotScroll=e.data.length<t.hotLimit,t.hostProduct=t.hostProduct.concat(e.data)}))})),d(a,"goodsOpen",(function(){var t=this;t.goodsHidden=!t.goodsHidden})),d(a,"goRouter",(function(e){var i=getCurrentPages(),a=i[i.length-1].$page.fullPath;e.link!=a&&t.switchTab({url:e.link,fail:function(i){t.redirectTo({url:e.link})}})})),d(a,"manage",(function(){var t=this;t.footerswitch=!t.footerswitch;var e=[],i=[],a=t.cartList.valid.map((function(a){return t.footerswitch?a.attrStatus?a.checked&&e.push(a.id):(a.checked=!1,i.push(a)):a.checked&&e.push(a.id),a}));t.cartList.valid=a,t.footerswitch?t.isAllSelect=a.length===e.length+i.length:t.isAllSelect=a.length===e.length,t.selectValue=e,t.switchSelect()})),d(a,"unsetCart",(function(){for(var t=this,e=[],i=0,a=t.cartList.invalid.length;i<a;i++)e.push(t.cartList.invalid[i].id);(0,n.cartDel)(e).then((function(e){t.$util.Tips({title:"清除成功"}),t.$set(t.cartList,"invalid",[]),t.getCartNum()})).catch((function(t){}))})),a),onReachBottom:function(){var t=this;t.loadend&&t.getInvalidList(),0==t.cartList.valid.length&&0==t.cartList.invalid.length&&t.getHostProduct()}};e.default=_}).call(this,i("543d")["default"])}},[["9d22","common/runtime","common/vendor"]]]);