(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["packages-van-grid-demo"],{3663:function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{array3:[0,1,2],array4:[0,1,2,3],array6:[0,1,2,3,4,5],array8:[0,1,2,3,4,5,6,7],gutter:10,columnNum:4,direction:"vertical"}},methods:{toggleDirection:function(){this.direction="vertical"===this.direction?"horizontal":"vertical"},toggleColumnNum:function(){this.columnNum=4===this.columnNum?2:4},toggleGutter:function(){this.gutter=10===this.gutter?20:10}}};n.default=e},"603e":function(t,n,r){"use strict";r.d(n,"b",(function(){return a})),r.d(n,"c",(function(){return i})),r.d(n,"a",(function(){return e}));var e={demoBlock:r("e29a").default,vanGrid:r("8812").default,vanGridItem:r("d103").default,vanButton:r("9e06").default},a=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("demo-block",{attrs:{title:"基本用法"}},[r("van-grid",t._l(t.array4,(function(t){return r("van-grid-item",{key:t,attrs:{icon:"photo-o",text:"文字"}})})),1)],1),r("demo-block",{attrs:{title:"自定义列数"}},[r("van-grid",{attrs:{"column-num":"3"}},t._l(t.array6,(function(t){return r("van-grid-item",{key:t,attrs:{icon:"photo-o",text:"文字"}})})),1)],1),r("demo-block",{attrs:{title:"自定义内容"}},[r("van-grid",{attrs:{"column-num":"3",border:!1}},t._l(t.array3,(function(t){return r("van-grid-item",{key:t,attrs:{"use-slot":!0}},[r("v-uni-image",{staticStyle:{width:"100%",height:"90px"},attrs:{src:"https://img.yzcdn.cn/vant/apple-"+(t+1)+".jpg"}})],1)})),1)],1),r("demo-block",{attrs:{title:"正方形格子"}},[r("van-grid",{attrs:{square:!0}},t._l(t.array8,(function(t){return r("van-grid-item",{key:t,attrs:{icon:"photo-o",text:"文字"}})})),1)],1),r("demo-block",{attrs:{title:"格子间距"}},[r("van-grid",{attrs:{gutter:t.gutter,"column-num":t.columnNum,direction:t.direction}},t._l(t.array8,(function(t){return r("van-grid-item",{key:t,attrs:{icon:"photo-o",text:"文字"}})})),1)],1),r("div",{staticStyle:{padding:"15px"}},[r("van-button",{attrs:{type:"primary","custom-style":"margin-right: 15px"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toggleGutter.apply(void 0,arguments)}}},[t._v("修改格子间距")]),r("van-button",{attrs:{type:"primary","custom-style":"margin-right: 15px"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toggleColumnNum.apply(void 0,arguments)}}},[t._v("修改列数")]),r("van-button",{attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toggleDirection.apply(void 0,arguments)}}},[t._v("修改横向竖向")])],1),r("demo-block",{attrs:{title:"内容横排"}},[r("van-grid",{attrs:{direction:"horizontal","column-num":"3"}},t._l(t.array3,(function(t){return r("van-grid-item",{key:t,attrs:{icon:"photo-o",text:"文字"}})})),1)],1),r("demo-block",{attrs:{title:"页面跳转"}},[r("van-grid",{attrs:{clickable:!0,"column-num":"2"}},[r("van-grid-item",{attrs:{icon:"home-o","link-type":"navigateTo",url:"/packages/dashboard/index",text:"Navigate 跳转"}}),r("van-grid-item",{attrs:{icon:"search","link-type":"reLaunch",url:"/packages/dashboard/index",text:"ReLaunch 跳转"}})],1)],1),r("demo-block",{attrs:{title:"徽标提示"}},[r("van-grid",{attrs:{"column-num":"2"}},[r("van-grid-item",{attrs:{icon:"home-o",text:"文字",dot:!0}}),r("van-grid-item",{attrs:{icon:"search",text:"文字",info:"99+"}})],1)],1)],1)},i=[]},6343:function(t,n,r){"use strict";r.r(n);var e=r("603e"),a=r("8046");for(var i in a)"default"!==i&&function(t){r.d(n,t,(function(){return a[t]}))}(i);var o,u=r("f0c5"),c=Object(u["a"])(a["default"],e["b"],e["c"],!1,null,"8a005540",null,!1,e["a"],o);n["default"]=c.exports},8046:function(t,n,r){"use strict";r.r(n);var e=r("3663"),a=r.n(e);for(var i in e)"default"!==i&&function(t){r.d(n,t,(function(){return e[t]}))}(i);n["default"]=a.a}}]);