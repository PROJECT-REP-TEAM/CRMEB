(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ab0571a"],{"14d3c":function(e,t,r){"use strict";var a=r("7006"),o=r.n(a);o.a},7006:function(e,t,r){},a402:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"article-manager"},[r("div",{staticClass:"i-layout-page-header"},[r("div",{staticClass:"i-layout-page-header"},[r("span",{staticClass:"ivu-page-header-title"},[e._v(e._s(e.$route.meta.title))])])]),r("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[r("Form",{ref:"formItem",attrs:{model:e.formItem,"label-width":e.labelWidth,"label-position":e.labelPosition,rules:e.ruleValidate},nativeOn:{submit:function(e){e.preventDefault()}}},[r("Row",{attrs:{type:"flex",gutter:24}},[r("Col",{attrs:{span:"24"}},[r("Col",e._b({},"Col",e.grid,!1),[r("FormItem",{attrs:{label:"门店名称：",prop:"name","label-for":"name"}},[r("Input",{attrs:{placeholder:"请输入门店名称"},model:{value:e.formItem.name,callback:function(t){e.$set(e.formItem,"name",t)},expression:"formItem.name"}})],1)],1)],1),r("Col",{attrs:{span:"24"}},[r("Col",e._b({},"Col",e.grid,!1),[r("FormItem",{attrs:{label:"门店简介：","label-for":"introduction"}},[r("Input",{attrs:{placeholder:"请输入门店简介"},model:{value:e.formItem.introduction,callback:function(t){e.$set(e.formItem,"introduction",t)},expression:"formItem.introduction"}})],1)],1)],1),r("Col",{attrs:{span:"24"}},[r("Col",e._b({},"Col",e.grid,!1),[r("FormItem",{attrs:{label:"门店手机号：","label-for":"phone",prop:"phone"}},[r("Input",{attrs:{type:"number",placeholder:"请输入门店手机号"},model:{value:e.formItem.phone,callback:function(t){e.$set(e.formItem,"phone",t)},expression:"formItem.phone"}})],1)],1)],1),r("Col",{attrs:{span:"24"}},[r("Col",e._b({},"Col",e.grid,!1),[r("FormItem",{attrs:{label:"门店地址：","label-for":"address",prop:"address"}},[r("Cascader",{attrs:{data:e.addresData,value:e.formItem.address},on:{"on-change":e.handleChange},model:{value:e.formItem.address,callback:function(t){e.$set(e.formItem,"address",t)},expression:"formItem.address"}})],1)],1)],1),r("Col",{attrs:{span:"24"}},[r("Col",e._b({},"Col",e.grid,!1),[r("FormItem",{attrs:{label:"详细地址：","label-for":"detailed_address",prop:"detailed_address"}},[r("Input",{attrs:{placeholder:"请输入详细地址"},model:{value:e.formItem.detailed_address,callback:function(t){e.$set(e.formItem,"detailed_address",t)},expression:"formItem.detailed_address"}})],1)],1)],1),r("Col",{attrs:{span:"24"}},[r("Col",e._b({},"Col",e.grid,!1),[r("FormItem",{attrs:{label:"核销时效：","label-for":"valid_time"}},[r("DatePicker",{attrs:{editable:!1,value:e.formItem.valid_time,format:"yyyy/MM/dd",type:"daterange","split-panels":"",placeholder:"请选择核销时效"},on:{"on-change":e.onchangeDate},model:{value:e.formItem.valid_time,callback:function(t){e.$set(e.formItem,"valid_time",t)},expression:"formItem.valid_time"}})],1)],1)],1),r("Col",{attrs:{span:"24"}},[r("Col",e._b({},"Col",e.grid,!1),[r("FormItem",{attrs:{label:"门店营业：","label-for":"day_time"}},[r("TimePicker",{attrs:{type:"timerange",format:"HH:mm:ss",value:e.formItem.day_time,placement:"bottom-end",placeholder:"请选择营业时间"},on:{"on-change":e.onchangeTime},model:{value:e.formItem.day_time,callback:function(t){e.$set(e.formItem,"day_time",t)},expression:"formItem.day_time"}})],1)],1)],1),r("Col",{attrs:{span:"24"}},[r("Col",e._b({},"Col",e.grid,!1),[r("FormItem",{attrs:{label:"门店logo：",prop:"image"}},[r("div",{staticClass:"picBox",on:{click:function(t){return e.modalPicTap("单选")}}},[e.formItem.image?r("div",{staticClass:"pictrue"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.formItem.image,expression:"formItem.image"}]})]):r("div",{staticClass:"upLoad acea-row row-center-wrapper"},[r("Icon",{staticClass:"iconfont",attrs:{type:"ios-camera-outline",size:"26"}})],1)])])],1)],1),r("Col",{attrs:{span:"24"}},[r("Col",e._b({},"Col",e.grid,!1),[r("FormItem",{attrs:{label:"经纬度：","label-for":"status2",prop:"latlng"}},[r("Tooltip",[r("Input",{staticStyle:{width:"100%"},attrs:{search:"","enter-button":"查找位置",placeholder:"请查找位置"},on:{"on-search":e.onSearch},model:{value:e.formItem.latlng,callback:function(t){e.$set(e.formItem,"latlng",t)},expression:"formItem.latlng"}}),r("div",{attrs:{slot:"content"},slot:"content"},[e._v("\n                                   请点击查找位置选择位置\n                                ")])],1)],1)],1)],1)],1),r("Row",{attrs:{type:"flex"}},[r("Col",e._b({},"Col",e.grid,!1),[r("Button",{staticClass:"ml20",attrs:{type:"primary"},on:{click:function(t){return e.handleSubmit("formItem")}}},[e._v("提交")])],1)],1),e.spinShow?r("Spin",{attrs:{size:"large",fix:""}}):e._e()],1)],1),r("Modal",{attrs:{width:"950px",scrollable:"","footer-hide":"",closable:"",title:"上传商品图","mask-closable":!1,"z-index":888},model:{value:e.modalPic,callback:function(t){e.modalPic=t},expression:"modalPic"}},[e.modalPic?r("uploadPictures",{attrs:{isChoice:e.isChoice,gridBtn:e.gridBtn,gridPic:e.gridPic},on:{getPic:e.getPic}}):e._e()],1),r("Modal",{staticClass:"mapBox",attrs:{scrollable:"","footer-hide":"",closable:"",title:"上传商品图","mask-closable":!1,"z-index":1},model:{value:e.modalMap,callback:function(t){e.modalMap=t},expression:"modalMap"}},[r("iframe",{attrs:{id:"mapPage",width:"100%",height:"100%",frameborder:"0",src:e.keyUrl}})])],1)},o=[],i=(r("8e6e"),r("ac6a"),r("456d"),r("7f7f"),r("96cf"),r("3b8d")),n=r("bd86"),l=r("90e7"),s=r("2f62"),m=r("2e8e"),c=r("b0e7");function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){Object(n["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p={name:"systemStore",components:{uploadPictures:c["a"]},data:function(){var e=this,t=function(e,t,r){if(!t)return r(new Error("请填写手机号"));/^1[3456789]\d{9}$/.test(t)?r():r(new Error("手机号格式不正确!"))},r=function(t,r,a){e.formItem.image?a():a(new Error("请上传门店logo"))};return{spinShow:!1,modalMap:!1,addresData:m["a"],formItem:{name:"",introduction:"",phone:"",address:[],address2:[],detailed_address:"",valid_time:[],day_time:[],latlng:"",id:0},ruleValidate:{name:[{required:!0,message:"请输入门店名称",trigger:"blur"}],mail:[{required:!0,message:"Mailbox cannot be empty",trigger:"blur"},{type:"email",message:"Incorrect email format",trigger:"blur"}],address:[{required:!0,message:"请选择门店地址",type:"array",trigger:"change"}],valid_time:[{required:!0,type:"array",message:"请选择核销时效",trigger:"change",fields:{0:{type:"date",required:!0,message:"请选择年度范围"},1:{type:"date",required:!0,message:"请选择年度范围"}}}],day_time:[{required:!0,type:"array",message:"请选择门店营业时间",trigger:"change"}],phone:[{required:!0,validator:t,trigger:"blur"}],detailed_address:[{required:!0,message:"请输入详细地址",trigger:"blur"}],image:[{required:!0,validator:r,trigger:"change"}],latlng:[{required:!0,message:"请选择经纬度",trigger:"blur"}]},keyUrl:"",grid:{xl:10,lg:16,md:18,sm:24,xs:24},gridPic:{xl:6,lg:8,md:12,sm:12,xs:12},gridBtn:{xl:4,lg:8,md:8,sm:8,xs:8},modalPic:!1,isChoice:"单选"}},created:function(){m["a"].map((function(e){e.value=e.label,e.children&&e.children.length&&e.children.map((function(e){e.value=e.label,e.children&&e.children.length&&e.children.map((function(e){e.value=e.label}))}))})),this.getKey(),this.getFrom()},computed:u(u({},Object(s["e"])("media",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:100},labelPosition:function(){return this.isMobile?"top":"right"}}),mounted:function(){window.addEventListener("message",(function(e){var t=e.data;t&&"locationPicker"===t.module&&window.parent.selectAdderss(t)}),!1),window.selectAdderss=this.selectAdderss},methods:{selectAdderss:function(e){this.formItem.latlng=e.latlng.lat+","+e.latlng.lng,this.modalMap=!1},getKey:function(){var e=this;Object(l["u"])().then(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(r){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=r.data.key,e.keyUrl="https://apis.map.qq.com/tools/locpicker?type=1&key=".concat(a,"&referer=myapp");case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$Message.error(t.msg)}))},getFrom:function(){var e=this;this.spinShow=!0,Object(l["R"])().then(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(r){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=r.data.info||null,e.formItem=a||e.formItem,e.formItem.address=a.address2,e.spinShow=!1;case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.spinShow=!1,e.$Message.error(t.msg)}))},modalPicTap:function(){this.modalPic=!0},getPic:function(e){this.formItem.image=e.att_dir,this.modalPic=!1},handleChange:function(e,t){this.formItem.address=t.map((function(e){return e.label}))},onchangeDate:function(e){this.formItem.valid_time=e},onchangeTime:function(e){this.formItem.day_time=e},onSearch:function(){this.modalMap=!0},handleSubmit:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return!1;Object(l["Q"])(t.formItem).then(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$Message.success(r.msg);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$Message.error(e.msg)}))}))}}},f=p,g=(r("14d3c"),r("2877")),h=Object(g["a"])(f,a,o,!1,null,"52f0d1f9",null);t["default"]=h.exports}}]);