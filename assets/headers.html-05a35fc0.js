import{_ as e,o as t,c as a,a as n}from"./app-c0885663.js";const d={},s=n(`<h1 id="面试官-说说-http-常见的请求头有哪些-作用" tabindex="-1"><a class="header-anchor" href="#面试官-说说-http-常见的请求头有哪些-作用" aria-hidden="true">#</a> 面试官：说说 HTTP 常见的请求头有哪些? 作用？</h1><p><img src="https://static.vue-js.com/964abb00-bc69-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h2 id="一、是什么" tabindex="-1"><a class="header-anchor" href="#一、是什么" aria-hidden="true">#</a> 一、是什么</h2><p>HTTP头字段（HTTP header fields）,是指在超文本传输协议（HTTP）的请求和响应消息中的消息头部分</p><p>它们定义了一个超文本传输协议事务中的操作参数</p><p>HTTP头部字段可以自己根据需要定义，因此可能在 <code>Web </code>服务器和浏览器上发现非标准的头字段</p><p>下面是一个<code>HTTP</code>请求的请求头：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">/home.html</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Host</span><span class="token punctuation">:</span> <span class="token header-value">developer.mozilla.org</span></span>
<span class="token header"><span class="token header-name keyword">User-Agent</span><span class="token punctuation">:</span> <span class="token header-value">Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0</span></span>
<span class="token header"><span class="token header-name keyword">Accept</span><span class="token punctuation">:</span> <span class="token header-value">text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8</span></span>
<span class="token header"><span class="token header-name keyword">Accept-Language</span><span class="token punctuation">:</span> <span class="token header-value">en-US,en;q=0.5</span></span>
<span class="token header"><span class="token header-name keyword">Accept-Encoding</span><span class="token punctuation">:</span> <span class="token header-value">gzip, deflate, br</span></span>
<span class="token header"><span class="token header-name keyword">Referer</span><span class="token punctuation">:</span> <span class="token header-value">https://developer.mozilla.org/testpage.html</span></span>
<span class="token header"><span class="token header-name keyword">Connection</span><span class="token punctuation">:</span> <span class="token header-value">keep-alive</span></span>
<span class="token header"><span class="token header-name keyword">Upgrade-Insecure-Requests</span><span class="token punctuation">:</span> <span class="token header-value">1</span></span>
<span class="token header"><span class="token header-name keyword">If-Modified-Since</span><span class="token punctuation">:</span> <span class="token header-value">Mon, 18 Jul 2016 02:36:04 GMT</span></span>
<span class="token header"><span class="token header-name keyword">If-None-Match</span><span class="token punctuation">:</span> <span class="token header-value">&quot;c561c68d0ba92bbeb8b0fff2a9199f722e3a621a&quot;</span></span>
<span class="token header"><span class="token header-name keyword">Cache-Control</span><span class="token punctuation">:</span> <span class="token header-value">max-age=0</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、分类" tabindex="-1"><a class="header-anchor" href="#二、分类" aria-hidden="true">#</a> 二、分类</h2><p>常见的请求字段如下表所示：</p><table><thead><tr><th>字段名</th><th>说明</th><th>示例</th></tr></thead><tbody><tr><td>Accept</td><td>能够接受的回应内容类型（Content-Types）</td><td>Accept: text/plain</td></tr><tr><td>Accept-Charset</td><td>能够接受的字符集</td><td>Accept-Charset: utf-8</td></tr><tr><td>Accept-Encoding</td><td>能够接受的编码方式列表</td><td>Accept-Encoding: gzip, deflate</td></tr><tr><td>Accept-Language</td><td>能够接受的回应内容的自然语言列表</td><td>Accept-Language: en-US</td></tr><tr><td>Authorization</td><td>用于超文本传输协议的认证的认证信息</td><td>Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==</td></tr><tr><td>Cache-Control</td><td>用来指定在这次的请求/响应链中的所有缓存机制 都必须 遵守的指令</td><td>Cache-Control: no-cache</td></tr><tr><td>Connection</td><td>该浏览器想要优先使用的连接类型</td><td>Connection: keep-alive Connection: Upgrade</td></tr><tr><td>Cookie</td><td>服务器通过 Set- Cookie （下文详述）发送的一个 超文本传输协议Cookie</td><td>Cookie: $Version=1; Skin=new;</td></tr><tr><td>Content-Length</td><td>以 八位字节数组 （8位的字节）表示的请求体的长度</td><td>Content-Length: 348</td></tr><tr><td>Content-Type</td><td>请求体的 多媒体类型</td><td>Content-Type: application/x-www-form-urlencoded</td></tr><tr><td>Date</td><td>发送该消息的日期和时间</td><td>Date: Tue, 15 Nov 1994 08:12:31 GMT</td></tr><tr><td>Expect</td><td>表明客户端要求服务器做出特定的行为</td><td>Expect: 100-continue</td></tr><tr><td>Host</td><td>服务器的域名(用于虚拟主机 )，以及服务器所监听的传输控制协议端口号</td><td>Host: en.wikipedia.org:80 Host: en.wikipedia.org</td></tr><tr><td>If-Match</td><td>仅当客户端提供的实体与服务器上对应的实体相匹配时，才进行对应的操作。主要作用时，用作像 PUT 这样的方法中，仅当从用户上次更新某个资源以来，该资源未被修改的情况下，才更新该资源</td><td>If-Match: &quot;737060cd8c284d8af7ad3082f209582d&quot;</td></tr><tr><td>If-Modified-Since</td><td>允许在对应的内容未被修改的情况下返回304未修改</td><td>If-Modified-Since: Sat, 29 Oct 1994 19:43:31 GMT</td></tr><tr><td>If-None-Match</td><td>允许在对应的内容未被修改的情况下返回304未修改</td><td>If-None-Match: &quot;737060cd8c284d8af7ad3082f209582d&quot;</td></tr><tr><td>If-Range</td><td>如果该实体未被修改过，则向我发送我所缺少的那一个或多个部分；否则，发送整个新的实体</td><td>If-Range: &quot;737060cd8c284d8af7ad3082f209582d&quot;</td></tr><tr><td>Range</td><td>仅请求某个实体的一部分</td><td>Range: bytes=500-999</td></tr><tr><td>User-Agent</td><td>浏览器的浏览器身份标识字符串</td><td>User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:12.0) Gecko/20100101 Firefox/21.0</td></tr><tr><td>Origin</td><td>发起一个针对 跨来源资源共享 的请求</td><td>Origin: http://www.example-social-network.com</td></tr></tbody></table><h2 id="三、使用场景" tabindex="-1"><a class="header-anchor" href="#三、使用场景" aria-hidden="true">#</a> 三、使用场景</h2><p>通过配合请求头和响应头，可以满足一些场景的功能实现：</p><h3 id="协商缓存" tabindex="-1"><a class="header-anchor" href="#协商缓存" aria-hidden="true">#</a> 协商缓存</h3><p>协商缓存是利用的是<code>【Last-Modified，If-Modified-Since】</code>和<code>【ETag、If-None-Match】</code>这两对请求头响应头来管理的</p><p><code>Last-Modified</code> 表示本地文件最后修改日期，浏览器会在request header加上<code>If-Modified-Since</code>（上次返回的<code>Last-Modified</code>的值），询问服务器在该日期后资源是否有更新，有更新的话就会将新的资源发送回来</p><p><code>Etag</code>就像一个指纹，资源变化都会导致<code>ETag</code>变化，跟最后修改时间没有关系，<code>ETag</code>可以保证每一个资源是唯一的</p><p><code>If-None-Match</code>的header会将上次返回的<code>Etag</code>发送给服务器，询问该资源的<code>Etag</code>是否有更新，有变动就会发送新的资源回来</p><p>而强制缓存不需要发送请求到服务端，根据请求头<code>expires</code>和<code>cache-control</code>判断是否命中强缓存</p><p>强制缓存与协商缓存的流程图如下所示：</p><p><img src="https://static.vue-js.com/a4065b00-bc69-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h3 id="会话状态" tabindex="-1"><a class="header-anchor" href="#会话状态" aria-hidden="true">#</a> 会话状态</h3><p><code>cookie</code>，类型为「小型文本文件」，指某些网站为了辨别用户身份而储存在用户本地终端上的数据，通过响应头<code>set-cookie</code>决定</p><p>作为一段一般不超过 4KB 的小型文本数据，它由一个名称（Name）、一个值（Value）和其它几个用于控制 <code>Cookie </code>有效期、安全性、使用范围的可选属性组成</p><p><code>Cookie</code> 主要用于以下三个方面：</p><ul><li>会话状态管理（如用户登录状态、购物车、游戏分数或其它需要记录的信息）</li><li>个性化设置（如用户自定义设置、主题等）</li><li>浏览器行为跟踪（如跟踪分析用户行为等</li></ul><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2><ul><li>https://zh.wikipedia.org/wiki/HTTP头字段</li><li>https://github.com/amandakelake/blog/issues/41</li></ul>`,28),o=[s];function c(p,r){return t(),a("div",null,o)}const l=e(d,[["render",c],["__file","headers.html.vue"]]);export{l as default};
