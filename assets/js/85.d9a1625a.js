(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{525:function(v,e,_){"use strict";_.r(e);var t=_(26),o=Object(t.a)({},(function(){var v=this,e=v.$createElement,_=v._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"vite"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vite"}},[v._v("#")]),v._v(" "),_("code",[v._v("Vite")])]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/duochizhacai/generatePic/img/202203170007534.png",alt:""}})]),v._v(" "),_("h2",{attrs:{id:"说一下vite的原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#说一下vite的原理"}},[v._v("#")]),v._v(" 说一下"),_("code",[v._v("Vite")]),v._v("的原理")]),v._v(" "),_("p",[v._v("利用浏览器支持"),_("code",[v._v("ESM")]),v._v(",避免了开发环境打包代码，在服务器端按需编译返回，完全跳过了打包这个概念，服务器随起随用。")]),v._v(" "),_("p",[_("code",[v._v("webpack")]),v._v("原理：冷启动慢，从若干个入口文件递归找到依赖的模块，编译后根据依赖关系输出多个"),_("code",[v._v("chunk")]),v._v("，然后按需加载")]),v._v(" "),_("p",[v._v("而"),_("code",[v._v("Vite")]),v._v("的原理")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("省略了打包过程")])]),v._v(" "),_("li",[_("p",[v._v("浏览器支持"),_("code",[v._v("es import")])])]),v._v(" "),_("li",[_("p",[_("code",[v._v("vite")]),v._v(" 前端的拦截请求")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("Vite")]),v._v("区分不同类型的文件请求，并将这些请求交给专门的函数去处理("),_("code",[v._v(".vue")]),v._v("文件在服务器进行编译，将编译的结果返回给浏览器)")])]),v._v(" "),_("li",[_("p",[v._v("浏览器遇到 返回的代码还有请求的，继续发起请求")])]),v._v(" "),_("li",[_("p",[v._v("实现按需加载，不用打包，启动时间和更新大大缩短，而且"),_("code",[v._v("webpack")]),v._v("低层是用"),_("code",[v._v("nodejs")]),v._v("，而"),_("code",[v._v("Vite")]),v._v("是用"),_("code",[v._v("Go")]),v._v("作为编译运行语言，它支持多线程，会让资源转换更快完成")])]),v._v(" "),_("li",[_("p",[v._v("文件变化了，"),_("code",[v._v("Vite")]),v._v("只需要把待更新的模块与相邻模块之间的链接失活，只更新需要更新的模块就够了(可以类比于双向链表断开中间的,更新之后重新请求)")])])]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/duochizhacai/generatePic/img/202202121701195.png",alt:""}})]),v._v(" "),_("p",[_("strong",[v._v("细节")])]),v._v(" "),_("p",[_("strong",[v._v("改写路径")])]),v._v(" "),_("p",[_("code",[v._v("vite")]),v._v("会将文件下引用"),_("code",[v._v("node_modules")]),v._v("的路径"),_("code",[v._v("import { createApp } from 'vue'")]),v._v(" 换成了 "),_("code",[v._v("import { createApp } from '/@modules/vue")]),v._v("。作用应该是将node_modules对应的模块缓存在浏览器中")]),v._v(" "),_("p",[_("strong",[v._v("对"),_("code",[v._v("vue")]),v._v("文件拆解请求")])]),v._v(" "),_("p",[v._v("把原本一个 "),_("code",[v._v(".vue")]),v._v(" 的文件拆成了三个请求（分别对应 "),_("code",[v._v("script")]),v._v("、"),_("code",[v._v("style")]),v._v(" 和"),_("code",[v._v("template")]),v._v("） ，浏览器会先收到包含 "),_("code",[v._v("script")]),v._v(" 逻辑的 "),_("code",[v._v("App.vue")]),v._v(" 的响应，然后解析到 "),_("code",[v._v("template")]),v._v(" 和 "),_("code",[v._v("style")]),v._v(" 的路径后，会再次发起 HTTP 请求来请求对应的资源，此时 "),_("code",[v._v("Vite")]),v._v(" 对其拦截并再次处理后返回相应的内容")]),v._v(" "),_("p",[_("strong",[v._v("缺点")])]),v._v(" "),_("ol",[_("li",[v._v("只有在进行某个页面中才会知道文件的编译错误")]),v._v(" "),_("li",[v._v("初始化页面假如依赖的模块变多也会变慢")])])])}),[],!1,null,null,null);e.default=o.exports}}]);