(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/goods_details_store/index"],{"299d":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("ac7d"),u=(n("2f6a"),a(n("db1b")));n("26cb");function a(t){return t&&t.__esModule?t:{default:t}}var o=function(){n.e("components/Loading/index").then(function(){return resolve(n("e3b2"))}.bind(null,n)).catch(n.oe)},s={name:"storeList",components:{Loading:o},mixins:[u.default],data:function(){return{page:1,limit:20,loaded:!1,loading:!1,storeList:[],system_store:{},user_latitude:0,user_longitude:0}},onLoad:function(){try{this.user_latitude=t.getStorageSync("user_latitude"),this.user_longitude=t.getStorageSync("user_longitude")}catch(e){}},mounted:function(){this.user_latitude&&this.user_longitude?this.getList():this.selfLocation()},methods:{call:function(e){t.makePhoneCall({phoneNumber:e})},selfLocation:function(){var e=this,n=this;t.getLocation({type:"wgs84",success:function(i){try{e.user_latitude=i.latitude,e.user_longitude=i.longitude,t.setStorageSync("user_latitude",i.latitude),t.setStorageSync("user_longitude",i.longitude)}catch(u){}n.getList()},complete:function(){n.getList()}})},showMaoLocation:function(e){t.openLocation({latitude:Number(e.latitude),longitude:Number(e.longitude),name:e.name,address:"".concat(e.address,"-").concat(e.detailed_address),success:function(){}})},checked:function(e){t.$emit("handClick",{address:e}),t.navigateBack()},getList:function(){var t=this;if(!this.loading&&!this.loaded){this.loading=!0;var e={latitude:this.user_latitude||"",longitude:this.user_longitude||"",page:this.page,limit:this.limit};(0,i.storeListApi)(e).then((function(e){t.loading=!1,t.loaded=e.data.list.length<t.limit,t.storeList.push.apply(t.storeList,e.data.list.list),t.page=t.page+1})).catch((function(e){t.$util.Tips({title:e})}))}}},onReachBottom:function(){this.getList()}};e.default=s}).call(this,n("543d")["default"])},"39d9":function(t,e,n){"use strict";(function(t){n("4acb");i(n("66fd"));var e=i(n("7230"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"42fb":function(t,e,n){"use strict";n.r(e);var i=n("299d"),u=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=u.a},7230:function(t,e,n){"use strict";n.r(e);var i=n("ae6a"),u=n("42fb");for(var a in u)"default"!==a&&function(t){n.d(e,t,(function(){return u[t]}))}(a);n("b1d0");var o,s=n("f0c5"),d=Object(s["a"])(u["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);e["default"]=d.exports},"7b09":function(t,e,n){},ae6a:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var u=function(){var t=this,e=t.$createElement;t._self._c},a=[]},b1d0:function(t,e,n){"use strict";var i=n("7b09"),u=n.n(i);u.a}},[["39d9","common/runtime","common/vendor"]]]);