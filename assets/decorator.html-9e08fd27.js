import{_ as n,o as s,c as a,a as e}from"./app-c0885663.js";const t={},p=e(`<h1 id="面试官-你是怎么理解es6中-decorator-的-使用场景" tabindex="-1"><a class="header-anchor" href="#面试官-你是怎么理解es6中-decorator-的-使用场景" aria-hidden="true">#</a> 面试官：你是怎么理解ES6中 Decorator 的？使用场景？</h1><p><img src="https://static.vue-js.com/7df43560-5ba5-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h2 id="一、介绍" tabindex="-1"><a class="header-anchor" href="#一、介绍" aria-hidden="true">#</a> 一、介绍</h2><p>Decorator，即装饰器，从名字上很容易让我们联想到装饰者模式</p><p>简单来讲，装饰者模式就是一种在不改变原类和使用继承的情况下，动态地扩展对象功能的设计理论。</p><p><code>ES6</code>中<code>Decorator</code>功能亦如此，其本质也不是什么高大上的结构，就是一个普通的函数，用于扩展类属性和类方法</p><p>这里定义一个士兵，这时候他什么装备都没有</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">soldier</span><span class="token punctuation">{</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>定义一个得到 AK 装备的函数，即装饰器</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">strong</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    target<span class="token punctuation">.</span><span class="token constant">AK</span> <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用该装饰器对士兵进行增强</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@strong
<span class="token keyword">class</span> <span class="token class-name">soldier</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时候士兵就有武器了</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>soldier<span class="token punctuation">.</span><span class="token constant">AK</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上述代码虽然简单，但也能够清晰看到了使用<code>Decorator</code>两大优点：</p><ul><li>代码可读性变强了，装饰器命名相当于一个注释</li><li>在不改变原有代码情况下，对原来功能进行扩展</li></ul><h2 id="二、用法" tabindex="-1"><a class="header-anchor" href="#二、用法" aria-hidden="true">#</a> 二、用法</h2><p><code>Docorator</code>修饰对象为下面两种：</p><ul><li>类的装饰</li><li>类属性的装饰</li></ul><h3 id="类的装饰" tabindex="-1"><a class="header-anchor" href="#类的装饰" aria-hidden="true">#</a> 类的装饰</h3><p>当对类本身进行装饰的时候，能够接受一个参数，即类本身</p><p>将装饰器行为进行分解，大家能够有个更深入的了解</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@decorator
<span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// 等同于</span>

<span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token constant">A</span> <span class="token operator">=</span> <span class="token function">decorator</span><span class="token punctuation">(</span><span class="token constant">A</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token constant">A</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面<code>@testable</code>就是一个装饰器，<code>target</code>就是传入的类，即<code>MyTestableClass</code>，实现了为类添加静态属性</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@testable
<span class="token keyword">class</span> <span class="token class-name">MyTestableClass</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">testable</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  target<span class="token punctuation">.</span>isTestable <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

MyTestableClass<span class="token punctuation">.</span>isTestable <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果想要传递参数，可以在装饰器外层再封装一层函数</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">testable</span><span class="token punctuation">(</span><span class="token parameter">isTestable</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    target<span class="token punctuation">.</span>isTestable <span class="token operator">=</span> isTestable<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

@<span class="token function">testable</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">MyTestableClass</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
MyTestableClass<span class="token punctuation">.</span>isTestable <span class="token comment">// true</span>

@<span class="token function">testable</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
MyClass<span class="token punctuation">.</span>isTestable <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类属性的装饰" tabindex="-1"><a class="header-anchor" href="#类属性的装饰" aria-hidden="true">#</a> 类属性的装饰</h3><p>当对类属性进行装饰的时候，能够接受三个参数：</p><ul><li>类的原型对象</li><li>需要装饰的属性名</li><li>装饰属性名的描述对象</li></ul><p>首先定义一个<code>readonly</code>装饰器</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">readonly</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> name<span class="token punctuation">,</span> descriptor</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  descriptor<span class="token punctuation">.</span>writable <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 将可写属性设为false</span>
  <span class="token keyword">return</span> descriptor<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code>readonly</code>装饰类的<code>name</code>方法</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  @readonly
  <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>first<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>last<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相当于以下调用</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">readonly</span><span class="token punctuation">(</span><span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> descriptor<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果一个方法有多个装饰器，就像洋葱一样，先从外到内进入，再由内到外执行</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">dec</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;evaluated&#39;</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> property<span class="token punctuation">,</span> descriptor</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;executed&#39;</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token punctuation">{</span>
    @<span class="token function">dec</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    @<span class="token function">dec</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// evaluated 1</span>
<span class="token comment">// evaluated 2</span>
<span class="token comment">// executed 2</span>
<span class="token comment">// executed 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>外层装饰器<code>@dec(1)</code>先进入，但是内层装饰器<code>@dec(2)</code>先执行</p><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h3><p>装饰器不能用于修饰函数，因为函数存在变量声明情况</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> counter <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  counter<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

@add
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译阶段，变成下面</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> counter<span class="token punctuation">;</span>
<span class="token keyword">var</span> add<span class="token punctuation">;</span>

@add
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

counter <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  counter<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>意图是执行后<code>counter</code>等于 1，但是实际上结果是<code>counter</code>等于 0</p><h2 id="三、使用场景" tabindex="-1"><a class="header-anchor" href="#三、使用场景" aria-hidden="true">#</a> 三、使用场景</h2><p>基于<code>Decorator</code>强大的作用，我们能够完成各种场景的需求，下面简单列举几种：</p><p>使用<code>react-redux</code>的时候，如果写成下面这种形式，既不雅观也很麻烦</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">MyReactComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">connect</span><span class="token punctuation">(</span>mapStateToProps<span class="token punctuation">,</span> mapDispatchToProps<span class="token punctuation">)</span><span class="token punctuation">(</span>MyReactComponent<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过装饰器就变得简洁多了</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@<span class="token function">connect</span><span class="token punctuation">(</span>mapStateToProps<span class="token punctuation">,</span> mapDispatchToProps<span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">MyReactComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>将<code>mixins</code>，也可以写成装饰器，让使用更为简洁了</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">mixins</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>list</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>target<span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token operator">...</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用</span>
<span class="token keyword">const</span> Foo <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

@<span class="token function">mixins</span><span class="token punctuation">(</span>Foo<span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &quot;foo&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面再讲讲<code>core-decorators.js</code>几个常见的装饰器</p><h4 id="antobind" tabindex="-1"><a class="header-anchor" href="#antobind" aria-hidden="true">#</a> @antobind</h4><p><code>autobind</code>装饰器使得方法中的<code>this</code>对象，绑定原始对象</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> autobind <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;core-decorators&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  @autobind
  <span class="token function">getPerson</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> getPerson <span class="token operator">=</span> person<span class="token punctuation">.</span>getPerson<span class="token punctuation">;</span>

<span class="token function">getPerson</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> person<span class="token punctuation">;</span>
<span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="readonly" tabindex="-1"><a class="header-anchor" href="#readonly" aria-hidden="true">#</a> @readonly</h4><p><code>readonly</code>装饰器使得属性或方法不可写</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> readonly <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;core-decorators&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Meal</span> <span class="token punctuation">{</span>
  @readonly
  entree <span class="token operator">=</span> <span class="token string">&#39;steak&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> dinner <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Meal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
dinner<span class="token punctuation">.</span>entree <span class="token operator">=</span> <span class="token string">&#39;salmon&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// Cannot assign to read only property &#39;entree&#39; of [object Object]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="deprecate" tabindex="-1"><a class="header-anchor" href="#deprecate" aria-hidden="true">#</a> @deprecate</h4><p><code>deprecate</code>或<code>deprecated</code>装饰器在控制台显示一条警告，表示该方法将废除</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> deprecate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;core-decorators&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  @deprecate
  <span class="token function">facepalm</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  @<span class="token function">deprecate</span><span class="token punctuation">(</span><span class="token string">&#39;功能废除了&#39;</span><span class="token punctuation">)</span>
  <span class="token function">facepalmHard</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

person<span class="token punctuation">.</span><span class="token function">facepalm</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// DEPRECATION Person#facepalm: This function will be removed in future versions.</span>

person<span class="token punctuation">.</span><span class="token function">facepalmHard</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// DEPRECATION Person#facepalmHard: 功能废除了</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2><ul><li>https://es6.ruanyifeng.com/#docs/decorator</li></ul>`,65),c=[p];function o(i,l){return s(),a("div",null,c)}const d=n(t,[["render",o],["__file","decorator.html.vue"]]);export{d as default};
