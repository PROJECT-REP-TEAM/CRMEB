(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f5be7f0"],{"0bbb":function(t,e,a){},3779:function(t,e,a){"use strict";var i=a("0bbb"),n=a.n(i);n.a},b43f:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"i-layout-page-header"},[a("div",{staticClass:"i-layout-page-header"},[a("span",{staticClass:"ivu-page-header-title"},[t._v(t._s(t.$route.meta.title))])])]),a("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[a("Row",{staticClass:"mb20",attrs:{type:"flex"}},[a("Col",{attrs:{span:"24"}},[a("Button",{directives:[{name:"auth",rawName:"v-auth",value:["setting-delivery_service-add"],expression:"['setting-delivery_service-add']"}],staticClass:"mr10",attrs:{type:"primary",icon:"md-add"},on:{click:t.add}},[t._v("添加配送员")])],1)],1),a("Table",{attrs:{columns:t.columns1,data:t.data1,loading:t.loading,"highlight-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:t._u([{key:"avatar",fn:function(t){var e=t.row;t.index;return[a("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"tabBox_img"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.avatar,expression:"row.avatar"}]})])]}},{key:"status",fn:function(e){var i=e.row;e.index;return[a("i-switch",{attrs:{value:i.status,"true-value":1,"false-value":0,size:"large"},on:{"on-change":function(e){return t.onchangeIsShow(i)}},model:{value:i.status,callback:function(e){t.$set(i,"status",e)},expression:"row.status"}},[a("span",{attrs:{slot:"open"},slot:"open"},[t._v("显示")]),a("span",{attrs:{slot:"close"},slot:"close"},[t._v("隐藏")])])]}},{key:"add_time",fn:function(e){var i=e.row;e.index;return[a("span",[t._v(" "+t._s(t._f("formatDate")(i.add_time)))])]}},{key:"action",fn:function(e){var i=e.row,n=e.index;return[a("a",{on:{click:function(e){return t.edit(i)}}},[t._v("编辑")]),a("Divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(e){return t.del(i,"删除配送员",n)}}},[t._v("删除")])]}}])}),a("div",{staticClass:"acea-row row-right page"},[a("Page",{attrs:{total:t.total,current:t.tableOptions.page,"show-elevator":"","show-total":"","page-size":t.tableOptions.limit},on:{"on-change":t.pageChange}})],1)],1)],1)},n=[],s=a("f3f3"),r=(a("a434"),a("2f62")),o=a("f8b7"),c={name:"index",computed:Object(s["a"])({},Object(r["e"])("media",["isMobile"])),data:function(){return{columns1:[{title:"ID",key:"id",width:80},{title:"头像",slot:"avatar",minWidth:60},{title:"名称",key:"nickname",minWidth:120},{title:"手机号码",key:"phone",minWidth:120},{title:"是否显示",slot:"status",minWidth:120},{title:"添加时间",key:"add_time",minWidth:120},{title:"操作",slot:"action",fixed:"right",minWidth:150}],data1:[],total:0,tableOptions:{page:1,limit:15},loading:!1}},created:function(){this.getOrderDeliveryList()},methods:{getOrderDeliveryList:function(){var t=this;this.loading=!0,Object(o["b"])(this.tableOptions).then((function(e){t.data1=e.data.list,t.total=e.data.count,t.loading=!1})).catch((function(e){t.loading=!1,t.$Message.error(e.msg)}))},add:function(){var t=this;this.$modalForm(Object(o["r"])()).then((function(){return t.getOrderDeliveryList()}))},edit:function(t){var e=this;this.$modalForm(Object(o["s"])(t.id)).then((function(){return e.getOrderDeliveryList()}))},del:function(t,e,a){var i=this,n={title:e,num:a,url:"/order/delivery/del/".concat(t.id),method:"DELETE",ids:""};this.$modalSure(n).then((function(t){i.$Message.success(t.msg),i.data1.splice(a,1)})).catch((function(t){i.$Message.error(t.msg)}))},onchangeIsShow:function(t){var e=this;Object(o["u"])(t).then((function(t){e.$Message.success(t.msg)})).catch((function(t){e.$Message.error(t.msg)}))},pageChange:function(t){this.tableOptions.page=t,this.getOrderDeliveryList()}}},l=c,d=(a("3779"),a("2877")),u=Object(d["a"])(l,i,n,!1,null,"98cad0ac",null);e["default"]=u.exports}}]);