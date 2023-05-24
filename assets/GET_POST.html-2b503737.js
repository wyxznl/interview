import{_ as e,o as d,c,d as o}from"./app-88c46707.js";const a={},i=o(`<h1 id="面试官-说一下-get-和-post-的区别" tabindex="-1"><a class="header-anchor" href="#面试官-说一下-get-和-post-的区别" aria-hidden="true">#</a> 面试官：说一下 GET 和 POST 的区别？</h1><p><img src="https://static.vue-js.com/6e8d19e0-bc3d-11eb-ab90-d9ae814b240d.png" alt=""></p><h2 id="一、是什么" tabindex="-1"><a class="header-anchor" href="#一、是什么" aria-hidden="true">#</a> 一、是什么</h2><p><code>GET</code>和<code>POST</code>，两者是<code>HTTP</code>协议中发送请求的方法</p><h4 id="get" tabindex="-1"><a class="header-anchor" href="#get" aria-hidden="true">#</a> GET</h4><p><code>GET</code>方法请求一个指定资源的表示形式，使用GET的请求应该只被用于获取数据</p><h4 id="post" tabindex="-1"><a class="header-anchor" href="#post" aria-hidden="true">#</a> POST</h4><p><code>POST</code>方法用于将实体提交到指定的资源，通常导致在服务器上的状态变化或<strong>副作用</strong></p><p>本质上都是<code>TCP</code>链接，并无差别</p><p>但是由于<code>HTTP</code>的规定和浏览器/服务器的限制，导致他们在应用过程中会体现出一些区别</p><h2 id="二、区别" tabindex="-1"><a class="header-anchor" href="#二、区别" aria-hidden="true">#</a> 二、区别</h2><p>从<code>w3schools</code>得到的标准答案的区别如下：</p><ul><li>GET在浏览器回退时是无害的，而POST会再次提交请求。</li><li>GET产生的URL地址可以被Bookmark，而POST不可以。</li><li>GET请求会被浏览器主动cache，而POST不会，除非手动设置。</li><li>GET请求只能进行url编码，而POST支持多种编码方式。</li><li>GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留。</li><li>GET请求在URL中传送的参数是有长度限制的，而POST没有。</li><li>对参数的数据类型，GET只接受ASCII字符，而POST没有限制。</li><li>GET比POST更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息。</li><li>GET参数通过URL传递，POST放在Request body中</li></ul><h3 id="参数位置" tabindex="-1"><a class="header-anchor" href="#参数位置" aria-hidden="true">#</a> 参数位置</h3><p>貌似从上面看到<code>GET</code>与<code>POST</code>请求区别非常大，但两者实质并没有区别</p><p>无论 <code>GET </code>还是 <code>POST</code>，用的都是同一个传输层协议，所以在传输上没有区别</p><p>当不携带参数的时候，两者最大的区别为第一行方法名不同</p><blockquote><p>POST /uri HTTP/1.1 \\r\\n</p><p>GET /uri HTTP/1.1 \\r\\n</p></blockquote><p>当携带参数的时候，我们都知道<code>GET</code>请求是放在<code>url</code>中，<code>POST</code>则放在<code>body</code>中</p><p><code>GET</code> 方法简约版报文是这样的</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /index.html?name=qiming.c&amp;age=22 HTTP/1.1
Host: localhost
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>POST </code>方法简约版报文是这样的</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST /index.html HTTP/1.1
Host: localhost
Content-Type: application/x-www-form-urlencoded

name=qiming.c&amp;age=22
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：这里只是约定，并不属于<code>HTTP</code>规范，相反的，我们可以在<code>POST</code>请求中<code>url</code>中写入参数，或者<code>GET</code>请求中的<code>body</code>携带参数</p><h3 id="参数长度" tabindex="-1"><a class="header-anchor" href="#参数长度" aria-hidden="true">#</a> 参数长度</h3><p><code>HTTP </code>协议没有<code>Body</code>和 <code>URL</code> 的长度限制，对 <code>URL </code>限制的大多是浏览器和服务器的原因</p><p><code>IE</code>对<code>URL</code>长度的限制是2083字节(2K+35)。对于其他浏览器，如Netscape、FireFox等，理论上没有长度限制，其限制取决于操作系统的支持</p><p>这里限制的是整个<code>URL</code>长度，而不仅仅是参数值的长度</p><p>服务器处理长<code> URL</code> 要消耗比较多的资源，为了性能和安全考虑，会给 <code>URL</code> 长度加限制</p><h3 id="安全" tabindex="-1"><a class="header-anchor" href="#安全" aria-hidden="true">#</a> 安全</h3><p><code>POST </code>比<code> GET</code> 安全，因为数据在地址栏上不可见</p><p>然而，从传输的角度来说，他们都是不安全的，因为<code> HTTP</code> 在网络上是明文传输的，只要在网络节点上捉包，就能完整地获取数据报文</p><p>只有使用<code>HTTPS</code>才能加密安全</p><h3 id="数据包" tabindex="-1"><a class="header-anchor" href="#数据包" aria-hidden="true">#</a> 数据包</h3><p>对于<code>GET</code>方式的请求，浏览器会把<code>http header</code>和<code>data</code>一并发送出去，服务器响应200（返回数据）</p><p>对于<code>POST</code>，浏览器先发送<code>header</code>，服务器响应100 <code>continue</code>，浏览器再发送<code>data</code>，服务器响应200 ok</p><p>并不是所有浏览器都会在<code>POST</code>中发送两次包，<code>Firefox</code>就只发送一次</p><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2><ul><li>https://mp.weixin.qq.com/s?__biz=MzI3NzIzMzg3Mw==&amp;mid=100000054&amp;idx=1&amp;sn=71f6c214f3833d9ca20b9f7dcd9d33e4#rd</li><li>https://blog.fundebug.com/2019/02/22/compare-http-method-get-and-post/</li><li>https://www.w3school.com.cn/tags/html_ref_httpmethods.asp</li><li>https://vue3js.cn/interview</li></ul>`,39),t=[i];function n(r,l){return d(),c("div",null,t)}const h=e(a,[["render",n],["__file","GET_POST.html.vue"]]);export{h as default};
