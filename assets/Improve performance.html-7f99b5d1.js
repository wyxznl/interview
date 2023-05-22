import{_ as p,r as o,o as c,c as l,b as s,d as n,e,a}from"./app-c0885663.js";const i={},u=a('<h1 id="面试官-说说-react-性能优化的手段有哪些" tabindex="-1"><a class="header-anchor" href="#面试官-说说-react-性能优化的手段有哪些" aria-hidden="true">#</a> 面试官：说说 React 性能优化的手段有哪些？</h1><p><img src="https://static.vue-js.com/a9e83b00-f270-11eb-ab90-d9ae814b240d.png" alt=""></p><h2 id="一、是什么" tabindex="-1"><a class="header-anchor" href="#一、是什么" aria-hidden="true">#</a> 一、是什么</h2><p><code>React</code>凭借<code>virtual DOM</code>和<code>diff</code>算法拥有高效的性能，但是某些情况下，性能明显可以进一步提高</p><p>在前面文章中，我们了解到类组件通过调用<code>setState</code>方法， 就会导致<code>render</code>，父组件一旦发生<code>render</code>渲染，子组件一定也会执行<code>render</code>渲染</p><p>当我们想要更新一个子组件的时候，如下图绿色部分：</p><p><img src="https://static.vue-js.com/b41f6f30-f270-11eb-ab90-d9ae814b240d.png" alt=""></p><p>理想状态只调用该路径下的组件<code>render</code>：</p><p><img src="https://static.vue-js.com/bc0f2460-f270-11eb-85f6-6fac77c0c9b3.png" alt=""></p><p>但是<code>react</code>的默认做法是调用所有组件的<code>render</code>，再对生成的虚拟<code>DOM</code>进行对比（黄色部分），如不变则不进行更新</p><p><img src="https://static.vue-js.com/c2f0c4f0-f270-11eb-85f6-6fac77c0c9b3.png" alt=""></p><p>从上图可见，黄色部分<code>diff</code>算法对比是明显的性能浪费的情况</p><h2 id="二、如何做" tabindex="-1"><a class="header-anchor" href="#二、如何做" aria-hidden="true">#</a> 二、如何做</h2>',13),r={href:"https://mp.weixin.qq.com/s/h4NX4Plr6TCjoIhlawiJTg",target:"_blank",rel:"noopener noreferrer"},d=s("code",null,"render",-1),k=s("code",null,"shouldComponentUpdate",-1),m=s("code",null,"PureComponent",-1),v=s("code",null,"React.memo",-1),g=a(`<p>除此之外， 常见性能优化常见的手段有如下：</p><ul><li><p>避免使用内联函数</p></li><li><p>使用 React Fragments 避免额外标记</p></li><li><p>使用 Immutable</p></li><li><p>懒加载组件</p></li><li><p>事件绑定方式</p></li><li><p>服务端渲染</p></li></ul><h4 id="避免使用内联函数" tabindex="-1"><a class="header-anchor" href="#避免使用内联函数" aria-hidden="true">#</a> 避免使用内联函数</h4><p>如果我们使用内联函数，则每次调用<code>render</code>函数时都会创建一个新的函数实例，如下：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">InlineFunctionComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Welcome Guest</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">inputValue</span><span class="token operator">:</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Click For Inline Function<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们应该在组件内部创建一个函数，并将事件绑定到该函数本身。这样每次调用 <code>render</code> 时就不会创建单独的函数实例，如下：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">InlineFunctionComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  
  <span class="token function-variable function">setNewStateData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">inputValue</span><span class="token operator">:</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Welcome Guest</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>setNewStateData<span class="token punctuation">}</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Click For Inline Function<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用-react-fragments-避免额外标记" tabindex="-1"><a class="header-anchor" href="#使用-react-fragments-避免额外标记" aria-hidden="true">#</a> 使用 React Fragments 避免额外标记</h4><p>用户创建新组件时，每个组件应具有单个父标签。父级不能有两个标签，所以顶部要有一个公共标签，所以我们经常在组件顶部添加额外标签<code>div</code></p><p>这个额外标签除了充当父标签之外，并没有其他作用，这时候则可以使用<code>fragement</code></p><p>其不会向组件引入任何额外标记，但它可以作为父级标签的作用，如下所示：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">NestedRoutingComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">This is the Header Component</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Welcome To Demo Page</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="事件绑定方式" tabindex="-1"><a class="header-anchor" href="#事件绑定方式" aria-hidden="true">#</a> 事件绑定方式</h3>`,13),h={href:"https://mp.weixin.qq.com/s/VfQ34ZEPXUXsimzMaJ_41A",target:"_blank",rel:"noopener noreferrer"},b=a('<p>从性能方面考虑，在<code>render</code>方法中使用<code>bind</code>和<code>render</code>方法中使用箭头函数这两种形式在每次组件<code>render</code>的时候都会生成新的方法实例，性能欠缺</p><p>而<code>constructor</code>中<code>bind</code>事件与定义阶段使用箭头函数绑定这两种形式只会生成一个方法实例，性能方面会有所改善</p><h3 id="使用-immutable" tabindex="-1"><a class="header-anchor" href="#使用-immutable" aria-hidden="true">#</a> 使用 Immutable</h3>',3),f={href:"https://mp.weixin.qq.com/s/laYJ_KNa8M5JNBnIolMDAA",target:"_blank",rel:"noopener noreferrer"},x=s("code",null,"Immutable",-1),y=s("code",null,"React",-1),w=a(`<p>在做<code>react</code>性能优化的时候，为了避免重复渲染，我们会在<code>shouldComponentUpdate()</code>中做对比，当返回<code>true</code>执行<code>render</code>方法</p><p><code>Immutable</code>通过<code>is</code>方法则可以完成对比，而无需像一样通过深度比较的方式比较</p><h3 id="懒加载组件" tabindex="-1"><a class="header-anchor" href="#懒加载组件" aria-hidden="true">#</a> 懒加载组件</h3><p>从工程方面考虑，<code>webpack</code>存在代码拆分能力，可以为应用创建多个包，并在运行时动态加载，减少初始包的大小</p><p>而在<code>react</code>中使用到了<code>Suspense </code>和 <code>lazy</code>组件实现代码拆分功能，基本使用如下：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">const</span> johanComponent <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &quot;johanComponent&quot; */</span> <span class="token string">&#39;./myAwesome.component&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">johanAsyncComponent</span> <span class="token operator">=</span> <span class="token parameter">props</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">React.Suspense</span></span> <span class="token attr-name">fallback</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Spinner</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>johanComponent</span> <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">React.Suspense</span></span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="服务端渲染" tabindex="-1"><a class="header-anchor" href="#服务端渲染" aria-hidden="true">#</a> 服务端渲染</h3><p>采用服务端渲染端方式，可以使用户更快的看到渲染完成的页面</p><p>服务端渲染，需要起一个<code>node</code>服务，可以使用<code>express</code>、<code>koa</code>等，调用<code>react</code>的<code>renderToString</code>方法，将根组件渲染成字符串，再输出到响应中</p><p>例如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> renderToString <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-dom/server&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> MyPage <span class="token keyword">from</span> <span class="token string">&quot;./MyPage&quot;</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;!DOCTYPE html&gt;&lt;html&gt;&lt;head&gt;&lt;title&gt;My Page&lt;/title&gt;&lt;/head&gt;&lt;body&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;div id=&#39;content&#39;&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
  res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token function">renderToString</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>MyPage<span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;/div&gt;&lt;/body&gt;&lt;/html&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>客户端使用render方法来生成HTML</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">&#39;react-dom&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> MyPage <span class="token keyword">from</span> <span class="token string">&quot;./MyPage&quot;</span><span class="token punctuation">;</span>
ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MyPage</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h3><p>除此之外，还存在的优化手段有组件拆分、合理使用<code>hooks</code>等性能优化手段...</p><h3 id="三、总结" tabindex="-1"><a class="header-anchor" href="#三、总结" aria-hidden="true">#</a> 三、总结</h3><p>通过上面初步学习，我们了解到<code>react</code>常见的性能优化可以分成三个层面：</p><ul><li>代码层面</li><li>工程层面</li><li>框架机制层面</li></ul><p>通过这三个层面的优化结合，能够使基于<code>react</code>项目的性能更上一层楼</p><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2><ul><li>https://zhuanlan.zhihu.com/p/108666350</li><li>https://segmentfault.com/a/1190000007811296</li></ul>`,21);function _(q,j){const t=o("ExternalLinkIcon");return c(),l("div",null,[u,s("p",null,[n("在"),s("a",r,[n("React中如何避免不必要的render"),e(t)]),n("中，我们了解到如何避免不必要的"),d,n("来应付上面的问题，主要手段是通过"),k,n("、"),m,n("、"),v,n("，这三种形式这里就不再复述")]),g,s("p",null,[n("在"),s("a",h,[n("事件绑定方式"),e(t)]),n("中，我们了解到四种事假绑定的方式")]),b,s("p",null,[n("在"),s("a",f,[n("理解Immutable中"),e(t)]),n("，我们了解到使用 "),x,n("可以给 "),y,n(" 应用带来性能的优化，主要体现在减少渲染的次数")]),w])}const R=p(i,[["render",_],["__file","Improve performance.html.vue"]]);export{R as default};
