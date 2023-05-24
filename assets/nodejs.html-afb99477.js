import{_ as e,o as a,c as d,d as i}from"./app-88c46707.js";const c={},o=i('<h1 id="面试官-说说你对node-js-的理解-优缺点-应用场景" tabindex="-1"><a class="header-anchor" href="#面试官-说说你对node-js-的理解-优缺点-应用场景" aria-hidden="true">#</a> 面试官：说说你对Node.js 的理解？优缺点？应用场景？</h1><p><img src="https://static.vue-js.com/b565d240-c1e6-11eb-ab90-d9ae814b240d.png" alt=""></p><h2 id="一、是什么" tabindex="-1"><a class="header-anchor" href="#一、是什么" aria-hidden="true">#</a> 一、是什么</h2><p><code>Node.js</code> 是一个开源与跨平台的 <code>JavaScript</code> 运行时环境</p><p>在浏览器外运行 V8 JavaScript 引擎（Google Chrome 的内核），利用事件驱动、非阻塞和异步输入输出模型等技术提高性能</p><p>可以理解为 <code>Node.js</code> 就是一个服务器端的、非阻塞式I/O的、事件驱动的<code>JavaScript</code>运行环境</p><h3 id="非阻塞异步" tabindex="-1"><a class="header-anchor" href="#非阻塞异步" aria-hidden="true">#</a> 非阻塞异步</h3><p><code>Nodejs</code>采用了非阻塞型<code>I/O</code>机制，在做<code>I/O</code>操作的时候不会造成任何的阻塞，当完成之后，以时间的形式通知执行操作</p><p>例如在执行了访问数据库的代码之后，将立即转而执行其后面的代码，把数据库返回结果的处理代码放在回调函数中，从而提高了程序的执行效率</p><h3 id="事件驱动" tabindex="-1"><a class="header-anchor" href="#事件驱动" aria-hidden="true">#</a> 事件驱动</h3><p>事件驱动就是当进来一个新的请求的时，请求将会被压入一个事件队列中，然后通过一个循环来检测队列中的事件状态变化，如果检测到有状态变化的事件，那么就执行该事件对应的处理代码，一般都是回调函数</p><p>比如读取一个文件，文件读取完毕后，就会触发对应的状态，然后通过对应的回调函数来进行处理</p><p><img src="https://static.vue-js.com/a7729590-c1e8-11eb-ab90-d9ae814b240d.png" alt=""></p><h2 id="二、优缺点" tabindex="-1"><a class="header-anchor" href="#二、优缺点" aria-hidden="true">#</a> 二、优缺点</h2><p>优点：</p><ul><li>处理高并发场景性能更佳</li><li>适合I/O密集型应用，值的是应用在运行极限时，CPU占用率仍然比较低，大部分时间是在做 I/O硬盘内存读写操作</li></ul><p>因为<code>Nodejs</code>是单线程，带来的缺点有：</p><ul><li>不适合CPU密集型应用</li><li>只支持单核CPU，不能充分利用CPU</li><li>可靠性低，一旦代码某个环节崩溃，整个系统都崩溃</li></ul><h2 id="三、应用场景" tabindex="-1"><a class="header-anchor" href="#三、应用场景" aria-hidden="true">#</a> 三、应用场景</h2><p>借助<code>Nodejs</code>的特点和弊端，其应用场景分类如下：</p><ul><li>善于<code>I/O</code>，不善于计算。因为Nodejs是一个单线程，如果计算（同步）太多，则会阻塞这个线程</li><li>大量并发的I/O，应用程序内部并不需要进行非常复杂的处理</li><li>与 websocket 配合，开发长连接的实时交互应用程序</li></ul><p>具体场景可以表现为如下：</p><ul><li>第一大类：用户表单收集系统、后台管理系统、实时交互系统、考试系统、联网软件、高并发量的web应用程序</li><li>第二大类：基于web、canvas等多人联网游戏</li><li>第三大类：基于web的多人实时聊天客户端、聊天室、图文直播</li><li>第四大类：单页面浏览器应用程序</li><li>第五大类：操作数据库、为前端和移动端提供基于<code>json</code>的API</li></ul><p>其实，<code>Nodejs</code>能实现几乎一切的应用，只考虑适不适合使用它</p><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2><ul><li>http://nodejs.cn/</li><li>https://segmentfault.com/a/1190000019854308</li><li>https://segmentfault.com/a/1190000005173218</li></ul>',26),l=[o];function t(s,h){return a(),d("div",null,l)}const n=e(c,[["render",t],["__file","nodejs.html.vue"]]);export{n as default};
