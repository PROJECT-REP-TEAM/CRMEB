(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-message_center-index"],{"28cf":function(i,t,e){"use strict";var a;e.d(t,"b",(function(){return s})),e.d(t,"c",(function(){return n})),e.d(t,"a",(function(){return a}));var s=function(){var i=this,t=i.$createElement,a=i._self._c||t;return a("v-uni-view",{staticClass:"main"},[a("v-uni-view",{staticClass:"top-tabs",style:i.colorStyle},i._l(i.tabsList,(function(t,e){return a("v-uni-view",{key:e,staticClass:"tabs",class:{btborder:i.type===e},on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.changeTabs(e)}}},[i._v(i._s(t.name))])})),1),i.list.length&&1===i.type?a("v-uni-view",{staticClass:"list"},i._l(i.list,(function(t,e){return a("v-uni-view",{key:e,staticClass:"item",on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.goChat(t.to_uid)}}},[a("v-uni-view",{staticClass:"image-wrap"},[a("v-uni-image",{staticClass:"image",attrs:{src:t.avatar}})],1),a("v-uni-view",{staticClass:"text-wrap"},[a("v-uni-view",{staticClass:"name-wrap"},[a("v-uni-view",{staticClass:"name"},[i._v(i._s(t.nickname))]),a("v-uni-view",[i._v(i._s(t._update_time))])],1),a("v-uni-view",{staticClass:"info-wrap"},[1===t.message_type?a("v-uni-view",{staticClass:"info",domProps:{innerHTML:i._s(t.message)}}):i._e(),2===t.message_type?a("v-uni-view",{staticClass:"info",domProps:{innerHTML:i._s(t.message)}}):i._e(),3===t.message_type?a("v-uni-view",{staticClass:"info"},[i._v("[图片]")]):i._e(),4===t.message_type?a("v-uni-view",{staticClass:"info"},[i._v("[语音]")]):i._e(),5===t.message_type?a("v-uni-view",{staticClass:"info"},[i._v("[商品]")]):i._e(),6===t.message_type?a("v-uni-view",{staticClass:"info"},[i._v("[订单]")]):i._e(),t.mssage_num?a("v-uni-view",{staticClass:"num"},[i._v(i._s(t.mssage_num))]):i._e()],1)],1)],1)})),1):i._e(),i.list.length&&0===i.type?a("v-uni-view",{staticClass:"list"},i._l(i.list,(function(t,s){return a("v-uni-view",{key:s,staticClass:"item",on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.goDetail(t.id)}}},[a("v-uni-view",{staticClass:"image-wrap"},[1===t.type?a("v-uni-image",{staticClass:"image",attrs:{src:e("4904")}}):a("v-uni-image",{staticClass:"image",attrs:{src:e("5ff5")}}),t.look?i._e():a("v-uni-view",{staticClass:"no-look"})],1),a("v-uni-view",{staticClass:"text-wrap"},[a("v-uni-view",{staticClass:"name-wrap"},[a("v-uni-view",{staticClass:"name"},[i._v(i._s(t.title||"--"))]),a("v-uni-view",[i._v(i._s(t.add_time))])],1),a("v-uni-view",{staticClass:"info-wrap"},[a("v-uni-view",{staticClass:"info",domProps:{innerHTML:i._s(t.content)}})],1)],1)],1)})),1):i.finished&&!i.list.length?a("v-uni-view",{staticClass:"empty-wrap"},[a("v-uni-view",{staticClass:"image-wrap"},[a("v-uni-image",{staticClass:"image",attrs:{src:e("b380")}})],1),a("v-uni-view",[i._v("亲、暂无消息记录哟！")])],1):i._e()],1)},n=[]},"3115c":function(i,t,e){var a=e("24fb");t=a(!1),t.push([i.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.list[data-v-464656c5]{overflow:hidden;padding-top:%?100?%}.list .item[data-v-464656c5]{background-color:#fff;display:flex;align-items:center;padding:%?30?% %?30?%;margin:%?10?% %?20?%;border-radius:%?12?%;box-shadow:0 0 1px 0 rgba(235,214,214,.75);-webkit-box-shadow:0 0 1px 0 rgba(235,214,214,.75);-moz-box-shadow:0 0 1px 0 rgba(235,214,214,.75)}.list .item ~ .item[data-v-464656c5]{border-top:%?1?% solid #f5f5f5}.list .item .image[data-v-464656c5]{border-radius:50%}.list .image-wrap[data-v-464656c5]{width:%?88?%;height:%?88?%;border-radius:50%;position:relative}.list .image-wrap .no-look[data-v-464656c5]{position:absolute;width:%?18?%;height:%?18?%;border-radius:50%;background-color:#1abb1d;top:%?0?%;right:%?0?%;z-index:999}.list .image[data-v-464656c5]{display:block;width:100%;height:100%}.list .text-wrap[data-v-464656c5]{flex:1;min-width:0;margin-left:%?20?%}.list .name-wrap[data-v-464656c5]{display:flex;align-items:center;font-size:%?20?%;color:#ccc}.list .name[data-v-464656c5]{flex:1;min-width:0;margin-right:%?20?%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:%?28?%;color:#333}.list .info-wrap[data-v-464656c5]{display:flex;align-items:center;margin-top:%?18?%}.list .info[data-v-464656c5]{flex:1;min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:%?24?%;color:#999}.list .num[data-v-464656c5]{min-width:%?32?%;height:%?32?%;border-radius:%?16?%;margin-left:%?20?%;background-color:#e93323;font-size:%?20?%;line-height:%?32?%;text-align:center;color:#fff}.empty-wrap[data-v-464656c5]{font-size:%?26?%;text-align:center;color:#999}.empty-wrap .image-wrap[data-v-464656c5]{width:%?414?%;height:%?436?%;padding-top:%?100?%;margin:%?0?% auto 0}.empty-wrap .image[data-v-464656c5]{display:block;width:100%;height:100%}.main[data-v-464656c5]{position:relative}.top-tabs[data-v-464656c5]{position:fixed;width:100%;display:flex;align-items:center;background-color:#fff;font-size:%?28?%;border-radius:%?8?%;padding:%?20?% 0;margin-bottom:%?10?%;z-index:1000}.tabs[data-v-464656c5]{display:flex;align-items:center;padding:%?4?% %?15?%;margin:0 %?20?%}.btborder[data-v-464656c5]{color:#fff;background-color:var(--view-theme);border-radius:%?30?%}',""]),i.exports=t},4904:function(i,t){i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAWlBMVEUAAAAqfvwqfvwqfvwqfvwqfvwqfvwqfvwqfvwqfvwqfvwqfvwqfvwqfvwqfvz///9fnv03hvzy9//l7//Y5/6It/12rP3K3/6Vv/5Slv2wz/5Fjvy91/6ix/5ldWXuAAAADnRSTlMAoCAQ4HDwwJBAMGDQgGrlYVcAAAHeSURBVFjD7ZnbkoIwDEC5tJabidwEXff/f3MdZWZXSxIgZfbF8wFnmtImaYgEchs7AxPGxcc82k5hHczgbLHFlloDJMamK3VJDAJxotAplWkGC8kWBZ4bWIzJVy5Pv8ikgpVU7E4WB1jNgTmVJeETjCXpg42UCh9hlPdPv48J55ONiXf+KlBRvZ/HDJRkb/cN1OQvARtQY1IyYH3QCQj0LWJ7BoHfLx0Dzzc+kIzx0gV+4ZOmXrjEWAoYJ07LlpgCS30ecGKQgn5+aAscY4N/aHrgsA+hAZpLh2903EaaR5bhfA3iKmPBR1y3OEMnxOyE8+czAom7C7nz5yGeRzbP9L5LvDI5t4UDJbwBieWuCVK03GVxjJCE+yomrNBEEFYIH+FHuEV4AIJ6oIVXoDD01esQNxgdmRxGZOnJ5GCF5LoyyVoqwV5RYCSbOpilITxSqaKK1AVFZmN2VBk90SK20bFUoa9PIjVV6CMDwTBes6TE8u2cX01vwJMuajh7r8JTxHxL7LdMndwSM0v0m7r2Ii1waddeX5u7bhR79tAPn+BPs9CPx9DP250f4PoRwd5DDP2YJaix3H9UpR+m7T/u0w8k9x+Z6oe6+rHznoNx/ej+/38uTOTH198fVvquP0NyGYq8ai+MAAAAAElFTkSuQmCC"},"5ff5":function(i,t){i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAWlBMVEUAAADwWijwWijwWijwWijwWijwWijwWijwWijwWijwWijwWijwWijwWij////0g1771sr4rZTxZDXzeVD+9fL2mHn84df5wq/yb0P1jmv96+X6zLz3oob4t6FzPi91AAAADXRSTlMAoHEgEODwwJBAMGDQMp4iAAAAAhVJREFUWMPNmduyqjAMhm2hImg4FFARff/X3MCgGdk9Af+stf4bys03SRqaNBw8SqVIFM1SiZDpYbsymZBBicy20GKpyCol45W4SJBHItqB24mMTxSoU5DjqaJgqTTYPJSR0YVW6uKMZHak1To6svLMvDXEs5VHG3VG8Zjojh8mjtHA20GMlrz4Qrt0WebjiXbqtPjeaLfSL4fVfqCKlw4DnY4IIt5pgQEKNhCkiA2EmhhTiIqq+6zb8qXJpHgCSvJL93mevyHVsC7IJDkBVYB5j5wht3FtycWRl/nNGxAfoL6Oy57MykI8bpucgfXEuw0rq8+JG1eXA4CBE7wlm5IB6OZVI4CB9fBoWrLLc84MDn4Di4FXu88c6YreG8Uud9WdXJLGz6QqJz3yJdAvYdqTmhmrgYkprYsdQHUgLJD+ALCrZtUYIKdSU0OAPb8/IUD9+XhuoBjqYtZP7fIRndgJFpgcBBYojMfXqxx13QKUzgP2+R/wXuaVr6lzls9mASw4/8zyFSndfwP1+Cy1fU/8ZbRrGPiu8te7PYT+Qq9fDJzjai9UWVArUjxmIFeuxpLWgc2SrhhIVI9BMDstg9u5+jFBuFqbfY7DG079LDt+ac0GCnhLjG7a4dcK9MUHfjVDXx7R11v4BRw9IkAPMfBjFijxjB5VoYdp6HEfeiAJHpmih7rgsTN4MA4e3f/+z4Wtvz/+AQqRBqAJA9RWAAAAAElFTkSuQmCC"},"770b":function(i,t,e){"use strict";e.r(t);var a=e("d541"),s=e.n(a);for(var n in a)"default"!==n&&function(i){e.d(t,i,(function(){return a[i]}))}(n);t["default"]=s.a},"9e71":function(i,t,e){var a=e("3115c");"string"===typeof a&&(a=[[i.i,a,""]]),a.locals&&(i.exports=a.locals);var s=e("4f06").default;s("653c5f48",a,!0,{sourceMap:!1,shadowMode:!1})},b380:function(i,t,e){i.exports=e.p+"static/img/noMessage.85f96d76.png"},c9bd:function(i,t,e){"use strict";var a=e("9e71"),s=e.n(a);s.a},d541:function(i,t,e){"use strict";var a=e("4ea4");e("99af"),e("4160"),e("ac1f"),e("5319"),e("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=e("6a1c"),n=a(e("d13a")),o={mixins:[n.default],data:function(){return{list:[],page:1,type:0,limit:20,loading:!1,finished:!1,tabsList:[{key:0,name:"站内消息"},{key:1,name:"客服消息"}]}},onShow:function(){this.page=1,this.list=[],this.changeTabs(this.type)},onReachBottom:function(){1===this.type?this.getList():this.messageSystem()},onPullDownRefresh:function(){this.page=1,this.finished=!1,this.list=[],1===this.type?this.getList():this.messageSystem()},methods:{changeTabs:function(i){this.type=i,this.page=1,this.limit=20,this.list=[],this.finished=!1,1===i?this.getList():this.messageSystem()},messageSystem:function(){var i=this;this.loading||this.finished||(this.loading=!0,uni.showLoading({title:"加载中"}),(0,s.messageSystem)({page:this.page,limit:this.limit}).then((function(t){var e=t.data;uni.hideLoading(),i.loading=!1,i.list=i.list.concat(e.list),i.finished=e.list.length<i.limit,i.page+=1,uni.stopPullDownRefresh()})).catch((function(i){uni.showToast({title:i.msg,icon:"none"})})))},getList:function(){var i=this;this.loading||this.finished||(this.loading=!0,uni.showLoading({title:"加载中"}),(0,s.serviceRecord)({page:this.page,limit:this.limit}).then((function(t){uni.stopPullDownRefresh();var e=t.data;uni.hideLoading(),i.loading=!1,e.forEach((function(t){1===t.message_type&&(t.message=i.replace_em(t.message)),2===t.message_type&&(t.message=i.replace_em(t.message))})),i.list=i.list.concat(e),i.finished=e.length<i.limit,i.page+=1})).catch((function(i){uni.showToast({title:i.msg,icon:"none"})})))},replace_em:function(i){return i=i.replace(/\[em-([a-z_]*)\]/g,"<span class='em em-$1'/></span>"),i},goChat:function(i){uni.navigateTo({url:"/pages/customer_list/chat?to_uid="+i+"&type=1"})},goDetail:function(i){uni.navigateTo({url:"/pages/users/message_center/messageDetail?id="+i})}}};t.default=o},f724:function(i,t,e){"use strict";e.r(t);var a=e("28cf"),s=e("770b");for(var n in s)"default"!==n&&function(i){e.d(t,i,(function(){return s[i]}))}(n);e("c9bd");var o,l=e("f0c5"),c=Object(l["a"])(s["default"],a["b"],a["c"],!1,null,"464656c5",null,!1,a["a"],o);t["default"]=c.exports}}]);