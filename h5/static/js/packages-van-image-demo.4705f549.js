(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["packages-van-image-demo"],{"10da":function(t,e,n){"use strict";var a=n("8a53"),i=n.n(a);i.a},"17bd":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{fits:["contain","cover","fill","none","scale-down","widthFix","heightFix"],src:"https://img.yzcdn.cn/vant/cat.jpeg"}}};e.default=a},1924:function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.isFunction=o,e.isPlainObject=r,e.isPromise=s,e.isDef=d,e.isObj=l,e.isNumber=c,e.isBoolean=u,e.isImageUrl=g,e.isVideoUrl=p;var i=a(n("53ca"));function o(t){return"function"===typeof t}function r(t){return null!==t&&"object"===(0,i.default)(t)&&!Array.isArray(t)}function s(t){return r(t)&&o(t.then)&&o(t.catch)}function d(t){return void 0!==t&&null!==t}function l(t){var e=(0,i.default)(t);return null!==t&&("object"===e||"function"===e)}function c(t){return/^\d+(\.\d+)?$/.test(t)}function u(t){return"boolean"===typeof t}var f=/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i,v=/\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv)/i;function g(t){return f.test(t)}function p(t){return v.test(t)}},"24ec":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.openType=void 0;var a={props:{openType:String},methods:{bindGetUserInfo:function(t){this.$emit("getuserinfo",t)},bindContact:function(t){this.$emit("contact",t.detail)},bindGetPhoneNumber:function(t){this.$emit("getphonenumber",t.detail)},bindError:function(t){this.$emit("error",t.detail)},bindLaunchApp:function(t){this.$emit("launchapp",t.detail)},bindOpenSetting:function(t){this.$emit("opensetting",t.detail)}}};e.openType=a},"264f":function(t,e,n){"use strict";n("99af"),n("cb29"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("a17f"),i=n("79c1"),o=(0,a.VantComponent)({props:{color:String,vertical:Boolean,type:{type:String,default:"circular"},size:String,textSize:String},data:function(){return{array12:new Array(12).fill("")}},computed:{wrapClass:function(){var t=this.customClass,e=this.vertical;return"custom-class ".concat(t," van-loading ").concat(e?"van-loading--vertical":"")},textStyle:function(){var t=this.textSize;return"font-size: ".concat(i.addUnit(t))},loadingClass:function(){var t=this.type;return"van-loading__spinner van-loading__spinner--".concat(t)},loadingStyle:function(){var t=this.color,e=this.size;return"color: ".concat(t,"; width: ").concat(i.addUnit(e),"; height: ").concat(i.addUnit(e))}}});e.default=o},"3c55":function(t,e,n){"use strict";var a=n("b2a2"),i=n.n(a);i.a},"3d30":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{class:t.wrapClass,style:t.customStyle},["spinner"===t.type?n("v-uni-view",{class:t.loadingClass,style:t.loadingStyle},t._l(t.array12,(function(t,e){return n("v-uni-view",{key:e,staticClass:"van-loading__dot"})})),1):n("v-uni-view",{class:t.loadingClass,style:t.loadingStyle}),n("v-uni-view",{staticClass:"van-loading__text",style:t.textStyle},[t._t("default")],2)],1)},o=[]},"53ca":function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return a}));n("a4d3"),n("e01a"),n("d28b"),n("e260"),n("d3b7"),n("3ca3"),n("ddb0");function a(t){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}},"62d7":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var a={demoBlock:n("e29a").default,vanRow:n("92f3").default,vanImage:n("aeec").default,vanCol:n("c785").default,vanLoading:n("63f9").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("demo-block",{attrs:{title:"基础用法",padding:!0}},[n("van-row",[n("van-image",{attrs:{width:"100",height:"100",src:t.src}})],1)],1),n("demo-block",{attrs:{title:"填充模式",padding:!0}},[n("van-row",{attrs:{gutter:"20"}},t._l(t.fits,(function(e){return n("van-col",{key:e,attrs:{span:"8"}},[n("van-image",{attrs:{fit:e,width:"100%",height:"27vw",src:t.src}}),n("v-uni-view",{staticClass:"text"},[t._v(t._s(e))])],1)})),1)],1),n("demo-block",{attrs:{title:"圆形图片",padding:!0}},[n("van-row",{attrs:{gutter:"20"}},t._l(t.fits,(function(e){return n("van-col",{key:e,attrs:{span:"8"}},[n("van-image",{attrs:{round:!0,fit:e,width:"100%",height:"27vw",src:t.src}}),n("v-uni-view",{staticClass:"text"},[t._v(t._s(e))])],1)})),1)],1),n("demo-block",{attrs:{title:"加载中提示",padding:!0}},[n("van-row",{attrs:{gutter:"20"}},[n("van-col",{attrs:{span:"8"}},[n("van-image",{attrs:{width:"100%",height:"27vw"}}),n("v-uni-view",{staticClass:"text"},[t._v("默认提示")])],1),n("van-col",{attrs:{span:"8"}},[n("van-image",{attrs:{width:"100%",height:"27vw","use-loading-slot":!0}},[n("van-loading",{attrs:{slot:"loading",type:"spinner",size:"20",vertical:!0},slot:"loading"})],1),n("v-uni-view",{staticClass:"text"},[t._v("自定义提示")])],1)],1)],1),n("demo-block",{attrs:{title:"加载失败提示",padding:!0}},[n("van-row",{attrs:{gutter:"20"}},[n("van-col",{attrs:{span:"8"}},[n("van-image",{attrs:{width:"100%",height:"27vw",src:"x"}}),n("v-uni-view",{staticClass:"text"},[t._v("默认提示")])],1),n("van-col",{attrs:{span:"8"}},[n("van-image",{attrs:{width:"100%",height:"27vw",src:"x","use-error-slot":!0}},[n("v-uni-text",{attrs:{slot:"error"},slot:"error"},[t._v("加载失败")])],1),n("v-uni-view",{staticClass:"text"},[t._v("自定义提示")])],1)],1)],1)],1)},o=[]},"63f9":function(t,e,n){"use strict";n.r(e);var a=n("3d30"),i=n("7960");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("9247");var r,s=n("f0c5"),d=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"420905d4",null,!1,a["a"],r);e["default"]=d.exports},"71d7":function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.button=void 0;var a={externalClasses:["hover-class"],props:{id:String,lang:String,businessId:Number,sessionFrom:String,sendMessageTitle:String,sendMessagePath:String,sendMessageImg:String,showMessageCard:Boolean,appParameter:String,ariaLabel:String}};e.button=a},"72ff":function(t,e,n){var a=n("91ae");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("9d8b0dfc",a,!0,{sourceMap:!1,shadowMode:!1})},7960:function(t,e,n){"use strict";n.r(e);var a=n("264f"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"8a53":function(t,e,n){var a=n("9add");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("686f2e7e",a,!0,{sourceMap:!1,shadowMode:!1})},"91ae":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'[data-v-420905d4]:host{font-size:0;line-height:1}.van-loading[data-v-420905d4]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#c8c9cc;color:var(--loading-spinner-color,#c8c9cc)}.van-loading__spinner[data-v-420905d4]{position:relative;box-sizing:border-box;width:30px;width:var(--loading-spinner-size,30px);max-width:100%;max-height:100%;height:30px;height:var(--loading-spinner-size,30px);-webkit-animation:van-rotate-data-v-420905d4 .8s linear infinite;animation:van-rotate-data-v-420905d4 .8s linear infinite;-webkit-animation:van-rotate-data-v-420905d4 var(--loading-spinner-animation-duration,.8s) linear infinite;animation:van-rotate-data-v-420905d4 var(--loading-spinner-animation-duration,.8s) linear infinite}.van-loading__spinner--spinner[data-v-420905d4]{-webkit-animation-timing-function:steps(12);animation-timing-function:steps(12)}.van-loading__spinner--circular[data-v-420905d4]{border:1px solid transparent;border-top-color:initial;border-radius:100%}.van-loading__text[data-v-420905d4]{margin-left:8px;margin-left:var(--padding-xs,8px);color:#969799;color:var(--loading-text-color,#969799);font-size:14px;font-size:var(--loading-text-font-size,14px);line-height:20px;line-height:var(--loading-text-line-height,20px)}.van-loading__text[data-v-420905d4]:empty{display:none}.van-loading--vertical[data-v-420905d4]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.van-loading--vertical .van-loading__text[data-v-420905d4]{margin:8px 0 0;margin:var(--padding-xs,8px) 0 0}.van-loading__dot[data-v-420905d4]{position:absolute;top:0;left:0;width:100%;height:100%}.van-loading__dot[data-v-420905d4]::before{display:block;width:2px;height:25%;margin:0 auto;background-color:currentColor;border-radius:40%;content:" "}.van-loading__dot[data-v-420905d4]:nth-of-type(1){-webkit-transform:rotate(30deg);transform:rotate(30deg);opacity:1}.van-loading__dot[data-v-420905d4]:nth-of-type(2){-webkit-transform:rotate(60deg);transform:rotate(60deg);opacity:.9375}.van-loading__dot[data-v-420905d4]:nth-of-type(3){-webkit-transform:rotate(90deg);transform:rotate(90deg);opacity:.875}.van-loading__dot[data-v-420905d4]:nth-of-type(4){-webkit-transform:rotate(120deg);transform:rotate(120deg);opacity:.8125}.van-loading__dot[data-v-420905d4]:nth-of-type(5){-webkit-transform:rotate(150deg);transform:rotate(150deg);opacity:.75}.van-loading__dot[data-v-420905d4]:nth-of-type(6){-webkit-transform:rotate(180deg);transform:rotate(180deg);opacity:.6875}.van-loading__dot[data-v-420905d4]:nth-of-type(7){-webkit-transform:rotate(210deg);transform:rotate(210deg);opacity:.625}.van-loading__dot[data-v-420905d4]:nth-of-type(8){-webkit-transform:rotate(240deg);transform:rotate(240deg);opacity:.5625}.van-loading__dot[data-v-420905d4]:nth-of-type(9){-webkit-transform:rotate(270deg);transform:rotate(270deg);opacity:.5}.van-loading__dot[data-v-420905d4]:nth-of-type(10){-webkit-transform:rotate(300deg);transform:rotate(300deg);opacity:.4375}.van-loading__dot[data-v-420905d4]:nth-of-type(11){-webkit-transform:rotate(330deg);transform:rotate(330deg);opacity:.375}.van-loading__dot[data-v-420905d4]:nth-of-type(12){-webkit-transform:rotate(1turn);transform:rotate(1turn);opacity:.3125}@-webkit-keyframes van-rotate-data-v-420905d4{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes van-rotate-data-v-420905d4{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',""]),t.exports=e},9247:function(t,e,n){"use strict";var a=n("72ff"),i=n.n(a);i.a},"9add":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".van-image[data-v-9ee95054]{position:relative;display:inline-block}.van-image--round[data-v-9ee95054]{overflow:hidden;border-radius:50%}.van-image--round .van-image__img[data-v-9ee95054]{border-radius:inherit}.van-image__img[data-v-9ee95054],\n.van-image__error[data-v-9ee95054],\n.van-image__loading[data-v-9ee95054]{display:block;width:100%;height:100%}.van-image__error[data-v-9ee95054],\n.van-image__loading[data-v-9ee95054]{position:absolute;top:0;left:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#969799;color:var(--image-placeholder-text-color,#969799);font-size:14px;font-size:var(--image-placeholder-font-size,14px);background-color:#f7f8fa;background-color:var(--image-placeholder-background-color,#f7f8fa)}",""]),t.exports=e},"9b64":function(t,e,n){"use strict";var a=n("4ea4");n("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("5530")),o=n("a17f"),r=a(n("4817")),s=n("71d7"),d=n("24ec"),l=n("cd99"),c=n("79c1"),u={none:"center",fill:"scaleToFill",cover:"aspectFill",contain:"aspectFit",widthFix:"widthFix",heightFix:"heightFix"},f=(0,i.default)({components:{VanIcon:r.default}},(0,o.VantComponent)({classes:["loading-class","error-class","image-class"],mixins:[s.button,d.openType],props:{src:{type:String},round:Boolean,width:{type:null},height:{type:null},radius:null,lazyLoad:Boolean,useErrorSlot:Boolean,useLoadingSlot:Boolean,showMenuByLongpress:Boolean,fit:{type:String,default:"fill"},showError:{type:Boolean,default:!0},showLoading:{type:Boolean,default:!0}},data:function(){return{mode:"",error:!1,loading:!0,viewStyle:""}},computed:{wrapClass:function(){var t=this.customClass,e=this.round;return"custom-class ".concat(t," ").concat(c.bem("image",{round:e}))}},mounted:function(){this.setMode(),this.setStyle()},methods:{setMode:function(){this.mode=u[this.fit]},setStyle:function(){var t=this.width,e=this.height,n=this.radius,a="";(0,l.isDef)(t)&&(a+="width: ".concat((0,l.addUnit)(t),";")),(0,l.isDef)(e)&&(a+="height: ".concat((0,l.addUnit)(e),";")),(0,l.isDef)(n)&&(a+="overflow: hidden;",a+="border-radius: ".concat((0,l.addUnit)(n),";")),this.viewStyle=a},onImageLoad:function(t){this.loading=!1,this.$emit("load",t.detail)},onImageError:function(t){this.loading=!1,this.error=!0,this.$emit("error",t.detail)},onClick:function(t){this.$emit("click",t.detail)}}}));e.default=f},"9dce":function(t,e,n){"use strict";n.r(e);var a=n("17bd"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},a6bd:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,"uni-page-body[data-v-580cd1a4]{background-color:#fff}.text[data-v-580cd1a4]{width:100%;margin-top:5px;color:#7d7e80;font-size:14px;text-align:center}body.?%PAGE?%[data-v-580cd1a4]{background-color:#fff}",""]),t.exports=e},a704:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var a={vanIcon:n("4817").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{class:t.wrapClass,style:t.viewStyle,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t.error?t._e():n("v-uni-image",{staticClass:"image-class van-image__img",class:t.imageClass,attrs:{src:t.src,mode:t.mode,"lazy-load":t.lazyLoad,"show-menu-by-longpress":t.showMenuByLongpress},on:{load:function(e){arguments[0]=e=t.$handleEvent(e),t.onImageLoad.apply(void 0,arguments)},error:function(e){arguments[0]=e=t.$handleEvent(e),t.onImageError.apply(void 0,arguments)}}}),t.loading&&t.showLoading?n("v-uni-view",{staticClass:"loading-class van-image__loading",class:t.loadingClass},[t.useLoadingSlot?t._t("loading"):n("van-icon",{attrs:{name:"photo-o",size:"22"}})],2):t._e(),t.error&&t.showError?n("v-uni-view",{staticClass:"error-class van-image__error",class:t.errorClass},[t.useErrorSlot?t._t("error"):n("van-icon",{attrs:{name:"warning-o",size:"22"}})],2):t._e()],1)},o=[]},aeec:function(t,e,n){"use strict";n.r(e);var a=n("a704"),i=n("bde4");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("10da");var r,s=n("f0c5"),d=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"9ee95054",null,!1,a["a"],r);e["default"]=d.exports},b2a2:function(t,e,n){var a=n("a6bd");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("2bba1a4e",a,!0,{sourceMap:!1,shadowMode:!1})},bde4:function(t,e,n){"use strict";n.r(e);var a=n("9b64"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},cb29:function(t,e,n){var a=n("23e7"),i=n("81d5"),o=n("44d2");a({target:"Array",proto:!0},{fill:i}),o("fill")},cd99:function(t,e,n){"use strict";var a=n("4ea4");n("caad"),n("13d5"),n("b64b"),n("ac1f"),n("2532"),Object.defineProperty(e,"__esModule",{value:!0}),e.isDef=r,e.isObj=s,e.range=d,e.nextTick=l,e.getSystemInfoSync=u,e.addUnit=f,e.requestAnimationFrame=v,e.pickExclude=g;var i=a(n("53ca")),o=n("1924");function r(t){return void 0!==t&&null!==t}function s(t){var e=(0,i.default)(t);return null!==t&&("object"===e||"function"===e)}function d(t,e,n){return Math.min(Math.max(t,e),n)}function l(t){setTimeout((function(){t()}),1e3/30)}var c=null;function u(){return null==c&&(c=uni.getSystemInfoSync()),c}function f(t){if(r(t))return t=String(t),(0,o.isNumber)(t)?"".concat(t,"px"):t}function v(t){var e=u();return"devtools"===e.platform?l(t):wx.createSelectorQuery().selectViewport().boundingClientRect().exec((function(){t()}))}function g(t,e){return(0,o.isPlainObject)(t)?Object.keys(t).reduce((function(n,a){return e.includes(a)||(n[a]=t[a]),n}),{}):{}}},d2d0:function(t,e,n){"use strict";n.r(e);var a=n("62d7"),i=n("9dce");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("3c55");var r,s=n("f0c5"),d=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"580cd1a4",null,!1,a["a"],r);e["default"]=d.exports}}]);