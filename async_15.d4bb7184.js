(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{25:function(E,C,s){"use strict";s.r(C);var u={created:function(){this.content=unescape("%3Ch1%3EPopup%20%u5F39%u51FA%u5C42%3C/h1%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22jie-shao%22%3E%u4ECB%u7ECD%3C/h3%3E%0A%3Cp%3E%u5F39%u51FA%u5C42%u5BB9%u5668%uFF0C%u7528%u4E8E%u5C55%u793A%u5F39%u7A97%u3001%u4FE1%u606F%u63D0%u793A%u7B49%u5185%u5BB9%uFF0C%u652F%u6301%u591A%u4E2A%u5F39%u51FA%u5C42%u53E0%u52A0%u5C55%u793A%3C/p%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22yin-ru%22%3E%u5F15%u5165%3C/h3%3E%0A%3Cp%3E%u5728%3Ccode%3Eapp.json%3C/code%3E%u6216%3Ccode%3Eindex.json%3C/code%3E%u4E2D%u5F15%u5165%u7EC4%u4EF6%uFF0C%u8BE6%u7EC6%u4ECB%u7ECD%u89C1%3Ca%20href%3D%22%23/quickstart%23yin-ru-zu-jian%22%20target%3D%22_blank%22%3E%u5FEB%u901F%u4E0A%u624B%3C/a%3E%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-json%22%3E%3Cspan%20class%3D%22hljs-string%22%3E%22usingComponents%22%3C/span%3E%3A%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%22van-popup%22%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%22@vant/weapp/popup/index%22%3C/span%3E%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Ch2%20id%3D%22dai-ma-yan-shi%22%3E%u4EE3%u7801%u6F14%u793A%3C/h2%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22ji-chu-yong-fa%22%3E%u57FA%u7840%u7528%u6CD5%3C/h3%3E%0A%3Cp%3E%u901A%u8FC7%3Ccode%3Eshow%3C/code%3E%u5C5E%u6027%u63A7%u5236%u5F39%u51FA%u5C42%u662F%u5426%u5C55%u793A%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-cell%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Etitle%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22%u5C55%u793A%u5F39%u51FA%u5C42%22%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Eis-link%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ebind%3Aclick%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22showPopup%22%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-popup%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Eshow%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22%7B%7B%20show%20%7D%7D%22%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ebind%3Aclose%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onClose%22%3C/span%3E%26gt%3B%3C/span%3E%u5185%u5BB9%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-popup%3C/span%3E%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3EPage%28%7B%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Edata%3C/span%3E%3A%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eshow%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Efalse%3C/span%3E%2C%0A%20%20%7D%2C%0A%0A%20%20showPopup%28%29%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.setData%28%7B%20%3Cspan%20class%3D%22hljs-attr%22%3Eshow%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Etrue%3C/span%3E%20%7D%29%3B%0A%20%20%7D%2C%0A%0A%20%20onClose%28%29%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.setData%28%7B%20%3Cspan%20class%3D%22hljs-attr%22%3Eshow%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Efalse%3C/span%3E%20%7D%29%3B%0A%20%20%7D%2C%0A%7D%29%3B%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22dan-chu-wei-zhi%22%3E%u5F39%u51FA%u4F4D%u7F6E%3C/h3%3E%0A%3Cp%3E%u901A%u8FC7%3Ccode%3Eposition%3C/code%3E%u5C5E%u6027%u8BBE%u7F6E%u5F39%u51FA%u4F4D%u7F6E%uFF0C%u9ED8%u8BA4%u5C45%u4E2D%u5F39%u51FA%uFF0C%u53EF%u4EE5%u8BBE%u7F6E%u4E3A%3Ccode%3Etop%3C/code%3E%u3001%3Ccode%3Ebottom%3C/code%3E%u3001%3Ccode%3Eleft%3C/code%3E%u3001%3Ccode%3Eright%3C/code%3E%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-popup%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eshow%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22%7B%7B%20show%20%7D%7D%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eposition%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22top%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ecustom-style%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22height%3A%2020%25%3B%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ebind%3Aclose%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onClose%22%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22guan-bi-tu-biao%22%3E%u5173%u95ED%u56FE%u6807%3C/h3%3E%0A%3Cp%3E%u8BBE%u7F6E%3Ccode%3Ecloseable%3C/code%3E%u5C5E%u6027%u540E%uFF0C%u4F1A%u5728%u5F39%u51FA%u5C42%u7684%u53F3%u4E0A%u89D2%u663E%u793A%u5173%u95ED%u56FE%u6807%uFF0C%u5E76%u4E14%u53EF%u4EE5%u901A%u8FC7%3Ccode%3Eclose-icon%3C/code%3E%u5C5E%u6027%u81EA%u5B9A%u4E49%u56FE%u6807%uFF0C%u4F7F%u7528%3Ccode%3Eclose-icon-position%3C/code%3E%u5C5E%u6027%u53EF%u4EE5%u81EA%u5B9A%u4E49%u56FE%u6807%u4F4D%u7F6E%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-popup%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eshow%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22%7B%7B%20show%20%7D%7D%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ecloseable%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eposition%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22bottom%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ecustom-style%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22height%3A%2020%25%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ebind%3Aclose%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onClose%22%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%0A%3Cspan%20class%3D%22hljs-comment%22%3E%26lt%3B%21--%20%u81EA%u5B9A%u4E49%u56FE%u6807%20--%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-popup%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eshow%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22%7B%7B%20show%20%7D%7D%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ecloseable%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eclose-icon%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22close%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eposition%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22bottom%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ecustom-style%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22height%3A%2020%25%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ebind%3Aclose%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onClose%22%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%0A%3Cspan%20class%3D%22hljs-comment%22%3E%26lt%3B%21--%20%u56FE%u6807%u4F4D%u7F6E%20--%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-popup%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eshow%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22%7B%7B%20show%20%7D%7D%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ecloseable%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eclose-icon-position%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22top-left%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eposition%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22bottom%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ecustom-style%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22height%3A%2020%25%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ebind%3Aclose%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onClose%22%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22yuan-jiao-dan-chuang%22%3E%u5706%u89D2%u5F39%u7A97%3C/h3%3E%0A%3Cp%3E%u8BBE%u7F6E%3Ccode%3Eround%3C/code%3E%u5C5E%u6027%u540E%uFF0C%u5F39%u7A97%u4F1A%u6839%u636E%u5F39%u51FA%u4F4D%u7F6E%u6DFB%u52A0%u4E0D%u540C%u7684%u5706%u89D2%u6837%u5F0F%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-popup%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eshow%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22%7B%7B%20show%20%7D%7D%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eround%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eposition%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22bottom%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ecustom-style%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22height%3A%2020%25%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ebind%3Aclose%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onClose%22%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Ch2%20id%3D%22chang-jian-wen-ti%22%3E%u5E38%u89C1%u95EE%u9898%3C/h2%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22zu-jian-gun-dong-chuan-tou-gai-zen-me-jie-jue%22%3E%u7EC4%u4EF6%u6EDA%u52A8%u7A7F%u900F%u8BE5%u600E%u4E48%u89E3%u51B3%uFF1F%3C/h3%3E%0A%3Cp%3E%u4F7F%u7528%u7EC4%u4EF6%u65F6%uFF0C%u4F1A%u53D1%u73B0%u5185%u5BB9%u90E8%u5206%u6EDA%u52A8%u5230%u5E95%u65F6%uFF0C%u7EE7%u7EED%u5212%u52A8%u4F1A%u5BFC%u81F4%u9875%u9762%u7684%u6EDA%u52A8%uFF0C%u8FD9%u5C31%u662F%u6EDA%u52A8%u7A7F%u900F%u3002%3C/p%3E%0A%3Cp%3E%u5728web%u4E2D%uFF0C%u53EF%u4EE5%u901A%u8FC7%u7ED9%20body%20%u589E%u52A0%u6837%u5F0F%u6216%u8005%u52AB%u6301%u5185%u5BB9%u90E8%u5206%u7684%20%3Ccode%3Etouchstart%3C/code%3E%20%u4E8B%u4EF6%uFF0C%u5224%u65AD%u540E%u52A8%u6001%u8C03%u7528%20%3Ccode%3EpreventDefault%3C/code%3E%20%u6765%u5B9E%u73B0%u3002%u4E0D%u5E78%u7684%u662F%uFF0C%u8FD9%u4E24%u79CD%u65B9%u6CD5%u5728%u5C0F%u7A0B%u5E8F%u4E2D%u90FD%u662F%u4E0D%u53EF%u884C%u7684%uFF0C%u7EC4%u4EF6%u5185%u90E8%u65E0%u6CD5%u5F88%u597D%u5730%u5904%u7406%u6EDA%u52A8%u7A7F%u900F%u95EE%u9898%u3002%3C/p%3E%0A%3Cp%3E%u5982%u679C%u4F60%u6709%u7981%u6B62%u6EDA%u52A8%u7684%u9700%u8981%uFF0C%u53EF%u4EE5%u663E%u5F0F%u5730%20%3Ccode%3Ecatch%3C/code%3E%20%u7EC4%u4EF6%u7684%20%3Ccode%3Etouchstart%3C/code%3E%20%u4E8B%u4EF6%uFF0C%u4E0D%u8FC7%u9700%u8981%u6CE8%u610F%u7684%u662F%uFF0C%u8FD9%u4E5F%u4F1A%u7981%u6B62%u7EC4%u4EF6%u5185%u5BB9%u90E8%u5206%u7684%u6EDA%u52A8%u3002%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-popup%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E...%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ecatch%3Atouchstart%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3C/div%3E%3Ch2%20id%3D%22api%22%3EAPI%3C/h2%3E%0A%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22props%22%3EProps%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u53C2%u6570%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3Cth%3E%u7C7B%u578B%3C/th%3E%0A%3Cth%3E%u9ED8%u8BA4%u503C%3C/th%3E%0A%3Cth%3E%u7248%u672C%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Eshow%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u663E%u793A%u5F39%u51FA%u5C42%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ez-index%3C/td%3E%0A%3Ctd%3Ez-index%20%u5C42%u7EA7%3C/td%3E%0A%3Ctd%3E%3Cem%3Enumber%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E100%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eoverlay%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u663E%u793A%u906E%u7F69%u5C42%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Etrue%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eposition%3C/td%3E%0A%3Ctd%3E%u5F39%u51FA%u4F4D%u7F6E%uFF0C%u53EF%u9009%u503C%u4E3A%20%3Ccode%3Etop%3C/code%3E%20%3Ccode%3Ebottom%3C/code%3E%20%3Ccode%3Eright%3C/code%3E%20%3Ccode%3Eleft%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Ecenter%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eduration%3C/td%3E%0A%3Ctd%3E%u52A8%u753B%u65F6%u957F%uFF0C%u5355%u4F4D%u4E3A%u6BEB%u79D2%3C/td%3E%0A%3Ctd%3E%3Cem%3Enumber%20%7C%20object%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E300%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eround%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u663E%u793A%u5706%u89D2%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ecustom-style%3C/td%3E%0A%3Ctd%3E%u81EA%u5B9A%u4E49%u5F39%u51FA%u5C42%u6837%u5F0F%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E%60%60%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eoverlay-style%3C/td%3E%0A%3Ctd%3E%u81EA%u5B9A%u4E49%u906E%u7F69%u5C42%u6837%u5F0F%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E%60%60%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eclose-on-click-overlay%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u5728%u70B9%u51FB%u906E%u7F69%u5C42%u540E%u5173%u95ED%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Etrue%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ecloseable%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u663E%u793A%u5173%u95ED%u56FE%u6807%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eclose-icon%3C/td%3E%0A%3Ctd%3E%u5173%u95ED%u56FE%u6807%u540D%u79F0%u6216%u56FE%u7247%u94FE%u63A5%3C/td%3E%0A%3Ctd%3E%3Cem%3Estring%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Ecross%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Esafe-area-inset-bottom%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u4E3A%20iPhoneX%20%u7559%u51FA%u5E95%u90E8%u5B89%u5168%u8DDD%u79BB%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Etrue%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Esafe-area-inset-top%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u7559%u51FA%u9876%u90E8%u5B89%u5168%u8DDD%u79BB%uFF08%u72B6%u6001%u680F%u9AD8%u5EA6%uFF09%3C/td%3E%0A%3Ctd%3E%3Cem%3Eboolean%3C/em%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22events%22%3EEvents%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u4E8B%u4EF6%u540D%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3Cth%3E%u53C2%u6570%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Ebind%3Aclose%3C/td%3E%0A%3Ctd%3E%u5173%u95ED%u5F39%u51FA%u5C42%u65F6%u89E6%u53D1%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ebind%3Aclick-overlay%3C/td%3E%0A%3Ctd%3E%u70B9%u51FB%u906E%u7F69%u5C42%u65F6%u89E6%u53D1%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ebind%3Abefore-enter%3C/td%3E%0A%3Ctd%3E%u8FDB%u5165%u524D%u89E6%u53D1%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ebind%3Aenter%3C/td%3E%0A%3Ctd%3E%u8FDB%u5165%u4E2D%u89E6%u53D1%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ebind%3Aafter-enter%3C/td%3E%0A%3Ctd%3E%u8FDB%u5165%u540E%u89E6%u53D1%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ebind%3Abefore-leave%3C/td%3E%0A%3Ctd%3E%u79BB%u5F00%u524D%u89E6%u53D1%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ebind%3Aleave%3C/td%3E%0A%3Ctd%3E%u79BB%u5F00%u4E2D%u89E6%u53D1%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ebind%3Aafter-leave%3C/td%3E%0A%3Ctd%3E%u79BB%u5F00%u540E%u89E6%u53D1%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E%3Cdiv%20class%3D%22card%22%3E%3Ch3%20id%3D%22wai-bu-yang-shi-lei%22%3E%u5916%u90E8%u6837%u5F0F%u7C7B%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u7C7B%u540D%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Ecustom-class%3C/td%3E%0A%3Ctd%3E%u6839%u8282%u70B9%u6837%u5F0F%u7C7B%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3C/div%3E")},mounted:function(){var E=this;[].slice.call(this.$el.querySelectorAll("h2, h3, h4, h5")).forEach((function(C){C.addEventListener("click",E.scrollToAnchor)}))},methods:{scrollToAnchor:function(E){E.target.id&&this.$router.push({path:this.$route.path,hash:E.target.id})}}},t=s(2),a=Object(t.a)(u,(function(){var E=this.$createElement;this._self._c;return this._m(0)}),[function(){var E=this.$createElement;return(this._self._c||E)("section",{domProps:{innerHTML:this._s(this.content)}})}],!1,null,null,null);C.default=a.exports}}]);