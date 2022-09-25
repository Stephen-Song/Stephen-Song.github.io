(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{491:function(v,_,e){"use strict";e.r(_);var t=e(26),s=Object(t.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h2",{attrs:{id:"对虚拟-dom的理解-虚拟-dom-主要做了什么-虚拟-dom-本身是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#对虚拟-dom的理解-虚拟-dom-主要做了什么-虚拟-dom-本身是什么"}},[v._v("#")]),v._v(" 对虚拟 "),e("code",[v._v("DOM")]),v._v("的理解？虚拟 "),e("code",[v._v("DOM")]),v._v(" 主要做了什么？虚拟 "),e("code",[v._v("DOM")]),v._v(" 本身是什么？")]),v._v(" "),e("p",[v._v("从本质上来说，"),e("code",[v._v("Virtual Dom")]),v._v(" 是一个"),e("code",[v._v("JavaScript")]),v._v("对象，通过对象的方式来表示"),e("code",[v._v("DOM")]),v._v("结构。将页面的状态抽象为"),e("code",[v._v("JS")]),v._v("对象的形式，配合不同的渲染工具，使跨平台渲染成为可能。")]),v._v(" "),e("p",[v._v("通过事务处理机制，将多次"),e("code",[v._v("DOM")]),v._v("修改的结果一次性的更新到页面上，从而有效的减少页面渲染的次数，减少修改"),e("code",[v._v("DOM")]),v._v("的重绘重排次数，提高渲染性能。")]),v._v(" "),e("p",[v._v("虚拟"),e("code",[v._v("DOM")]),v._v("是对"),e("code",[v._v("DOM")]),v._v("的抽象，这个对象是更加轻量级的对"),e("code",[v._v("DOM")]),v._v("的描述。它设计的最初目的，就是更好的跨平台，比如"),e("code",[v._v("node.js")]),v._v("就没有"),e("code",[v._v("DOM")]),v._v("，如果想实现"),e("code",[v._v("SSR")]),v._v("，那么一个方式就是借助虚拟"),e("code",[v._v("dom")]),v._v("，因为虚拟"),e("code",[v._v("dom")]),v._v("本身是"),e("code",[v._v("js")]),v._v("对象。 在代码渲染到页面之前，"),e("code",[v._v("vue")]),v._v("或者"),e("code",[v._v("react")]),v._v("会把代码转换成一个对象（虚拟"),e("code",[v._v("DOM")]),v._v("）。以对象的形式来描述真实"),e("code",[v._v("dom")]),v._v("结构，最终渲染到页面。在每次数据发生变化前，虚拟"),e("code",[v._v("dom")]),v._v("都会缓存一份，变化之时，现在的虚拟"),e("code",[v._v("dom")]),v._v("会与缓存的虚拟"),e("code",[v._v("dom")]),v._v("进行比较。在"),e("code",[v._v("vue")]),v._v("或者"),e("code",[v._v("react")]),v._v("内部封装了"),e("code",[v._v("diff")]),v._v("算法，通过这个算法来进行比较，渲染时修改改变的变化，原先没有发生改变的通过原先的数据进行渲染。")]),v._v(" "),e("p",[v._v("另外现代前端框架的一个基本要求就是无须手动操作"),e("code",[v._v("DOM")]),v._v("，一方面是因为手动操作"),e("code",[v._v("DOM")]),v._v("无法保证程序性能，多人协作的项目中如果"),e("code",[v._v("review")]),v._v("不严格，可能会有开发者写出性能较低的代码，另一方面更重要的是省略手动"),e("code",[v._v("DOM")]),v._v("操作可以大大提高开发效率。")]),v._v(" "),e("p",[e("strong",[v._v("为什么要用 "),e("code",[v._v("Virtual DOM")]),v._v("：")])]),v._v(" "),e("p",[e("strong",[v._v("1. 保证性能下限，在不进行手动优化的情况下，提供过得去的性能")])]),v._v(" "),e("p",[v._v("下面对比一下修改"),e("code",[v._v("DOM")]),v._v("时真实"),e("code",[v._v("DOM")]),v._v("操作和"),e("code",[v._v("Virtual DOM")]),v._v("的过程，来看一下它们重排重绘的性能消耗∶")]),v._v(" "),e("ul",[e("li",[v._v("真实"),e("code",[v._v("DOM")]),v._v("∶ 生成"),e("code",[v._v("HTML")]),v._v("字符串＋ 重建所有的"),e("code",[v._v("DOM")]),v._v("元素")]),v._v(" "),e("li",[e("code",[v._v("Virtual DOM")]),v._v("∶ 生成"),e("code",[v._v("vNode")]),v._v("＋ "),e("code",[v._v("DOMDiff")]),v._v("＋必要的"),e("code",[v._v("DOM")]),v._v("更新")])]),v._v(" "),e("p",[e("code",[v._v("Virtual DOM")]),v._v("的更新"),e("code",[v._v("DOM")]),v._v("的准备工作耗费更多的时间，也就是"),e("code",[v._v("JS")]),v._v("层面，相比于更多的"),e("code",[v._v("DOM")]),v._v("操作它的消费是极其便宜的。尤雨溪在社区论坛中说道∶ 框架给你的保证是，你不需要手动优化的情况下，我依然可以给你提供过得去的性能。")]),v._v(" "),e("p",[e("strong",[v._v("2. 跨平台")]),v._v(" "),e("code",[v._v("Virtual DOM")]),v._v("本质上是"),e("code",[v._v("JavaScript")]),v._v("的对象，它可以很方便的跨平台操作，比如服务端渲染、"),e("code",[v._v("uniapp")]),v._v("等。")]),v._v(" "),e("h2",{attrs:{id:"react-diff-算法的原理是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#react-diff-算法的原理是什么"}},[v._v("#")]),v._v(" "),e("code",[v._v("React diff")]),v._v(" 算法的原理是什么？")]),v._v(" "),e("p",[v._v("实际上，"),e("code",[v._v("diff")]),v._v(" 算法探讨的就是虚拟 "),e("code",[v._v("DOM")]),v._v(" 树发生变化后，生成 "),e("code",[v._v("DOM")]),v._v(" 树更新补丁的方式。它通过对比新旧两株虚拟 "),e("code",[v._v("DOM")]),v._v(" 树的变更差异，将更新补丁作用于真实 "),e("code",[v._v("DOM")]),v._v("，以最小成本完成视图更新。 "),e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/duochizhacai/generatePic/img/202205021525287.awebp",alt:"CgqCHl_qyouAAkb9AAB_cmWuZhc920_mh1609406106571.jpg"}}),v._v(" 具体的流程如下：")]),v._v(" "),e("ul",[e("li",[v._v("真实的 "),e("code",[v._v("DOM")]),v._v(" 首先会映射为虚拟 "),e("code",[v._v("DOM")]),v._v("；")]),v._v(" "),e("li",[v._v("当虚拟 "),e("code",[v._v("DOM")]),v._v(" 发生变化后，就会根据差距计算生成 "),e("code",[v._v("patch")]),v._v("，这个 "),e("code",[v._v("patch")]),v._v(" 是一个结构化的数据，内容包含了增加、更新、移除等；")]),v._v(" "),e("li",[v._v("根据 "),e("code",[v._v("patch")]),v._v(" 去更新真实的 "),e("code",[v._v("DOM")]),v._v("，反馈到用户的界面上。")])]),v._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/duochizhacai/generatePic/img/202205021526103.awebp",alt:"CgqCHl_qypGAZPuGAADYrK9nkJY878_mh1609406162857.jpg"}}),v._v(" 一个简单的例子：")]),v._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("import")]),v._v(" React "),e("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("from")]),v._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[v._v("'react'")]),v._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("export")]),v._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("default")]),v._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("class")]),v._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[v._v("ExampleComponent")]),v._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("extends")]),v._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[v._v("React"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(".")]),v._v("Component")]),v._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("{")]),v._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[v._v("render")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),v._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("{")]),v._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("if")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(".")]),v._v("props"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(".")]),v._v("isVisible"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),v._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("{")]),v._v("\n       "),e("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("return")]),v._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[v._v("<")]),v._v("div className"),e("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[v._v('"visible"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[v._v(">")]),v._v("visbile"),e("span",{pre:!0,attrs:{class:"token operator"}},[v._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[v._v("/")]),v._v("div"),e("span",{pre:!0,attrs:{class:"token operator"}},[v._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("}")]),v._v("\n     "),e("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("return")]),v._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[v._v("<")]),v._v("div className"),e("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[v._v('"hidden"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[v._v(">")]),v._v("hidden"),e("span",{pre:!0,attrs:{class:"token operator"}},[v._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[v._v("/")]),v._v("div"),e("span",{pre:!0,attrs:{class:"token operator"}},[v._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("}")]),v._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("}")]),v._v("\n")])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br"),e("span",{staticClass:"line-number"},[v._v("2")]),e("br"),e("span",{staticClass:"line-number"},[v._v("3")]),e("br"),e("span",{staticClass:"line-number"},[v._v("4")]),e("br"),e("span",{staticClass:"line-number"},[v._v("5")]),e("br"),e("span",{staticClass:"line-number"},[v._v("6")]),e("br"),e("span",{staticClass:"line-number"},[v._v("7")]),e("br"),e("span",{staticClass:"line-number"},[v._v("8")]),e("br"),e("span",{staticClass:"line-number"},[v._v("9")]),e("br")])]),e("p",[v._v("这里，首先假定 "),e("code",[v._v("ExampleComponent")]),v._v(" 可见，然后再改变它的状态，让它不可见 。映射为真实的 "),e("code",[v._v("DOM")]),v._v(" 操作是这样的，"),e("code",[v._v("React")]),v._v(" 会创建一个 "),e("code",[v._v("div")]),v._v(" 节点。")]),v._v(" "),e("div",{staticClass:"language-html line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("<")]),v._v("div")]),v._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[v._v("class")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[v._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v('"')]),v._v("visible"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(">")])]),v._v("visbile"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("</")]),v._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(">")])]),v._v("\n")])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br")])]),e("p",[v._v("当把 "),e("code",[v._v("visbile")]),v._v(" 的值变为 "),e("code",[v._v("false")]),v._v(" 时，就会替换 "),e("code",[v._v("class")]),v._v(" 属性为 "),e("code",[v._v("hidden")]),v._v("，并重写内部的 "),e("code",[v._v("innerText")]),v._v(" 为 "),e("code",[v._v("hidden")]),v._v("。"),e("strong",[v._v("这样一个生成补丁、更新差异的过程统称为 "),e("code",[v._v("diff")]),v._v(" 算法。")])]),v._v(" "),e("p",[e("code",[v._v("diff")]),v._v("算法可以总结为三个策略，分别从树、组件及元素三个层面进行复杂度的优化：")]),v._v(" "),e("p",[e("strong",[v._v("策略一：忽略节点跨层级操作场景，提升比对效率。（基于树进行对比）")])]),v._v(" "),e("p",[v._v("这一策略需要进行树比对，即对树进行分层比较。树比对的处理手法是非常“暴力”的，即两棵树只对同一层次的节点进行比较，如果发现节点已经不存在了，则该节点及其子节点会被完全删除掉，不会用于进一步的比较，这就提升了比对效率。")]),v._v(" "),e("p",[e("strong",[v._v("策略二：如果组件的 "),e("code",[v._v("class")]),v._v(" 一致，则默认为相似的树结构，否则默认为不同的树结构。（基于组件进行对比）")])]),v._v(" "),e("p",[v._v("在组件比对的过程中：")]),v._v(" "),e("ul",[e("li",[v._v("如果组件是同一类型则进行树比对；")]),v._v(" "),e("li",[v._v("如果不是则直接放入补丁中。")])]),v._v(" "),e("p",[v._v("只要父组件类型不同，就会被重新渲染。这也就是为什么 "),e("code",[v._v("shouldComponentUpdate")]),v._v("、"),e("code",[v._v("PureComponent")]),v._v(" 及 "),e("code",[v._v("React.memo")]),v._v(" 可以提高性能的原因。")]),v._v(" "),e("p",[e("strong",[v._v("策略三：同一层级的子节点，可以通过标记 "),e("code",[v._v("key")]),v._v(" 的方式进行列表对比。（基于节点进行对比）")])]),v._v(" "),e("p",[v._v("元素比对主要发生在同层级中，通过标记节点操作生成补丁。节点操作包含了插入、移动、删除等。其中节点重新排序同时涉及插入、移动、删除三个操作，所以效率消耗最大，此时策略三起到了至关重要的作用。通过标记 "),e("code",[v._v("key")]),v._v(" 的方式，"),e("code",[v._v("React")]),v._v(" 可以直接移动 "),e("code",[v._v("DOM")]),v._v(" 节点，降低内耗。")]),v._v(" "),e("h2",{attrs:{id:"react-key-是干嘛用的-为什么要加-key-主要是解决哪一类问题的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#react-key-是干嘛用的-为什么要加-key-主要是解决哪一类问题的"}},[v._v("#")]),v._v(" "),e("code",[v._v("React key")]),v._v(" 是干嘛用的 为什么要加？"),e("code",[v._v("key")]),v._v(" 主要是解决哪一类问题的")]),v._v(" "),e("p",[e("code",[v._v("Keys")]),v._v(" 是 "),e("code",[v._v("React")]),v._v(" 用于追踪哪些列表中元素被修改、被添加或者被移除的辅助标识。在开发过程中，我们需要保证某个元素的 "),e("code",[v._v("key")]),v._v(" 在其同级元素中具有唯一性。")]),v._v(" "),e("p",[v._v("在 "),e("code",[v._v("React Diff")]),v._v(" 算法中 "),e("code",[v._v("React")]),v._v(" 会借助元素的 "),e("code",[v._v("Key")]),v._v(" 值来判断该元素是新近创建的还是被移动而来的元素，从而减少不必要的元素重渲染此外，"),e("code",[v._v("React")]),v._v(" 还需要借助 "),e("code",[v._v("Key")]),v._v(" 值来判断元素与本地状态的关联关系。")]),v._v(" "),e("p",[v._v("注意事项：")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("key")]),v._v(" 值一定要和具体的元素—一对应；")]),v._v(" "),e("li",[v._v("尽量不要用数组的 "),e("code",[v._v("index")]),v._v(" 去作为 "),e("code",[v._v("key")]),v._v("；")]),v._v(" "),e("li",[v._v("不要在 "),e("code",[v._v("render")]),v._v(" 的时候用随机数或者其他操作给元素加上不稳定的"),e("code",[v._v("key")]),v._v("，这样造成的性能开销比不加"),e("code",[v._v("key")]),v._v("的情况下更糟糕。")])]),v._v(" "),e("h2",{attrs:{id:"虚拟-dom-的引入与直接操作原生-dom-相比-哪一个效率更高-为什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#虚拟-dom-的引入与直接操作原生-dom-相比-哪一个效率更高-为什么"}},[v._v("#")]),v._v(" 虚拟 "),e("code",[v._v("DOM")]),v._v(" 的引入与直接操作原生 "),e("code",[v._v("DOM")]),v._v(" 相比，哪一个效率更高，为什么")]),v._v(" "),e("p",[v._v("虚拟"),e("code",[v._v("DOM")]),v._v("相对原生的"),e("code",[v._v("DOM")]),v._v("不一定是效率更高，如果只修改一个按钮的文案，那么虚拟 "),e("code",[v._v("DOM")]),v._v(" 的操作无论如何都不可能比真实的 "),e("code",[v._v("DOM")]),v._v(" 操作更快。在首次渲染大量 "),e("code",[v._v("DOM")]),v._v(" 时，由于多了一层虚拟 "),e("code",[v._v("DOM")]),v._v(" 的计算，虚拟"),e("code",[v._v("DOM")]),v._v("也会比"),e("code",[v._v("innerHTML")]),v._v("插入慢。它能保证性能下限，在真实"),e("code",[v._v("DOM")]),v._v("操作的时候进行针对性的优化时，还是更快的。所以要根据具体的场景进行探讨。")]),v._v(" "),e("p",[v._v("在整个 "),e("code",[v._v("DOM")]),v._v(" 操作的演化过程中，其实主要矛盾并不在于性能，而在于开发者写得爽不爽，在于研发体验/研发效率。虚拟 "),e("code",[v._v("DOM")]),v._v(" 不是别的，正是前端开发们为了追求更好的研发体验和研发效率而创造出来的高阶产物。虚拟 "),e("code",[v._v("DOM")]),v._v(" 并不一定会带来更好的性能，"),e("code",[v._v("React")]),v._v(" 官方也从来没有把虚拟 "),e("code",[v._v("DOM")]),v._v(" 作为性能层面的卖点对外输出过。")]),v._v(" "),e("p",[e("strong",[v._v("虚拟 "),e("code",[v._v("DOM")]),v._v(" 的优越之处在于，它能够在提供更爽、更高效的研发模式（也就是函数式的 "),e("code",[v._v("UI")]),v._v(" 编程方式）的同时，仍然保持一个还不错的性能。")])]),v._v(" "),e("h2",{attrs:{id:"react-与-vue-的-diff-算法有何不同"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#react-与-vue-的-diff-算法有何不同"}},[v._v("#")]),v._v(" "),e("code",[v._v("React")]),v._v(" 与 "),e("code",[v._v("Vue")]),v._v(" 的 "),e("code",[v._v("diff")]),v._v(" 算法有何不同？")]),v._v(" "),e("p",[e("code",[v._v("diff")]),v._v(" 算法是指生成更新补丁的方式，主要应用于虚拟 "),e("code",[v._v("DOM")]),v._v(" 树变化后，更新真实 "),e("code",[v._v("DOM")]),v._v("。所以 "),e("code",[v._v("diff")]),v._v(" 算法一定存在这样一个过程：触发更新 → 生成补丁 → 应用补丁。")]),v._v(" "),e("p",[e("code",[v._v("React")]),v._v(" 的 "),e("code",[v._v("diff")]),v._v(" 算法，触发更新的时机主要在 "),e("code",[v._v("state")]),v._v(" 变化与 "),e("code",[v._v("hooks")]),v._v(" 调用之后。此时触发虚拟 "),e("code",[v._v("DOM")]),v._v(" 树变更遍历，采用了深度优先遍历算法。但传统的遍历方式，效率较低。为了优化效率，使用了分治的方式。将单一节点比对转化为了 "),e("code",[v._v("3")]),v._v(" 种类型节点的比对，分别是树、组件及元素，以此提升效率。")]),v._v(" "),e("ul",[e("li",[v._v("树比对：由于网页视图中较少有跨层级节点移动，两株虚拟 "),e("code",[v._v("DOM")]),v._v(" 树只对同一层次的节点进行比较。")]),v._v(" "),e("li",[v._v("组件比对：如果组件是同一类型，则进行树比对，如果不是，则直接放入到补丁中。")]),v._v(" "),e("li",[v._v("元素比对：主要发生在同层级中，通过标记节点操作生成补丁，节点操作对应真实的 "),e("code",[v._v("DOM")]),v._v(" 剪裁操作。")])]),v._v(" "),e("p",[v._v("以上是经典的 "),e("code",[v._v("React diff")]),v._v(" 算法内容。自 "),e("code",[v._v("React 16")]),v._v(" 起，引入了 "),e("code",[v._v("Fiber")]),v._v(" 架构。为了使整个更新过程可随时暂停恢复，节点与树分别采用了 "),e("code",[v._v("FiberNode")]),v._v(" 与 "),e("code",[v._v("FiberTree")]),v._v(" 进行重构。"),e("code",[v._v("fiberNode")]),v._v(" 使用了双链表的结构，可以直接找到兄弟节点与子节点。整个更新过程由 "),e("code",[v._v("current")]),v._v(" 与 "),e("code",[v._v("workInProgress")]),v._v(" 两株树双缓冲完成。"),e("code",[v._v("workInProgress")]),v._v(" 更新完成后，再通过修改 "),e("code",[v._v("current")]),v._v(" 相关指针指向新节点。")]),v._v(" "),e("p",[e("code",[v._v("Vue")]),v._v(" 的整体 "),e("code",[v._v("diff")]),v._v(" 策略与 "),e("code",[v._v("React")]),v._v(" 对齐，虽然缺乏时间切片能力，但这并不意味着 "),e("code",[v._v("Vue")]),v._v(" 的性能更差，因为在 "),e("code",[v._v("Vue 3")]),v._v(" 初期引入过，后期因为收益不高移除掉了。除了高帧率动画，在 "),e("code",[v._v("Vue")]),v._v(" 中其他的场景几乎都可以使用防抖和节流去提高响应性能。")])])}),[],!1,null,null,null);_.default=s.exports}}]);