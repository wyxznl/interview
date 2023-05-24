import{_ as e,o as i,c as d,d as t}from"./app-88c46707.js";const a={},r=t(`<h1 id="面试官-说说你对git-reset-和-git-revert-的理解-区别" tabindex="-1"><a class="header-anchor" href="#面试官-说说你对git-reset-和-git-revert-的理解-区别" aria-hidden="true">#</a> 面试官：说说你对git reset 和 git revert 的理解？区别？</h1><p><img src="https://static.vue-js.com/046b4440-ff74-11eb-bc6f-3f06e1491664.png" alt=""></p><h2 id="一、是什么" tabindex="-1"><a class="header-anchor" href="#一、是什么" aria-hidden="true">#</a> 一、是什么</h2><h3 id="git-reset" tabindex="-1"><a class="header-anchor" href="#git-reset" aria-hidden="true">#</a> git reset</h3><p><code>reset</code>用于回退版本，可以遗弃不再使用的提交</p><p>执行遗弃时，需要根据影响的范围而指定不同的参数，可以指定是否复原索引或工作树内容</p><p><img src="https://static.vue-js.com/ab4d0c00-ff72-11eb-bc6f-3f06e1491664.png" alt=""></p><h3 id="git-revert" tabindex="-1"><a class="header-anchor" href="#git-revert" aria-hidden="true">#</a> git revert</h3><p>在当前提交后面，新增一次提交，抵消掉上一次提交导致的所有变化，不会改变过去的历史，主要是用于安全地取消过去发布的提交</p><p><img src="https://static.vue-js.com/bd12c290-ff72-11eb-991d-334fd31f0201.png" alt=""></p><h2 id="二、如何用" tabindex="-1"><a class="header-anchor" href="#二、如何用" aria-hidden="true">#</a> 二、如何用</h2><h3 id="git-reset-1" tabindex="-1"><a class="header-anchor" href="#git-reset-1" aria-hidden="true">#</a> git reset</h3><p>当没有指定<code>ID</code>的时候，默认使用<code>HEAD</code>，如果指定<code>ID</code>，那么就是基于指向<code>ID</code>去变动暂存区或工作区的内容</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>// 没有指定ID, 暂存区的内容会被当前ID版本号的内容覆盖，工作区不变
git reset

// 指定ID，暂存区的内容会被指定ID版本号的内容覆盖，工作区不变
git reset &lt;ID&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>日志<code>ID</code>可以通过查询，可以<code>git log</code>进行查询，如下：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>commit a7700083ace1204ccdff9f71631fb34c9913f7c5 (HEAD -&gt; master)
Author: linguanghui &lt;linguanghui@baidu.com&gt;
Date:   Tue Aug 17 22:34:40 2021 +0800

    second commit

commit e31118663ce66717edd8a179688a7f3dde5a9393
Author: linguanghui &lt;linguanghui@baidu.com&gt;
Date:   Tue Aug 17 22:20:01 2021 +0800

    first commit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>常见命令如下：</p><ul><li><p>--mixed（默认）：默认的时候，只有暂存区变化</p></li><li><p>--hard参数：如果使用 --hard 参数，那么工作区也会变化</p></li><li><p>--soft：如果使用 --soft 参数，那么暂存区和工作区都不会变化</p></li></ul><p><img src="https://static.vue-js.com/225b41e0-ff73-11eb-bc6f-3f06e1491664.png" alt=""></p><h3 id="git-revert-1" tabindex="-1"><a class="header-anchor" href="#git-revert-1" aria-hidden="true">#</a> git revert</h3><p>跟<code>git reset</code>用法基本一致，<code>git revert</code> 撤销某次操作，此次操作之前和之后的 <code>commit</code>和<code>history</code>都会保留，并且把这次撤销，作为一次最新的提交，如下：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>git revert &lt;commit_id&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果撤销前一个版本，可以通过如下命令：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>git revert HEAD
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>撤销前前一次，如下：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>git revert HEAD^
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="三、区别" tabindex="-1"><a class="header-anchor" href="#三、区别" aria-hidden="true">#</a> 三、区别</h2><p>撤销（revert）被设计为撤销公开的提交（比如已经push）的安全方式，<code>git reset</code>被设计为重设本地更改</p><p>因为两个命令的目的不同，它们的实现也不一样：重设完全地移除了一堆更改，而撤销保留了原来的更改，用一个新的提交来实现撤销</p><p>两者主要区别如下：</p><ul><li>git revert是用一次新的commit来回滚之前的commit，git reset是直接删除指定的commit</li><li>git reset 是把HEAD向后移动了一下，而git revert是HEAD继续前进，只是新的commit的内容和要revert的内容正好相反，能够抵消要被revert的内容</li><li>在回滚这一操作上看，效果差不多。但是在日后继续 merge 以前的老版本时有区别</li></ul><blockquote><p>git revert是用一次逆向的commit“中和”之前的提交，因此日后合并老的branch时，之前提交合并的代码仍然存在，导致不能够重新合并</p><p>但是git reset是之间把某些commit在某个branch上删除，因而和老的branch再次merge时，这些被回滚的commit应该还会被引入</p></blockquote><ul><li>如果回退分支的代码以后还需要的情况则使用<code>git revert</code>， 如果分支是提错了没用的并且不想让别人发现这些错误代码，则使用<code>git reset</code></li></ul><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2><ul><li>https://juejin.cn/post/6844903542931587086</li><li>https://marklodato.github.io/visual-git-guide/index-zh-cn.html#reset</li></ul>`,35),c=[r];function s(n,l){return i(),d("div",null,c)}const m=e(a,[["render",s],["__file","git reset_ git revert.html.vue"]]);export{m as default};
