(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-message_center-messageDetail"],{"1a75":function(t,n,a){var e=a("97ee");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=a("4f06").default;i("1a82139e",e,!0,{sourceMap:!1,shadowMode:!1})},"2cab":function(t,n,a){"use strict";a.r(n);var e=a("a857"),i=a("8c6c");for(var s in i)"default"!==s&&function(t){a.d(n,t,(function(){return i[t]}))}(s);a("ab05");var o,r=a("f0c5"),c=Object(r["a"])(i["default"],e["b"],e["c"],!1,null,"e5bff448",null,!1,e["a"],o);n["default"]=c.exports},"3b12":function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=a("3474"),i={data:function(){return{msgData:{}}},onLoad:function(t){this.getMsgDetails(t.id)},methods:{getMsgDetails:function(t){var n=this;uni.showLoading({title:"获取详情中"}),(0,e.getMsgDetails)(t).then((function(t){uni.hideLoading(),n.msgData=t.data})).catch((function(t){return uni.hideLoading(),n.$util.Tips({title:t})}))}}};n.default=i},"8c6c":function(t,n,a){"use strict";a.r(n);var e=a("3b12"),i=a.n(e);for(var s in e)"default"!==s&&function(t){a.d(n,t,(function(){return e[t]}))}(s);n["default"]=i.a},"97ee":function(t,n,a){var e=a("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.msg-det[data-v-e5bff448]{background-color:#fff;padding:%?20?%}.msg-det .title[data-v-e5bff448]{padding:%?20?%;font-size:%?32?%;font-weight:700;padding-bottom:%?20?%;border-bottom:1px solid #f2f2f2}.msg-det .add-time[data-v-e5bff448]{color:#ababab;text-align:right;padding-right:%?30?%;margin-top:%?30?%}.msg-det .content[data-v-e5bff448]{padding:%?20?%;color:#333}',""]),t.exports=n},a857:function(t,n,a){"use strict";var e;a.d(n,"b",(function(){return i})),a.d(n,"c",(function(){return s})),a.d(n,"a",(function(){return e}));var i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",{staticClass:"msg-det"},[a("v-uni-view",{staticClass:"title"},[t._v(t._s(t.msgData.title))]),a("v-uni-view",{staticClass:"content"},[t._v(t._s(t.msgData.content))]),a("v-uni-view",{staticClass:"add-time"},[t._v("通知于"+t._s(t.msgData.add_time))])],1)},s=[]},ab05:function(t,n,a){"use strict";var e=a("1a75"),i=a.n(e);i.a}}]);