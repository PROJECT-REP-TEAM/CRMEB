(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0185b571"],{"20fd2":function(t,e,n){},"31b4":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.FromData?n("div",[n("Modal",{attrs:{scrollable:"","footer-hide":"",closable:"",title:t.FromData.title,"z-index":1,width:"700"},on:{"on-cancel":t.cancel},model:{value:t.modals,callback:function(e){t.modals=e},expression:"modals"}},[["/marketing/coupon/save.html"===t.FromData.action?n("div",{staticClass:"radio acea-row row-middle"},[n("div",{staticClass:"name ivu-form-item-content"},[t._v("优惠券类型")]),n("Radio-group",{on:{"on-change":t.couponsType},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[n("Radio",{attrs:{label:0}},[t._v("通用券")]),n("Radio",{attrs:{label:1}},[t._v("品类券")]),n("Radio",{attrs:{label:2}},[t._v("商品券")])],1)],1):t._e()],n("form-create",{ref:"fc",staticClass:"formBox",attrs:{option:t.config,rule:Array.from(t.FromData.rules),handleIcon:"false"},on:{"on-submit":t.onSubmit}})],2)],1):t._e()},a=[],o=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),i=n("9860"),c=n.n(i),u=n("6b6c"),s=n("2f62");function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var f={name:"edit",components:{formCreate:c.a.$form()},computed:d({},Object(s["e"])("userLevel",["taskId","levelId"])),props:{FromData:{type:Object,default:null},update:{type:Boolean,default:!0}},data:function(){return{modals:!1,type:0,config:{global:{upload:{props:{onSuccess:function(t,e){200===t.status?e.url=t.data.src:this.Message.error(t.msg)}}}}}}},methods:{couponsType:function(){this.$parent.addType(this.type)},onSubmit:function(t){var e=this,n={};n=t,Object(u["a"])({url:this.FromData.action,method:this.FromData.method,data:n}).then((function(t){e.update&&e.$parent.getList(),e.$Message.success(t.msg),e.modals=!1,setTimeout((function(){e.$emit("submitFail")}),1e3)})).catch((function(t){e.$Message.error(t.msg)}))},cancel:function(){this.type=0}}},m=f,b=(n("bb05"),n("2877")),g=Object(b["a"])(m,r,a,!1,null,"7423233c",null);e["a"]=g.exports},"4f07":function(t,e,n){"use strict";var r=n("20fd2"),a=n.n(r);a.a},8593:function(t,e,n){"use strict";n.d(e,"j",(function(){return a})),n.d(e,"h",(function(){return o})),n.d(e,"i",(function(){return i})),n.d(e,"P",(function(){return c})),n.d(e,"n",(function(){return u})),n.d(e,"l",(function(){return s})),n.d(e,"m",(function(){return l})),n.d(e,"k",(function(){return d})),n.d(e,"D",(function(){return f})),n.d(e,"v",(function(){return m})),n.d(e,"C",(function(){return b})),n.d(e,"A",(function(){return g})),n.d(e,"x",(function(){return p})),n.d(e,"y",(function(){return h})),n.d(e,"z",(function(){return O})),n.d(e,"B",(function(){return v})),n.d(e,"M",(function(){return j})),n.d(e,"Q",(function(){return y})),n.d(e,"o",(function(){return _})),n.d(e,"d",(function(){return k})),n.d(e,"f",(function(){return C})),n.d(e,"c",(function(){return w})),n.d(e,"e",(function(){return E})),n.d(e,"g",(function(){return P})),n.d(e,"r",(function(){return x})),n.d(e,"p",(function(){return T})),n.d(e,"q",(function(){return D})),n.d(e,"G",(function(){return F})),n.d(e,"H",(function(){return S})),n.d(e,"L",(function(){return $})),n.d(e,"K",(function(){return M})),n.d(e,"a",(function(){return R})),n.d(e,"b",(function(){return I})),n.d(e,"t",(function(){return U})),n.d(e,"O",(function(){return L})),n.d(e,"w",(function(){return V})),n.d(e,"S",(function(){return G})),n.d(e,"R",(function(){return A})),n.d(e,"E",(function(){return B})),n.d(e,"F",(function(){return H})),n.d(e,"u",(function(){return z})),n.d(e,"I",(function(){return W})),n.d(e,"J",(function(){return J})),n.d(e,"s",(function(){return N})),n.d(e,"N",(function(){return q}));var r=n("6b6c");function a(t){return Object(r["a"])({url:"setting/config_class",method:"get",params:t})}function o(t){return Object(r["a"])({url:"setting/config_class/create",method:"get"})}function i(t){return Object(r["a"])({url:"setting/config_class/".concat(t,"/edit"),method:"get"})}function c(t){return Object(r["a"])({url:"setting/config_class/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function u(t){return Object(r["a"])({url:"setting/config",method:"get",params:t})}function s(t){return Object(r["a"])({url:"setting/config/create",method:"get",params:t})}function l(t){return Object(r["a"])({url:"/setting/config/".concat(t,"/edit"),method:"get"})}function d(t,e){return Object(r["a"])({url:"setting/config/set_status/".concat(t,"/").concat(e),method:"PUT"})}function f(t){return Object(r["a"])({url:"setting/group",method:"get",params:t})}function m(t){return Object(r["a"])({url:t.url,method:t.method,data:t.datas})}function b(t){return Object(r["a"])({url:"setting/group/".concat(t),method:"get"})}function g(t,e){return Object(r["a"])({url:e,method:"get",params:t})}function p(t,e){return Object(r["a"])({url:e,method:"get",params:t})}function h(t,e){return Object(r["a"])({url:e,method:"get",params:t})}function O(t,e){return Object(r["a"])({url:e,method:"get",params:t})}function v(t){return Object(r["a"])({url:t,method:"PUT"})}function j(t){return Object(r["a"])({url:"system/log/search_admin",method:"GET"})}function y(t){return Object(r["a"])({url:"system/log",method:"GET",params:t})}function _(){return Object(r["a"])({url:"system/file",method:"GET"})}function k(){return Object(r["a"])({url:"system/backup",method:"GET"})}function C(t){return Object(r["a"])({url:"system/backup/read",method:"GET",params:t})}function w(t){return Object(r["a"])({url:"system/backup/backup",method:"put",data:t})}function E(t){return Object(r["a"])({url:"system/backup/optimize",method:"put",data:t})}function P(t){return Object(r["a"])({url:"system/backup/repair",method:"put",data:t})}function x(t){return Object(r["a"])({url:"system/backup/file_list",method:"GET"})}function T(t){return Object(r["a"])({url:"backup/download",method:"get",params:t})}function D(t){return Object(r["a"])({url:"system/backup/import",method:"POST",data:t})}function F(t){return Object(r["a"])({url:"system/file/opendir",method:"GET",params:t})}function S(t){return Object(r["a"])({url:"system/file/openfile?filepath=".concat(t),method:"GET"})}function $(t){return Object(r["a"])({url:"system/file/savefile",method:"post",data:t})}function M(t){return Object(r["a"])({url:"system/replace_site_url",method:"post",data:t})}function R(){return Object(r["a"])({url:"auth",method:"get"})}function I(t){return Object(r["a"])({url:"auth_apply",method:"post",data:t})}function U(){return Object(r["a"])({url:"setting/get_kf_adv",method:"get"})}function L(t){return Object(r["a"])({url:"setting/set_kf_adv",method:"post",data:t})}function V(){return Object(r["a"])({url:"setting/group_all",method:"get"})}function G(t){return Object(r["a"])({url:"system/version_list",method:"get",params:t})}function A(t){return Object(r["a"])({url:"system/version_crate/".concat(t),method:"get"})}function B(t){return Object(r["a"])({url:"setting/group_data/save_all",method:"POST",data:t})}function H(t){return Object(r["a"])({url:"diy/open_adv/add",method:"POST",data:t})}function z(){return Object(r["a"])({url:"diy/open_adv/info",method:"get"})}function W(t){return Object(r["a"])({url:"setting/config/get_system/".concat(t),method:"get"})}function J(t){return Object(r["a"])({url:"setting/config/save_basics",method:"POST",data:t})}function N(){return Object(r["a"])({url:"setting/get_user_agreement",method:"get"})}function q(t){return Object(r["a"])({url:"setting/set_user_agreement",method:"post",data:t})}},bb05:function(t,e,n){"use strict";var r=n("f557"),a=n.n(r);a.a},cc2e:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:t.bgcolors},[n("div",{staticClass:"i-layout-page-header"},[n("span",{staticClass:"ivu-page-header-title mr20"},[t._v(t._s(t.$route.meta.title))]),n("div",{staticStyle:{float:"right"}},[n("Button",{staticClass:"bnt",attrs:{type:"primary"},on:{click:function(e){return t.onsubmit("formValidate")}}},[t._v("保存")])],1)]),n("div",{staticClass:"box-wrapper"},[n("div",{staticClass:"iframe",attrs:{bordered:!1}},[n("div",{staticClass:"agreement-box"},[n("div",{staticClass:"template"}),n("div",{staticClass:"htmls_box"},[n("div",{staticClass:"htmls_top"},[t._v("服务协议与隐私政策")]),t._m(0),n("div",{staticClass:"htmls",domProps:{innerHTML:t._s(t.content)}})])])]),n("div",{staticStyle:{"margin-left":"40px"}},[n("div",{staticClass:"table_box"},[n("div",{attrs:{type:"flex"}},[n("div",t._b({},"div",t.grid,!1),[n("div",{staticClass:"title"},[t._v("隐私权限页面展示：")])])]),n("div",[n("Form",{ref:"formValidate",staticClass:"form",attrs:{model:t.formValidate,rules:t.ruleValidate,"label-position":t.labelPosition},nativeOn:{submit:function(t){t.preventDefault()}}},[n("div",{staticClass:"goodsTitle acea-row"}),n("FormItem",{staticStyle:{margin:"0px"},attrs:{label:""}},[n("WangEditor",{staticStyle:{width:"90%"},attrs:{content:t.formValidate.content},on:{editorContent:t.getEditorContent}})],1)],1)],1)])])]),n("linkaddress",{ref:"linkaddres",on:{linkUrl:t.linkUrl}})],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"htmls_font"},[n("div",{staticClass:"ok"},[t._v("我同意")]),n("div",[t._v("不同意")])])}],o=(n("8e6e"),n("ac6a"),n("456d"),n("96cf"),n("3b8d")),i=(n("7f7f"),n("a481"),n("bd86")),c=n("a069"),u=n("d708"),s=n("f478"),l=n("2f62"),d=n("31b4"),f=(n("c4c8"),n("8593")),m=n("310e"),b=n.n(m),g=n("b0e7"),p=n("7af3");n("c276");function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var v={name:"list",components:{editFrom:d["a"],draggable:b.a,uploadPictures:g["a"],linkaddress:p["a"],WangEditor:c["a"]},computed:O({bgcolors:function(){return{"--color-theme":this.bgCol}},labelWidth:function(){return this.isMobile?void 0:120},labelPosition:function(){return this.isMobile?"top":"right"}},Object(l["e"])("admin/layout",["menuCollapse"])),data:function(){return{formValidate:{content:""},ruleValidate:{},myConfig:{autoHeightEnabled:!1,initialFrameHeight:500,initialFrameWidth:"100%",UEDITOR_HOME_URL:"/admin/UEditor/",serverUrl:""},a:1,guide:0,bgimg:0,columns1:[],bgCol:"",name:"",content:"",grid:{xl:7,lg:7,md:12,sm:24,xs:24},loading:!1,sginList:[],progress:0,url:"",BaseURL:u["a"].apiBaseURL.replace(/adminapi/,""),pageId:0,groupAll:[],activeIndex:0,sortName:null,activeIndexs:0,cmsList:[],loadingExist:!1,formItem:{time:"",type:"pic",status:1,value:[],video_link:""},header:{},type:0}},created:function(){this.color(),this.a=1,this.guide=0,this.getAgreement()},mounted:function(){},methods:{linkUrl:function(t){this.tabList.list[this.activeIndexs].link=t},getEditorContent:function(t){this.content=t},color:function(){var t=this;Object(s["h"])("color_change").then((function(e){switch(e.data.status){case 1:t.bgCol="#3875EA",t.bgimg=1;break;case 2:t.bgCol="#00C050",t.bgimg=2;break;case 3:t.bgCol="#E93323",t.bgimg=3;break;case 4:t.bgCol="#FF448F",t.bgimg=4;break;case 5:t.bgCol="#FE5C2D",t.bgimg=5;break}}))},link:function(t){this.activeIndexs=t,this.$refs.linkaddres.modals=!0},getListHeader:function(){var t=this;this.loading=!0,Object(f["z"])({config_name:this.name},"setting/sign_data/header").then((function(e){var n=e.data,r=n.header;t.columns1=r,t.loading=!1})).catch((function(e){t.loading=!1,t.$Message.error(e.msg)}))},getContent:function(t){this.formValidate.content=t},onsubmit:function(t){var e=this;this.formValidate.content=this.content,Object(f["N"])(this.formValidate).then(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$Message.success(n.msg);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$Message.error(t.msg)}))},getAgreement:function(){var t=this;Object(f["s"])().then(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=n.data,t.formValidate={content:r.content},t.content=r.content;case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$Message.error(e.msg)}))}}},j=v,y=(n("4f07"),n("2877")),_=Object(y["a"])(j,r,a,!1,null,"05961e1a",null);e["default"]=_.exports},f557:function(t,e,n){}}]);