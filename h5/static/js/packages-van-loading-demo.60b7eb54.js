(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["packages-van-loading-demo"],{"014a":function(t,a,n){var e=n("24fb");a=e(!1),a.push([t.i,'[data-v-44afb39a]:host{font-size:0;line-height:1}.van-loading[data-v-44afb39a]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#c8c9cc;color:var(--loading-spinner-color,#c8c9cc)}.van-loading__spinner[data-v-44afb39a]{position:relative;box-sizing:border-box;width:30px;width:var(--loading-spinner-size,30px);max-width:100%;max-height:100%;height:30px;height:var(--loading-spinner-size,30px);-webkit-animation:van-rotate-data-v-44afb39a .8s linear infinite;animation:van-rotate-data-v-44afb39a .8s linear infinite;-webkit-animation:van-rotate-data-v-44afb39a var(--loading-spinner-animation-duration,.8s) linear infinite;animation:van-rotate-data-v-44afb39a var(--loading-spinner-animation-duration,.8s) linear infinite}.van-loading__spinner--spinner[data-v-44afb39a]{-webkit-animation-timing-function:steps(12);animation-timing-function:steps(12)}.van-loading__spinner--circular[data-v-44afb39a]{border:1px solid transparent;border-top-color:initial;border-radius:100%}.van-loading__text[data-v-44afb39a]{margin-left:8px;margin-left:var(--padding-xs,8px);color:#969799;color:var(--loading-text-color,#969799);font-size:14px;font-size:var(--loading-text-font-size,14px);line-height:20px;line-height:var(--loading-text-line-height,20px)}.van-loading__text[data-v-44afb39a]:empty{display:none}.van-loading--vertical[data-v-44afb39a]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.van-loading--vertical .van-loading__text[data-v-44afb39a]{margin:8px 0 0;margin:var(--padding-xs,8px) 0 0}.van-loading__dot[data-v-44afb39a]{position:absolute;top:0;left:0;width:100%;height:100%}.van-loading__dot[data-v-44afb39a]::before{display:block;width:2px;height:25%;margin:0 auto;background-color:currentColor;border-radius:40%;content:" "}.van-loading__dot[data-v-44afb39a]:nth-of-type(1){-webkit-transform:rotate(30deg);transform:rotate(30deg);opacity:1}.van-loading__dot[data-v-44afb39a]:nth-of-type(2){-webkit-transform:rotate(60deg);transform:rotate(60deg);opacity:.9375}.van-loading__dot[data-v-44afb39a]:nth-of-type(3){-webkit-transform:rotate(90deg);transform:rotate(90deg);opacity:.875}.van-loading__dot[data-v-44afb39a]:nth-of-type(4){-webkit-transform:rotate(120deg);transform:rotate(120deg);opacity:.8125}.van-loading__dot[data-v-44afb39a]:nth-of-type(5){-webkit-transform:rotate(150deg);transform:rotate(150deg);opacity:.75}.van-loading__dot[data-v-44afb39a]:nth-of-type(6){-webkit-transform:rotate(180deg);transform:rotate(180deg);opacity:.6875}.van-loading__dot[data-v-44afb39a]:nth-of-type(7){-webkit-transform:rotate(210deg);transform:rotate(210deg);opacity:.625}.van-loading__dot[data-v-44afb39a]:nth-of-type(8){-webkit-transform:rotate(240deg);transform:rotate(240deg);opacity:.5625}.van-loading__dot[data-v-44afb39a]:nth-of-type(9){-webkit-transform:rotate(270deg);transform:rotate(270deg);opacity:.5}.van-loading__dot[data-v-44afb39a]:nth-of-type(10){-webkit-transform:rotate(300deg);transform:rotate(300deg);opacity:.4375}.van-loading__dot[data-v-44afb39a]:nth-of-type(11){-webkit-transform:rotate(330deg);transform:rotate(330deg);opacity:.375}.van-loading__dot[data-v-44afb39a]:nth-of-type(12){-webkit-transform:rotate(1turn);transform:rotate(1turn);opacity:.3125}@-webkit-keyframes van-rotate-data-v-44afb39a{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes van-rotate-data-v-44afb39a{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',""]),t.exports=a},1116:function(t,a,n){"use strict";n.r(a);var e=n("7a44"),o=n.n(e);for(var r in e)"default"!==r&&function(t){n.d(a,t,(function(){return e[t]}))}(r);a["default"]=o.a},"1b73":function(t,a,n){"use strict";n.r(a);var e=n("1fe3"),o=n("1116");for(var r in o)"default"!==r&&function(t){n.d(a,t,(function(){return o[t]}))}(r);n("8504");var i,d=n("f0c5"),s=Object(d["a"])(o["default"],e["b"],e["c"],!1,null,"608a7fec",null,!1,e["a"],i);a["default"]=s.exports},"1fe3":function(t,a,n){"use strict";n.d(a,"b",(function(){return o})),n.d(a,"c",(function(){return r})),n.d(a,"a",(function(){return e}));var e={demoBlock:n("e29a").default,vanLoading:n("63f9").default},o=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("demo-block",{attrs:{title:"加载类型",padding:!0}},[n("van-loading",{attrs:{"custom-class":"demo-loading"}}),n("van-loading",{attrs:{"custom-class":"demo-loading",type:"spinner"}})],1),n("demo-block",{attrs:{title:"自定义颜色",padding:!0}},[n("van-loading",{attrs:{"custom-class":"demo-loading",color:"#1989fa"}}),n("van-loading",{attrs:{"custom-class":"demo-loading",type:"spinner",color:"#1989fa"}})],1),n("demo-block",{attrs:{title:"加载文案",padding:!0}},[n("van-loading",{attrs:{"custom-class":"demo-loading",size:"24px"}},[t._v("加载中...")])],1),n("demo-block",{attrs:{title:"垂直排列",padding:!0}},[n("van-loading",{attrs:{"custom-class":"demo-loading",size:"24px",vertical:!0}},[t._v("加载中...")])],1)],1)},r=[]},"264f":function(t,a,n){"use strict";n("99af"),n("a630"),n("3ca3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=n("a17f"),o=n("79c1"),r=(0,e.VantComponent)({props:{color:String,vertical:Boolean,type:{type:String,default:"circular"},size:String,textSize:String},data:function(){return{array12:Array.from({length:12})}},computed:{wrapClass:function(){var t=this.customClass,a=this.vertical;return"custom-class ".concat(t," van-loading ").concat(a?"van-loading--vertical":"")},textStyle:function(){var t=this.textSize;return"font-size: ".concat(o.addUnit(t))},loadingClass:function(){var t=this.type;return"van-loading__spinner van-loading__spinner--".concat(t)},loadingStyle:function(){var t=this.color,a=this.size;return"color: ".concat(t,"; width: ").concat(o.addUnit(a),"; height: ").concat(o.addUnit(a))}}});a.default=r},"32db":function(t,a,n){n("99af"),n("13d5"),n("b64b");var e="van-";function o(t,a){return a?"string"===typeof a||"number"===typeof a?" ".concat(e).concat(t,"--").concat(a):Array.isArray(a)?a.reduce((function(a,n){return a+o(t,n)}),""):Object.keys(a).reduce((function(n,e){return n+(a[e]?o(t,e):"")}),""):""}function r(t,a){return"".concat(e).concat(t)+" "+o(t,a)}t.exports.bem=r},3626:function(t,a,n){"use strict";var e;n.d(a,"b",(function(){return o})),n.d(a,"c",(function(){return r})),n.d(a,"a",(function(){return e}));var o=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-uni-view",{class:t.wrapClass,style:t.customStyle},["spinner"===t.type?n("v-uni-view",{class:t.loadingClass,style:t.loadingStyle},t._l(t.array12,(function(t,a){return n("v-uni-view",{key:a,staticClass:"van-loading__dot"})})),1):n("v-uni-view",{class:t.loadingClass,style:t.loadingStyle}),n("v-uni-view",{staticClass:"van-loading__text",style:t.textStyle},[t._t("default")],2)],1)},r=[]},"48c9":function(t,a,n){var e=n("7619");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=n("4f06").default;o("38a790fa",e,!0,{sourceMap:!1,shadowMode:!1})},"4c48":function(t,a,n){var e=n("7037");function o(t){var a=e(t);return"boolean"===a||"number"===a||"string"===a||"undefined"===a||null===t}function r(t,a){return 2===a.length?t(a[0],a[1]):1===a.length?t(a[0]):t()}function i(t){if(1===t.length&&o(t[0]))return t[0];for(var a={},n=0;n<t.length;n++)a["key"+n]=t[n];return JSON.stringify(a)}function d(t){var a={};return function(){var n=i(arguments);return void 0===a[n]&&(a[n]=r(t,arguments)),a[n]}}t.exports.memoize=d},"61b8":function(t,a,n){"use strict";var e=n("48c9"),o=n.n(e);o.a},"63f9":function(t,a,n){"use strict";n.r(a);var e=n("3626"),o=n("7960");for(var r in o)"default"!==r&&function(t){n.d(a,t,(function(){return o[t]}))}(r);n("8134");var i,d=n("f0c5"),s=Object(d["a"])(o["default"],e["b"],e["c"],!1,null,"44afb39a",null,!1,e["a"],i);a["default"]=s.exports},"658b":function(t,a,n){"use strict";var e;n.d(a,"b",(function(){return o})),n.d(a,"c",(function(){return r})),n.d(a,"a",(function(){return e}));var o=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-uni-view",{class:t.wrapClass},[t.title?n("v-uni-view",{staticClass:"demo-block__title"},[t._v(t._s(t.title))]):t._e(),t._t("default")],2)},r=[]},"684b":function(t,a,n){var e=n("014a");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=n("4f06").default;o("7e5297c0",e,!0,{sourceMap:!1,shadowMode:!1})},7619:function(t,a,n){var e=n("24fb");a=e(!1),a.push([t.i,".demo-block__title[data-v-50cf4496]{margin:0;font-weight:400;font-size:14px;color:rgba(69,90,100,.6);padding:20px 15px 15px}.demo-block--padding[data-v-50cf4496]{padding:0 15px}.demo-block--padding .demo-block__title[data-v-50cf4496]{padding-left:0}",""]),t.exports=a},7960:function(t,a,n){"use strict";n.r(a);var e=n("264f"),o=n.n(e);for(var r in e)"default"!==r&&function(t){n.d(a,t,(function(){return e[t]}))}(r);a["default"]=o.a},"79c1":function(t,a,n){var e=n("32db").bem,o=n("4c48").memoize,r=n("e867").addUnit;t.exports={bem:e,memoize:o,addUnit:r}},"7a44":function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={};a.default=e},8134:function(t,a,n){"use strict";var e=n("684b"),o=n.n(e);o.a},"84fb":function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={props:{title:String,padding:Boolean},computed:{wrapClass:function(){var t=this.padding;return"custom-class demo-block van-clearfix ".concat(t?"demo-block--padding":"")}}};a.default=e},8504:function(t,a,n){"use strict";var e=n("b62e"),o=n.n(e);o.a},a17f:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.VantComponent=o;var e=n("ac1d");function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.externalClasses=t.classes,t.externalClasses=t.externalClasses||[],t.externalClasses.push("custom-class");var a=t.mixins||[];return a.push(e.basic),t.mixins=a,t.options={multipleSlots:!0,addGlobalClass:!0},t}},ac1d:function(t,a,n){"use strict";n("d3b7"),n("ac1f"),Object.defineProperty(a,"__esModule",{value:!0}),a.basic=void 0;var e={props:{customClass:String,customStyle:String,componentId:{type:String,default:"vant-component"}},methods:{getRect:function(t,a){var n=this;return new Promise((function(e){var o;o=uni.createSelectorQuery().in(n),o[a?"selectAll":"select"](t).boundingClientRect((function(t){a&&Array.isArray(t)&&t.length&&e(t),!a&&t&&e(t)})).exec()}))}}};a.basic=e},b62e:function(t,a,n){var e=n("e729");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=n("4f06").default;o("9891d6c4",e,!0,{sourceMap:!1,shadowMode:!1})},e29a:function(t,a,n){"use strict";n.r(a);var e=n("658b"),o=n("f78d");for(var r in o)"default"!==r&&function(t){n.d(a,t,(function(){return o[t]}))}(r);n("61b8");var i,d=n("f0c5"),s=Object(d["a"])(o["default"],e["b"],e["c"],!1,null,"50cf4496",null,!1,e["a"],i);a["default"]=s.exports},e729:function(t,a,n){var e=n("24fb");a=e(!1),a.push([t.i,".demo-loading[data-v-608a7fec]{margin:4px 16px 4px 0}",""]),t.exports=a},e867:function(t,a){var n=/^\d+(\.\d+)?$/;function e(t){if(null!=t)return n.test(""+t)?t+"px":t}t.exports={addUnit:e}},f78d:function(t,a,n){"use strict";n.r(a);var e=n("84fb"),o=n.n(e);for(var r in e)"default"!==r&&function(t){n.d(a,t,(function(){return e[t]}))}(r);a["default"]=o.a}}]);