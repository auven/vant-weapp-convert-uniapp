(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["packages-van-slider-demo"],{"07a6":function(t,e,a){"use strict";a.r(e);var n=a("a5b4"),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},"082a":function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var n={demoBlock:a("e29a").default,vanSlider:a("48b5").default},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("demo-block",{attrs:{title:"基础用法"}},[a("van-slider",{attrs:{value:"50","custom-class":"slider"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.onChange.apply(void 0,arguments)}}})],1),a("demo-block",{attrs:{title:"指定选择范围"}},[a("van-slider",{attrs:{"custom-class":"slider",min:"-50",max:"50"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.onChange.apply(void 0,arguments)}}})],1),a("demo-block",{attrs:{title:"禁用"}},[a("van-slider",{attrs:{"custom-class":"slider",value:"50",disabled:!0}})],1),a("demo-block",{attrs:{title:"指定步长"}},[a("van-slider",{attrs:{"custom-class":"slider",value:"50",step:"10"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.onChange.apply(void 0,arguments)}}})],1),a("demo-block",{attrs:{title:"自定义样式"}},[a("van-slider",{attrs:{value:"50","custom-class":"slider","bar-height":"4px","active-color":"#ee0a24"}})],1),a("demo-block",{attrs:{title:"自定义按钮"}},[a("van-slider",{attrs:{"custom-class":"slider","use-button-slot":!0,"active-color":"#ee0a24"},on:{drag:function(e){arguments[0]=e=t.$handleEvent(e),t.onDrag.apply(void 0,arguments)}},model:{value:t.currentValue,callback:function(e){t.currentValue=e},expression:"currentValue"}},[a("v-uni-view",{staticClass:"custom-button",attrs:{slot:"button"},slot:"button"},[t._v(t._s(t.currentValue))])],1)],1)],1)},i=[]},"09a6":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'.van-slider[data-v-4a1d09d0]{position:relative;border-radius:999px;border-radius:var(--border-radius-max,999px);background-color:#ebedf0;background-color:var(--slider-inactive-background-color,#ebedf0)}.van-slider[data-v-4a1d09d0]::before{position:absolute;right:0;left:0;content:"";top:-8px;top:-var(--padding-xs,8px);bottom:-8px;bottom:-var(--padding-xs,8px)}.van-slider__bar[data-v-4a1d09d0]{position:relative;border-radius:inherit;-webkit-transition:width .2s;transition:width .2s;-webkit-transition:width var(--animation-duration-fast,.2s);transition:width var(--animation-duration-fast,.2s);background-color:#1989fa;background-color:var(--slider-active-background-color,#1989fa)}.van-slider__button[data-v-4a1d09d0]{width:24px;height:24px;border-radius:50%;box-shadow:0 1px 2px rgba(0,0,0,.5);background-color:#fff;background-color:var(--slider-button-background-color,#fff)}.van-slider__button-wrapper[data-v-4a1d09d0]{position:absolute;top:50%;right:0;-webkit-transform:translate3d(50%,-50%,0);transform:translate3d(50%,-50%,0)}.van-slider--disabled[data-v-4a1d09d0]{opacity:.5}',""]),t.exports=e},"2f8d":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{class:t.wrapClass,style:t.wrapStyle,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"van-slider__bar",style:t.sliderBarStyle},[a("v-uni-view",{staticClass:"van-slider__button-wrapper",on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.onTouchStart.apply(void 0,arguments)},touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.onTouchMove.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.onTouchEnd.apply(void 0,arguments)},touchcancel:function(e){arguments[0]=e=t.$handleEvent(e),t.onTouchEnd.apply(void 0,arguments)}}},[t.useButtonSlot?t._t("button"):a("v-uni-view",{staticClass:"van-slider__button"})],2)],1)],1)},i=[]},"32db":function(t,e,a){a("99af"),a("13d5"),a("b64b");var n="van-";function r(t,e){return e?"string"===typeof e||"number"===typeof e?" ".concat(n).concat(t,"--").concat(e):Array.isArray(e)?e.reduce((function(e,a){return e+r(t,a)}),""):Object.keys(e).reduce((function(a,n){return a+(e[n]?r(t,n):"")}),""):""}function i(t,e){return"".concat(n).concat(t)+" "+r(t,e)}t.exports.bem=i},3893:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{currentValue:50}},methods:{onChange:function(t){uni.showToast({icon:"none",title:"当前值：".concat(t)})},onDrag:function(t){}}};e.default=n},"3e52":function(t,e,a){var n=a("8b77");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("4f06").default;r("45436969",n,!0,{sourceMap:!1,shadowMode:!1})},"3e85":function(t,e,a){"use strict";a.r(e);var n=a("3893"),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},"48b5":function(t,e,a){"use strict";a.r(e);var n=a("2f8d"),r=a("07a6");for(var i in r)"default"!==i&&function(t){a.d(e,t,(function(){return r[t]}))}(i);a("69ad");var o,s=a("f0c5"),u=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"4a1d09d0",null,!1,n["a"],o);e["default"]=u.exports},"48c9":function(t,e,a){var n=a("7619");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("4f06").default;r("38a790fa",n,!0,{sourceMap:!1,shadowMode:!1})},"4c48":function(t,e,a){var n=a("7037");function r(t){var e=n(t);return"boolean"===e||"number"===e||"string"===e||"undefined"===e||null===t}function i(t,e){return 2===e.length?t(e[0],e[1]):1===e.length?t(e[0]):t()}function o(t){if(1===t.length&&r(t[0]))return t[0];for(var e={},a=0;a<t.length;a++)e["key"+a]=t[a];return JSON.stringify(e)}function s(t){var e={};return function(){var a=o(arguments);return void 0===e[a]&&(e[a]=i(t,arguments)),e[a]}}t.exports.memoize=s},5594:function(t,e,a){var n=a("09a6");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("4f06").default;r("727a40c8",n,!0,{sourceMap:!1,shadowMode:!1})},"61b8":function(t,e,a){"use strict";var n=a("48c9"),r=a.n(n);r.a},"658b":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{class:t.wrapClass},[t.title?a("v-uni-view",{staticClass:"demo-block__title"},[t._v(t._s(t.title))]):t._e(),t._t("default")],2)},i=[]},"69ad":function(t,e,a){"use strict";var n=a("5594"),r=a.n(n);r.a},7619:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".demo-block__title[data-v-50cf4496]{margin:0;font-weight:400;font-size:14px;color:rgba(69,90,100,.6);padding:20px 15px 15px}.demo-block--padding[data-v-50cf4496]{padding:0 15px}.demo-block--padding .demo-block__title[data-v-50cf4496]{padding-left:0}",""]),t.exports=e},"79c1":function(t,e,a){var n=a("32db").bem,r=a("4c48").memoize,i=a("e867").addUnit;t.exports={bem:n,memoize:r,addUnit:i}},"84fb":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{title:String,padding:Boolean},computed:{wrapClass:function(){var t=this.padding;return"custom-class demo-block van-clearfix ".concat(t?"demo-block--padding":"")}}};e.default=n},"8b77":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".slider[data-v-2b56b111]{margin:0 15px 30px}.custom-button[data-v-2b56b111]{width:26px;color:#fff;font-size:10px;line-height:18px;text-align:center;border-radius:100px;background-color:#ee0a24}",""]),t.exports=e},a17f:function(t,e,a){"use strict";var n=a("4ea4");a("d81d"),Object.defineProperty(e,"__esModule",{value:!0}),e.VantComponent=s;var r=n(a("5530")),i=a("ac1d"),o=a("d4fb");function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.externalClasses=t.classes,t.externalClasses=t.externalClasses||[],t.externalClasses.push("custom-class"),t.externalStyles=t.externalStyles||[],t.externalStyles.push("custom-style");var e={};t.externalClasses.map((function(t){var a=(0,o.getCamelCase)(t);e[a]={type:String,default:""}})),t.externalStyles.map((function(t){var a=(0,o.getCamelCase)(t);e[a]={type:String,default:""}})),t.props=(0,r.default)((0,r.default)({},e),t.props);var a=t.mixins||[];return a.push(i.basic),t.mixins=a,t.options={multipleSlots:!0,addGlobalClass:!0},t}},a5b4:function(t,e,a){"use strict";a("99af"),a("a15b"),a("d81d"),a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a("a17f"),r=a("ff24"),i=a("79c1"),o=(0,n.VantComponent)({mixins:[r.touch],props:{disabled:Boolean,useButtonSlot:Boolean,activeColor:String,inactiveColor:String,max:{type:[String,Number],default:100},min:{type:[String,Number],default:0},step:{type:[String,Number],default:1},value:{type:[String,Number],default:0},barHeight:{type:[String,Number],default:"2px"}},data:function(){return{barStyle:""}},computed:{wrapClass:function(){var t=this.customClass,e=this.disabled;return"custom-class ".concat(t," ").concat(i.bem("slider",{disabled:e}))},wrapStyle:function(){var t=this.inactiveColor;return t?"background:"+t:""},compBarStyle:function(){var t=this.barHeight,e=this.activeColor,a=[["height",i.addUnit(t)]];return e&&a.push(["background",e]),a.map((function(t){return t.join(":")})).join(";")},sliderBarStyle:function(){var t=this.barStyle,e=this.compBarStyle;return"".concat(t,";").concat(e)}},created:function(){this.updateValue(this.value)},methods:{onTouchStart:function(t){this.disabled||(this.touchStart(t),this.startValue=this.format(this.value),this.dragStatus="start")},onTouchMove:function(t){var e=this;this.disabled||("start"===this.dragStatus&&this.$emit("drag-start"),this.touchMove(t),this.dragStatus="draging",this.getRect(".van-slider").then((function(t){var a=e.deltaX/t.width*100;e.newValue=e.startValue+a,e.updateValue(e.newValue,!1,!0)})))},onTouchEnd:function(){this.disabled||"draging"===this.dragStatus&&(this.updateValue(this.newValue,!0),this.$emit("drag-end"))},onClick:function(t){var e=this;if(!this.disabled){var a=this.min;this.getRect(".van-slider").then((function(n){var r=(t.detail.x||t.detail.clientX-n.left)/n.width*e.getRange()+Number(a);e.updateValue(r,!0)}))}},updateValue:function(t,e,a){t=this.format(t);var n=this.min,r="".concat(100*(t-n)/this.getRange(),"%");this.barStyle="width: ".concat(r,"; ").concat(a?"transition: none;":""),this.$emit("input",t),a&&this.$emit("drag",{value:t}),e&&this.$emit("change",t)},getRange:function(){var t=this.max,e=this.min;return t-e},format:function(t){var e=this.max,a=this.min,n=this.step;return Math.round(Math.max(a,Math.min(t,e))/n)*n}}});e.default=o},aae7:function(t,e,a){"use strict";var n=a("3e52"),r=a.n(n);r.a},ac1d:function(t,e,a){"use strict";a("d3b7"),a("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.basic=void 0;var n={props:{componentId:{type:String,default:"vant-component"}},methods:{getRect:function(t,e){var a=this;return new Promise((function(n){var r;r=uni.createSelectorQuery().in(a),r[e?"selectAll":"select"](t).boundingClientRect((function(t){e&&Array.isArray(t)&&t.length&&n(t),!e&&t&&n(t)})).exec()}))}}};e.basic=n},c22e:function(t,e,a){"use strict";a.r(e);var n=a("082a"),r=a("3e85");for(var i in r)"default"!==i&&function(t){a.d(e,t,(function(){return r[t]}))}(i);a("aae7");var o,s=a("f0c5"),u=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"2b56b111",null,!1,n["a"],o);e["default"]=u.exports},d4fb:function(t,e,a){"use strict";function n(t){return t.replace(/[A-Z]/g,(function(t){return"-"+t.toLowerCase()}))}function r(t){return t.replace(/-([a-z])/g,(function(t,e){return e.toUpperCase()}))}a("ac1f"),a("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.getKebabCase=n,e.getCamelCase=r},e29a:function(t,e,a){"use strict";a.r(e);var n=a("658b"),r=a("f78d");for(var i in r)"default"!==i&&function(t){a.d(e,t,(function(){return r[t]}))}(i);a("61b8");var o,s=a("f0c5"),u=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"50cf4496",null,!1,n["a"],o);e["default"]=u.exports},e867:function(t,e){var a=/^\d+(\.\d+)?$/;function n(t){if(null!=t)return a.test(""+t)?t+"px":t}t.exports={addUnit:n}},f78d:function(t,e,a){"use strict";a.r(e);var n=a("84fb"),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},ff24:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.touch=void 0;var n=10;function r(t,e){return t>e&&t>n?"horizontal":e>t&&e>n?"vertical":""}var i={methods:{resetTouchStatus:function(){this.direction="",this.deltaX=0,this.deltaY=0,this.offsetX=0,this.offsetY=0},touchStart:function(t){this.resetTouchStatus();var e=t.touches[0];this.startX=e.clientX,this.startY=e.clientY},touchMove:function(t){var e=t.touches[0];this.deltaX=e.clientX-this.startX,this.deltaY=e.clientY-this.startY,this.offsetX=Math.abs(this.deltaX),this.offsetY=Math.abs(this.deltaY),this.direction=this.direction||r(this.offsetX,this.offsetY)}}};e.touch=i}}]);