(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22c8ff"],{f483:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"i-layout-page-header"},[i("div",{staticClass:"i-layout-page-header"},[i("span",{staticClass:"ivu-page-header-title"},[t._v(t._s(t.$route.meta.title))])])]),i("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[i("Row",{attrs:{type:"flex"}},[i("Col",t._b({},"Col",t.grid,!1),[i("Button",{directives:[{name:"auth",rawName:"v-auth",value:["admin-user-label_add"],expression:"['admin-user-label_add']"}],attrs:{type:"primary",icon:"md-add"},on:{click:t.add}},[t._v("添加主播")])],1)],1),i("Table",{ref:"table",staticClass:"mt25",attrs:{columns:t.columns1,data:t.labelLists,loading:t.loading,"highlight-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:t._u([{key:"icons",fn:function(t){var e=t.row;t.index;return[i("viewer",[i("div",{staticClass:"tabBox_img"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.icon,expression:"row.icon"}]})])])]}},{key:"action",fn:function(e){var a=e.row,n=e.index;return[i("a",{on:{click:function(e){return t.edit(a.id)}}},[t._v("修改")]),i("Divider",{attrs:{type:"vertical"}}),i("a",{on:{click:function(e){return t.del(a,"删除分组",n)}}},[t._v("删除")])]}}])}),i("div",{staticClass:"acea-row row-right page"},[i("Page",{attrs:{total:t.total,"show-elevator":"","show-total":"","page-size":t.labelFrom.limit},on:{"on-change":t.pageChange}})],1)],1)],1)},n=[],r=(i("8e6e"),i("ac6a"),i("456d"),i("96cf"),i("1da1")),o=i("ade3"),s=i("2f62"),c=i("47c5");function l(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function u(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?l(Object(i),!0).forEach((function(e){Object(o["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var d={name:"anchor",data:function(){return{grid:{xl:7,lg:7,md:12,sm:24,xs:24},loading:!1,columns1:[{title:"ID",key:"id",minWidth:120},{title:"名称",key:"name",minWidth:300},{title:"电话",key:"phone",minWidth:300},{title:"微信号",key:"wechat",minWidth:300},{title:"操作",slot:"action",fixed:"right",minWidth:120}],labelFrom:{kerword:"",page:1,limit:15},labelLists:[],total:0}},computed:u(u({},Object(s["e"])("media",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:75},labelPosition:function(){return this.isMobile?"top":"right"}}),created:function(){this.getList()},methods:{add:function(){var t=this;this.$modalForm(Object(c["b"])(0)).then((function(){return t.getList()}))},edit:function(t){var e=this;this.$modalForm(Object(c["b"])(t)).then((function(){return e.getList()}))},del:function(t,e,i){var a=this,n={title:e,num:i,url:"live/anchor/del/".concat(t.id),method:"DELETE",ids:""};this.$modalSure(n).then((function(t){a.$Message.success(t.msg),a.labelLists.splice(i,1),a.getList()})).catch((function(t){a.$Message.error(t.msg)}))},getList:function(){var t=this;this.loading=!0,Object(c["c"])(this.labelFrom).then(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(i){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=i.data,t.labelLists=a.list,t.total=a.count,t.loading=!1;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$Message.error(e.msg)}))},pageChange:function(t){this.labelFrom.page=t,this.getList()}}},h=d,m=i("2877"),g=Object(m["a"])(h,a,n,!1,null,"3a6bb692",null);e["default"]=g.exports}}]);