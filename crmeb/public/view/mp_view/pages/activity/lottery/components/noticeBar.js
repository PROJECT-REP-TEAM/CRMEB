(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/activity/lottery/components/noticeBar"],{3262:function(t,n,e){"use strict";var a=e("b156"),i=e.n(a);i.a},4128:function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return a}));var i=function(){var t=this,n=t.$createElement;t._self._c},r=[]},"5f55":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={name:"noticeBar",data:function(){return{animateUp:!1,listData:JSON.parse(JSON.stringify(this.showMsg)),timer:null}},props:{showMsg:{type:Array}},mounted:function(){this.timer=setInterval(this.scrollAnimate,2500)},methods:{scrollAnimate:function(){var t=this;this.animateUp=!0,setTimeout((function(){t.listData.push(t.listData[0]),t.listData.shift(),t.animateUp=!1}),500)}},destroyed:function(){clearInterval(this.timer)}};n.default=a},9279:function(t,n,e){"use strict";e.r(n);var a=e("4128"),i=e("afe95");for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);e("3262");var u,s=e("f0c5"),o=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"66e4c842",null,!1,a["a"],u);n["default"]=o.exports},afe95:function(t,n,e){"use strict";e.r(n);var a=e("5f55"),i=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);n["default"]=i.a},b156:function(t,n,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/activity/lottery/components/noticeBar-create-component',
    {
        'pages/activity/lottery/components/noticeBar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("9279"))
        })
    },
    [['pages/activity/lottery/components/noticeBar-create-component']]
]);
