(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/mp-html/node/node"],{3247:function(t,i,r){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=function(){Promise.resolve().then(function(){return resolve(r("7419"))}.bind(null,r)).catch(r.oe)},e={name:"node",options:{virtualHost:!0},data:function(){return{ctrl:{}}},props:{name:String,attrs:{type:Object,default:function(){return{}}},childs:Array,opts:Array},components:{node:n},mounted:function(){for(this.root=this.$parent;"mp-html"!=this.root.$options.name;this.root=this.root.$parent);},beforeDestroy:function(){},methods:{toJSON:function(){},play:function(i){if(this.root.pauseVideo){for(var r=!1,n=i.target.id,e=this.root._videos.length;e--;)this.root._videos[e].id==n?r=!0:this.root._videos[e].pause();if(!r){var o=t.createVideoContext(n,this);o.id=n,this.root._videos.push(o)}}},imgTap:function(i){var r=this.childs[i.currentTarget.dataset.i];if(r.a)return this.linkTap(r.a);r.attrs.ignore||(this.root.$emit("imgtap",r.attrs),this.root.previewImg&&t.previewImage({current:parseInt(r.attrs.i),urls:this.root.imgList}))},imgLongTap:function(t){},imgLoad:function(t){var i=t.currentTarget.dataset.i;this.childs[i].w?(this.opts[1]&&!this.ctrl[i]||-1==this.ctrl[i])&&this.$set(this.ctrl,i,1):this.$set(this.ctrl,i,t.detail.width)},linkTap:function(i){var r=i.currentTarget?this.childs[i.currentTarget.dataset.i].attrs:i,n=r.href;this.root.$emit("linktap",r),n&&("#"==n[0]?this.root.navigateTo(n.substring(1)).catch((function(){})):n.includes("://")?this.root.copyLink&&t.setClipboardData({data:n,success:function(){return t.showToast({title:"链接已复制"})}}):t.navigateTo({url:n,fail:function(){t.switchTab({url:n,fail:function(){}})}}))},mediaError:function(t){var i=t.currentTarget.dataset.i,r=this.childs[i];if("video"==r.name||"audio"==r.name){var n=(this.ctrl[i]||0)+1;if(n>r.src.length&&(n=0),n<r.src.length)return this.$set(this.ctrl,i,n)}else"img"==r.name&&this.opts[2]&&this.$set(this.ctrl,i,-1);this.root&&this.root.$emit("error",{source:r.name,attrs:r.attrs,errMsg:t.detail.errMsg})}}};i.default=e}).call(this,r("543d")["default"])},"515c":function(t,i,r){},5437:function(t,i,r){"use strict";var n=r("515c"),e=r.n(n);e.a},7419:function(t,i,r){"use strict";r.r(i);var n=r("ac83"),e=r("d711");for(var o in e)"default"!==o&&function(t){r.d(i,t,(function(){return e[t]}))}(o);r("5437");var s,a=r("f0c5"),c=r("7fff"),u=Object(a["a"])(e["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],s);"function"===typeof c["a"]&&Object(c["a"])(u),i["default"]=u.exports},"7fff":function(t,i,r){"use strict";var n=function(t){t.options.wxsCallMethods||(t.options.wxsCallMethods=[])};i["a"]=n},ac83:function(t,i,r){"use strict";var n;r.d(i,"b",(function(){return e})),r.d(i,"c",(function(){return o})),r.d(i,"a",(function(){return n}));var e=function(){var t=this,i=t.$createElement;t._self._c},o=[]},d711:function(t,i,r){"use strict";r.r(i);var n=r("3247"),e=r.n(n);for(var o in n)"default"!==o&&function(t){r.d(i,t,(function(){return n[t]}))}(o);i["default"]=e.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/mp-html/node/node-create-component',
    {
        'components/mp-html/node/node-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("7419"))
        })
    },
    [['components/mp-html/node/node-create-component']]
]);
