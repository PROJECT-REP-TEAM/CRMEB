(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/user_payment/index"],{"005c":function(e,t,i){"use strict";i.r(t);var n=i("75c5"),r=i.n(n);for(var c in n)"default"!==c&&function(e){i.d(t,e,(function(){return n[e]}))}(c);t["default"]=r.a},6510:function(e,t,i){"use strict";var n=i("948e"),r=i.n(n);r.a},"75c5":function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("3474"),r=i("c6cd"),c=i("26cb"),u=o(i("c83f"));function o(e){return e&&e.__esModule?e:{default:e}}var a=function(){i.e("components/Authorize").then(function(){return resolve(i("420f"))}.bind(null,i)).catch(i.oe)},s=function(){Promise.all([i.e("common/vendor"),i.e("components/home/index")]).then(function(){return resolve(i("f497"))}.bind(null,i)).catch(i.oe)},f={components:{authorize:a,home:s},mixins:[u.default],data:function(){return{now_money:0,navRecharge:["账户充值","佣金转入"],active:0,number:"",userinfo:{},placeholder:"0.00",from:"",isAuto:!1,isShowAuth:!1,picList:[],activePic:0,money:"",numberPic:"",rechar_id:0,rechargeAttention:[]}},computed:(0,c.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(e,t){e&&(this.getUserInfo(),this.getRecharge())},deep:!0}},onLoad:function(e){this.isLogin?(this.getUserInfo(),this.getRecharge()):(0,r.toLogin)()},methods:{picCharge:function(e,t){this.activePic=e,void 0===t?(this.rechar_id=0,this.numberPic=""):(this.money="",this.rechar_id=t.id,this.numberPic=t.price)},getRecharge:function(){var e=this;(0,n.getRechargeApi)().then((function(t){e.picList=t.data.recharge_quota,e.picList[0]&&(e.rechar_id=e.picList[0].id,e.numberPic=e.picList[0].price),e.rechargeAttention=t.data.recharge_attention||[]})).catch((function(t){e.$util.Tips({title:t})}))},onLoadFun:function(){this.getUserInfo(),this.getRecharge()},authColse:function(e){this.isShowAuth=e},navRecharges:function(e){this.active=e},getUserInfo:function(){var e=this;(0,n.getUserInfo)().then((function(t){e.$set(e,"userinfo",t.data)}))},submitSub:function(t){var i=this,r=t.detail.value.number;if(i.active){if(parseFloat(r)<0||NaN==parseFloat(r)||void 0==r||""==r)return i.$util.Tips({title:"请输入金额"});e.showModal({title:"转入余额",content:"转入余额后无法再次转出，确认是否转入余额",success:function(e){if(e.confirm)(0,n.rechargeRoutine)({price:parseFloat(r),type:1}).then((function(e){return i.$util.Tips({title:"转入成功",icon:"success"},{tab:5,url:"/pages/users/user_money/index"})})).catch((function(e){return i.$util.Tips({title:e})}));else if(e.cancel)return i.$util.Tips({title:"已取消"})}})}else{e.showLoading({title:"正在支付"});var c=parseFloat(this.money);if(0==this.rechar_id){if(Number.isNaN(c))return i.$util.Tips({title:"充值金额必须为数字"});if(c<=0)return i.$util.Tips({title:"充值金额不能为0"})}else c=this.numberPic;(0,n.rechargeRoutine)({price:c,type:0,rechar_id:this.rechar_id}).then((function(t){e.hideLoading();var n=t.data;e.requestPayment({timeStamp:n.timestamp,nonceStr:n.nonceStr,package:n.package,signType:n.signType,paySign:n.paySign,success:function(e){return i.$set(i,"userinfo.now_money",i.$util.$h.Add(r,i.userinfo.now_money)),i.$util.Tips({title:"支付成功",icon:"success"},{tab:5,url:"/pages/users/user_money/index"})},fail:function(){return i.$util.Tips({title:"支付失败"})},complete:function(e){if("requestPayment:cancel"==e.errMsg)return i.$util.Tips({title:"取消支付"})}})})).catch((function(t){return e.hideLoading(),i.$util.Tips({title:t})}))}}}};t.default=f}).call(this,i("543d")["default"])},"7e56":function(e,t,i){"use strict";(function(e){i("6e38");n(i("66fd"));var t=n(i("b593"));function n(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=i,e(t.default)}).call(this,i("543d")["createPage"])},"948e":function(e,t,i){},b593:function(e,t,i){"use strict";i.r(t);var n=i("ff9b"),r=i("005c");for(var c in r)"default"!==c&&function(e){i.d(t,e,(function(){return r[e]}))}(c);i("6510");var u,o=i("f0c5"),a=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],u);t["default"]=a.exports},ff9b:function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return c})),i.d(t,"a",(function(){return n}));var r=function(){var e=this,t=e.$createElement;e._self._c},c=[]}},[["7e56","common/runtime","common/vendor"]]]);