(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e3ff0fb2"],{"0f7c":function(t,e,n){},3793:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"i-layout-page-header"},[n("div",{staticClass:"i-layout-page-header"},[n("span",{staticClass:"ivu-page-header-title"},[t._v(t._s(t.$route.meta.title))])])]),n("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[n("div",{staticClass:"backs",on:{click:t.goBack}},[n("Icon",{staticClass:"mr5",attrs:{type:"ios-folder-outline"}}),n("span",[t._v("返回上级")])],1),n("Table",{ref:"selection",staticClass:"mt20",attrs:{columns:t.columns4,data:t.tabList,loading:t.loading,"no-data-text":"暂无数据","highlight-row":"","no-filtered-data-text":"暂无筛选结果"},on:{"on-current-change":t.currentChange},scopedSlots:t._u([{key:"filename",fn:function(e){var r=e.row;return[r.isDir?n("Icon",{staticClass:"mr5",attrs:{type:"ios-folder-outline"}}):n("Icon",{staticClass:"mr5",attrs:{type:"ios-document-outline"}}),n("span",[t._v(t._s(r.filename))])]}},{key:"isWritable",fn:function(e){var r=e.row;return[n("span",{domProps:{textContent:t._s(r.isWritable?"是":"否")}})]}},{key:"action",fn:function(e){var r=e.row;e.index;return[r.isDir?n("a",{on:{click:function(e){return t.open(r)}}},[t._v("打开")]):n("a",{on:{click:function(e){return t.edit(r)}}},[t._v("编辑")])]}}])})],1),n("Modal",{attrs:{scrollable:"","footer-hide":"",closable:"",title:t.title,"mask-closable":!1,width:"900"},model:{value:t.modals,callback:function(e){t.modals=e},expression:"modals"}},[n("Button",{staticClass:"mr5 mb15",attrs:{type:"primary",id:"savefile"},on:{click:t.savefile}},[t._v("保存")]),n("Button",{staticClass:"mr5 mb15",attrs:{id:"undo"},on:{click:t.undofile}},[t._v("撤销")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],ref:"mycode",staticClass:"codesql public_text",domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}}),t.spinShow?n("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)],1)},a=[],i=n("c964"),o=(n("96cf"),n("8593")),u=n("56b3"),c=n.n(u);n("0f7c");n("f9d4");var s={name:"opendir",data:function(){return{code:"",modals:!1,spinShow:!1,loading:!1,tabList:[],columns4:[{title:"文件/文件夹名",slot:"filename",minWidth:150,back:"返回上级"},{title:"文件/文件夹路径",key:"real_path",minWidth:150},{title:"文件/文件夹大小",key:"size",minWidth:100},{title:"是否可写",slot:"isWritable",minWidth:100},{title:"更新时间",key:"mtime",minWidth:150},{title:"Action",slot:"action",minWidth:150}],formItem:{dir:"",superior:0,filedir:""},rows:{},pathname:"",title:""}},mounted:function(){this.editor=c.a.fromTextArea(this.$refs.mycode,{value:"http://www.crmeb.com",mode:"text/javascript",theme:"ambiance",indentUnit:4,smartIndent:!0,tabSize:4,readOnly:!1,showCursorWhenSelecting:!0,lineNumbers:!0})},created:function(){this.getList()},methods:{currentChange:function(t){t.isDir?this.open(t):this.edit(t)},getList:function(){var t=this;this.loading=!0,Object(o["H"])(this.formItem).then(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=n.data,t.tabList=r.list,t.dir=r.dir,t.loading=!1;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$Message.error(e.msg)}))},goBack:function(){this.formItem={dir:this.dir,superior:1,filedir:""},this.getList()},open:function(t){this.rows=t,this.formItem={dir:t.path,superior:0,filedir:t.filename},this.getList()},edit:function(t){var e=this;this.modals=!0,this.spinShow=!0,this.pathname=t.pathname,this.title=t.filename,Object(o["I"])(t.pathname).then(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=n.data,e.code=r.content,e.editor.setValue(e.code),e.spinShow=!1;case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.spinShow=!1,e.$Message.error(t.msg)}))},savefile:function(){var t=this,e={comment:this.editor.getValue(),filepath:this.pathname};Object(o["M"])(e).then(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$Message.success(n.msg),t.modals=!1;case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$Message.error(e.msg)}))},undofile:function(){this.editor.undo()},redofile:function(){this.editor.redo()},refreshfile:function(){this.editor.refresh()}}},l=s,f=(n("8de7"),n("2877")),d=Object(f["a"])(l,r,a,!1,null,"527d9c2a",null);e["default"]=d.exports},8593:function(t,e,n){"use strict";n.d(e,"j",(function(){return a})),n.d(e,"h",(function(){return i})),n.d(e,"i",(function(){return o})),n.d(e,"R",(function(){return u})),n.d(e,"n",(function(){return c})),n.d(e,"l",(function(){return s})),n.d(e,"m",(function(){return l})),n.d(e,"k",(function(){return f})),n.d(e,"E",(function(){return d})),n.d(e,"w",(function(){return m})),n.d(e,"D",(function(){return p})),n.d(e,"B",(function(){return h})),n.d(e,"y",(function(){return v})),n.d(e,"z",(function(){return b})),n.d(e,"A",(function(){return g})),n.d(e,"C",(function(){return k})),n.d(e,"N",(function(){return y})),n.d(e,"S",(function(){return w})),n.d(e,"o",(function(){return x})),n.d(e,"d",(function(){return j})),n.d(e,"f",(function(){return O})),n.d(e,"c",(function(){return _})),n.d(e,"e",(function(){return T})),n.d(e,"g",(function(){return M})),n.d(e,"r",(function(){return E})),n.d(e,"p",(function(){return C})),n.d(e,"q",(function(){return I})),n.d(e,"H",(function(){return A})),n.d(e,"I",(function(){return V})),n.d(e,"M",(function(){return z})),n.d(e,"L",(function(){return S})),n.d(e,"a",(function(){return $})),n.d(e,"b",(function(){return P})),n.d(e,"u",(function(){return W})),n.d(e,"Q",(function(){return G})),n.d(e,"x",(function(){return L})),n.d(e,"U",(function(){return q})),n.d(e,"T",(function(){return R})),n.d(e,"F",(function(){return U})),n.d(e,"G",(function(){return B})),n.d(e,"v",(function(){return N})),n.d(e,"J",(function(){return D})),n.d(e,"K",(function(){return H})),n.d(e,"s",(function(){return J})),n.d(e,"O",(function(){return F})),n.d(e,"t",(function(){return K})),n.d(e,"P",(function(){return Q}));n("99af");var r=n("6b6c");function a(t){return Object(r["a"])({url:"setting/config_class",method:"get",params:t})}function i(t){return Object(r["a"])({url:"setting/config_class/create",method:"get"})}function o(t){return Object(r["a"])({url:"setting/config_class/".concat(t,"/edit"),method:"get"})}function u(t){return Object(r["a"])({url:"setting/config_class/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function c(t){return Object(r["a"])({url:"setting/config",method:"get",params:t})}function s(t){return Object(r["a"])({url:"setting/config/create",method:"get",params:t})}function l(t){return Object(r["a"])({url:"/setting/config/".concat(t,"/edit"),method:"get"})}function f(t,e){return Object(r["a"])({url:"setting/config/set_status/".concat(t,"/").concat(e),method:"PUT"})}function d(t){return Object(r["a"])({url:"setting/group",method:"get",params:t})}function m(t){return Object(r["a"])({url:t.url,method:t.method,data:t.datas})}function p(t){return Object(r["a"])({url:"setting/group/".concat(t),method:"get"})}function h(t,e){return Object(r["a"])({url:e,method:"get",params:t})}function v(t,e){return Object(r["a"])({url:e,method:"get",params:t})}function b(t,e){return Object(r["a"])({url:e,method:"get",params:t})}function g(t,e){return Object(r["a"])({url:e,method:"get",params:t})}function k(t){return Object(r["a"])({url:t,method:"PUT"})}function y(t){return Object(r["a"])({url:"system/log/search_admin",method:"GET"})}function w(t){return Object(r["a"])({url:"system/log",method:"GET",params:t})}function x(){return Object(r["a"])({url:"system/file",method:"GET"})}function j(){return Object(r["a"])({url:"system/backup",method:"GET"})}function O(t){return Object(r["a"])({url:"system/backup/read",method:"GET",params:t})}function _(t){return Object(r["a"])({url:"system/backup/backup",method:"put",data:t})}function T(t){return Object(r["a"])({url:"system/backup/optimize",method:"put",data:t})}function M(t){return Object(r["a"])({url:"system/backup/repair",method:"put",data:t})}function E(t){return Object(r["a"])({url:"system/backup/file_list",method:"GET"})}function C(t){return Object(r["a"])({url:"backup/download",method:"get",params:t})}function I(t){return Object(r["a"])({url:"system/backup/import",method:"POST",data:t})}function A(t){return Object(r["a"])({url:"system/file/opendir",method:"GET",params:t})}function V(t){return Object(r["a"])({url:"system/file/openfile?filepath=".concat(t),method:"GET"})}function z(t){return Object(r["a"])({url:"system/file/savefile",method:"post",data:t})}function S(t){return Object(r["a"])({url:"system/replace_site_url",method:"post",data:t})}function $(){return Object(r["a"])({url:"auth",method:"get"})}function P(t){return Object(r["a"])({url:"auth_apply",method:"post",data:t})}function W(){return Object(r["a"])({url:"setting/get_kf_adv",method:"get"})}function G(t){return Object(r["a"])({url:"setting/set_kf_adv",method:"post",data:t})}function L(){return Object(r["a"])({url:"setting/group_all",method:"get"})}function q(t){return Object(r["a"])({url:"system/version_list",method:"get",params:t})}function R(t){return Object(r["a"])({url:"system/version_crate/".concat(t),method:"get"})}function U(t){return Object(r["a"])({url:"setting/group_data/save_all",method:"POST",data:t})}function B(t){return Object(r["a"])({url:"diy/open_adv/add",method:"POST",data:t})}function N(){return Object(r["a"])({url:"diy/open_adv/info",method:"get"})}function D(t){return Object(r["a"])({url:"setting/config/get_system/".concat(t),method:"get"})}function H(t){return Object(r["a"])({url:"setting/config/save_basics",method:"POST",data:t})}function J(){return Object(r["a"])({url:"setting/get_user_agreement",method:"get"})}function F(t){return Object(r["a"])({url:"setting/set_user_agreement",method:"post",data:t})}function K(t){return Object(r["a"])({url:"setting/get_agreement/".concat(t),method:"get"})}function Q(t,e){return Object(r["a"])({url:"setting/save_agreement",method:"post",data:t})}},"8de7":function(t,e,n){"use strict";var r=n("9eee"),a=n.n(r);a.a},"9eee":function(t,e,n){},f9d4:function(t,e,n){(function(t){t(n("56b3"))})((function(t){"use strict";t.defineMode("javascript",(function(e,n){var r,a,i=e.indentUnit,o=n.statementIndent,u=n.jsonld,c=n.json||u,s=n.typescript,l=n.wordCharacters||/[\w$\xa1-\uffff]/,f=function(){function t(t){return{type:t,style:"keyword"}}var e=t("keyword a"),n=t("keyword b"),r=t("keyword c"),a=t("keyword d"),i=t("operator"),o={type:"atom",style:"atom"};return{if:t("if"),while:e,with:e,else:n,do:n,try:n,finally:n,return:a,break:a,continue:a,new:t("new"),delete:r,void:r,throw:r,debugger:t("debugger"),var:t("var"),const:t("var"),let:t("var"),function:t("function"),catch:t("catch"),for:t("for"),switch:t("switch"),case:t("case"),default:t("default"),in:i,typeof:i,instanceof:i,true:o,false:o,null:o,undefined:o,NaN:o,Infinity:o,this:t("this"),class:t("class"),super:t("atom"),yield:r,export:t("export"),import:t("import"),extends:r,await:r}}(),d=/[+\-*&%=<>!?|~^@]/,m=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;function p(t){var e,n=!1,r=!1;while(null!=(e=t.next())){if(!n){if("/"==e&&!r)return;"["==e?r=!0:r&&"]"==e&&(r=!1)}n=!n&&"\\"==e}}function h(t,e,n){return r=t,a=n,e}function v(t,e){var n=t.next();if('"'==n||"'"==n)return e.tokenize=b(n),e.tokenize(t,e);if("."==n&&t.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))return h("number","number");if("."==n&&t.match(".."))return h("spread","meta");if(/[\[\]{}\(\),;\:\.]/.test(n))return h(n);if("="==n&&t.eat(">"))return h("=>","operator");if("0"==n&&t.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))return h("number","number");if(/\d/.test(n))return t.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/),h("number","number");if("/"==n)return t.eat("*")?(e.tokenize=g,g(t,e)):t.eat("/")?(t.skipToEnd(),h("comment","comment")):te(t,e,1)?(p(t),t.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),h("regexp","string-2")):(t.eat("="),h("operator","operator",t.current()));if("`"==n)return e.tokenize=k,k(t,e);if("#"==n&&"!"==t.peek())return t.skipToEnd(),h("meta","meta");if("#"==n&&t.eatWhile(l))return h("variable","property");if("<"==n&&t.match("!--")||"-"==n&&t.match("->"))return t.skipToEnd(),h("comment","comment");if(d.test(n))return">"==n&&e.lexical&&">"==e.lexical.type||(t.eat("=")?"!"!=n&&"="!=n||t.eat("="):/[<>*+\-]/.test(n)&&(t.eat(n),">"==n&&t.eat(n))),"?"==n&&t.eat(".")?h("."):h("operator","operator",t.current());if(l.test(n)){t.eatWhile(l);var r=t.current();if("."!=e.lastType){if(f.propertyIsEnumerable(r)){var a=f[r];return h(a.type,a.style,r)}if("async"==r&&t.match(/^(\s|\/\*.*?\*\/)*[\[\(\w]/,!1))return h("async","keyword",r)}return h("variable","variable",r)}}function b(t){return function(e,n){var r,a=!1;if(u&&"@"==e.peek()&&e.match(m))return n.tokenize=v,h("jsonld-keyword","meta");while(null!=(r=e.next())){if(r==t&&!a)break;a=!a&&"\\"==r}return a||(n.tokenize=v),h("string","string")}}function g(t,e){var n,r=!1;while(n=t.next()){if("/"==n&&r){e.tokenize=v;break}r="*"==n}return h("comment","comment")}function k(t,e){var n,r=!1;while(null!=(n=t.next())){if(!r&&("`"==n||"$"==n&&t.eat("{"))){e.tokenize=v;break}r=!r&&"\\"==n}return h("quasi","string-2",t.current())}var y="([{}])";function w(t,e){e.fatArrowAt&&(e.fatArrowAt=null);var n=t.string.indexOf("=>",t.start);if(!(n<0)){if(s){var r=/:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(t.string.slice(t.start,n));r&&(n=r.index)}for(var a=0,i=!1,o=n-1;o>=0;--o){var u=t.string.charAt(o),c=y.indexOf(u);if(c>=0&&c<3){if(!a){++o;break}if(0==--a){"("==u&&(i=!0);break}}else if(c>=3&&c<6)++a;else if(l.test(u))i=!0;else if(/["'\/`]/.test(u))for(;;--o){if(0==o)return;var f=t.string.charAt(o-1);if(f==u&&"\\"!=t.string.charAt(o-2)){o--;break}}else if(i&&!a){++o;break}}i&&!a&&(e.fatArrowAt=o)}}var x={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,this:!0,"jsonld-keyword":!0};function j(t,e,n,r,a,i){this.indented=t,this.column=e,this.type=n,this.prev=a,this.info=i,null!=r&&(this.align=r)}function O(t,e){for(var n=t.localVars;n;n=n.next)if(n.name==e)return!0;for(var r=t.context;r;r=r.prev)for(n=r.vars;n;n=n.next)if(n.name==e)return!0}function _(t,e,n,r,a){var i=t.cc;T.state=t,T.stream=a,T.marked=null,T.cc=i,T.style=e,t.lexical.hasOwnProperty("align")||(t.lexical.align=!0);while(1){var o=i.length?i.pop():c?N:U;if(o(n,r)){while(i.length&&i[i.length-1].lex)i.pop()();return T.marked?T.marked:"variable"==n&&O(t,r)?"variable-2":e}}}var T={state:null,column:null,marked:null,cc:null};function M(){for(var t=arguments.length-1;t>=0;t--)T.cc.push(arguments[t])}function E(){return M.apply(null,arguments),!0}function C(t,e){for(var n=e;n;n=n.next)if(n.name==t)return!0;return!1}function I(t){var e=T.state;if(T.marked="def",e.context)if("var"==e.lexical.info&&e.context&&e.context.block){var r=A(t,e.context);if(null!=r)return void(e.context=r)}else if(!C(t,e.localVars))return void(e.localVars=new S(t,e.localVars));n.globalVars&&!C(t,e.globalVars)&&(e.globalVars=new S(t,e.globalVars))}function A(t,e){if(e){if(e.block){var n=A(t,e.prev);return n?n==e.prev?e:new z(n,e.vars,!0):null}return C(t,e.vars)?e:new z(e.prev,new S(t,e.vars),!1)}return null}function V(t){return"public"==t||"private"==t||"protected"==t||"abstract"==t||"readonly"==t}function z(t,e,n){this.prev=t,this.vars=e,this.block=n}function S(t,e){this.name=t,this.next=e}var $=new S("this",new S("arguments",null));function P(){T.state.context=new z(T.state.context,T.state.localVars,!1),T.state.localVars=$}function W(){T.state.context=new z(T.state.context,T.state.localVars,!0),T.state.localVars=null}function G(){T.state.localVars=T.state.context.vars,T.state.context=T.state.context.prev}function L(t,e){var n=function(){var n=T.state,r=n.indented;if("stat"==n.lexical.type)r=n.lexical.indented;else for(var a=n.lexical;a&&")"==a.type&&a.align;a=a.prev)r=a.indented;n.lexical=new j(r,T.stream.column(),t,null,n.lexical,e)};return n.lex=!0,n}function q(){var t=T.state;t.lexical.prev&&(")"==t.lexical.type&&(t.indented=t.lexical.indented),t.lexical=t.lexical.prev)}function R(t){function e(n){return n==t?E():";"==t||"}"==n||")"==n||"]"==n?M():E(e)}return e}function U(t,e){return"var"==t?E(L("vardef",e),Ot,R(";"),q):"keyword a"==t?E(L("form"),H,U,q):"keyword b"==t?E(L("form"),U,q):"keyword d"==t?T.stream.match(/^\s*$/,!1)?E():E(L("stat"),F,R(";"),q):"debugger"==t?E(R(";")):"{"==t?E(L("}"),W,ft,q,G):";"==t?E():"if"==t?("else"==T.state.lexical.info&&T.state.cc[T.state.cc.length-1]==q&&T.state.cc.pop()(),E(L("form"),H,U,q,It)):"function"==t?E(St):"for"==t?E(L("form"),At,U,q):"class"==t||s&&"interface"==e?(T.marked="keyword",E(L("form","class"==t?t:e),Lt,q)):"variable"==t?s&&"declare"==e?(T.marked="keyword",E(U)):s&&("module"==e||"enum"==e||"type"==e)&&T.stream.match(/^\s*\w/,!1)?(T.marked="keyword","enum"==e?E(Xt):"type"==e?E(Pt,R("operator"),vt,R(";")):E(L("form"),_t,R("{"),L("}"),ft,q,q)):s&&"namespace"==e?(T.marked="keyword",E(L("form"),N,U,q)):s&&"abstract"==e?(T.marked="keyword",E(U)):E(L("stat"),at):"switch"==t?E(L("form"),H,R("{"),L("}","switch"),W,ft,q,q,G):"case"==t?E(N,R(":")):"default"==t?E(R(":")):"catch"==t?E(L("form"),P,B,U,q,G):"export"==t?E(L("stat"),Bt,q):"import"==t?E(L("stat"),Dt,q):"async"==t?E(U):"@"==e?E(N,U):M(L("stat"),N,R(";"),q)}function B(t){if("("==t)return E(Wt,R(")"))}function N(t,e){return J(t,e,!1)}function D(t,e){return J(t,e,!0)}function H(t){return"("!=t?M():E(L(")"),F,R(")"),q)}function J(t,e,n){if(T.state.fatArrowAt==T.stream.start){var r=n?tt:Z;if("("==t)return E(P,L(")"),st(Wt,")"),q,R("=>"),r,G);if("variable"==t)return M(P,_t,R("=>"),r,G)}var a=n?Q:K;return x.hasOwnProperty(t)?E(a):"function"==t?E(St,a):"class"==t||s&&"interface"==e?(T.marked="keyword",E(L("form"),Gt,q)):"keyword c"==t||"async"==t?E(n?D:N):"("==t?E(L(")"),F,R(")"),q,a):"operator"==t||"spread"==t?E(n?D:N):"["==t?E(L("]"),Qt,q,a):"{"==t?lt(ot,"}",null,a):"quasi"==t?M(X,a):"new"==t?E(et(n)):"import"==t?E(N):E()}function F(t){return t.match(/[;\}\)\],]/)?M():M(N)}function K(t,e){return","==t?E(F):Q(t,e,!1)}function Q(t,e,n){var r=0==n?K:Q,a=0==n?N:D;return"=>"==t?E(P,n?tt:Z,G):"operator"==t?/\+\+|--/.test(e)||s&&"!"==e?E(r):s&&"<"==e&&T.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/,!1)?E(L(">"),st(vt,">"),q,r):"?"==e?E(N,R(":"),a):E(a):"quasi"==t?M(X,r):";"!=t?"("==t?lt(D,")","call",r):"."==t?E(it,r):"["==t?E(L("]"),F,R("]"),q,r):s&&"as"==e?(T.marked="keyword",E(vt,r)):"regexp"==t?(T.state.lastType=T.marked="operator",T.stream.backUp(T.stream.pos-T.stream.start-1),E(a)):void 0:void 0}function X(t,e){return"quasi"!=t?M():"${"!=e.slice(e.length-2)?E(X):E(N,Y)}function Y(t){if("}"==t)return T.marked="string-2",T.state.tokenize=k,E(X)}function Z(t){return w(T.stream,T.state),M("{"==t?U:N)}function tt(t){return w(T.stream,T.state),M("{"==t?U:D)}function et(t){return function(e){return"."==e?E(t?rt:nt):"variable"==e&&s?E(wt,t?Q:K):M(t?D:N)}}function nt(t,e){if("target"==e)return T.marked="keyword",E(K)}function rt(t,e){if("target"==e)return T.marked="keyword",E(Q)}function at(t){return":"==t?E(q,U):M(K,R(";"),q)}function it(t){if("variable"==t)return T.marked="property",E()}function ot(t,e){return"async"==t?(T.marked="property",E(ot)):"variable"==t||"keyword"==T.style?(T.marked="property","get"==e||"set"==e?E(ut):(s&&T.state.fatArrowAt==T.stream.start&&(n=T.stream.match(/^\s*:\s*/,!1))&&(T.state.fatArrowAt=T.stream.pos+n[0].length),E(ct))):"number"==t||"string"==t?(T.marked=u?"property":T.style+" property",E(ct)):"jsonld-keyword"==t?E(ct):s&&V(e)?(T.marked="keyword",E(ot)):"["==t?E(N,dt,R("]"),ct):"spread"==t?E(D,ct):"*"==e?(T.marked="keyword",E(ot)):":"==t?M(ct):void 0;var n}function ut(t){return"variable"!=t?M(ct):(T.marked="property",E(St))}function ct(t){return":"==t?E(D):"("==t?M(St):void 0}function st(t,e,n){function r(a,i){if(n?n.indexOf(a)>-1:","==a){var o=T.state.lexical;return"call"==o.info&&(o.pos=(o.pos||0)+1),E((function(n,r){return n==e||r==e?M():M(t)}),r)}return a==e||i==e?E():n&&n.indexOf(";")>-1?M(t):E(R(e))}return function(n,a){return n==e||a==e?E():M(t,r)}}function lt(t,e,n){for(var r=3;r<arguments.length;r++)T.cc.push(arguments[r]);return E(L(e,n),st(t,e),q)}function ft(t){return"}"==t?E():M(U,ft)}function dt(t,e){if(s){if(":"==t)return E(vt);if("?"==e)return E(dt)}}function mt(t,e){if(s&&(":"==t||"in"==e))return E(vt)}function pt(t){if(s&&":"==t)return T.stream.match(/^\s*\w+\s+is\b/,!1)?E(N,ht,vt):E(vt)}function ht(t,e){if("is"==e)return T.marked="keyword",E()}function vt(t,e){return"keyof"==e||"typeof"==e||"infer"==e?(T.marked="keyword",E("typeof"==e?D:vt)):"variable"==t||"void"==e?(T.marked="type",E(yt)):"|"==e||"&"==e?E(vt):"string"==t||"number"==t||"atom"==t?E(yt):"["==t?E(L("]"),st(vt,"]",","),q,yt):"{"==t?E(L("}"),st(gt,"}",",;"),q,yt):"("==t?E(st(kt,")"),bt,yt):"<"==t?E(st(vt,">"),vt):void 0}function bt(t){if("=>"==t)return E(vt)}function gt(t,e){return"variable"==t||"keyword"==T.style?(T.marked="property",E(gt)):"?"==e||"number"==t||"string"==t?E(gt):":"==t?E(vt):"["==t?E(R("variable"),mt,R("]"),gt):"("==t?M($t,gt):void 0}function kt(t,e){return"variable"==t&&T.stream.match(/^\s*[?:]/,!1)||"?"==e?E(kt):":"==t?E(vt):"spread"==t?E(kt):M(vt)}function yt(t,e){return"<"==e?E(L(">"),st(vt,">"),q,yt):"|"==e||"."==t||"&"==e?E(vt):"["==t?E(vt,R("]"),yt):"extends"==e||"implements"==e?(T.marked="keyword",E(vt)):"?"==e?E(vt,R(":"),vt):void 0}function wt(t,e){if("<"==e)return E(L(">"),st(vt,">"),q,yt)}function xt(){return M(vt,jt)}function jt(t,e){if("="==e)return E(vt)}function Ot(t,e){return"enum"==e?(T.marked="keyword",E(Xt)):M(_t,dt,Et,Ct)}function _t(t,e){return s&&V(e)?(T.marked="keyword",E(_t)):"variable"==t?(I(e),E()):"spread"==t?E(_t):"["==t?lt(Mt,"]"):"{"==t?lt(Tt,"}"):void 0}function Tt(t,e){return"variable"!=t||T.stream.match(/^\s*:/,!1)?("variable"==t&&(T.marked="property"),"spread"==t?E(_t):"}"==t?M():"["==t?E(N,R("]"),R(":"),Tt):E(R(":"),_t,Et)):(I(e),E(Et))}function Mt(){return M(_t,Et)}function Et(t,e){if("="==e)return E(D)}function Ct(t){if(","==t)return E(Ot)}function It(t,e){if("keyword b"==t&&"else"==e)return E(L("form","else"),U,q)}function At(t,e){return"await"==e?E(At):"("==t?E(L(")"),Vt,q):void 0}function Vt(t){return"var"==t?E(Ot,zt):"variable"==t?E(zt):M(zt)}function zt(t,e){return")"==t?E():";"==t?E(zt):"in"==e||"of"==e?(T.marked="keyword",E(N,zt)):M(N,zt)}function St(t,e){return"*"==e?(T.marked="keyword",E(St)):"variable"==t?(I(e),E(St)):"("==t?E(P,L(")"),st(Wt,")"),q,pt,U,G):s&&"<"==e?E(L(">"),st(xt,">"),q,St):void 0}function $t(t,e){return"*"==e?(T.marked="keyword",E($t)):"variable"==t?(I(e),E($t)):"("==t?E(P,L(")"),st(Wt,")"),q,pt,G):s&&"<"==e?E(L(">"),st(xt,">"),q,$t):void 0}function Pt(t,e){return"keyword"==t||"variable"==t?(T.marked="type",E(Pt)):"<"==e?E(L(">"),st(xt,">"),q):void 0}function Wt(t,e){return"@"==e&&E(N,Wt),"spread"==t?E(Wt):s&&V(e)?(T.marked="keyword",E(Wt)):s&&"this"==t?E(dt,Et):M(_t,dt,Et)}function Gt(t,e){return"variable"==t?Lt(t,e):qt(t,e)}function Lt(t,e){if("variable"==t)return I(e),E(qt)}function qt(t,e){return"<"==e?E(L(">"),st(xt,">"),q,qt):"extends"==e||"implements"==e||s&&","==t?("implements"==e&&(T.marked="keyword"),E(s?vt:N,qt)):"{"==t?E(L("}"),Rt,q):void 0}function Rt(t,e){return"async"==t||"variable"==t&&("static"==e||"get"==e||"set"==e||s&&V(e))&&T.stream.match(/^\s+[\w$\xa1-\uffff]/,!1)?(T.marked="keyword",E(Rt)):"variable"==t||"keyword"==T.style?(T.marked="property",E(Ut,Rt)):"number"==t||"string"==t?E(Ut,Rt):"["==t?E(N,dt,R("]"),Ut,Rt):"*"==e?(T.marked="keyword",E(Rt)):s&&"("==t?M($t,Rt):";"==t||","==t?E(Rt):"}"==t?E():"@"==e?E(N,Rt):void 0}function Ut(t,e){if("?"==e)return E(Ut);if(":"==t)return E(vt,Et);if("="==e)return E(D);var n=T.state.lexical.prev,r=n&&"interface"==n.info;return M(r?$t:St)}function Bt(t,e){return"*"==e?(T.marked="keyword",E(Kt,R(";"))):"default"==e?(T.marked="keyword",E(N,R(";"))):"{"==t?E(st(Nt,"}"),Kt,R(";")):M(U)}function Nt(t,e){return"as"==e?(T.marked="keyword",E(R("variable"))):"variable"==t?M(D,Nt):void 0}function Dt(t){return"string"==t?E():"("==t?M(N):M(Ht,Jt,Kt)}function Ht(t,e){return"{"==t?lt(Ht,"}"):("variable"==t&&I(e),"*"==e&&(T.marked="keyword"),E(Ft))}function Jt(t){if(","==t)return E(Ht,Jt)}function Ft(t,e){if("as"==e)return T.marked="keyword",E(Ht)}function Kt(t,e){if("from"==e)return T.marked="keyword",E(N)}function Qt(t){return"]"==t?E():M(st(D,"]"))}function Xt(){return M(L("form"),_t,R("{"),L("}"),st(Yt,"}"),q,q)}function Yt(){return M(_t,Et)}function Zt(t,e){return"operator"==t.lastType||","==t.lastType||d.test(e.charAt(0))||/[,.]/.test(e.charAt(0))}function te(t,e,n){return e.tokenize==v&&/^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(e.lastType)||"quasi"==e.lastType&&/\{\s*$/.test(t.string.slice(0,t.pos-(n||0)))}return G.lex=!0,q.lex=!0,{startState:function(t){var e={tokenize:v,lastType:"sof",cc:[],lexical:new j((t||0)-i,0,"block",!1),localVars:n.localVars,context:n.localVars&&new z(null,null,!1),indented:t||0};return n.globalVars&&"object"==typeof n.globalVars&&(e.globalVars=n.globalVars),e},token:function(t,e){if(t.sol()&&(e.lexical.hasOwnProperty("align")||(e.lexical.align=!1),e.indented=t.indentation(),w(t,e)),e.tokenize!=g&&t.eatSpace())return null;var n=e.tokenize(t,e);return"comment"==r?n:(e.lastType="operator"!=r||"++"!=a&&"--"!=a?r:"incdec",_(e,n,r,a,t))},indent:function(e,r){if(e.tokenize==g)return t.Pass;if(e.tokenize!=v)return 0;var a,u=r&&r.charAt(0),c=e.lexical;if(!/^\s*else\b/.test(r))for(var s=e.cc.length-1;s>=0;--s){var l=e.cc[s];if(l==q)c=c.prev;else if(l!=It)break}while(("stat"==c.type||"form"==c.type)&&("}"==u||(a=e.cc[e.cc.length-1])&&(a==K||a==Q)&&!/^[,\.=+\-*:?[\(]/.test(r)))c=c.prev;o&&")"==c.type&&"stat"==c.prev.type&&(c=c.prev);var f=c.type,d=u==f;return"vardef"==f?c.indented+("operator"==e.lastType||","==e.lastType?c.info.length+1:0):"form"==f&&"{"==u?c.indented:"form"==f?c.indented+i:"stat"==f?c.indented+(Zt(e,r)?o||i:0):"switch"!=c.info||d||0==n.doubleIndentSwitch?c.align?c.column+(d?0:1):c.indented+(d?0:i):c.indented+(/^(?:case|default)\b/.test(r)?i:2*i)},electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,blockCommentStart:c?null:"/*",blockCommentEnd:c?null:"*/",blockCommentContinue:c?null:" * ",lineComment:c?null:"//",fold:"brace",closeBrackets:"()[]{}''\"\"``",helperType:c?"json":"javascript",jsonldMode:u,jsonMode:c,expressionAllowed:te,skipExpression:function(t){var e=t.cc[t.cc.length-1];e!=N&&e!=D||t.cc.pop()}}})),t.registerHelper("wordChars","javascript",/[\w$]/),t.defineMIME("text/javascript","javascript"),t.defineMIME("text/ecmascript","javascript"),t.defineMIME("application/javascript","javascript"),t.defineMIME("application/x-javascript","javascript"),t.defineMIME("application/ecmascript","javascript"),t.defineMIME("application/json",{name:"javascript",json:!0}),t.defineMIME("application/x-json",{name:"javascript",json:!0}),t.defineMIME("application/ld+json",{name:"javascript",jsonld:!0}),t.defineMIME("text/typescript",{name:"javascript",typescript:!0}),t.defineMIME("application/typescript",{name:"javascript",typescript:!0})}))}}]);