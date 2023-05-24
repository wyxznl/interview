import{_ as n,o as s,c as a,d as t}from"./app-88c46707.js";const p={},e=t(`<h1 id="面试官-说说react-router有几种模式-实现原理" tabindex="-1"><a class="header-anchor" href="#面试官-说说react-router有几种模式-实现原理" aria-hidden="true">#</a> 面试官：说说React Router有几种模式？实现原理？</h1><p><img src="https://static.vue-js.com/065f7a80-e978-11eb-ab90-d9ae814b240d.png" alt=""></p><h2 id="一、是什么" tabindex="-1"><a class="header-anchor" href="#一、是什么" aria-hidden="true">#</a> 一、是什么</h2><p>在单页应用中，一个<code>web</code>项目只有一个<code>html</code>页面，一旦页面加载完成之后，就不用因为用户的操作而进行页面的重新加载或者跳转，其特性如下：</p><ul><li><p>改变 url 且不让浏览器像服务器发送请求</p></li><li><p>在不刷新页面的前提下动态改变浏览器地址栏中的URL地址</p></li></ul><p>其中主要分成了两种模式：</p><ul><li>hash 模式：在url后面加上#，如http://127.0.0.1:5500/home/#/page1</li><li>history 模式：允许操作浏览器的曾经在标签页或者框架里访问的会话历史记录</li></ul><h2 id="二、使用" tabindex="-1"><a class="header-anchor" href="#二、使用" aria-hidden="true">#</a> 二、使用</h2><p><code>React Router</code>对应的<code>hash</code>模式和<code>history</code>模式对应的组件为：</p><ul><li>HashRouter</li><li>BrowserRouter</li></ul><p>这两个组件的使用都十分的简单，作为最顶层组件包裹其他组件，如下所示</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token comment">// 1.import { BrowserRouter as Router } from &quot;react-router-dom&quot;;</span>
<span class="token comment">// 2.import { HashRouter as Router } from &quot;react-router-dom&quot;;</span>

<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  BrowserRouter <span class="token keyword">as</span> Router<span class="token punctuation">,</span>
  <span class="token comment">// HashRouter as Router  </span>
  Switch<span class="token punctuation">,</span>
  Route<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-router-dom&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">&#39;./pages/Home&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Login <span class="token keyword">from</span> <span class="token string">&#39;./pages/Login&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Backend <span class="token keyword">from</span> <span class="token string">&#39;./pages/Backend&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Admin <span class="token keyword">from</span> <span class="token string">&#39;./pages/Admin&#39;</span><span class="token punctuation">;</span>


<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Router</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/login<span class="token punctuation">&quot;</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>Login<span class="token punctuation">}</span></span><span class="token punctuation">/&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/backend<span class="token punctuation">&quot;</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>Backend<span class="token punctuation">}</span></span><span class="token punctuation">/&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/admin<span class="token punctuation">&quot;</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>Admin<span class="token punctuation">}</span></span><span class="token punctuation">/&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/<span class="token punctuation">&quot;</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>Home<span class="token punctuation">}</span></span><span class="token punctuation">/&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Router</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、实现原理" tabindex="-1"><a class="header-anchor" href="#三、实现原理" aria-hidden="true">#</a> 三、实现原理</h2><p>路由描述了 <code>URL</code> 与 <code>UI </code>之间的映射关系，这种映射是单向的，即 URL 变化引起 UI 更新（无需刷新页面）</p><p>下面以<code>hash</code>模式为例子，改变<code>hash</code>值并不会导致浏览器向服务器发送请求，浏览器不发出请求，也就不会刷新页面</p><p><code>hash</code> 值改变，触发全局 <code>window</code> 对象上的 <code>hashchange</code> 事件。所以 <code>hash</code> 模式路由就是利用 <code>hashchange</code> 事件监听 <code>URL</code> 的变化，从而进行 <code>DOM</code> 操作来模拟页面跳转</p><p><code>react-router</code>也是基于这个特性实现路由的跳转</p><p>下面以<code>HashRouter</code>组件分析进行展开：</p><h2 id="hashrouter" tabindex="-1"><a class="header-anchor" href="#hashrouter" aria-hidden="true">#</a> HashRouter</h2><p><code>HashRouter</code>包裹了整应用，</p><p>通过<code>window.addEventListener(&#39;hashChange&#39;,callback)</code>监听<code>hash</code>值的变化，并传递给其嵌套的组件</p><p>然后通过<code>context</code>将<code>location</code>数据往后代组件传递，如下：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Provider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./context&#39;</span>
<span class="token comment">// 该组件下Api提供给子组件使用</span>
<span class="token keyword">class</span> <span class="token class-name">HashRouter</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">location</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">pathname</span><span class="token operator">:</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>hash<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&#39;/&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// url路径变化 改变location</span>
  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>hash <span class="token operator">=</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>hash <span class="token operator">||</span> <span class="token string">&#39;/&#39;</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;hashchange&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">location</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>location<span class="token punctuation">,</span>
          <span class="token literal-property property">pathname</span><span class="token operator">:</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>hash<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&#39;/&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>location<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> value <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">location</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>location
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Provider</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children
        <span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Provider</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> HashRouter<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="router" tabindex="-1"><a class="header-anchor" href="#router" aria-hidden="true">#</a> Router</h3><p><code>Router</code>组件主要做的是通过<code>BrowserRouter</code>传过来的当前值，通过<code>props</code>传进来的<code>path</code>与<code>context</code>传进来的<code>pathname</code>进行匹配，然后决定是否执行渲染组件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Consumer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./context&#39;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> pathToRegexp <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path-to-regexp&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">Route</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>Consumer<span class="token operator">&gt;</span>
        <span class="token punctuation">{</span>
          <span class="token parameter">state</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span>
            <span class="token keyword">let</span> <span class="token punctuation">{</span>path<span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Component<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props
            <span class="token keyword">let</span> pathname <span class="token operator">=</span> state<span class="token punctuation">.</span>location<span class="token punctuation">.</span>pathname
            <span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token function">pathToRegexp</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">end</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token comment">// 判断当前path是否包含pathname</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>pathname<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token keyword">return</span> <span class="token operator">&lt;</span>Component<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>Component<span class="token operator">&gt;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Consumer<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> Route<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2><ul><li><p>https://juejin.cn/post/6870376090297171975#heading-9</p></li><li><p>https://segmentfault.com/a/1190000023560665</p></li></ul>`,28),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","React Router model.html.vue"]]);export{r as default};
