(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-wechat_login-index"],{"05f6":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-303387b0]{background:#fff}.wechat_login[data-v-303387b0]{padding:%?72?% %?34?%}.wechat_login .img uni-image[data-v-303387b0]{width:100%}.wechat_login .btn-wrapper[data-v-303387b0]{margin-top:%?86?%;padding:0 %?66?%}.wechat_login .btn-wrapper uni-button[data-v-303387b0]{width:100%;height:%?86?%;line-height:%?86?%;margin-bottom:%?40?%;border-radius:%?120?%;font-size:%?30?%}.wechat_login .btn-wrapper uni-button.btn1[data-v-303387b0]{color:#fff}.wechat_login .btn-wrapper uni-button.btn2[data-v-303387b0]{color:#666;border:1px solid #666}.title-bar[data-v-303387b0]{position:relative;display:flex;align-items:center;justify-content:center;font-size:%?36?%}.icon[data-v-303387b0]{position:absolute;left:%?30?%;top:0;display:flex;align-items:center;justify-content:center;width:%?86?%;height:%?86?%}.icon uni-image[data-v-303387b0]{width:%?50?%;height:%?50?%}body.?%PAGE?%[data-v-303387b0]{background:#fff}',""]),t.exports=e},"11b1":function(t,e,n){"use strict";n.r(e);var i=n("bea7"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"2ebc":function(t,e,n){"use strict";var i=n("96d9"),a=n.n(i);a.a},"530f":function(t,e,n){t.exports=n.p+"static/img/wechat_login.b276d0e9.png"},"56e49":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.mobile-bg[data-v-4b0c4a78]{position:fixed;left:0;top:0;width:100%;height:100%;background:rgba(0,0,0,.5)}.mobile-mask[data-v-4b0c4a78]{z-index:20;position:fixed;left:0;bottom:0;width:100%;padding:%?67?% %?30?%;background:#fff}.mobile-mask .info-box[data-v-4b0c4a78]{display:flex;flex-direction:column;align-items:center;justify-content:center}.mobile-mask .info-box uni-image[data-v-4b0c4a78]{width:%?150?%;height:%?150?%;border-radius:%?10?%}.mobile-mask .info-box .title[data-v-4b0c4a78]{margin-top:%?30?%;margin-bottom:%?20?%;font-size:%?36?%}.mobile-mask .info-box .txt[data-v-4b0c4a78]{font-size:%?30?%;color:#868686}.mobile-mask .sub_btn[data-v-4b0c4a78]{width:%?690?%;height:%?86?%;line-height:%?86?%;margin-top:%?60?%;background:var(--view-theme);border-radius:%?43?%;color:#fff;font-size:%?28?%;text-align:center}.animated[data-v-4b0c4a78]{-webkit-animation-duration:.4s;animation-duration:.4s}',""]),t.exports=e},"59f7":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{style:t.colorStyle},[i("v-uni-view",{staticClass:"system-height",style:{height:t.statusBarHeight}}),i("v-uni-view",{staticClass:"wechat_login"},[i("v-uni-view",{staticClass:"img"},[i("v-uni-image",{attrs:{src:n("530f"),mode:"widthFix"}})],1),i("v-uni-view",{staticClass:"btn-wrapper"},[i("v-uni-button",{staticClass:"bg-green btn1",attrs:{"hover-class":"none"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.wechatLogin.apply(void 0,arguments)}}},[t._v("微信登录")]),i("v-uni-button",{staticClass:"btn2",attrs:{"hover-class":"none"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.isUp=!0}}},[t._v("手机号登录")])],1)],1),t.isUp?[i("mobileLogin",{attrs:{isUp:t.isUp,authKey:t.authKey},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.maskClose.apply(void 0,arguments)},wechatPhone:function(e){arguments[0]=e=t.$handleEvent(e),t.wechatPhone.apply(void 0,arguments)}}})]:t._e(),t.isPhoneBox?[i("routinePhone",{attrs:{logoUrl:t.logoUrl,isPhoneBox:t.isPhoneBox,authKey:t.authKey},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.bindPhoneClose.apply(void 0,arguments)}}})]:t._e()],2)},o=[]},"5e60":function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;i(n("2f12")),n("3474"),n("1346"),getApp();var a={name:"routine_phone",props:{isPhoneBox:{type:Boolean,default:!1},logoUrl:{type:String,default:""},authKey:{type:String,default:""}},data:function(){return{keyCode:"",account:"",codeNum:"",isStatus:!1}},mounted:function(){},methods:{close:function(){this.$emit("close",{isStatus:this.isStatus})}}};e.default=a},"6d80":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isPhoneBox?n("v-uni-view",[n("v-uni-view",{staticClass:"mobile-bg",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"mobile-mask animated",class:{slideInUp:t.isUp}},[n("v-uni-view",{staticClass:"info-box"},[n("v-uni-image",{attrs:{src:t.logoUrl}}),n("v-uni-view",{staticClass:"title"},[t._v("获取授权")]),n("v-uni-view",{staticClass:"txt"},[t._v("获取微信的手机号授权")])],1),n("v-uni-button",{staticClass:"sub_btn",attrs:{"open-type":"getPhoneNumber"},on:{getphonenumber:function(e){arguments[0]=e=t.$handleEvent(e),t.getphonenumber.apply(void 0,arguments)}}},[t._v("获取微信手机号")])],1)],1):t._e()},o=[]},"702d":function(t,e,n){"use strict";n.r(e);var i=n("5e60"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"80a4":function(t,e,n){var i=n("56e49");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("caf95d32",i,!0,{sourceMap:!1,shadowMode:!1})},"89e2":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".mobile-bg[data-v-4186bad2]{position:fixed;left:0;top:0;width:100%;height:100%;background:rgba(0,0,0,.5)}.mobile-mask[data-v-4186bad2]{z-index:20;position:fixed;left:0;bottom:0;width:100%;padding:%?67?% %?30?%;background:#fff}.mobile-mask .input-item[data-v-4186bad2]{display:flex;justify-content:space-between;width:100%;height:%?86?%;margin-bottom:%?38?%}.mobile-mask .input-item uni-input[data-v-4186bad2]{flex:1;display:block;height:100%;padding-left:%?40?%;border-radius:%?43?%;border:1px solid #dcdcdc}.mobile-mask .input-item .code[data-v-4186bad2]{display:flex;align-items:center;justify-content:center;width:%?220?%;height:%?86?%;margin-left:%?30?%;background:var(--view-minorColorT);font-size:%?28?%;color:var(--view-theme);border-radius:%?43?%}.mobile-mask .input-item .code[disabled][data-v-4186bad2]{background:rgba(0,0,0,.05);color:#999}.mobile-mask .sub_btn[data-v-4186bad2]{width:%?690?%;height:%?86?%;line-height:%?86?%;margin-top:%?60?%;background:var(--view-theme);border-radius:%?43?%;color:#fff;font-size:%?28?%;text-align:center}.animated[data-v-4186bad2]{-webkit-animation-duration:.4s;animation-duration:.4s}",""]),t.exports=e},"8c06":function(t,e,n){"use strict";n.r(e);var i=n("59f7"),a=n("11b1");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("8c70");var s,c=n("f0c5"),u=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"303387b0",null,!1,i["a"],s);e["default"]=u.exports},"8c70":function(t,e,n){"use strict";var i=n("ac60"),a=n.n(i);a.a},9484:function(t,e,n){"use strict";n.r(e);var i=n("9c74"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"96d9":function(t,e,n){var i=n("89e2");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("e6e852f2",i,!0,{sourceMap:!1,shadowMode:!1})},"9c74":function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var a=i(n("1da1")),o=i(n("f875")),s=(i(n("2f12")),n("3474")),c=n("7fe6"),u=getApp(),r={name:"login_mobile",props:{isUp:{type:Boolean,default:!1},authKey:{type:String,default:""}},data:function(){return{keyCode:"",account:"",codeNum:""}},mixins:[o.default],mounted:function(){this.getCode()},methods:{code:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t,n.account){e.next=3;break}return e.abrupt("return",n.$util.Tips({title:"请填写手机号码"}));case 3:if(/^1(3|4|5|7|8|9|6)\d{9}$/i.test(n.account)){e.next=5;break}return e.abrupt("return",n.$util.Tips({title:"请输入正确的手机号码"}));case 5:return e.next=7,(0,s.registerVerify)({phone:n.account,key:n.keyCode}).then((function(t){n.$util.Tips({title:t.msg}),n.sendCode()})).catch((function(t){return n.$util.Tips({title:t})}));case 7:case"end":return e.stop()}}),e)})))()},getCode:function(){var t=this;(0,s.getCodeApi)().then((function(e){t.keyCode=e.data.key})).catch((function(e){t.$util.Tips({title:e})}))},close:function(){this.$emit("close",!1)},loginBtn:function(){var t=this,e=this;return e.account?/^1(3|4|5|7|8|9|6)\d{9}$/i.test(e.account)?e.codeNum?/^[\w\d]+$/i.test(e.codeNum)?(uni.showLoading({title:"正在登录中"}),void(this.authKey?(0,s.phoneWxSilenceAuth)({spid:u.globalData.spid,spread:u.globalData.code,phone:this.account,captcha:this.codeNum,key:this.authKey}).then((function(e){var n=e.data.expires_time-t.$Cache.time();t.$store.commit("LOGIN",{token:e.data.token,time:n}),t.getUserInfo()})).catch((function(e){uni.hideLoading(),t.$util.Tips({title:e})})):(0,c.bindingPhone)({phone:this.account,captcha:this.codeNum,key:this.$Cache.get("snsapiKey")}).then((function(e){var n=e.data.expires_time-t.$Cache.time();t.$store.commit("LOGIN",{token:e.data.token,time:n}),t.$Cache.clear("snsapiKey"),t.getUserInfo()})).catch((function(e){uni.hideLoading(),t.$util.Tips({title:e})})))):e.$util.Tips({title:"请输入正确的验证码"}):e.$util.Tips({title:"请填写验证码"}):e.$util.Tips({title:"请输入正确的手机号码"}):e.$util.Tips({title:"请填写手机号码"})},getUserInfo:function(){var t=this;(0,s.getUserInfo)().then((function(e){uni.hideLoading(),t.userInfo=e.data,t.$store.commit("SETUID",e.data.uid),t.$store.commit("UPDATE_USERINFO",e.data),t.$emit("wechatPhone",!0)}))}}};e.default=r},ac60:function(t,e,n){var i=n("05f6");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("3df417b8",i,!0,{sourceMap:!1,shadowMode:!1})},af26:function(t,e,n){"use strict";n.r(e);var i=n("b706"),a=n("9484");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("2ebc");var s,c=n("f0c5"),u=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"4186bad2",null,!1,i["a"],s);e["default"]=u.exports},b706:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isUp?n("v-uni-view",[n("v-uni-view",{staticClass:"mobile-bg",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"mobile-mask animated",class:{slideInUp:t.isUp}},[n("v-uni-view",{staticClass:"input-item"},[n("v-uni-input",{attrs:{type:"text",placeholder:"输入手机号",maxlength:"11"},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}})],1),n("v-uni-view",{staticClass:"input-item"},[n("v-uni-input",{attrs:{type:"text",placeholder:"输入验证码",maxlength:"6"},model:{value:t.codeNum,callback:function(e){t.codeNum=e},expression:"codeNum"}}),n("v-uni-button",{staticClass:"code",attrs:{disabled:t.disabled},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.code.apply(void 0,arguments)}}},[t._v(t._s(t.text))])],1),n("v-uni-view",{staticClass:"sub_btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.loginBtn.apply(void 0,arguments)}}},[t._v("立即登录")])],1)],1):t._e()},o=[]},bea7:function(t,e,n){"use strict";var i=n("4ea4");n("c975"),n("4d63"),n("ac1f"),n("25f0"),n("466d"),n("841c"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("af26")),o=i(n("e7b0")),s=n("1346"),c=(n("a1ea"),n("3474"),i(n("2f12")),i(n("50b4"))),u=i(n("c83f")),r=getApp(),d=uni.getSystemInfoSync().statusBarHeight+"px",l={mixins:[u.default],data:function(){return{isUp:!1,phone:"",statusBarHeight:d,isHome:!1,isPhoneBox:!1,logoUrl:"",code:"",authKey:"",options:"",userInfo:{},codeNum:0,canUseGetUserProfile:!1}},components:{mobileLogin:a.default,routinePhone:o.default},onLoad:function(t){var e=this;uni.getUserProfile&&(this.canUseGetUserProfile=!0),(0,s.getLogo)().then((function(t){e.logoUrl=t.data.logo_url}));var n=this;document.body.addEventListener("focusout",(function(){setTimeout((function(){var t=document.documentElement.scrollTop||document.body.scrollTop||0;window.scrollTo(0,Math.max(t-1,0))}),100)}));var i=t.code,a=t.state;t.scope;if(this.options=t,this.code=i||"",i&&"snsapi_base"!==this.options.scope){r.globalData.spid&&r.globalData.spid;c.default.auth(i,a).then((function(t){if(void 0!==t.key&&t.key)n.authKey=t.key,n.isUp=!0;else{var e=t.expires_time-n.$Cache.time();n.$store.commit("LOGIN",{token:t.token,time:e}),n.userInfo=t.userInfo,n.$store.commit("SETUID",t.userInfo.uid),n.$store.commit("UPDATE_USERINFO",t.userInfo),n.wechatPhone()}})).catch((function(t){}))}var o=getCurrentPages(),u=o[o.length-2];u&&"pages/order_addcart/order_addcart"==u.route?this.isHome=!0:this.isHome=!1},methods:{back:function(){uni.navigateBack()},home:function(){uni.switchTab({url:"/pages/index/index"})},maskClose:function(){this.isUp=!1},bindPhoneClose:function(t){t.isStatus?(this.isPhoneBox=!1,this.$util.Tips({title:"登录成功",icon:"success"},{tab:3})):this.isPhoneBox=!1},getQueryString:function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),n=new RegExp("(^|/)"+t+"/([^/]*)(/|$)","i"),i=window.location.search.substr(1).match(e),a=window.location.pathname.substr(1).match(n);return null!=i?unescape(i[2]):null!=a?unescape(a[2]):null},wechatLogin:function(){this.code&&"snsapi_base"===this.options.scope?this.authKey&&(this.isUp=!0):this.$wechat.oAuth("snsapi_userinfo","/pages/users/wechat_login/index")},wechatPhone:function(){if(this.$Cache.clear("snsapiKey"),this.options.back_url){var t=uni.getStorageSync("snRouter");t=-1!=t.indexOf("/pages/index/index")?"/":t,-1!==t.indexOf("/pages/users/wechat_login/index")&&(t="/"),t||(t="/pages/index/index");this.isUp=!1,uni.showToast({title:"登录成功",icon:"none"}),setTimeout((function(e){location.href=t}),800)}else uni.navigateBack()}}};e.default=l},e7b0:function(t,e,n){"use strict";n.r(e);var i=n("6d80"),a=n("702d");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("ff02");var s,c=n("f0c5"),u=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"4b0c4a78",null,!1,i["a"],s);e["default"]=u.exports},f875:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{disabled:!1,text:"获取验证码"}},methods:{sendCode:function(){var t=this;if(!this.disabled){this.disabled=!0;var e=60;this.text="剩余 "+e+"s";var n=setInterval((function(){e-=1,e<0&&clearInterval(n),t.text="剩余 "+e+"s",t.text<"剩余 0s"&&(t.disabled=!1,t.text="重新获取")}),1e3)}}}};e.default=i},ff02:function(t,e,n){"use strict";var i=n("80a4"),a=n.n(i);a.a}}]);