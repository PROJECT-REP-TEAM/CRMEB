(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/columnGoods/HotNewGoods/feedback"],{2689:function(t,n,e){"use strict";e.r(n);var i=e("7dc5"),c=e("3517");for(var o in c)"default"!==o&&function(t){e.d(n,t,(function(){return c[t]}))}(o);e("aa1b");var u,a=e("f0c5"),s=Object(a["a"])(c["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);n["default"]=s.exports},3517:function(t,n,e){"use strict";e.r(n);var i=e("cbb3"),c=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=c.a},"4f3e":function(t,n,e){"use strict";(function(t){e("8b08");i(e("66fd"));var n=i(e("2689"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"79b6":function(t,n,e){},"7dc5":function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return c})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var c=function(){var t=this,n=t.$createElement;t._self._c},o=[]},aa1b:function(t,n,e){"use strict";var i=e("79b6"),c=e.n(i);c.a},cbb3:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e("61fc"),c={name:"feedback",data:function(){return{name:"",phone:"",con:"",feedback:""}},onLoad:function(){this.getInfo()},methods:{getInfo:function(){var t=this;(0,i.serviceFeedBack)().then((function(n){t.feedback=n.data.feedback}))},subMit:function(){var t=this;return this.name?this.phone&&/^1(3|4|5|7|8|9|6)\d{9}$/i.test(this.phone)?this.con?void(0,i.feedBackPost)({rela_name:this.name,phone:this.phone,content:this.con}).then((function(n){t.$util.Tips({title:n.msg,icon:"success"},{tab:3})})).catch((function(t){that.$util.Tips({title:t})})):this.$util.Tips({title:"请填写内容"}):this.$util.Tips({title:"请填写正确的手机号码"}):this.$util.Tips({title:"请填写姓名"})}}};n.default=c}},[["4f3e","common/runtime","common/vendor"]]]);