(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{461:function(v,_,e){"use strict";e.r(_);var d=e(26),o=Object(d.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"virtual-dom"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#virtual-dom"}},[v._v("#")]),v._v(" Virtual DOM")]),v._v(" "),e("h2",{attrs:{id:"对虚拟dom的理解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#对虚拟dom的理解"}},[v._v("#")]),v._v(" 对虚拟"),e("code",[v._v("DOM")]),v._v("的理解"),e("badge",{attrs:{text:"重要",type:"warning"}})],1),v._v(" "),e("p",[v._v("从本质来说，虚拟"),e("code",[v._v("dom")]),v._v("就是一个"),e("code",[v._v("js")]),v._v("对象，通过对象的形式来表示"),e("code",[v._v("dom")]),v._v("结构，将页面的装填抽象成"),e("code",[v._v("js")]),v._v("对象，配合不同渲染工具可以更容易的跨平台，通过事物处理机制，将多次修改"),e("code",[v._v("dom")]),v._v("一次性更新到页面中，防止页面渲染多次，减少修改"),e("code",[v._v("dom")]),v._v("的重绘和重排，提高性能")]),v._v(" "),e("p",[v._v("设计虚拟"),e("code",[v._v("dom")]),v._v("就是为了更好的跨平台，比如"),e("code",[v._v("nodejs")]),v._v("就没有"),e("code",[v._v("dom")]),v._v("，想要达成"),e("code",[v._v("ssr")]),v._v("，就得借助虚拟"),e("code",[v._v("dom")]),v._v("，在代码渲染到页面之前，"),e("code",[v._v("vue")]),v._v("会将代码转化为虚拟"),e("code",[v._v("dom")]),v._v("，以对象的形式描述真实"),e("code",[v._v("dom")]),v._v("，每次变化之前，虚拟"),e("code",[v._v("dom")]),v._v("会缓存一份，和变化后的进行"),e("code",[v._v("diff")]),v._v("比较，重新渲染改变了的"),e("code",[v._v("dom")]),v._v("节点")]),v._v(" "),e("h2",{attrs:{id:"虚拟dom的解析过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#虚拟dom的解析过程"}},[v._v("#")]),v._v(" 虚拟"),e("code",[v._v("dom")]),v._v("的解析过程")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("对要插入的文档的"),e("code",[v._v("dom")]),v._v("树进行分析，使用"),e("code",[v._v("js")]),v._v("对象表示出来(包含"),e("code",[v._v("tagName")]),v._v("，"),e("code",[v._v("props")]),v._v("，"),e("code",[v._v("children")]),v._v("等)，然后保存起来，最后将"),e("code",[v._v("dom")]),v._v("片段插入文档")])]),v._v(" "),e("li",[e("p",[v._v("当页面状态发生改变，需要对"),e("code",[v._v("dom")]),v._v("结构进行调整，根据变更的状态，重新构建一颗对象树，将新旧树进行对比，记录差异")])]),v._v(" "),e("li",[e("p",[v._v("最后将有差异的地方应用到真实"),e("code",[v._v("dom")]),v._v("树上，就更新视图了")])])]),v._v(" "),e("h2",{attrs:{id:"为什么要使用虚拟dom"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么要使用虚拟dom"}},[v._v("#")]),v._v(" 为什么要使用虚拟"),e("code",[v._v("dom")])]),v._v(" "),e("ul",[e("li",[v._v("手动操作 "),e("code",[v._v("DOM")]),v._v(" 比较麻烦，还需要考虑浏览器兼容性问题，虽然有 "),e("code",[v._v("jQuery")]),v._v(" 等库简化 "),e("code",[v._v("DOM")]),v._v(" 操作，但是随着项目的复杂 "),e("code",[v._v("DOM")]),v._v(" 操作复杂提升")]),v._v(" "),e("li",[v._v("为了简化 "),e("code",[v._v("DOM")]),v._v(" 的复杂操作于是出现了各种 "),e("code",[v._v("MVVM")]),v._v(" 框架，"),e("code",[v._v("MVVM")]),v._v(" 框架解决了视图和状态的同步问题")]),v._v(" "),e("li",[v._v("为了简化视图的操作我们可以使用模板引擎，但是模板引擎没有解决跟踪状态变化的问题，于是"),e("code",[v._v("Virtual DOM")]),v._v(" 出现了")]),v._v(" "),e("li",[v._v("保证性能的下限，提供过的去的性能，页面的渲染流程包括：解析"),e("code",[v._v("HTML")]),v._v(" -> 生成"),e("code",[v._v("dom")]),v._v(" -> 生成"),e("code",[v._v("cssdom")]),v._v(" -> "),e("code",[v._v("layout")]),v._v(" -> "),e("code",[v._v("paint")]),v._v(" -> "),e("code",[v._v("compile")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("重排重绘性能消耗")]),v._v(" "),e("ul",[e("li",[v._v("真实"),e("code",[v._v("DOM")]),v._v("：生成"),e("code",[v._v("html")]),v._v("字符串 -> 重建所有"),e("code",[v._v("DOM")]),v._v("元素")]),v._v(" "),e("li",[v._v("虚拟"),e("code",[v._v("DOM")]),v._v("：生成"),e("code",[v._v("vNode")]),v._v(" -> "),e("code",[v._v("DOMdiff")]),v._v(" -> 必要的"),e("code",[v._v("DOM")]),v._v("更新")])])])])])]),v._v(" "),e("h2",{attrs:{id:"vue-为什么采用-vdom"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-为什么采用-vdom"}},[v._v("#")]),v._v(" "),e("code",[v._v("vue")]),v._v(" 为什么采用 "),e("code",[v._v("vdom")]),v._v(" "),e("badge",{attrs:{text:"重要",type:"warning"}})],1),v._v(" "),e("blockquote",[e("p",[v._v("引入 "),e("code",[v._v("Virtual DOM")]),v._v(" 在性能方面的考量仅仅是一方面。")])]),v._v(" "),e("ul",[e("li",[v._v("性能受场景的影响是非常大的，不同的场景可能造成不同实现方案之间成倍的性能差距，所以依赖细粒度绑定及 "),e("code",[v._v("Virtual DOM")]),v._v(" 哪个的性能更好还真不是一个容易下定论的问题。")]),v._v(" "),e("li",[e("code",[v._v("Vue")]),v._v(" 之所以引入了 "),e("code",[v._v("Virtual DOM")]),v._v("，更重要的原因是为了解耦 "),e("code",[v._v("HTML")]),v._v("依赖，这带来两个非常重要的好处是：")])]),v._v(" "),e("blockquote",[e("ul",[e("li",[v._v("不再依赖 "),e("code",[v._v("HTML")]),v._v(" 解析器进行模版解析，可以进行更多的 "),e("code",[v._v("AOT")]),v._v(" 工作提高运行时效率：通过模版 "),e("code",[v._v("AOT")]),v._v(" 编译，"),e("code",[v._v("Vue")]),v._v(" 的运行时体积可以进一步压缩，运行时效率可以进一步提升；")]),v._v(" "),e("li",[v._v("可以渲染到 "),e("code",[v._v("DOM")]),v._v(" 以外的平台，实现 "),e("code",[v._v("SSR")]),v._v("、同构渲染这些高级特性，"),e("code",[v._v("Weex")]),v._v("等框架应用的就是这一特性。")])])]),v._v(" "),e("blockquote",[e("p",[v._v("综上，"),e("code",[v._v("Virtual DOM")]),v._v(" 在性能上的收益并不是最主要的，更重要的是它使得 "),e("code",[v._v("Vue")]),v._v(" 具备了现代框架应有的高级特性。")])]),v._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[v._v("AOT是什么")]),v._v(" "),e("p",[e("code",[v._v("AOT")]),v._v("是"),e("code",[v._v("Ahead-of-time compiler")])]),v._v(" "),e("p",[v._v("模板编译的目的仅仅是将"),e("code",[v._v("template")]),v._v("转化为"),e("code",[v._v("render function")]),v._v("，这个过程，正好可以在项目构建的过程中完成，这样可以让实际组件在 "),e("code",[v._v("runtime")]),v._v(" 时直接跳过模板渲染，进而提升性能，这个在项目构建的编译"),e("code",[v._v("template")]),v._v("的过程，就是预编译")]),v._v(" "),e("ul",[e("li",[v._v("可以有更快的渲染速度：模版引擎的代码会预先被编译，优先给用户呈现")]),v._v(" "),e("li",[v._v("更早检查出"),e("code",[v._v("template")]),v._v("错误并报告给程序员")]),v._v(" "),e("li",[v._v("需下载的资源变少：预编译的影响只会在组件实例化的时候进行编译，生存"),e("code",[v._v("render")]),v._v("函数后不会进行二次编译，可以让实际组件在"),e("code",[v._v("runtime")]),v._v("时候跳过模版渲染")])])]),v._v(" "),e("h2",{attrs:{id:"虚拟dom会比真实dom性能好吗"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#虚拟dom会比真实dom性能好吗"}},[v._v("#")]),v._v(" 虚拟"),e("code",[v._v("DOM")]),v._v("会比真实"),e("code",[v._v("DOM")]),v._v("性能好吗")]),v._v(" "),e("p",[v._v("在首次渲染大量"),e("code",[v._v("dom")]),v._v("的时候由于多了一层虚拟"),e("code",[v._v("dom")]),v._v("的计算，会比"),e("code",[v._v("innerHTML")]),v._v("慢一些")]),v._v(" "),e("p",[v._v("但是他保证了性能的下限，在真实"),e("code",[v._v("dom")]),v._v("操作的时候进行针对性的优化("),e("code",[v._v("diff")]),v._v("比较)，还是更快的")]),v._v(" "),e("h2",{attrs:{id:"diff算法的原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#diff算法的原理"}},[v._v("#")]),v._v(" "),e("code",[v._v("diff")]),v._v("算法的原理"),e("badge",{attrs:{text:"重要",type:"warning"}})],1),v._v(" "),e("p",[v._v("在新老节点的"),e("code",[v._v("dom")]),v._v("对比时：")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("首先对比节点本身，判断是不是同一个节点")]),v._v(" "),e("ul",[e("li",[v._v("如果不是就删除该节点重新创建节点来替换")]),v._v(" "),e("li",[v._v("如果是的话，进行"),e("code",[v._v("patchVnode")]),v._v("，判断如何对该节点的子节点进行处理，首先判断一方有子节点一方没有的情况")]),v._v(" "),e("li",[v._v("如果新的"),e("code",[v._v("children")]),v._v("没有子节点，就把旧的子节点去掉")]),v._v(" "),e("li",[v._v("如果都有子节点，进行"),e("code",[v._v("updateChildren")]),v._v(",判断如何对这些新老子节点进行操作")])])]),v._v(" "),e("li",[e("p",[v._v("匹配时找到相同子节点，递归比较子节点")])])]),v._v(" "),e("p",[v._v("在"),e("code",[v._v("diff")]),v._v("中，只对同层的子节点进行比较，放弃跨级的比较，时间复杂度从"),e("code",[v._v("O(n^3)")]),v._v("  -> "),e("code",[v._v("O(n)")]),v._v("，也就是说当新旧"),e("code",[v._v("children")]),v._v("都为多个子节点才要核心的"),e("code",[v._v("diff")]),v._v("算法进行同层级比较")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/duochizhacai/generatePic/img/202201071118675.png",alt:""}})]),v._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/duochizhacai/generatePic/img/202201071124558.png",alt:""}})]),v._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/duochizhacai/generatePic/img/202201071230933.png",alt:""}})]),v._v(" "),e("h2",{attrs:{id:"vue中key的作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue中key的作用"}},[v._v("#")]),v._v(" "),e("code",[v._v("Vue")]),v._v("中"),e("code",[v._v("key")]),v._v("的作用")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("在"),e("code",[v._v("v-if")]),v._v("中使用"),e("code",[v._v("key")]),v._v("，由于"),e("code",[v._v("Vue")]),v._v("会高效渲染元素，通常会复原已有元素而不是从头渲染，如果有相同类型的元素，那么元素就会复用，如果是相同的"),e("code",[v._v("input")]),v._v("元素也会复用，这样可能会出现"),e("code",[v._v("input")]),v._v("输入一开始就有值的情况，我们通过"),e("code",[v._v("key")]),v._v("来表示独立的元素")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("v-for")]),v._v("使用"),e("code",[v._v("key")]),v._v(" "),e("code",[v._v("v-for")]),v._v("更新已渲染过的元素列表，默认使用就地复用的策略，如果数据项顺序发生改变,"),e("code",[v._v("vue")]),v._v("不会移动"),e("code",[v._v("dom")]),v._v("来匹配顺序，而是简单复用，提供"),e("code",[v._v("key")]),v._v("来跟踪元素的身份高效更新虚拟"),e("code",[v._v("DOM")])])])]),v._v(" "),e("p",[v._v("我们不使用"),e("code",[v._v("index")]),v._v("作为"),e("code",[v._v("key")]),v._v("是因为，无论数组怎么颠倒顺序，"),e("code",[v._v("index")]),v._v("都是"),e("code",[v._v("0,1,2,3,4")]),v._v("这样排列，导致"),e("code",[v._v("Vue")]),v._v("会复用错误的旧节点")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/duochizhacai/generatePic/img/202202042316359.png",alt:""}})])])}),[],!1,null,null,null);_.default=o.exports}}]);