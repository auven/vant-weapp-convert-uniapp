(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-dialog-index"],{"004b":function(t,e,n){"use strict";var o=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("9785")),i=o(n("78cf")),s=o(n("a34e")),l=o(n("9e06")),r="代码是写出来给人看的，附带能在机器上运行",d={components:{DemoBlock:i.default,VanDialog:s.default,VanButton:l.default},data:function(){return{show:!1}},methods:{showCustomDialog:function(){this.show=!0},onClickAlert:function(){a.default.alert({title:"标题",message:r})},getUserInfo:function(t){console.log("getUserInfo",t)},onClickAlert2:function(){a.default.alert({message:r})},onClickConfirm:function(){a.default.confirm({title:"标题",message:r})},onClickAsyncClose:function(){a.default.confirm({title:"标题",message:r,asyncClose:!0}).then((function(){setTimeout((function(){a.default.close()}),1e3)})).catch((function(){a.default.close()}))},onClose:function(){this.show=!1}}};e.default=d},"137d":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.GRAY_DARK=e.GRAY=e.ORANGE=e.GREEN=e.WHITE=e.BLUE=e.RED=void 0;var o="#ee0a24";e.RED=o;var a="#1989fa";e.BLUE=a;var i="#ffffff";e.WHITE=i;var s="#07c160";e.GREEN=s;var l="#ff976a";e.ORANGE=l;var r="#323233";e.GRAY=r;var d="#969799";e.GRAY_DARK=d},"33be":function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("demo-block",{attrs:{title:"提示弹窗",padding:!0}},[n("van-button",{attrs:{type:"primary","custom-class":"demo-margin-right"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickAlert.apply(void 0,arguments)}}},[t._v("提示弹窗")]),n("van-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickAlert2.apply(void 0,arguments)}}},[t._v("提示弹窗（无标题）")])],1),n("demo-block",{attrs:{title:"确认弹窗",padding:!0}},[n("van-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickConfirm.apply(void 0,arguments)}}},[t._v("确认弹窗")])],1),n("demo-block",{attrs:{title:"异步关闭",padding:!0}},[n("van-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickAsyncClose.apply(void 0,arguments)}}},[t._v("异步关闭")])],1),n("demo-block",{attrs:{title:"组件调用",padding:!0}},[n("van-button",{staticClass:"demo-margin-right",attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showCustomDialog.apply(void 0,arguments)}}},[t._v("组件调用")]),n("van-dialog",{attrs:{"use-slot":!0,title:"标题",show:t.show,"show-cancel-button":!0,"confirm-button-open-type":"getUserInfo"},on:{"update:show":function(e){arguments[0]=e=t.$handleEvent(e),t.show=e},close:function(e){arguments[0]=e=t.$handleEvent(e),t.onClose.apply(void 0,arguments)},getuserinfo:function(e){arguments[0]=e=t.$handleEvent(e),t.getUserInfo.apply(void 0,arguments)}}},[n("v-uni-image",{staticClass:"demo-image",attrs:{src:"https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg"}})],1)],1),n("van-dialog",{ref:"van-dialog",attrs:{id:"van-dialog"}})],1)},i=[]},"6cee":function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-popup",{attrs:{show:t.optionsShow,"z-index":t.optionsZIndex,overlay:t.optionsOverlay,transition:t.optionsTransition,"custom-class":"van-dialog "+t.optionsClassName,"custom-style":t.popupCustomStyle,"overlay-style":t.optionsOverlayStyle,"close-on-click-overlay":t.optionsCloseOnClickOverlay},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickOverlay.apply(void 0,arguments)}}},[t.optionsTitle||t.useTitleSlot?n("v-uni-view",{class:t.headerClass},[t.useTitleSlot?t._t("title"):t.optionsTitle?[t._v(t._s(t.optionsTitle))]:t._e()],2):t._e(),t.useSlot?t._t("default"):t.optionsMessage?n("v-uni-view",{class:t.messageClass},[n("v-uni-text",{staticClass:"van-dialog__message-text"},[t._v(t._s(t.optionsMessage))])],1):t._e(),n("v-uni-view",{staticClass:"van-hairline--top van-dialog__footer"},[t.optionsShowCancelButton?n("van-button",{staticClass:"van-dialog__button van-hairline--right",attrs:{size:"large",loading:t.loading.cancel,"custom-class":"van-dialog__cancel van-dialog__button van-hairline--right","custom-style":" color: "+t.cancelButtonColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onCancel.apply(void 0,arguments)}}},[t._v(t._s(t.optionsCancelButtonText))]):t._e(),t.optionsShowConfirmButton?n("van-button",{staticClass:"van-dialog__button",attrs:{size:"large",loading:t.loading.confirm,"custom-class":"van-dialog__confirm van-dialog__button","custom-style":"color: "+t.confirmButtonColor,"open-type":t.optionsConfirmButtonOpenType,lang:t.lang,"business-id":t.businessId,"session-from":t.sessionFrom,"send-message-title":t.sendMessageTitle,"send-message-path":t.sendMessagePath,"send-message-img":t.sendMessageImg,"show-message-card":t.showMessageCard,"app-parameter":t.appParameter},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)},getuserinfo:function(e){arguments[0]=e=t.$handleEvent(e),t.bindGetUserInfo.apply(void 0,arguments)},contact:function(e){arguments[0]=e=t.$handleEvent(e),t.bindContact.apply(void 0,arguments)},getphonenumber:function(e){arguments[0]=e=t.$handleEvent(e),t.bindGetPhoneNumber.apply(void 0,arguments)},error:function(e){arguments[0]=e=t.$handleEvent(e),t.bindError.apply(void 0,arguments)},launchapp:function(e){arguments[0]=e=t.$handleEvent(e),t.bindLaunchApp.apply(void 0,arguments)},opensetting:function(e){arguments[0]=e=t.$handleEvent(e),t.bindOpenSetting.apply(void 0,arguments)}}},[t._v(t._s(t.optionsConfirmButtonText))]):t._e()],1)],2)},i=[]},"6dad":function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,".demo-image[data-v-7fd5c088]{box-sizing:border-box;width:100%;padding:25px 20px 0}",""]),t.exports=e},7117:function(t,e,n){"use strict";var o=n("4ea4");n("99af"),n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("5530")),i=o(n("79c1")),s=o(n("76fb")),l=o(n("9e06")),r=n("a17f"),d=n("71d7"),c=n("24ec"),u=n("137d"),f=(0,a.default)({components:{VanPopup:s.default,VanButton:l.default}},(0,r.VantComponent)({mixins:[d.button,c.openType],props:{show:{type:Boolean,default:!1},title:String,message:String,useSlot:Boolean,className:String,customStyle:String,asyncClose:Boolean,messageAlign:String,overlayStyle:String,useTitleSlot:Boolean,showCancelButton:Boolean,closeOnClickOverlay:Boolean,confirmButtonOpenType:String,width:null,zIndex:{type:Number,default:2e3},confirmButtonText:{type:String,default:"确认"},cancelButtonText:{type:String,default:"取消"},confirmButtonColor:{type:String,default:u.BLUE},cancelButtonColor:{type:String,default:u.GRAY},showConfirmButton:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},transition:{type:String,default:"scale"}},data:function(){return{loading:{confirm:!1,cancel:!1},optionsShow:null,optionsTitle:null,optionsWidth:null,optionsMessage:null,optionsZIndex:null,optionsOverlay:null,optionsClassName:null,optionsAsyncClose:null,optionsTransition:null,optionsCustomStyle:null,optionsMessageAlign:null,optionsOverlayStyle:null,optionsConfirmButtonText:null,optionsCancelButtonText:null,optionsShowConfirmButton:null,optionsShowCancelButton:null,optionsCloseOnClickOverlay:null,optionsConfirmButtonOpenType:null}},computed:{popupCustomStyle:function(){return"width: ".concat(i.default.addUnit(this.optionsWidth),";").concat(this.optionsCustomStyle)},headerClass:function(){return"van-dialog__header ".concat(this.optionsMessage||this.useSlot?"":"van-dialog--isolated")},messageClass:function(){return"van-dialog__message ".concat(this.optionsTitle?"van-dialog__message--has-title":""," ").concat(this.optionsMessageAlign?"van-dialog__message--"+this.optionsMessageAlign:"")}},watch:{show:{handler:function(t){this.optionsShow=t},immediate:!0},optionsShow:{handler:function(t){!t&&this.stopLoading()},immediate:!0},title:{handler:function(t){this.optionsTitle=t},immediate:!0},width:{handler:function(t){this.optionsWidth=t},immediate:!0},message:{handler:function(t){this.optionsMessage=t},immediate:!0},zIndex:{handler:function(t){this.optionsZIndex=t},immediate:!0},overlay:{handler:function(t){this.optionsOverlay=t},immediate:!0},className:{handler:function(t){this.optionsClassName=t},immediate:!0},asyncClose:{handler:function(t){this.optionsAsyncClose=t},immediate:!0},transition:{handler:function(t){this.optionsTransition=t},immediate:!0},customStyle:{handler:function(t){this.optionsCustomStyle=t},immediate:!0},messageAlign:{handler:function(t){this.optionsMessageAlign=t},immediate:!0},overlayStyle:{handler:function(t){this.optionsOverlayStyle=t},immediate:!0},confirmButtonText:{handler:function(t){this.optionsConfirmButtonText=t},immediate:!0},cancelButtonText:{handler:function(t){this.optionsCancelButtonText=t},immediate:!0},showConfirmButton:{handler:function(t){this.optionsShowConfirmButton=t},immediate:!0},showCancelButton:{handler:function(t){this.optionsShowCancelButton=t},immediate:!0},closeOnClickOverlay:{handler:function(t){this.optionsCloseOnClickOverlay=t},immediate:!0},confirmButtonOpenType:{handler:function(t){this.optionsConfirmButtonOpenType=t},immediate:!0}},methods:{onConfirm:function(){this.handleAction("confirm")},onCancel:function(){this.handleAction("cancel")},onClickOverlay:function(){this.onClose("overlay")},handleAction:function(t){this.optionsAsyncClose&&(this.loading[t]=!0),this.onClose(t)},close:function(){this.optionsShow=!1,this.$emit("update:show",!1)},stopLoading:function(){this.loading={confirm:!1,cancel:!1}},onClose:function(t){this.optionsAsyncClose||this.close(),this.$emit("close",t),this.$emit(t,{dialog:this});var e=this["confirm"===t?"onConfirmResolve":"onCancelReject"];e&&e(this)}}}));e.default=f},"7d14":function(t,e,n){"use strict";n.r(e);var o=n("004b"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},"809b":function(t,e,n){"use strict";n.r(e);var o=n("7117"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},"8df7":function(t,e,n){"use strict";var o=n("a948"),a=n.n(o);a.a},9785:function(t,e,n){"use strict";var o=n("4ea4");n("4160"),n("d81d"),n("b64b"),n("d3b7"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("5530")),i=[];function s(){var t=getCurrentPages();return t[t.length-1]}function l(t,e,n){Object.keys(n).forEach((function(o){t[o]?e[n[o]]=t[o]:e[n[o]]=null}))}var r=function t(e){e=(0,a.default)((0,a.default)({},t.currentOptions),e);var n={};return l(e,n,{show:"optionsShow",title:"optionsTitle",width:"optionsWidth",message:"optionsMessage",zIndex:"optionsZIndex",overlay:"optionsOverlay",selector:"selector",className:"optionsClassName",asyncClose:"optionsAsyncClose",transition:"optionsTransition",customStyle:"optionsCustomStyle",messageAlign:"optionsMessageAlign",overlayStyle:"optionsOverlayStyle",confirmButtonText:"optionsConfirmButtonText",cancelButtonText:"optionsCancelButtonText",showConfirmButton:"optionsShowConfirmButton",showCancelButton:"optionsShowCancelButton",closeOnClickOverlay:"optionsCloseOnClickOverlay",confirmButtonOpenType:"optionsConfirmButtonOpenType"}),new Promise((function(t,o){var a,l=e.context||s();a=l.$refs[e.selector],delete e.context,delete e.selector,a?(a.onCancelReject=o,a.onConfirmResolve=t,Object.keys(n).map((function(t){a[t]=n[t]})),i.push(a)):console.warn("未找到 van-dialog 节点，请确认 selector 及 context 是否正确")}))};r.defaultOptions={show:!0,title:"",width:null,message:"",zIndex:100,overlay:!0,selector:"van-dialog",className:"",asyncClose:!1,transition:"scale",customStyle:"",messageAlign:"",overlayStyle:"",confirmButtonText:"确认",cancelButtonText:"取消",showConfirmButton:!0,showCancelButton:!1,closeOnClickOverlay:!1,confirmButtonOpenType:""},r.alert=r,r.confirm=function(t){return r((0,a.default)({showCancelButton:!0},t))},r.close=function(){i.forEach((function(t){t.close()})),i=[]},r.stopLoading=function(){i.forEach((function(t){t.stopLoading()}))},r.setDefaultOptions=function(t){Object.assign(r.currentOptions,t)},r.resetDefaultOptions=function(){r.currentOptions=(0,a.default)({},r.defaultOptions)},r.resetDefaultOptions();var d=r;e.default=d},a149:function(t,e,n){var o=n("e49c");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=n("4f06").default;a("c8b9625a",o,!0,{sourceMap:!1,shadowMode:!1})},a34e:function(t,e,n){"use strict";n.r(e);var o=n("6cee"),a=n("809b");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("ff74");var s,l=n("f0c5"),r=Object(l["a"])(a["default"],o["b"],o["c"],!1,null,"622e54be",null,!1,o["a"],s);e["default"]=r.exports},a948:function(t,e,n){var o=n("6dad");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=n("4f06").default;a("62013f0c",o,!0,{sourceMap:!1,shadowMode:!1})},cc23:function(t,e,n){"use strict";n.r(e);var o=n("33be"),a=n("7d14");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("8df7");var s,l=n("f0c5"),r=Object(l["a"])(a["default"],o["b"],o["c"],!1,null,"7fd5c088",null,!1,o["a"],s);e["default"]=r.exports},e49c:function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,'.van-hairline[data-v-622e54be],\n.van-hairline--top[data-v-622e54be],\n.van-hairline--left[data-v-622e54be],\n.van-hairline--right[data-v-622e54be],\n.van-hairline--bottom[data-v-622e54be],\n.van-hairline--top-bottom[data-v-622e54be],\n.van-hairline--surround[data-v-622e54be]{position:relative}.van-hairline[data-v-622e54be]::after,\n.van-hairline--top[data-v-622e54be]::after,\n.van-hairline--left[data-v-622e54be]::after,\n.van-hairline--right[data-v-622e54be]::after,\n.van-hairline--bottom[data-v-622e54be]::after,\n.van-hairline--top-bottom[data-v-622e54be]::after,\n.van-hairline--surround[data-v-622e54be]::after{position:absolute;box-sizing:border-box;-webkit-transform-origin:center;transform-origin:center;\n  /* cover wechat button:after default transforn-origin */content:" ";pointer-events:none;top:-50%;right:-50%;bottom:-50%;left:-50%;border:0 solid #eee;-webkit-transform:scale(.5);transform:scale(.5)}.van-hairline--top[data-v-622e54be]::after{border-top-width:1px}.van-hairline--left[data-v-622e54be]::after{border-left-width:1px}.van-hairline--right[data-v-622e54be]::after{border-right-width:1px}.van-hairline--bottom[data-v-622e54be]::after{border-bottom-width:1px}.van-hairline--top-bottom[data-v-622e54be]::after{border-width:1px 0}.van-hairline--surround[data-v-622e54be]::after{border-width:1px}.van-dialog[data-v-622e54be]{top:45%!important;overflow:hidden;width:320px;width:var(--dialog-width,320px);font-size:16px;font-size:var(--dialog-font-size,16px);border-radius:16px;border-radius:var(--dialog-border-radius,16px);background-color:#fff;background-color:var(--dialog-background-color,#fff)}@media (max-width:321px){.van-dialog[data-v-622e54be]{width:90%;width:var(--dialog-small-screen-width,90%)}}.van-dialog__header[data-v-622e54be]{text-align:center;padding-top:24px;padding-top:var(--dialog-header-padding-top,24px);font-weight:500;font-weight:var(--dialog-header-font-weight,500);line-height:24px;line-height:var(--dialog-header-line-height,24px)}.van-dialog__header--isolated[data-v-622e54be]{padding:24px 0;padding:var(--dialog-header-isolated-padding,24px 0)}.van-dialog__message[data-v-622e54be]{overflow-y:auto;text-align:center;-webkit-overflow-scrolling:touch;font-size:14px;font-size:var(--dialog-message-font-size,14px);line-height:20px;line-height:var(--dialog-message-line-height,20px);max-height:60vh;max-height:var(--dialog-message-max-height,60vh);padding:24px;padding:var(--dialog-message-padding,24px)}.van-dialog__message-text[data-v-622e54be]{word-wrap:break-word}.van-dialog__message--has-title[data-v-622e54be]{padding-top:12px;padding-top:var(--dialog-has-title-message-padding-top,12px);color:#646566;color:var(--dialog-has-title-message-text-color,#646566)}.van-dialog__message--left[data-v-622e54be]{text-align:left}.van-dialog__message--right[data-v-622e54be]{text-align:right}.van-dialog__footer[data-v-622e54be]{display:-webkit-box;display:-webkit-flex;display:flex}.van-dialog__button[data-v-622e54be]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.van-dialog__confirm[data-v-622e54be],\n.van-dialog__cancel[data-v-622e54be]{border:0!important}.van-dialog-bounce-enter[data-v-622e54be]{-webkit-transform:translate3d(-50%,-50%,0) scale(.7);transform:translate3d(-50%,-50%,0) scale(.7);opacity:0}.van-dialog-bounce-leave-active[data-v-622e54be]{-webkit-transform:translate3d(-50%,-50%,0) scale(.9);transform:translate3d(-50%,-50%,0) scale(.9);opacity:0}',""]),t.exports=e},ff74:function(t,e,n){"use strict";var o=n("a149"),a=n.n(o);a.a}}]);