(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d220ac0"],{"2c3e":function(e,t,r){var i=r("da84"),a=r("83ab"),s=r("9f7f").MISSED_STICKY,n=r("c6b6"),o=r("edd0"),c=r("69f3").get,p=RegExp.prototype,d=i.TypeError;a&&s&&o(p,"sticky",{configurable:!0,get:function(){if(this!==p){if("RegExp"===n(this))return!!c(this).sticky;throw d("Incompatible receiver, RegExp required")}}})},"4d63":function(e,t,r){var i=r("83ab"),a=r("da84"),s=r("e330"),n=r("94ca"),o=r("7156"),c=r("9112"),p=r("241c").f,d=r("3a9b"),l=r("44e7"),m=r("577e"),u=r("90d8"),v=r("9f7f"),x=r("aeb0"),f=r("cb2d"),_=r("d039"),h=r("1a2d"),g=r("69f3").enforce,y=r("2626"),b=r("b622"),w=r("fce3"),F=r("107c"),k=b("match"),C=a.RegExp,I=C.prototype,T=a.SyntaxError,E=s(I.exec),$=s("".charAt),N=s("".replace),R=s("".indexOf),O=s("".slice),j=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,D=/a/g,P=/a/g,S=new C(D)!==D,V=v.MISSED_STICKY,Y=v.UNSUPPORTED_Y,A=i&&(!S||V||w||F||_((function(){return P[k]=!1,C(D)!=D||C(P)==P||"/a/i"!=C(D,"i")}))),L=function(e){for(var t,r=e.length,i=0,a="",s=!1;i<=r;i++)t=$(e,i),"\\"!==t?s||"."!==t?("["===t?s=!0:"]"===t&&(s=!1),a+=t):a+="[\\s\\S]":a+=t+$(e,++i);return a},M=function(e){for(var t,r=e.length,i=0,a="",s=[],n={},o=!1,c=!1,p=0,d="";i<=r;i++){if(t=$(e,i),"\\"===t)t+=$(e,++i);else if("]"===t)o=!1;else if(!o)switch(!0){case"["===t:o=!0;break;case"("===t:E(j,O(e,i+1))&&(i+=2,c=!0),a+=t,p++;continue;case">"===t&&c:if(""===d||h(n,d))throw new T("Invalid capture group name");n[d]=!0,s[s.length]=[d,p],c=!1,d="";continue}c?d+=t:a+=t}return[a,s]};if(n("RegExp",A)){for(var q=function(e,t){var r,i,a,s,n,p,v=d(I,this),x=l(e),f=void 0===t,_=[],h=e;if(!v&&x&&f&&e.constructor===q)return e;if((x||d(I,e))&&(e=e.source,f&&(t=u(h))),e=void 0===e?"":m(e),t=void 0===t?"":m(t),h=e,w&&"dotAll"in D&&(i=!!t&&R(t,"s")>-1,i&&(t=N(t,/s/g,""))),r=t,V&&"sticky"in D&&(a=!!t&&R(t,"y")>-1,a&&Y&&(t=N(t,/y/g,""))),F&&(s=M(e),e=s[0],_=s[1]),n=o(C(e,t),v?this:I,q),(i||a||_.length)&&(p=g(n),i&&(p.dotAll=!0,p.raw=q(L(e),r)),a&&(p.sticky=!0),_.length&&(p.groups=_)),e!==h)try{c(n,"source",""===h?"(?:)":h)}catch(y){}return n},z=p(C),J=0;z.length>J;)x(q,C,z[J++]);I.constructor=q,q.prototype=I,f(a,"RegExp",q,{constructor:!0})}y("RegExp")},"52fa":function(e,t,r){},"61f7":function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"c",(function(){return p})),r.d(t,"b",(function(){return d}));var i=r("fc11"),a=r("f3f3");r("ac1f"),r("00b4"),r("5319"),r("4d63"),r("c607"),r("2c3e"),r("25f0"),r("498a"),r("d3b7"),r("b64b"),r("99af");function s(e,t){/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length)));var r={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds()};for(var i in r)if(new RegExp("(".concat(i,")")).test(t)){var a=r[i]+"";t=t.replace(RegExp.$1,1===RegExp.$1.length?a:n(a))}return t}function n(e){return("00"+e).substr(e.length)}var o={min:"%s最小长度为:min",max:"%s最大长度为:max",length:"%s长度必须为:length",range:"%s长度为:range",pattern:"$s格式错误"};var c=function(e,t){e.message=function(e){return t.replace("%s",e||"")}};function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(a["a"])({required:!0,message:e,type:"string"},t)}function d(e){return l.pattern(/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/,e)}c(p,"请输入%s"),c(d,"%s格式不正确");var l=Object.keys(o).reduce((function(e,t){return e[t]=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n="range"===t?{min:e[0],max:e[1]}:Object(i["a"])({},t,e);return Object(a["a"])(Object(a["a"])({message:r.replace(":".concat(t),"range"===t?"".concat(e[0],"-").concat(e[1]):e),type:"string"},n),s)},c(e[t],o[t]),e}),{})},"7d08":function(e,t,r){"use strict";var i=r("52fa"),a=r.n(i);a.a},afa3:function(e,t,r){e.exports=r.p+"img/line.05bf1c84.jpg"},c607:function(e,t,r){var i=r("da84"),a=r("83ab"),s=r("fce3"),n=r("c6b6"),o=r("edd0"),c=r("69f3").get,p=RegExp.prototype,d=i.TypeError;a&&s&&o(p,"dotAll",{configurable:!0,get:function(){if(this!==p){if("RegExp"===n(this))return!!c(this).dotAll;throw d("Incompatible receiver, RegExp required")}}})},c7b8:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.delivery?r("div",{staticClass:"deliver-goods"},[r("header",[r("div",{staticClass:"order-num acea-row row-between-wrapper"},[r("div",{staticClass:"num line1"},[e._v("订单号："+e._s(e.orderId))]),r("div",{staticClass:"name line1"},[r("span",{staticClass:"iconfontYI icon-yonghu2"}),e._v(e._s(e.delivery.userInfo?e.delivery.userInfo.nickname:"")+"\n      ")])]),r("div",{staticClass:"address"},[r("div",{staticClass:"name"},[e._v("\n        "+e._s(e.delivery.orderInfo.real_name)),r("span",{staticClass:"phone"},[e._v(e._s(e.delivery.orderInfo.phone))])]),r("div",[e._v(e._s(e.delivery.orderInfo.user_address))])]),e._m(0)]),r("div",{staticClass:"wrapper"},[r("div",{staticClass:"item acea-row row-between-wrapper"},[r("div",[e._v("发货方式")]),r("div",{staticClass:"mode acea-row row-middle row-right"},e._l(e.types,(function(t,i){return r("div",{key:i,staticClass:"goods",class:e.active===i?"on":"",on:{click:function(r){return e.changeType(t,i)}}},[e._v("\n          "+e._s(t.title)),r("span",{staticClass:"iconfontYI icon-xuanzhong2"})])})),0)]),0===e.active?r("div",{staticClass:"item acea-row row-between-wrapper"},[r("div",[e._v("发货类型")]),r("div",{staticClass:"mode acea-row row-middle row-right"},e._l(e.expressType,(function(t,i){return r("div",{key:i,staticClass:"goods",class:e.activeExpTpe===i?"on":"",on:{click:function(r){return e.changeExpTpe(t,i)}}},[e._v("\n          "+e._s(t.title)),r("span",{staticClass:"iconfontYI icon-xuanzhong2"})])})),0)]):e._e(),0===e.active?r("div",{staticClass:"list"},[r("div",{staticClass:"item acea-row row-between-wrapper"},[r("div",[e._v("快递公司")]),r("span",{staticClass:"checkName",domProps:{textContent:e._s(e.expFrom.delivery_name)},on:{click:e.show}}),r("vue-pickers",{attrs:{data:e.pickData,showToolbar:!0,maskClick:!0,defaultIndex:0,visible:e.pickerVisible},on:{cancel:e.cancel,confirm:e.confirm,"update:visible":function(t){e.pickerVisible=t}}})],1),1===e.expFrom.express_record_type?r("div",{staticClass:"item acea-row row-between-wrapper"},[r("div",[e._v("快递单号")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.expFrom.delivery_id,expression:"expFrom.delivery_id"}],staticClass:"mode input-input",attrs:{type:"text",placeholder:"填写快递单号"},domProps:{value:e.expFrom.delivery_id},on:{input:function(t){t.target.composing||e.$set(e.expFrom,"delivery_id",t.target.value)}}})]):e._e(),1===e.expFrom.express_record_type?r("div",{staticClass:"item acea-row row-between-wrapper"},[r("div",{staticClass:"tip"},[e._v("顺丰请输入单号：收件人或寄件人手机号后四位,")]),r("div",{staticClass:"tip"},[e._v("例如：SF000000000000:3941")])]):e._e()]):e._e(),e.expTemp.length&&0===e.active?r("div",{staticClass:"list"},[r("div",{staticClass:"item acea-row row-between-wrapper"},[r("div",[e._v("电子面单")]),r("div",{staticClass:"acea-row"},[r("span",{staticClass:"checkName",domProps:{textContent:e._s(e.expFrom.delivery_name)},on:{click:e.showExpTemp}}),r("vue-pickers",{attrs:{data:e.expTempData,showToolbar:!0,maskClick:!0,defaultIndex:0,visible:e.pickerVisibleExpTemp},on:{confirm:e.confirmExpTemp,"update:visible":function(t){e.pickerVisibleExpTemp=t}}}),r("div",{staticClass:"look"},[r("span",[e._v("预览")]),r("viewer",{ref:"viewer",staticClass:"viewer"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.tempImg,expression:"tempImg"}],staticClass:"image"})])],1)],1)])]):e._e(),2===e.expFrom.express_record_type&&0===e.active?r("div",{staticClass:"list"},[r("div",{staticClass:"item acea-row row-between-wrapper"},[r("div",[e._v("寄件人姓名")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.expFrom.to_name,expression:"expFrom.to_name"}],staticClass:"mode input-input",attrs:{type:"text",placeholder:"填写寄件人姓名"},domProps:{value:e.expFrom.to_name},on:{input:function(t){t.target.composing||e.$set(e.expFrom,"to_name",t.target.value)}}})]),r("div",{staticClass:"item acea-row row-between-wrapper"},[r("div",[e._v("寄件人电话")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.expFrom.to_tel,expression:"expFrom.to_tel"}],staticClass:"mode input-input",attrs:{type:"text",placeholder:"填写寄件人电话"},domProps:{value:e.expFrom.to_tel},on:{input:function(t){t.target.composing||e.$set(e.expFrom,"to_tel",t.target.value)}}})]),r("div",{staticClass:"item acea-row row-between-wrapper"},[r("div",[e._v("寄件人地址")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.expFrom.to_addr,expression:"expFrom.to_addr"}],staticClass:"mode input-input",attrs:{type:"text",placeholder:"填写寄件人地址"},domProps:{value:e.expFrom.to_addr},on:{input:function(t){t.target.composing||e.$set(e.expFrom,"to_addr",t.target.value)}}})])]):e._e(),1===e.active?r("div",{staticClass:"list"},[r("div",{staticClass:"item acea-row row-between-wrapper"},[r("div",[e._v("送货人")]),r("span",{staticClass:"checkName",domProps:{textContent:e._s(e.expFrom.sh_delivery_name)},on:{click:e.showName}}),r("vue-pickers",{attrs:{data:e.deliveryList,showToolbar:!0,maskClick:!0,defaultIndex:0,visible:e.pickerVisibleName},on:{confirm:e.confirmName,"update:visible":function(t){e.pickerVisibleName=t}}})],1),r("div",{staticClass:"item acea-row row-between-wrapper"},[r("div",[e._v("送货人电话")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.expFrom.sh_delivery_id,expression:"expFrom.sh_delivery_id"}],staticClass:"mode input-input",attrs:{type:"text",placeholder:"填写送货人电话"},domProps:{value:e.expFrom.sh_delivery_id},on:{input:function(t){t.target.composing||e.$set(e.expFrom,"sh_delivery_id",t.target.value)}}})])]):e._e(),2===e.active?r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.expFrom.fictitious_content,expression:"expFrom.fictitious_content"}],staticClass:"textarea",attrs:{placeholder:"备注",maxlength:500},domProps:{value:e.expFrom.fictitious_content},on:{input:function(t){t.target.composing||e.$set(e.expFrom,"fictitious_content",t.target.value)}}}):e._e()]),r("div",{staticStyle:{height:"1.2rem"}}),r("div",{staticClass:"confirm",on:{click:e.saveInfo}},[e._v("确认提交")])]):e._e()},a=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"line"},[i("img",{attrs:{src:r("afa3")}})])}],s=r("c964"),n=(r("96cf"),r("d81d"),r("f8b7"),r("42e3")),o=r("61f7"),c=r("69ae"),p=r("161e"),d=r.n(p),l={name:"GoodsDeliver",components:{vuePickers:d.a},props:{},data:function(){return{pickerVisible:!1,types:[{type:1,title:"发货"},{type:2,title:"送货"},{type:3,title:"无需发货"}],expressType:[{title:"手动填写",key:1},{title:"电子面单打印",key:2}],active:0,activeExpTpe:0,orderId:"",delivery:null,pickData:[],type:"1",result:{},expFrom:{type:1,delivery_name:"",delivery_id:"",delivery_code:"",express_record_type:1,express_temp_id:"",to_name:"",to_tel:"",to_addr:"",sh_delivery_name:"",sh_delivery_id:"",sh_delivery_uid:"",fictitious_content:""},expTemp:[],pickerVisibleName:!1,pickerVisibleExpTemp:!1,expTempData:[],tempName:"",tempImg:"",deliveryList:[]}},watch:{"$route.params.orderId":function(e){var t=this;void 0!=e&&(t.orderId=e,t.getIndex())}},created:function(){},mounted:function(){this.orderId=this.$route.params.orderId,this.getIndex(),this.getLogistics()},methods:{showName:function(){this.pickerVisibleName=!0},getDelivery:function(){var e=this;Object(n["r"])().then((function(t){var r=[];t.data.map((function(e){r.push({label:e.nickname,value:e.uid,phone:e.phone})})),e.deliveryList=[r],e.expFrom.sh_delivery_name=r[0].label,e.expFrom.sh_delivery_id=r[0].phone,e.expFrom.sh_delivery_uid=r[0].value,2===e.expFrom.express_record_type&&e.getTemp()}))},confirmName:function(e){this.expFrom.sh_delivery_name=e[0].label,this.expFrom.sh_delivery_id=e[0].phone,this.expFrom.sh_delivery_uid=e[0].value},orderDeliveryInfo:function(){var e=this;Object(n["m"])().then((function(t){e.expFrom.to_name=t.data.to_name,e.expFrom.to_tel=t.data.to_tel,e.expFrom.to_addr=t.data.to_add}))},cancel:function(){},changeExpTpe:function(e,t){this.expFrom.express_record_type=e.key,this.activeExpTpe=t,2===e.key?(this.orderDeliveryInfo(),this.getTemp()):this.expTemp=[]},getTemp:function(){var e=this;Object(n["y"])({com:this.expFrom.delivery_code}).then((function(t){e.expTemp=t.data.data;var r=[];e.expTemp.length&&(e.expTemp.map((function(e){r.push({label:e.title,value:e.temp_id,id:e.id,pic:e.pic,code:e.code})})),e.expTempData=[r],e.expFrom.express_temp_id=r[0].value,e.tempName=r[0].label,e.tempImg=r[0].pic)}))},confirmExpTemp:function(e){this.expFrom.express_temp_id=e[0].value,this.tempName=e[0].label,this.tempImg=e[0].pic},confirm:function(e){this.expFrom.delivery_name=e[0].label,this.expFrom.delivery_code=e[0].value,2===this.expFrom.express_record_type&&this.getTemp()},show:function(){this.pickerVisible=!0},showExpTemp:function(){this.pickerVisibleExpTemp=!0},changeType:function(e,t){this.active=t,this.expFrom.type=e.type,1===t&&this.getDelivery()},getIndex:function(){var e=this;Object(n["u"])(this.$route.params.id).then((function(t){e.delivery=t.data})).catch((function(t){e.$dialog.error(t.msg)}))},getLogistics:function(){var e=this;Object(n["t"])().then(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(r){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:i=[],r.data.map((function(e){i.push({label:e.value,value:e.code,id:e.id})})),e.pickData=[i],e.expFrom.delivery_name=i[0].label,e.expFrom.delivery_code=i[0].value,2===e.expFrom.express_record_type&&e.getTemp();case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},saveInfo:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,i,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=e,i=r.type,a={},t.t0=i,t.next="1"===t.t0?4:"2"===t.t0?12:"3"===t.t0?24:26;break;case 4:if(1!==e.expFrom.type||r.expFrom.delivery_name){t.next=6;break}return t.abrupt("return",r.$dialog.error("请输入快递公司"));case 6:if(1!==e.expFrom.type||1!==e.expFrom.express_record_type||r.expFrom.delivery_id){t.next=8;break}return t.abrupt("return",r.$dialog.error("请输入快递单号"));case 8:if(1!==e.expFrom.type||r.expFrom.express_temp_id||2!==e.expFrom.express_record_type){t.next=10;break}return t.abrupt("return",r.$dialog.error("请选择电子面单"));case 10:return r.setInfo(r.expFrom),t.abrupt("break",26);case 12:return t.prev=12,t.next=15,e.$validator({expressId:[Object(o["c"])(o["c"].message("发货人姓名"))],expressCode:[Object(o["c"])(o["c"].message("发货人电话"))]}).validate({expressId:expressId,expressCode:expressCode});case 15:t.next=20;break;case 17:return t.prev=17,t.t1=t["catch"](12),t.abrupt("return",Object(c["b"])(t.t1));case 20:return a.expressId=expressId,a.expressCode=expressCode,r.setInfo(a),t.abrupt("break",26);case 24:return r.setInfo(a),t.abrupt("break",26);case 26:case"end":return t.stop()}}),t,null,[[12,17]])})))()},setInfo:function(e){var t=this;Object(n["q"])(t.$route.params.id,e).then((function(e){t.$dialog.success("发送货成功"),t.$router.go(-1)}),(function(e){t.$dialog.error(e.msg)}))}}},m=l,u=(r("7d08"),r("2877")),v=Object(u["a"])(m,i,a,!1,null,"485d2ab7",null);t["default"]=v.exports},edd0:function(e,t,r){var i=r("13d2"),a=r("9bf2");e.exports=function(e,t,r){return r.get&&i(r.get,t,{getter:!0}),r.set&&i(r.set,t,{setter:!0}),a.f(e,t,r)}}}]);