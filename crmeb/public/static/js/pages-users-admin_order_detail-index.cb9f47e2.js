(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-admin_order_detail-index"],{"1c82":function(e,t,o){"use strict";var r=o("dd6e"),a=o.n(r);a.a},"546e":function(e,t,o){"use strict";var r=o("4ea4");r(o("9011"))},"81b5":function(e,t,o){"use strict";var r;o.d(t,"b",(function(){return a})),o.d(t,"c",(function(){return n})),o.d(t,"a",(function(){return r}));var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-uni-view",{staticClass:"order-details pos-order-details"},[o("v-uni-view",{staticClass:"header acea-row row-middle"},[o("v-uni-view",{staticClass:"state"},[e._v(e._s(e.title))]),o("v-uni-view",{staticClass:"data"},[o("v-uni-view",{staticClass:"order-num"},[e._v("订单："+e._s(e.orderInfo.order_id))]),o("v-uni-view",[o("span",{staticClass:"time"},[e._v(e._s(e.orderInfo._add_time))])])],1)],1),o("v-uni-view",{staticClass:"orderingUser acea-row row-middle"},[o("span",{staticClass:"iconfont icon-yonghu2"}),e._v(e._s(e.orderInfo.nickname))]),o("v-uni-view",{staticClass:"address"},[o("v-uni-view",{staticClass:"name"},[e._v(e._s(e.orderInfo.real_name)),o("span",{staticClass:"phone"},[e._v(e._s(e.orderInfo.user_phone))])]),o("v-uni-view",[e._v(e._s(e.orderInfo.user_address))])],1),o("v-uni-view",{staticClass:"line"},[o("v-uni-image",{attrs:{src:"/static/images/line.jpg"}})],1),o("v-uni-view",{staticClass:"pos-order-goods"},e._l(e.orderInfo.cartInfo,(function(t,r){return o("v-uni-navigator",{key:r,staticClass:"goods acea-row row-between-wrapper",attrs:{url:"/pages/goods_details/index?id="+t.productInfo.id,"hover-class":"none"}},[o("v-uni-view",{staticClass:"picTxt acea-row row-between-wrapper"},[o("v-uni-view",{staticClass:"pictrue"},[o("v-uni-image",{attrs:{src:t.productInfo.image}})],1),o("v-uni-view",{staticClass:"text acea-row row-between row-column"},[o("v-uni-view",{staticClass:"info line2"},[e._v(e._s(t.productInfo.store_name))]),o("v-uni-view",{staticClass:"attr"},[e._v(e._s(t.productInfo.suk))])],1)],1),o("v-uni-view",{staticClass:"money"},[o("v-uni-view",{staticClass:"x-money"},[e._v("￥"+e._s(t.productInfo.attrInfo.price))]),o("v-uni-view",{staticClass:"num"},[e._v("x"+e._s(t.cart_num))]),o("v-uni-view",{staticClass:"y-money"},[e._v("￥"+e._s(t.productInfo.attrInfo.ot_price))])],1)],1)})),1),o("v-uni-view",{staticClass:"public-total"},[e._v("共"+e._s(e.orderInfo.total_num)+"件商品，应支付"),o("span",{staticClass:"money"},[e._v("￥"+e._s(e.orderInfo.pay_price))]),e._v("( 邮费 ¥"+e._s(e.orderInfo.pay_postage)+"\n\t\t\t)")]),o("v-uni-view",{staticClass:"wrapper"},[o("v-uni-view",{staticClass:"item acea-row row-between"},[o("v-uni-view",[e._v("订单编号：")]),o("v-uni-view",{staticClass:"conter acea-row row-middle row-right"},[e._v(e._s(e.orderInfo.order_id))])],1),o("v-uni-view",{staticClass:"item acea-row row-between"},[o("v-uni-view",[e._v("下单时间：")]),o("v-uni-view",{staticClass:"conter"},[e._v(e._s(e.orderInfo._add_time))])],1),o("v-uni-view",{staticClass:"item acea-row row-between"},[o("v-uni-view",[e._v("支付状态：")]),o("v-uni-view",{staticClass:"conter"},[e._v(e._s(1==e.orderInfo.paid?"已支付":"未支付"))])],1),o("v-uni-view",{staticClass:"item acea-row row-between"},[o("v-uni-view",[e._v("支付方式：")]),o("v-uni-view",{staticClass:"conter"},[e._v(e._s(e.payType))])],1),o("v-uni-view",{staticClass:"item acea-row row-between"},[o("v-uni-view",[e._v("买家留言：")]),o("v-uni-view",{staticClass:"conter"},[e._v(e._s(e.orderInfo.mark))])],1)],1),o("v-uni-view",{staticClass:"wrapper"},[o("v-uni-view",{staticClass:"item acea-row row-between"},[o("v-uni-view",[e._v("支付金额：")]),o("v-uni-view",{staticClass:"conter"},[e._v("￥"+e._s(e.orderInfo.total_price))])],1),e.orderInfo.coupon_id?o("v-uni-view",{staticClass:"item acea-row row-between"},[o("v-uni-view",[e._v("优惠券抵扣：")]),o("v-uni-view",{staticClass:"conter"},[e._v("-￥"+e._s(e.orderInfo.coupon_price))])],1):e._e(),e.orderInfo.use_integral>0?o("v-uni-view",{staticClass:"item acea-row row-between"},[o("v-uni-view",[e._v("积分抵扣：")]),o("v-uni-view",{staticClass:"conter"},[e._v("-￥"+e._s(e.orderInfo.deduction_price))])],1):e._e(),e.orderInfo.pay_postage>0?o("v-uni-view",{staticClass:"item acea-row row-between"},[o("v-uni-view",[e._v("运费：")]),o("v-uni-view",{staticClass:"conter"},[e._v("￥"+e._s(e.orderInfo.pay_postage))])],1):e._e(),o("v-uni-view",{staticClass:"actualPay acea-row row-right"},[e._v("实付款："),o("span",{staticClass:"money"},[e._v("￥"+e._s(e.orderInfo.pay_price))])])],1),"fictitious"!=e.orderInfo.delivery_type&&2===e.orderInfo._status._type?o("v-uni-view",{staticClass:"wrapper"},[o("v-uni-view",{staticClass:"item acea-row row-between"},[o("v-uni-view",[e._v("配送方式：")]),"express"===e.orderInfo.delivery_type?o("v-uni-view",{staticClass:"conter"},[e._v("快递")]):e._e(),"send"===e.orderInfo.delivery_type?o("v-uni-view",{staticClass:"conter"},[e._v("送货")]):e._e()],1),o("v-uni-view",{staticClass:"item acea-row row-between"},["express"===e.orderInfo.delivery_type?o("v-uni-view",[e._v("快递公司：")]):e._e(),"send"===e.orderInfo.delivery_type?o("v-uni-view",[e._v("送货人：")]):e._e(),o("v-uni-view",{staticClass:"conter"},[e._v(e._s(e.orderInfo.delivery_name))])],1),o("v-uni-view",{staticClass:"item acea-row row-between"},["express"===e.orderInfo.delivery_type?o("v-uni-view",[e._v("快递单号：")]):e._e(),"send"===e.orderInfo.delivery_type?o("v-uni-view",[e._v("送货人电话：")]):e._e(),o("v-uni-view",{staticClass:"conter"},[e._v(e._s(e.orderInfo.delivery_id))])],1)],1):e._e()],1)},n=[]},b405:function(e,t,o){var r=o("24fb");t=r(!1),t.push([e.i,'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*商户管理订单详情*/.pos-order-details .header[data-v-c93b5e70]{background:linear-gradient(90deg,#2291f8 0,#1cd1dc);background:-webkit-linear-gradient(90deg,#2291f8 0,#1cd1dc);background:-moz-linear-gradient(to right,#2291f8 0,#1cd1dc 100%)}.pos-order-details .header .state[data-v-c93b5e70]{font-size:%?36?%;color:#fff}.pos-order-details .header .data[data-v-c93b5e70]{margin-left:%?35?%;font-size:%?28?%}.pos-order-details .header .data .order-num[data-v-c93b5e70]{font-size:%?30?%;margin-bottom:%?8?%}.pos-order-details .remarks[data-v-c93b5e70]{width:100%;height:%?86?%;background-color:#fff;padding:0 %?30?%}.pos-order-details .remarks .iconfont[data-v-c93b5e70]{font-size:%?40?%;color:#2a7efb}.pos-order-details .remarks uni-input[data-v-c93b5e70]{width:%?630?%;height:100%;font-size:%?30?%}.pos-order-details .remarks uni-input[data-v-c93b5e70]::-webkit-input-placeholder{color:#666}.pos-order-details .remarks uni-input[data-v-c93b5e70]::placeholder{color:#666}.pos-order-details .orderingUser[data-v-c93b5e70]{font-size:%?26?%;color:#282828;padding:0 %?30?%;height:%?67?%;background-color:#fff;margin-top:%?16?%;border-bottom:1px solid #f5f5f5}.pos-order-details .orderingUser .iconfont[data-v-c93b5e70]{font-size:%?40?%;color:#2a7efb;margin-right:%?15?%}.pos-order-details .address[data-v-c93b5e70]{margin-top:0}.pos-order-details .pos-order-goods[data-v-c93b5e70]{margin-top:%?17?%}.pos-order-details .footer .more[data-v-c93b5e70]{font-size:%?27?%;color:#aaa;width:%?100?%;height:%?64?%;text-align:center;line-height:%?64?%;margin-right:%?25?%;position:relative}.pos-order-details .footer .delivery[data-v-c93b5e70]{background:linear-gradient(90deg,#2291f8 0,#1cd1dc);background:-webkit-linear-gradient(90deg,#2291f8 0,#1cd1dc);background:-moz-linear-gradient(to right,#2291f8 0,#1cd1dc 100%)}.pos-order-details .footer .more .order .arrow[data-v-c93b5e70]{width:0;height:0;border-left:%?11?% solid transparent;border-right:%?11?% solid transparent;border-top:%?20?% solid #e5e5e5;position:absolute;left:%?15?%;bottom:%?-18?%}.pos-order-details .footer .more .order .arrow[data-v-c93b5e70]:before{content:"";width:0;height:0;border-left:%?9?% solid transparent;border-right:%?9?% solid transparent;border-top:%?19?% solid #fff;position:absolute;left:%?-10?%;bottom:0}.pos-order-details .footer .more .order[data-v-c93b5e70]{width:%?200?%;background-color:#fff;border:1px solid #eee;border-radius:%?10?%;position:absolute;top:%?-200?%;z-index:9}.pos-order-details .footer .more .order .item[data-v-c93b5e70]{height:%?77?%;line-height:%?77?%}.pos-order-details .footer .more .order .item~.item[data-v-c93b5e70]{border-top:1px solid #f5f5f5}.pos-order-details .footer .more .moreName[data-v-c93b5e70]{width:100%;height:100%}\n/*订单详情*/.order-details .header[data-v-c93b5e70]{padding:0 %?30?%;height:%?150?%}.order-details .header.on[data-v-c93b5e70]{background-color:#666!important}.order-details .header .pictrue[data-v-c93b5e70]{width:%?110?%;height:%?110?%}.order-details .header .pictrue uni-image[data-v-c93b5e70]{width:100%;height:100%}.order-details .header .data[data-v-c93b5e70]{color:hsla(0,0%,100%,.8);font-size:%?24?%;margin-left:%?27?%}.order-details .header.on .data[data-v-c93b5e70]{margin-left:0}.order-details .header .data .state[data-v-c93b5e70]{font-size:%?30?%;font-weight:700;color:#fff;margin-bottom:%?7?%}\n/* .order-details .header .data .time{margin-left:20upx;} */.order-details .nav[data-v-c93b5e70]{background-color:#fff;font-size:%?26?%;color:#282828;padding:%?25?% 0}.order-details .nav .navCon[data-v-c93b5e70]{padding:0 %?40?%}.order-details .nav .navCon .on[data-v-c93b5e70]{font-weight:700;color:#e93323}.order-details .nav .progress[data-v-c93b5e70]{padding:0 %?65?%;margin-top:%?10?%}.order-details .nav .progress .line[data-v-c93b5e70]{width:%?100?%;height:%?2?%;background-color:#939390}.order-details .nav .progress .iconfont[data-v-c93b5e70]{font-size:%?25?%;color:#939390;margin-top:%?-2?%;width:%?30?%;height:%?30?%;line-height:%?33?%;text-align:center;margin-right:0!important}.order-details .address[data-v-c93b5e70]{font-size:%?26?%;color:#868686;background-color:#fff;padding:%?25?% %?30?% %?30?% %?30?%}.order-details .address .name[data-v-c93b5e70]{font-size:%?30?%;color:#282828;margin-bottom:.1rem}.order-details .address .name .phone[data-v-c93b5e70]{margin-left:%?40?%}.order-details .line[data-v-c93b5e70]{width:100%;height:%?3?%}.order-details .line uni-image[data-v-c93b5e70]{width:100%;height:100%;display:block}.order-details .wrapper[data-v-c93b5e70]{background-color:#fff;margin-top:%?12?%;padding:%?30?%}.order-details .wrapper .item[data-v-c93b5e70]{font-size:%?28?%;color:#282828}.order-details .wrapper .item~.item[data-v-c93b5e70]{margin-top:%?20?%}.order-details .wrapper .item .conter[data-v-c93b5e70]{color:#868686;width:%?500?%;text-align:right}.order-details .wrapper .item .conter .copy[data-v-c93b5e70]{font-size:%?20?%;color:#333;border-radius:%?3?%;border:1px solid #666;padding:%?0?% %?15?%;margin-left:%?24?%;height:%?40?%}.order-details .wrapper .actualPay[data-v-c93b5e70]{border-top:%?1?% solid #eee;margin-top:%?30?%;padding-top:%?30?%}.order-details .wrapper .actualPay .money[data-v-c93b5e70]{font-weight:700;font-size:%?30?%;color:#e93323}.order-details .footer[data-v-c93b5e70]{width:100%;height:%?100?%;position:fixed;bottom:0;left:0;background-color:#fff;padding:0 %?30?%;border-top:1px solid #eee}.order-details .footer .bnt[data-v-c93b5e70]{width:auto;height:%?60?%;line-height:%?60?%;text-align:center;line-height:upx;border-radius:%?50?%;color:#fff;font-size:%?27?%;padding:0 3%}.order-details .footer .bnt.cancel[data-v-c93b5e70]{color:#aaa;border:1px solid #ddd}.order-details .footer .bnt.default[data-v-c93b5e70]{color:#444;border:1px solid #444}.order-details .footer .bnt~.bnt[data-v-c93b5e70]{margin-left:%?18?%}.pos-order-goods[data-v-c93b5e70]{padding:0 %?30?%;background-color:#fff}.pos-order-goods .goods[data-v-c93b5e70]{height:%?185?%}.pos-order-goods .goods~.goods[data-v-c93b5e70]{border-top:1px dashed #e5e5e5}.pos-order-goods .goods .picTxt[data-v-c93b5e70]{width:%?515?%}.pos-order-goods .goods .picTxt .pictrue[data-v-c93b5e70]{width:%?130?%;height:%?130?%}.pos-order-goods .goods .picTxt .pictrue uni-image[data-v-c93b5e70]{width:100%;height:100%;border-radius:%?6?%}.pos-order-goods .goods .picTxt .text[data-v-c93b5e70]{width:%?365?%;height:%?130?%}.pos-order-goods .goods .picTxt .text .info[data-v-c93b5e70]{font-size:%?28?%;color:#282828}.pos-order-goods .goods .picTxt .text .attr[data-v-c93b5e70]{font-size:%?24?%;color:#999}.pos-order-goods .goods .money[data-v-c93b5e70]{width:%?164?%;text-align:right;font-size:%?28?%}.pos-order-goods .goods .money .x-money[data-v-c93b5e70]{color:#282828}.pos-order-goods .goods .money .num[data-v-c93b5e70]{color:#ff9600;margin:%?5?% 0}.pos-order-goods .goods .money .y-money[data-v-c93b5e70]{color:#999;text-decoration:line-through}.public-total[data-v-c93b5e70]{font-size:%?28?%;color:#282828;border-top:1px solid #eee;height:%?92?%;line-height:%?92?%;text-align:right;padding:0 %?30?%;background-color:#fff}.public-total .money[data-v-c93b5e70]{color:#ff4c3c}',""]),e.exports=t},cba1:function(e,t,o){"use strict";o.r(t);var r=o("81b5"),a=o("e0b4");for(var n in a)"default"!==n&&function(e){o.d(t,e,(function(){return a[e]}))}(n);o("1c82");var i,d=o("f0c5"),s=Object(d["a"])(a["default"],r["b"],r["c"],!1,null,"c93b5e70",null,!1,r["a"],i);t["default"]=s.exports},ce0c:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o("546e"),a={name:"AdminOrder",data:function(){return{order:!1,change:!1,order_id:"",orderInfo:{_status:{}},status:"",title:"",payType:"",types:"",clickNum:1,goname:""}},watch:{"$route.params.oid":function(e){var t=this;void 0!=e&&(t.order_id=e,t.getIndex())}},onLoad:function(e){this.order_id=e.id,this.goname=e.goname,this.getIndex()},methods:{getIndex:function(){var e=this;(0,r.getAdminOrderDetail)(e.order_id).then((function(t){e.orderInfo=t.data,e.types=t.data._status._type,e.title=t.data._status._title,e.payType=t.data._status._payType}),(function(t){e.$util.Tips({title:t},{tab:3,url:1})}))}}};t.default=a},dd6e:function(e,t,o){var r=o("b405");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=o("4f06").default;a("668756d8",r,!0,{sourceMap:!1,shadowMode:!1})},e0b4:function(e,t,o){"use strict";o.r(t);var r=o("ce0c"),a=o.n(r);for(var n in r)"default"!==n&&function(e){o.d(t,e,(function(){return r[e]}))}(n);t["default"]=a.a}}]);