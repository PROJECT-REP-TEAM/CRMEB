(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/components/seckill"],{"0e20":function(t,e,i){"use strict";i.r(e);var n=i("d8cd"),s=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=s.a},7751:function(t,e,i){"use strict";var n=i("dcad"),s=i.n(n);s.a},c11f:function(t,e,i){"use strict";i.r(e);var n=i("fd70"),s=i("0e20");for(var a in s)"default"!==a&&function(t){i.d(e,t,(function(){return s[t]}))}(a);i("7751");var o,c=i("f0c5"),d=Object(c["a"])(s["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],o);e["default"]=d.exports},d8cd:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("7f94"),s=i("a8b0"),a=getApp(),o=function(){i.e("components/countDown/index").then(function(){return resolve(i("5947"))}.bind(null,i)).catch(i.oe)},c={name:"seckill",components:{countDown:o},props:{dataConfig:{type:Object,default:function(){}}},watch:{dataConfig:{immediate:!0,handler:function(t,e){t&&(this.isShow=t.isShow.val,this.selectType=t.tabConfig.tabVal,this.$set(this,"selectId",t.selectConfig.activeValue),this.$set(this,"type",t.titleInfo.type),this.salesOrder=1==t.goodsSort.type?"desc":"",this.newsOrder=2==t.goodsSort.type?"news":"",this.ids=t.ids?t.ids.join(","):"",this.numConfig=t.numConfig.val,this.productslist())}}},data:function(){return{datatime:0,point:"",spikeList:[],name:this.$options.name,isIframe:a.globalData.isIframe,isShow:!0,selectType:0,selectId:"",salesOrder:"",newsOrder:"",ids:"",page:1,limit:this.$config.LIMIT,type:"",numConfig:0}},created:function(){},mounted:function(){},methods:{productslist:function(){var t=this,e={};e=t.selectType?{page:t.page,limit:t.limit,type:t.type,ids:t.ids,selectType:t.selectType}:{page:t.page,limit:t.numConfig<=t.limit?t.numConfig:t.limit,type:t.type,newsOrder:t.newsOrder,salesOrder:t.salesOrder,selectId:t.selectId,selectType:t.selectType},(0,s.getHomeProducts)(e).then((function(e){t.spikeList=e.data.list,t.point=e.data.time,t.datatime=e.data.stop})).catch((function(e){t.$util.Tips({title:e})}))},goDetail:function(e){var i=this;(0,n.goPage)(e).then((function(n){t.navigateTo({url:"/pages/activity/goods_seckill_details/index?id=".concat(e.id,"&time=").concat(i.datatime,"&status=1")})}))}}};e.default=c}).call(this,i("543d")["default"])},dcad:function(t,e,i){},fd70:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var s=function(){var t=this,e=t.$createElement;t._self._c},a=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/components/seckill-create-component',
    {
        'pages/index/components/seckill-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("c11f"))
        })
    },
    [['pages/index/components/seckill-create-component']]
]);