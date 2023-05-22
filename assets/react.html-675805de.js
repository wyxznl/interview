import{_ as t,r as p,o,c,b as n,d as a,e,a as l}from"./app-c0885663.js";const i={},r=l(`<h1 id="面试官-说说如何在-react-项目中应用-typescript" tabindex="-1"><a class="header-anchor" href="#面试官-说说如何在-react-项目中应用-typescript" aria-hidden="true">#</a> 面试官：说说如何在 React 项目中应用 TypeScript？</h1><p><img src="https://static.vue-js.com/a98974e0-13bc-11ec-a752-75723a64e8f5.png" alt=""></p><h2 id="一、前言" tabindex="-1"><a class="header-anchor" href="#一、前言" aria-hidden="true">#</a> 一、前言</h2><p>单独的使用 <code>TypeScript</code> 并不会导致学习成本很高，但是绝大部分前端开发者的项目都是依赖于框架的</p><p>例如与 <code>Vue</code>、<code>React</code> 这些框架结合使用的时候，会有一定的门槛</p><p>使用 <code>TypeScript</code> 编写 <code>React</code> 代码，除了需要 <code>TypeScript</code> 这个库之外，还需要安装 <code>@types/react</code>、<code>@types/react-dom</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i @types/react <span class="token parameter variable">-s</span>

<span class="token function">npm</span> i @types/react-dom <span class="token parameter variable">-s</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>至于上述使用 <code>@types</code> 的库的原因在于，目前非常多的 <code>JavaScript</code> 库并没有提供自己关于 <code>TypeScript</code> 的声明文件</p><p>所以，<code>ts</code> 并不知道这些库的类型以及对应导出的内容，这里 <code>@types</code> 实际就是社区中的 <code>DefinitelyTyped</code> 库，定义了目前市面上绝大多数的 <code>JavaScript</code> 库的声明</p><p>所以下载相关的 <code>JavaScript</code> 对应的 <code>@types</code> 声明时，就能够使用使用该库对应的类型定义</p><h2 id="二、使用方式" tabindex="-1"><a class="header-anchor" href="#二、使用方式" aria-hidden="true">#</a> 二、使用方式</h2><p>在编写 <code>React</code> 项目的时候，最常见的使用的组件就是：</p><ul><li>无状态组件</li><li>有状态组件</li><li>受控组件</li></ul><h3 id="无状态组件" tabindex="-1"><a class="header-anchor" href="#无状态组件" aria-hidden="true">#</a> 无状态组件</h3><p>主要作用是用于展示 <code>UI</code>，如果使用 <code>js</code> 声明，则如下所示：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">&quot;React&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">Logo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> logo<span class="token punctuation">,</span> className<span class="token punctuation">,</span> alt <span class="token punctuation">}</span> <span class="token operator">=</span> props<span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>logo<span class="token punctuation">}</span></span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>className<span class="token punctuation">}</span></span> <span class="token attr-name">alt</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>alt<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但这时候 <code>ts</code> 会出现报错提示，原因在于没有定义 <code>porps</code> 类型，这时候就可以使用 <code>interface</code> 接口去定义 <code>porps</code> 即可，如下：</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">&quot;React&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">IProps</span> <span class="token punctuation">{</span>
  logo<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  className<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  alt<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">Logo</span> <span class="token operator">=</span> <span class="token punctuation">(</span>props<span class="token operator">:</span> IProps<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> logo<span class="token punctuation">,</span> className<span class="token punctuation">,</span> alt <span class="token punctuation">}</span> <span class="token operator">=</span> props<span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>logo<span class="token punctuation">}</span></span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>className<span class="token punctuation">}</span></span> <span class="token attr-name">alt</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>alt<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是我们都知道 <code>props</code> 里面存在 <code>children</code> 属性，我们不可能每个 <code>porps</code> 接口里面定义多一个 <code>children</code>，如下：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">IProps</span> <span class="token punctuation">{</span>
  logo<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  className<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  alt<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  children<span class="token operator">?</span><span class="token operator">:</span> ReactNode<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更加规范的写法是使用 <code>React</code> 里面定义好的 <code>FC</code> 属性，里面已经定义好 <code>children</code> 类型，如下：</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">export</span> <span class="token keyword">const</span> Logo<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token operator">&lt;</span>IProps<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> logo<span class="token punctuation">,</span> className<span class="token punctuation">,</span> alt <span class="token punctuation">}</span> <span class="token operator">=</span> props<span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>logo<span class="token punctuation">}</span></span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>className<span class="token punctuation">}</span></span> <span class="token attr-name">alt</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>alt<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>React.FC 显式地定义了返回类型，其他方式是隐式推导的</p></li><li><p>React.FC 对静态属性：displayName、propTypes、defaultProps 提供了类型检查和自动补全</p></li><li><p>React.FC 为 children 提供了隐式的类型（ReactElement | null）</p></li></ul><h3 id="有状态组件" tabindex="-1"><a class="header-anchor" href="#有状态组件" aria-hidden="true">#</a> 有状态组件</h3><p>可以是一个类组件且存在 <code>props</code> 和 <code>state</code> 属性</p><p>如果使用 <code>TypeScript</code> 声明则如下所示：</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">&quot;React&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">IProps</span> <span class="token punctuation">{</span>
  color<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  size<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">IState</span> <span class="token punctuation">{</span>
  count<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React</span><span class="token punctuation">.</span>Component<span class="token operator">&lt;</span>IProps<span class="token punctuation">,</span> IState<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> state <span class="token operator">=</span> <span class="token punctuation">{</span>
    count<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">public</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Hello world</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述通过泛型对 <code>props</code>、<code>state</code> 进行类型定义，然后在使用的时候就可以在编译器中获取更好的智能提示</p><p>关于 <code>Component</code> 泛型类的定义，可以参考下 React 的类型定义文件 <code>node_modules/@types/React/index.d.ts</code>，如下所示：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Component<span class="token operator">&lt;</span><span class="token constant">P</span><span class="token punctuation">,</span> <span class="token constant">S</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token keyword">readonly</span> props<span class="token operator">:</span> Readonly<span class="token operator">&lt;</span><span class="token punctuation">{</span> children<span class="token operator">?</span><span class="token operator">:</span> ReactNode <span class="token punctuation">}</span><span class="token operator">&gt;</span> <span class="token operator">&amp;</span> Readonly<span class="token operator">&lt;</span><span class="token constant">P</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

  state<span class="token operator">:</span> Readonly<span class="token operator">&lt;</span><span class="token constant">S</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上述可以看到，<code>state</code> 属性也定义了可读类型，目的是为了防止直接调用 <code>this.state</code> 更新状态</p><h3 id="受控组件" tabindex="-1"><a class="header-anchor" href="#受控组件" aria-hidden="true">#</a> 受控组件</h3><p>受控组件的特性在于元素的内容通过组件的状态 <code>state</code> 进行控制</p><p>由于组件内部的事件是合成事件，不等同于原生事件，</p><p>例如一个 <code>input</code> 组件修改内部的状态，常见的定义的时候如下所示：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">private</span> <span class="token function">updateValue</span><span class="token punctuation">(</span>e<span class="token operator">:</span> React<span class="token punctuation">.</span>ChangeEvent<span class="token operator">&lt;</span>HTMLInputElement<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> itemText<span class="token operator">:</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>常用 <code>Event</code> 事件对象类型：</p><ul><li>ClipboardEvent&lt;T = Element&gt; 剪贴板事件对象</li><li>DragEvent&lt;T = Element&gt; 拖拽事件对象</li><li>ChangeEvent&lt;T = Element&gt; Change 事件对象</li><li>KeyboardEvent&lt;T = Element&gt; 键盘事件对象</li><li>MouseEvent&lt;T = Element&gt; 鼠标事件对象</li><li>TouchEvent&lt;T = Element&gt; 触摸事件对象</li><li>WheelEvent&lt;T = Element&gt; 滚轮事件对象</li><li>AnimationEvent&lt;T = Element&gt; 动画事件对象</li><li>TransitionEvent&lt;T = Element&gt; 过渡事件对象</li></ul><p><code>T</code> 接收一个 <code>DOM</code> 元素类型</p><h2 id="三、总结" tabindex="-1"><a class="header-anchor" href="#三、总结" aria-hidden="true">#</a> 三、总结</h2><p>上述只是简单的在 <code>React</code> 项目使用 <code>TypeScript</code>，但在编写 <code>React</code> 项目的时候，还存在 <code>hooks</code>、默认参数、以及 <code>store</code> 等等......</p><p><code>TypeScript</code> 在框架中使用的学习成本相对会更高，需要不断编写才能熟练</p><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2>`,43),u={href:"https://juejin.cn/post/6952696734078369828",target:"_blank",rel:"noopener noreferrer"},d={href:"https://juejin.cn/post/6844903684422254606",target:"_blank",rel:"noopener noreferrer"};function k(v,m){const s=p("ExternalLinkIcon");return o(),c("div",null,[r,n("ul",null,[n("li",null,[n("a",u,[a("https://juejin.cn/post/6952696734078369828"),e(s)])]),n("li",null,[n("a",d,[a("https://juejin.cn/post/6844903684422254606"),e(s)])])])])}const b=t(i,[["render",k],["__file","react.html.vue"]]);export{b as default};
