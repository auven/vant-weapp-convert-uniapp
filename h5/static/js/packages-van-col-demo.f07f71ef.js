(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["packages-van-col-demo"],{"08e2":function(t,n,e){"use strict";var a=e("2941"),r=e.n(a);r.a},"20cf":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={};n.default=a},2941:function(t,n,e){var a=e("574a");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=e("4f06").default;r("b825a412",a,!0,{sourceMap:!1,shadowMode:!1})},"32db":function(t,n,e){e("99af"),e("13d5"),e("b64b");var a="van-";function r(t,n){return n?"string"===typeof n||"number"===typeof n?" ".concat(a).concat(t,"--").concat(n):Array.isArray(n)?n.reduce((function(n,e){return n+r(t,e)}),""):Object.keys(n).reduce((function(e,a){return e+(n[a]?r(t,a):"")}),""):""}function s(t,n){return"".concat(a).concat(t)+" "+r(t,n)}t.exports.bem=s},"4c48":function(t,n,e){var a=e("7037");function r(t){var n=a(t);return"boolean"===n||"number"===n||"string"===n||"undefined"===n||null===t}function s(t,n){return 2===n.length?t(n[0],n[1]):1===n.length?t(n[0]):t()}function o(t){if(1===t.length&&r(t[0]))return t[0];for(var n={},e=0;e<t.length;e++)n["key"+e]=t[e];return JSON.stringify(n)}function c(t){var n={};return function(){var e=o(arguments);return void 0===n[e]&&(n[e]=s(t,arguments)),n[e]}}t.exports.memoize=c},"574a":function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,".dark[data-v-68c24952],\n.light[data-v-68c24952]{color:#fff;font-size:13px;line-height:30px;text-align:center;margin-bottom:10px;background-clip:content-box}.dark[data-v-68c24952]{background-color:#39a9ed}.light[data-v-68c24952]{background-color:#66c6f2}",""]),t.exports=n},"79c1":function(t,n,e){var a=e("32db").bem,r=e("4c48").memoize,s=e("e867").addUnit;t.exports={bem:a,memoize:r,addUnit:s}},"97a4":function(t,n,e){"use strict";e.r(n);var a=e("20cf"),r=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(n,t,(function(){return a[t]}))}(s);n["default"]=r.a},a17f:function(t,n,e){"use strict";var a=e("4ea4");e("d81d"),Object.defineProperty(n,"__esModule",{value:!0}),n.VantComponent=c;var r=a(e("5530")),s=e("ac1d"),o=e("d4fb");function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.externalClasses=t.classes,t.externalClasses=t.externalClasses||[],t.externalClasses.push("custom-class"),t.externalStyles=t.externalStyles||[],t.externalStyles.push("custom-style");var n={};t.externalClasses.map((function(t){var e=(0,o.getCamelCase)(t);n[e]={type:String,default:""}})),t.externalStyles.map((function(t){var e=(0,o.getCamelCase)(t);n[e]={type:String,default:""}})),t.props=(0,r.default)((0,r.default)({},n),t.props);var e=t.mixins||[];return e.push(s.basic),t.mixins=e,t.options={multipleSlots:!0,addGlobalClass:!0},t}},ac1d:function(t,n,e){"use strict";e("d3b7"),e("ac1f"),Object.defineProperty(n,"__esModule",{value:!0}),n.basic=void 0;var a={props:{componentId:{type:String,default:"vant-component"}},methods:{getRect:function(t,n){var e=this;return new Promise((function(a){var r;r=uni.createSelectorQuery().in(e),r[n?"selectAll":"select"](t).boundingClientRect((function(t){n&&Array.isArray(t)&&t.length&&a(t),!n&&t&&a(t)})).exec()}))}}};n.basic=a},c9f9:function(t,n,e){"use strict";e.r(n);var a=e("cfe9"),r=e("97a4");for(var s in r)"default"!==s&&function(t){e.d(n,t,(function(){return r[t]}))}(s);e("08e2");var o,c=e("f0c5"),u=Object(c["a"])(r["default"],a["b"],a["c"],!1,null,"68c24952",null,!1,a["a"],o);n["default"]=u.exports},cfe9:function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return a}));var a={demoBlock:e("e29a").default,vanRow:e("92f3").default,vanCol:e("c785").default},r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("demo-block",{attrs:{title:"基础用法",padding:!0}},[e("van-row",[e("van-col",{attrs:{span:"8","custom-class":"dark"}},[t._v("span: 8")]),e("van-col",{attrs:{span:"8","custom-class":"light"}},[t._v("span: 8")]),e("van-col",{attrs:{span:"8","custom-class":"dark"}},[t._v("span: 8")])],1),e("van-row",[e("van-col",{attrs:{span:"4","custom-class":"dark"}},[t._v("span: 4")]),e("van-col",{attrs:{span:"10",offset:"4","custom-class":"light"}},[t._v("offset: 4, span: 10")])],1),e("van-row",[e("van-col",{attrs:{offset:"12",span:"12","custom-class":"dark"}},[t._v("offset: 12, span: 12")])],1)],1),e("demo-block",{attrs:{title:"在列元素之间增加间距",padding:!0}},[e("van-row",{attrs:{gutter:"20"}},[e("van-col",{attrs:{span:"8","custom-class":"dark"}},[t._v("span: 8")]),e("van-col",{attrs:{span:"8","custom-class":"light"}},[t._v("span: 8")]),e("van-col",{attrs:{span:"8","custom-class":"dark"}},[t._v("span: 8")])],1)],1)],1)},s=[]},d4fb:function(t,n,e){"use strict";function a(t){return t.replace(/[A-Z]/g,(function(t){return"-"+t.toLowerCase()}))}function r(t){return t.replace(/-([a-z])/g,(function(t,n){return n.toUpperCase()}))}function s(t){t.sort((function(t,n){return t._uid-n._uid}))}e("4e82"),e("ac1f"),e("5319"),Object.defineProperty(n,"__esModule",{value:!0}),n.getKebabCase=a,n.getCamelCase=r,n.sortChildren=s},e867:function(t,n){var e=/^\d+(\.\d+)?$/;function a(t){if(null!=t)return e.test(""+t)?t+"px":t}t.exports={addUnit:a}}}]);