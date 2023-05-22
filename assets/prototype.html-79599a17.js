import{_ as n,o as s,c as a,a as e}from"./app-c0885663.js";const p={},o=e(`<h1 id="面试官-javascript原型-原型链-有什么特点" tabindex="-1"><a class="header-anchor" href="#面试官-javascript原型-原型链-有什么特点" aria-hidden="true">#</a> 面试官：JavaScript原型，原型链 ? 有什么特点？</h1><p><img src="https://static.vue-js.com/4500e170-725e-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h2 id="一、原型" tabindex="-1"><a class="header-anchor" href="#一、原型" aria-hidden="true">#</a> 一、原型</h2><p><code>JavaScript</code> 常被描述为一种基于原型的语言——每个对象拥有一个原型对象</p><p>当试图访问一个对象的属性时，它不仅仅在该对象上搜寻，还会搜寻该对象的原型，以及该对象的原型的原型，依次层层向上搜索，直到找到一个名字匹配的属性或到达原型链的末尾</p><p>准确地说，这些属性和方法定义在Object的构造器函数（constructor functions）之上的<code>prototype</code>属性上，而非实例对象本身</p><p>下面举个例子：</p><p>函数可以有属性。 每个函数都有一个特殊的属性叫作原型<code>prototype</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> doSomething<span class="token punctuation">.</span>prototype <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>控制台输出</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">constructor</span><span class="token operator">:</span> ƒ <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">__proto__</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">constructor</span><span class="token operator">:</span> ƒ <span class="token function">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">hasOwnProperty</span><span class="token operator">:</span> ƒ <span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">isPrototypeOf</span><span class="token operator">:</span> ƒ <span class="token function">isPrototypeOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">propertyIsEnumerable</span><span class="token operator">:</span> ƒ <span class="token function">propertyIsEnumerable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">toLocaleString</span><span class="token operator">:</span> ƒ <span class="token function">toLocaleString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">toString</span><span class="token operator">:</span> ƒ <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">valueOf</span><span class="token operator">:</span> ƒ <span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这个对象，就是大家常说的原型对象</p><p>可以看到，原型对象有一个自有属性<code>constructor</code>，这个属性指向该函数，如下图关系展示</p><p><img src="https://static.vue-js.com/56d87250-725e-11eb-ab90-d9ae814b240d.png" alt=""></p><h2 id="二、原型链" tabindex="-1"><a class="header-anchor" href="#二、原型链" aria-hidden="true">#</a> 二、原型链</h2><p>原型对象也可能拥有原型，并从中继承方法和属性，一层一层、以此类推。这种关系常被称为原型链 (prototype chain)，它解释了为何一个对象会拥有定义在其他对象中的属性和方法</p><p>在对象实例和它的构造器之间建立一个链接（它是<code>__proto__</code>属性，是从构造函数的<code>prototype</code>属性派生的），之后通过上溯原型链，在构造器中找到这些属性和方法</p><p>下面举个例子：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">sayName</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 第二步 创建实例</span>
<span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;person&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据代码，我们可以得到下图</p><p><img src="https://static.vue-js.com/60825aa0-725e-11eb-85f6-6fac77c0c9b3.png" alt=""></p><p>下面分析一下：</p><ul><li><p>构造函数<code>Person</code>存在原型对象<code>Person.prototype</code></p></li><li><p>构造函数生成实例对象<code>person</code>，<code>person</code>的<code>__proto__</code>指向构造函数<code>Person</code>原型对象</p></li><li><p><code>Person.prototype.__proto__</code> 指向内置对象，因为 <code>Person.prototype</code> 是个对象，默认是由 <code>Object </code>函数作为类创建的，而 <code>Object.prototype</code> 为内置对象</p></li><li><p><code>Person.__proto__</code> 指向内置匿名函数 <code>anonymous</code>，因为 Person 是个函数对象，默认由 Function 作为类创建</p></li><li><p><code>Function.prototype</code> 和 <code>Function.__proto__ </code>同时指向内置匿名函数 <code>anonymous</code>，这样原型链的终点就是 <code>null</code></p></li></ul><h2 id="三、总结" tabindex="-1"><a class="header-anchor" href="#三、总结" aria-hidden="true">#</a> 三、总结</h2><p>下面首先要看几个概念：</p><p><code>__proto__</code>作为不同对象之间的桥梁，用来指向创建它的构造函数的原型对象的</p><p><img src="https://static.vue-js.com/6a742160-725e-11eb-ab90-d9ae814b240d.png" alt=""></p><p>每个对象的<code>__proto__</code>都是指向它的构造函数的原型对象<code>prototype</code>的</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>person1<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Person</span><span class="token punctuation">.</span>prototype
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>构造函数是一个函数对象，是通过 <code>Function </code>构造器产生的</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Person<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Function</span><span class="token punctuation">.</span>prototype
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>原型对象本身是一个普通对象，而普通对象的构造函数都是<code>Object</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>刚刚上面说了，所有的构造器都是函数对象，函数对象都是 <code>Function </code>构造产生的</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Object<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Function</span><span class="token punctuation">.</span>prototype
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>Object </code>的原型对象也有<code>__proto__</code>属性指向<code>null</code>，<code>null</code>是原型链的顶端</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token keyword">null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下面作出总结：</p><ul><li><p>一切对象都是继承自<code>Object</code>对象，<code>Object</code> 对象直接继承根源对象<code> null</code></p></li><li><p>一切的函数对象（包括 <code>Object</code> 对象），都是继承自 <code>Function</code> 对象</p></li><li><p><code>Object</code> 对象直接继承自 <code>Function</code> 对象</p></li><li><p><code>Function</code>对象的<code>__proto__</code>会指向自己的原型对象，最终还是继承自<code>Object</code>对象</p></li></ul><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2><ul><li>https://juejin.cn/post/6870732239556640775#heading-7</li><li>https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain</li></ul>`,41),t=[o];function c(i,l){return s(),a("div",null,t)}const d=n(p,[["render",c],["__file","prototype.html.vue"]]);export{d as default};
