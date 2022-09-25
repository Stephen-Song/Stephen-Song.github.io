(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{492:function(v,_,c){"use strict";c.r(_);var e=c(26),o=Object(e.a)({},(function(){var v=this,_=v.$createElement,c=v._self._c||_;return c("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[c("h1",{attrs:{id:"cdn"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#cdn"}},[v._v("#")]),v._v(" CDN")]),v._v(" "),c("h2",{attrs:{id:"介绍一下cdn"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#介绍一下cdn"}},[v._v("#")]),v._v(" 介绍一下"),c("code",[v._v("CDN")])]),v._v(" "),c("div",{staticClass:"custom-block tip"},[c("p",{staticClass:"custom-block-title"},[v._v("CDN")]),v._v(" "),c("p",[v._v("("),c("code",[v._v("Content Delivery Network")]),v._v("内容分发网络)是指一种通过互联网互相连接的电脑网络系统，利用最靠近每位用户的服务器，更快、更可靠地将音乐、图片、视频、应用程序及其他文件发送给用户，来提供高性能、可扩展性及低成本的网络内容传递给用户")])]),v._v(" "),c("p",[v._v("典型的"),c("code",[v._v("CDN")]),v._v("系统分为：")]),v._v(" "),c("ul",[c("li",[c("p",[c("strong",[v._v("分发服务系统")]),v._v("： 最基本的工作单元就是"),c("code",[v._v("Cache")]),v._v("设备，"),c("code",[v._v("cache")]),v._v("（边缘"),c("code",[v._v("cache")]),v._v("）负责直接响应最终用户的访问请求，把缓存在本地的内容快速地提供给用户。同时"),c("code",[v._v("cache")]),v._v("还负责与源站点进行内容同步，把更新的内容以及本地没有的内容从源站点获取并保存在本地。"),c("strong",[c("code",[v._v("Cache")]),v._v("设备的数量、规模、总服务能力")]),v._v("是衡量一个"),c("code",[v._v("CDN")]),v._v("系统服务能力的最基本的指标")])]),v._v(" "),c("li",[c("p",[c("strong",[v._v("负载均衡系统")]),v._v("：主要功能是负责对所有发起服务请求的用户进行访问调度，确定提供给用户的最终实际访问地址。两级调度体系分为全局负载均衡（"),c("code",[v._v("GSLB")]),v._v("）和本地负载均衡（"),c("code",[v._v("SLB")]),v._v("）。"),c("strong",[v._v("全局负载均衡")]),v._v("主要根据用户就近性原则，通过对每个服务节点进行“最优”判断，确定向用户提供服务的"),c("code",[v._v("cache")]),v._v("的物理位置。"),c("strong",[v._v("本地负载均衡")]),v._v("主要负责节点内部的设备负载均衡")])]),v._v(" "),c("li",[c("p",[c("strong",[v._v("运营管理系统")]),v._v("： 运营管理系统分为运营管理和网络管理子系统，负责处理业务层面的与外界系统交互所必须的收集、整理、交付工作，包含客户管理、产品管理、计费管理、统计分析等功能。")])])]),v._v(" "),c("p",[c("strong",[c("code",[v._v("CDN")]),v._v("的作用：")]),v._v(" 用来托管"),c("code",[v._v("Web")]),v._v("资源（包括文本、图片和脚本），可供下载的资源（媒体文件、软件、文档等）应用程序，使用"),c("code",[v._v("cdn")]),v._v("来加速这些资源等访问")]),v._v(" "),c("ul",[c("li",[v._v("在性能方面：\n"),c("ul",[c("li",[v._v("用户收到的内容来自最近的数据中心，延迟更低，内容加载更快")]),v._v(" "),c("li",[v._v("部分资源请求分配给了"),c("code",[v._v("CDN")]),v._v("，减少了服务器的负载")])])]),v._v(" "),c("li",[v._v("在安全方面，有助于防御"),c("code",[v._v("DDos MITM")]),v._v("等网络攻击\n"),c("ul",[c("li",[v._v("针对"),c("code",[v._v("DDoS")]),v._v("，通过监控分析异常流量，限制其请求频率")]),v._v(" "),c("li",[v._v("针对"),c("code",[v._v("MITM")]),v._v("，从源服务器到"),c("code",[v._v("CDN")]),v._v("节点到"),c("code",[v._v("ISP（Internet Service Provider）")]),v._v("，全链路"),c("code",[v._v("HTTPS")]),v._v("通信")])])])]),v._v(" "),c("div",{staticClass:"custom-block note"},[c("p",{staticClass:"custom-block-title"},[v._v("负载均衡")]),v._v(" "),c("blockquote",[c("p",[v._v("多台服务器共同协作，不让其中某一台或几台超额工作，发挥服务器的最大作用")])]),v._v(" "),c("ul",[c("li",[c("code",[v._v("http")]),v._v("重定向负载均衡：调度者根据策略选择服务器以"),c("code",[v._v("302")]),v._v("响应请求，缺点只有第一次有效果，后续操作维持在该服务器 "),c("code",[v._v("dns")]),v._v("负载均衡：解析域名时，访问多个"),c("code",[v._v("ip")]),v._v("服务器中的一个（可监控性较弱）")]),v._v(" "),c("li",[v._v("反向代理负载均衡：访问统一的服务器，由服务器进行调度访问实际的某个服务器，对统一的服务器要求大，性能受到 服务器群的数量")])])]),v._v(" "),c("h2",{attrs:{id:"cdn工作原理"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#cdn工作原理"}},[v._v("#")]),v._v(" "),c("code",[v._v("CDN")]),v._v("工作原理")]),v._v(" "),c("p",[c("strong",[c("code",[v._v("CDN")]),v._v("的原理:")]),v._v(" "),c("code",[v._v("CDN")]),v._v("和"),c("code",[v._v("DNS")]),v._v("有着密不可分的联系")]),v._v(" "),c("p",[c("code",[v._v("DNS")]),v._v("的解析域名的过程是在浏览器输入 "),c("code",[v._v("www.crucials.cn")]),v._v("的解析过程如下：")]),v._v(" "),c("ol",[c("li",[c("p",[v._v("检查浏览器缓存")])]),v._v(" "),c("li",[c("p",[v._v("检查操作系统缓存，常见的如"),c("code",[v._v("hosts")]),v._v("文件")])]),v._v(" "),c("li",[c("p",[v._v("检查路由器缓存")])]),v._v(" "),c("li",[c("p",[v._v("如果前几步都没没找到，会向"),c("code",[v._v("ISP")]),v._v("(网络服务提供商)的"),c("code",[v._v("LDNS")]),v._v("服务器查询")])]),v._v(" "),c("li",[c("p",[v._v("如果"),c("code",[v._v("LDNS")]),v._v("器没找到，会向根域名服务器"),c("code",[v._v("(Root Server)")]),v._v("请求解析，分为以下几步：")])])]),v._v(" "),c("ul",[c("li",[c("p",[v._v("根服务器返回顶级域名("),c("code",[v._v("TLD")]),v._v(")服务器如 "),c("strong",[c("code",[v._v(".com")])]),v._v(" ，"),c("strong",[c("code",[v._v(".cn")])]),v._v("，"),c("strong",[c("code",[v._v(".org")])]),v._v(" 等的地址，该例子中会返回 "),c("strong",[c("code",[v._v(".cn")])]),v._v(" 的地址")])]),v._v(" "),c("li",[c("p",[v._v("接着向顶级域名服务器发送请求，然后会返回次级域名("),c("code",[v._v("SLD")]),v._v(")服务器的地址，本例子会返回 "),c("strong",[c("code",[v._v(".crucials")])]),v._v(" 的地址")])]),v._v(" "),c("li",[c("p",[v._v("接着向次级域名服务器发送请求，然后会返回通过域名查询到的目标"),c("code",[v._v("IP")]),v._v("，本例子会返回 "),c("strong",[c("code",[v._v("www.crucials.cn")])]),v._v(" 的地址")])]),v._v(" "),c("li",[c("p",[c("code",[v._v("Local DNS Server")]),v._v("会缓存结果，并返回给用户，缓存在系统中")])])]),v._v(" "),c("p",[c("strong",[c("code",[v._v("CDN")]),v._v("的工作原理")]),v._v("：")]),v._v(" "),c("ol",[c("li",[c("p",[v._v("用户未使用"),c("code",[v._v("CDN")]),v._v("缓存资源的过程：")]),v._v(" "),c("ul",[c("li",[c("p",[v._v("浏览器通过"),c("code",[v._v("DNS")]),v._v("对域名进行解析（就是上面的"),c("code",[v._v("DNS")]),v._v("解析过程），依次得到此域名对应的"),c("code",[v._v("IP")]),v._v("地址")])]),v._v(" "),c("li",[c("p",[v._v("浏览器根据得到的"),c("code",[v._v("IP")]),v._v("地址，向域名的服务主机发送数据请求")])]),v._v(" "),c("li",[c("p",[v._v("服务器向浏览器返回响应数据")])])])]),v._v(" "),c("li",[c("p",[v._v("用户使用"),c("code",[v._v("CDN")]),v._v("缓存资源的过程：")]),v._v(" "),c("ul",[c("li",[c("p",[v._v("对于点击的数据的"),c("code",[v._v("URL")]),v._v("，经过本地"),c("code",[v._v("DNS")]),v._v("系统的解析，发现该"),c("code",[v._v("URL")]),v._v("对应的是一个"),c("code",[v._v("CDN")]),v._v("专用的"),c("code",[v._v("DNS")]),v._v("服务器，"),c("code",[v._v("DNS")]),v._v("系统就会将域名解析权交给"),c("code",[v._v("CNAME")]),v._v("指向的"),c("code",[v._v("CDN")]),v._v("专用的"),c("code",[v._v("DNS")]),v._v("服务器。")])]),v._v(" "),c("li",[c("p",[c("code",[v._v("CDN")]),v._v("专用"),c("code",[v._v("DNS")]),v._v("服务器将 "),c("strong",[c("code",[v._v("CDN")]),v._v("的全局负载均衡设备"),c("code",[v._v("IP")]),v._v("地址")]),v._v(" 返回给用户")])]),v._v(" "),c("li",[c("p",[v._v("用户向"),c("code",[v._v("CDN")]),v._v("的全局负载均衡设备发起数据请求")])]),v._v(" "),c("li",[c("p",[c("code",[v._v("CDN")]),v._v("的全局负载均衡设备根据用户的"),c("code",[v._v("IP")]),v._v("地址，以及用户请求的内容"),c("code",[v._v("URL")]),v._v("，选择一台用户所属区域的区域负载均衡设备，告诉用户向这台设备发起请求")])]),v._v(" "),c("li",[c("p",[v._v("区域负载均衡设备选择一台合适的缓存服务器来提供服务，将该缓存服务器的"),c("code",[v._v("IP")]),v._v("地址返回给全局负载均衡设备")])]),v._v(" "),c("li",[c("p",[v._v("全局负载均衡设备把服务器的"),c("code",[v._v("IP")]),v._v("地址返回给用户")])]),v._v(" "),c("li",[c("p",[v._v("用户向该缓存服务器发起请求，缓存服务器响应用户的请求，将用户所需内容发送至用户终端。")])])])])]),v._v(" "),c("p",[v._v("如果缓存服务器没有用户想要的内容，那么缓存服务器就会向它的上一级缓存服务器请求内容，以此类推，直到获取到需要的资源。最后如果还是没有，就会回到自己的服务器去获取资源")]),v._v(" "),c("p",[c("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/duochizhacai/generatePic/img/202112181652547.png",alt:"img"}})]),v._v(" "),c("div",{staticClass:"custom-block note"},[c("p",{staticClass:"custom-block-title"},[v._v("补充说明")]),v._v(" "),c("p",[c("code",[v._v("CNAME")]),v._v("（意为：别名）：在域名解析中，"),c("code",[v._v("CNAME")]),v._v("记录用于将一个域名（同名）映射到另一个域名（真实名称），域名解析服务器遇到"),c("code",[v._v("CNAME")]),v._v("记录会以映射到的目标重新开始查询,也就是充当一个中转站的意思")])]),v._v(" "),c("h2",{attrs:{id:"cdn使用场景"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#cdn使用场景"}},[v._v("#")]),v._v(" "),c("code",[v._v("CDN")]),v._v("使用场景")]),v._v(" "),c("ul",[c("li",[c("p",[v._v("使用第三方的"),c("code",[v._v("CDN")]),v._v("服务：如果想要开源一些项目，可以使用第三方的"),c("code",[v._v("CDN")]),v._v("服务")])]),v._v(" "),c("li",[c("p",[v._v("使用"),c("code",[v._v("CDN")]),v._v("进行静态资源的缓存：将自己网站的静态资源放在"),c("code",[v._v("CDN")]),v._v("上，比如"),c("code",[v._v("js")]),v._v("、"),c("code",[v._v("css")]),v._v("、图片等。可以将整个项目放在"),c("code",[v._v("CDN")]),v._v("上，完成一键部署。")])]),v._v(" "),c("li",[c("p",[v._v("直播传送：直播本质上是使用流媒体进行传送，"),c("code",[v._v("CDN")]),v._v("也是支持流媒体传送的，所以直播完全可以使用"),c("code",[v._v("CDN")]),v._v("来提高访问速度。"),c("code",[v._v("CDN")]),v._v("在处理流媒体的时候与处理普通静态文件有所不同，普通文件如果在边缘节点没有找到的话，就会去上一层接着寻找，但是流媒体本身数据量就非常大，如果使用回源的方式，必然会带来性能问题，所以流媒体一般采用的都是主动推送的方式来进行")])])]),v._v(" "),c("h2",{attrs:{id:"cdn加速是对网站所在服务器加速-还是对其域名加速"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#cdn加速是对网站所在服务器加速-还是对其域名加速"}},[v._v("#")]),v._v(" "),c("code",[v._v("CDN")]),v._v("加速是对网站所在服务器加速，还是对其域名加速")]),v._v(" "),c("p",[c("code",[v._v("CDN")]),v._v("是只对网站的某一个具体的域名加速。如果同一个网站有多个域名，则访客访问加入"),c("code",[v._v("CDN")]),v._v("的域名获得加速效果，访问未加入"),c("code",[v._v("CDN")]),v._v("的域名，或者直接访问"),c("code",[v._v("IP")]),v._v("地址，则无法获得"),c("code",[v._v("CDN")]),v._v("效果")]),v._v(" "),c("h2",{attrs:{id:"能不能让cdn不缓存某些即时性要求很高的网页和图片"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#能不能让cdn不缓存某些即时性要求很高的网页和图片"}},[v._v("#")]),v._v(" 能不能让"),c("code",[v._v("CDN")]),v._v("不缓存某些即时性要求很高的网页和图片")]),v._v(" "),c("p",[v._v("只需要使用动态页面，"),c("code",[v._v("asp")]),v._v("，"),c("code",[v._v("php")]),v._v("，"),c("code",[v._v("jsp")]),v._v("等动态技术做成的页面不被"),c("code",[v._v("CDN")]),v._v("缓存，无需每次都要刷新。或者采用一个网站两个域名，一个启用"),c("code",[v._v("CDN")]),v._v("，另外一个域名不用"),c("code",[v._v("CDN")]),v._v("，对即时性要求高的页面和图片放在不用"),c("code",[v._v("CDN")]),v._v("的域名下")]),v._v(" "),c("h2",{attrs:{id:"cdn和镜像站点比较有何优势"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#cdn和镜像站点比较有何优势"}},[v._v("#")]),v._v(" "),c("code",[v._v("CDN")]),v._v("和镜像站点比较有何优势")]),v._v(" "),c("p",[c("code",[v._v("CDN")]),v._v("对网站的访客完全透明，不需要访客手动选择要访问的镜像站点，保证了网站对访客的友好性。"),c("code",[v._v("CDN")]),v._v("对每个节点都有可用性检查，不合格的节点会第一时间剔出，从而保证了极高的可用率，而镜像站点无法实现这一点。"),c("code",[v._v("CDN")]),v._v("部署简单，对原站基本不做任何改动即可生效")]),v._v(" "),c("h2",{attrs:{id:"cdn和双线机房相比有何优势"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#cdn和双线机房相比有何优势"}},[v._v("#")]),v._v(" "),c("code",[v._v("CDN")]),v._v("和双线机房相比有何优势")]),v._v(" "),c("p",[v._v("常见的双线机房只能解决网通和电信互相访问慢的问题，其它"),c("code",[v._v("ISP")]),v._v("（譬如教育网，移动网，铁通）互通的问题还是没得到解决。而"),c("code",[v._v("CDN")]),v._v("是访问者就近取数据，而"),c("code",[v._v("CDN")]),v._v("的节点遍布各"),c("code",[v._v("ISP")]),v._v("，从而保证了网站到任意"),c("code",[v._v("ISP")]),v._v("的访问速度。另外"),c("code",[v._v("CDN")]),v._v("因为其流量分流到各节点的原理，天然获得抵抗网络攻击的能力")])])}),[],!1,null,null,null);_.default=o.exports}}]);