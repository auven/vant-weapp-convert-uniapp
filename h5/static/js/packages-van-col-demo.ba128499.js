(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["packages-van-col-demo"],{"08e2":function(t,n,a){"use strict";var e=a("2941"),r=a.n(e);r.a},"20cf":function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={};n.default=e},2941:function(t,n,a){var e=a("574a");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var r=a("4f06").default;r("b825a412",e,!0,{sourceMap:!1,shadowMode:!1})},"32db":function(t,n,a){a("99af"),a("13d5"),a("b64b");var e="van-";function r(t,n){return n?"string"===typeof n||"number"===typeof n?" ".concat(e).concat(t,"--").concat(n):Array.isArray(n)?n.reduce((function(n,a){return n+r(t,a)}),""):Object.keys(n).reduce((function(a,e){return a+(n[e]?r(t,e):"")}),""):""}function c(t,n){return"".concat(e).concat(t)+" "+r(t,n)}t.exports.bem=c},"4c48":function(t,n,a){var e=a("7037");function r(t){var n=e(t);return"boolean"===n||"number"===n||"string"===n||"undefined"===n||null===t}function c(t,n){return 2===n.length?t(n[0],n[1]):1===n.length?t(n[0]):t()}function o(t){if(1===t.length&&r(t[0]))return t[0];for(var n={},a=0;a<t.length;a++)n["key"+a]=t[a];return JSON.stringify(n)}function s(t){var n={};return function(){var a=o(arguments);return void 0===n[a]&&(n[a]=c(t,arguments)),n[a]}}t.exports.memoize=s},"574a":function(t,n,a){var e=a("24fb");n=e(!1),n.push([t.i,".dark[data-v-68c24952],\n.light[data-v-68c24952]{color:#fff;font-size:13px;line-height:30px;text-align:center;margin-bottom:10px;background-clip:content-box}.dark[data-v-68c24952]{background-color:#39a9ed}.light[data-v-68c24952]{background-color:#66c6f2}",""]),t.exports=n},"79c1":function(t,n,a){var e=a("32db").bem,r=a("4c48").memoize,c=a("e867").addUnit;t.exports={bem:e,memoize:r,addUnit:c}},"97a4":function(t,n,a){"use strict";a.r(n);var e=a("20cf"),r=a.n(e);for(var c in e)"default"!==c&&function(t){a.d(n,t,(function(){return e[t]}))}(c);n["default"]=r.a},a17f:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.VantComponent=r;var e=a("ac1d");function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.externalClasses=t.classes,t.externalClasses=t.externalClasses||[],t.externalClasses.push("custom-class");var n=t.mixins||[];return n.push(e.basic),t.mixins=n,t.options={multipleSlots:!0,addGlobalClass:!0},t}},ac1d:function(t,n,a){"use strict";a("d3b7"),a("ac1f"),Object.defineProperty(n,"__esModule",{value:!0}),n.basic=void 0;var e={props:{customClass:String,customStyle:String,componentId:{type:String,default:"vant-component"}},methods:{getRect:function(t,n){var a=this;return new Promise((function(e){var r;r=uni.createSelectorQuery().in(a),r[n?"selectAll":"select"](t).boundingClientRect((function(t){n&&Array.isArray(t)&&t.length&&e(t),!n&&t&&e(t)})).exec()}))}}};n.basic=e},c9f9:function(t,n,a){"use strict";a.r(n);var e=a("cfe9"),r=a("97a4");for(var c in r)"default"!==c&&function(t){a.d(n,t,(function(){return r[t]}))}(c);a("08e2");var o,s=a("f0c5"),u=Object(s["a"])(r["default"],e["b"],e["c"],!1,null,"68c24952",null,!1,e["a"],o);n["default"]=u.exports},cfe9:function(t,n,a){"use strict";a.d(n,"b",(function(){return r})),a.d(n,"c",(function(){return c})),a.d(n,"a",(function(){return e}));var e={demoBlock:a("e29a").default,vanRow:a("92f3").default,vanCol:a("c785").default},r=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("demo-block",{attrs:{title:"基础用法",padding:!0}},[a("van-row",[a("van-col",{attrs:{span:"8","custom-class":"dark"}},[t._v("span: 8")]),a("van-col",{attrs:{span:"8","custom-class":"light"}},[t._v("span: 8")]),a("van-col",{attrs:{span:"8","custom-class":"dark"}},[t._v("span: 8")])],1),a("van-row",[a("van-col",{attrs:{span:"4","custom-class":"dark"}},[t._v("span: 4")]),a("van-col",{attrs:{span:"10",offset:"4","custom-class":"light"}},[t._v("offset: 4, span: 10")])],1),a("van-row",[a("van-col",{attrs:{offset:"12",span:"12","custom-class":"dark"}},[t._v("offset: 12, span: 12")])],1)],1),a("demo-block",{attrs:{title:"在列元素之间增加间距",padding:!0}},[a("van-row",{attrs:{gutter:"20"}},[a("van-col",{attrs:{span:"8","custom-class":"dark"}},[t._v("span: 8")]),a("van-col",{attrs:{span:"8","custom-class":"light"}},[t._v("span: 8")]),a("van-col",{attrs:{span:"8","custom-class":"dark"}},[t._v("span: 8")])],1)],1)],1)},c=[]},e867:function(t,n){var a=/^\d+(\.\d+)?$/;function e(t){if(null!=t)return a.test(""+t)?t+"px":t}t.exports={addUnit:e}}}]);