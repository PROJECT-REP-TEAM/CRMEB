(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e0b1266"],{"011a":function(t,s,i){t.exports=i.p+"img/no_chat.b9c3e583.png"},"060a":function(t,s,i){t.exports=i.p+"img/no_tk.401d40f4.png"},"1fe1":function(t,s,i){},"27b8":function(t,s,i){},4112:function(t,s,i){t.exports=i.p+"img/no_user.a09b282b.png"},"468b":function(t,s,i){t.exports=i.p+"img/no_all.174e30c0.png"},"5f70":function(t,s,i){t.exports=i.p+"img/no_fh.977a0fb8.png"},"7a1a":function(t,s,i){"use strict";i.d(s,"a",(function(){return e}));var a=i("6b6c");function e(){return Object(a["a"])({url:"service/info",method:"get",kefu:!0})}},"7d97":function(t,s,i){"use strict";var a=i("1fe1"),e=i.n(a);e.a},"7eb7":function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"product_info"},[i("div",{staticClass:"head"},[i("div",{staticClass:"tab-box"},t._l(t.tabList,(function(s,a){return i("div",{key:a,staticClass:"tab-item",class:{on:a==t.tabCur},on:{click:function(i){return t.bindTab(s)}}},[t._v(t._s(s.title))])})),0),i("div",{staticClass:"search-box"},[i("Input",{staticStyle:{"border-radius":".39rem",background:"#F5F6F9"},attrs:{type:"text",placeholder:"搜索商品名称/ID",search:!0},on:{"on-search":t.bindSearch},model:{value:t.searchTxt,callback:function(s){t.searchTxt=s},expression:"searchTxt"}})],1)]),t.list.length>0?i("div",{staticClass:"scroll-box"},[i("vue-scroll",{attrs:{ops:t.ops}},[t._l(t.list,(function(s,a){return i("div",{key:a,staticClass:"goods-item"},[i("img",{attrs:{src:s.image,mode:""}}),i("div",{staticClass:"info"},[i("div",{staticClass:"title line2 mb15"},[t._v(t._s(s.store_name))]),i("div",{staticClass:"num"},[i("span",{staticClass:"mr15"},[t._v("库存 "+t._s(s.stock))]),i("span",[t._v("销量 "+t._s(s.sales))])])]),i("div",{staticClass:"right"},[i("div",{staticClass:"price"},[t._v("￥"+t._s(s.price))]),i("div",{staticClass:"btn",on:{click:function(i){return t.bingGoods(s)}}},[t._v("推送")])])])})),i("div",{staticClass:"slot-load",attrs:{slot:"load-deactive"},slot:"load-deactive"}),i("div",{staticClass:"slot-load",attrs:{slot:"load-active"},slot:"load-active"},[t._v("下滑加载更多")])],2)],1):i("empty",{attrs:{msg:"暂无商品信息"}})],1)},e=[],n=i("49ea"),c=i("42e3"),o=i("7a1a"),r=i("8b1f"),u={name:"product_info",components:{empty:r["a"]},data:function(){return{ops:{bar:{background:"#393232",opacity:".5",size:"2px"}},searchTxt:"",tabCur:0,tabList:[{key:0,title:"购买",api:"productCart"},{key:1,title:"足迹",api:"productHot"},{key:2,title:"热销",api:"productVisit"}],toUid:"",list:[]}},watch:{tabCur:function(t,s){return this.list=[],0==t?this.getBuyList():1==t?this.getVisit():2==t?this.getProductHot():void 0}},created:function(){Object(o["a"])().then((function(t){window.document.title="".concat(t.data.site_name," - 商品列表")})),this.toUid=this.$route.query.toUid,this.getBuyList()},methods:{getBuyList:function(){var t=this;Object(c["A"])(this.toUid,{store_name:this.searchTxt}).then((function(s){t.list=s.data}))},getProductHot:function(){var t=this;Object(c["B"])(this.toUid,{store_name:this.searchTxt}).then((function(s){t.list=s.data}))},getVisit:function(){var t=this;Object(c["D"])(this.toUid,{store_name:this.searchTxt}).then((function(s){t.list=s.data}))},bingGoods:function(t){var s={type:"chat",data:{msn:t.id,type:5,to_uid:this.toUid}};n["a"].then((function(t){t.send(s)})),this.$router.go(-1)},bindTab:function(t){this.tabCur=t.key},bindSearch:function(){return 0==this.tabCur?this.getBuyList():1==this.tabCur?this.getVisit():2==this.tabCur?this.getProductHot():void 0}}},l=u,d=(i("7d97"),i("e844"),i("2877")),f=Object(d["a"])(l,a,e,!1,null,"3992f976",null);s["default"]=f.exports},"8b1f":function(t,s,i){"use strict";var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"empty-wrapper"},[1==t.status?[a("img",{attrs:{src:i("011a"),alt:""}})]:t._e(),2==t.status?[a("img",{attrs:{src:i("4112"),alt:""}})]:t._e(),3==t.status?[a("img",{attrs:{src:i("468b"),alt:""}})]:t._e(),4==t.status?[a("img",{attrs:{src:i("ea87"),alt:""}})]:t._e(),5==t.status?[a("img",{attrs:{src:i("5f70"),alt:""}})]:t._e(),6==t.status?[a("img",{attrs:{src:i("060a"),alt:""}})]:t._e(),a("p",[t._v(t._s(t.msg))])],2)},e=[],n=(i("c5f6"),{name:"empty",props:{status:{type:String|Number,default:1},msg:{type:String,default:""}}}),c=n,o=(i("e7bb"),i("2877")),r=Object(o["a"])(c,a,e,!1,null,"7fdc5215",null);s["a"]=r.exports},d8b4:function(t,s,i){},e7bb:function(t,s,i){"use strict";var a=i("d8b4"),e=i.n(a);e.a},e844:function(t,s,i){"use strict";var a=i("27b8"),e=i.n(a);e.a},ea87:function(t,s,i){t.exports=i.p+"img/no_zf.e61fe9b5.png"}}]);