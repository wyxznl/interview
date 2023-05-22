import{_ as e,o as p,c as d,a as c}from"./app-c0885663.js";const i={},a=c('<h1 id="面试官-说说设备像素、css像素、设备独立像素、dpr、ppi-之间的区别" tabindex="-1"><a class="header-anchor" href="#面试官-说说设备像素、css像素、设备独立像素、dpr、ppi-之间的区别" aria-hidden="true">#</a> 面试官：说说设备像素、css像素、设备独立像素、dpr、ppi 之间的区别？</h1><p><img src="https://static.vue-js.com/c4d9bfd0-91f2-11eb-85f6-6fac77c0c9b3.png" alt=""></p><h2 id="一、背景" tabindex="-1"><a class="header-anchor" href="#一、背景" aria-hidden="true">#</a> 一、背景</h2><p>在<code>css</code>中我们通常使用px作为单位，在PC浏览器中<code>css</code>的1个像素都是对应着电脑屏幕的1个物理像素</p><p>这会造成一种错觉，我们会认为<code>css</code>中的像素就是设备的物理像素</p><p>但实际情况却并非如此，<code>css</code>中的像素只是一个抽象的单位，在不同的设备或不同的环境中，<code>css</code>中的1px所代表的设备物理像素是不同的</p><p>当我们做移动端开发时，同为1px的设置，在不同分辨率的移动设备上显示效果却有很大差异</p><p>这背后就涉及了css像素、设备像素、设备独立像素、dpr、ppi的概念</p><h2 id="二、介绍" tabindex="-1"><a class="header-anchor" href="#二、介绍" aria-hidden="true">#</a> 二、介绍</h2><h3 id="css像素" tabindex="-1"><a class="header-anchor" href="#css像素" aria-hidden="true">#</a> CSS像素</h3><p>CSS像素（css pixel, px）: 适用于web编程，在 CSS 中以 px 为后缀，是一个长度单位</p><p>在 CSS 规范中，长度单位可以分为两类，绝对单位以及相对单位</p><p>px是一个相对单位，相对的是设备像素（device pixel）</p><p>一般情况，页面缩放比为1，1个CSS像素等于1个设备独立像素</p><p><code>CSS</code>像素又具有两个方面的相对性：</p><ul><li>在同一个设备上，每1个 CSS 像素所代表的设备像素是可以变化的（比如调整屏幕的分辨率）</li><li>在不同的设备之间，每1个 CSS 像素所代表的设备像素是可以变化的（比如两个不同型号的手机）</li></ul><p>在页面进行缩放操作也会 引起<code>css</code>中<code>px</code>的变化，假设页面放大一倍，原来的 1px 的东西变成 2px，在实际宽度不变的情况下1px 变得跟原来的 2px 的长度（长宽）一样了（元素会占据更多的设备像素）</p><p>假设原来需要 320px 才能填满的宽度现在只需要 160px</p><p>px会受到下面的因素的影响而变化：</p><ul><li>每英寸像素（PPI）</li><li>设备像素比（DPR）</li></ul><h3 id="设备像素" tabindex="-1"><a class="header-anchor" href="#设备像素" aria-hidden="true">#</a> 设备像素</h3><p>设备像素（device pixels），又称为物理像素</p><p>指设备能控制显示的最小物理单位，不一定是一个小正方形区块，也没有标准的宽高，只是用于显示丰富色彩的一个“点”而已</p><p>可以参考公园里的景观变色彩灯，一个彩灯(物理像素)由红、蓝、绿小灯组成，三盏小灯不同的亮度混合出各种色彩</p><p><img src="https://static.vue-js.com/cffc6570-91f2-11eb-ab90-d9ae814b240d.png" alt=""></p><p>从屏幕在工厂生产出的那天起，它上面设备像素点就固定不变了，单位为<code>pt</code></p><h3 id="设备独立像素" tabindex="-1"><a class="header-anchor" href="#设备独立像素" aria-hidden="true">#</a> 设备独立像素</h3><p>设备独立像素（Device Independent Pixel）：与设备无关的逻辑像素，代表可以通过程序控制使用的虚拟像素，是一个总体概念，包括了CSS像素</p><p>在<code>javaScript</code>中可以通过<code>window.screen.width/ window.screen.height</code> 查看</p><p>比如我们会说“电脑屏幕在 2560x1600分辨率下不适合玩游戏，我们把它调为 1440x900”，这里的“分辨率”（非严谨说法）指的就是设备独立像素</p><p>一个设备独立像素里可能包含1个或者多个物理像素点，包含的越多则屏幕看起来越清晰</p><p>至于为什么出现设备独立像素这种虚拟像素单位概念，下面举个例子：</p><p>iPhone 3GS 和 iPhone 4/4s 的尺寸都是 3.5 寸，但 iPhone 3GS 的分辨率是 320x480，iPhone 4/4s 的分辨率是 640x960</p><p>这意味着，iPhone 3GS 有 320 个物理像素，iPhone 4/4s 有 640 个物理像素</p><p>如果我们按照真实的物理像素进行布局，比如说我们按照 320 物理像素进行布局，到了 640 物理像素的手机上就会有一半的空白，为了避免这种问题，就产生了虚拟像素单位</p><p>我们统一 iPhone 3GS 和 iPhone 4/4s 都是 320 个虚拟像素，只是在 iPhone 3GS 上，最终 1 个虚拟像素换算成 1 个物理像素，在 iphone 4s 中，1 个虚拟像素最终换算成 2 个物理像素</p><p>至于 1 个虚拟像素被换算成几个物理像素，这个数值我们称之为设备像素比，也就是下面介绍的<code>dpr</code></p><h3 id="dpr" tabindex="-1"><a class="header-anchor" href="#dpr" aria-hidden="true">#</a> dpr</h3><p>dpr（device pixel ratio），设备像素比，代表设备独立像素到设备像素的转换关系，在<code>JavaScript</code>中可以通过 <code>window.devicePixelRatio</code> 获取</p><p>计算公式如下：</p><p><img src="https://static.vue-js.com/dd45e2b0-91f2-11eb-ab90-d9ae814b240d.png" alt=""></p><p>当设备像素比为1:1时，使用1（1×1）个设备像素显示1个CSS像素</p><p>当设备像素比为2:1时，使用4（2×2）个设备像素显示1个CSS像素</p><p>当设备像素比为3:1时，使用9（3×3）个设备像素显示1个CSS像素</p><p>如下图所示：</p><p><img src="https://static.vue-js.com/e63cceb0-91f2-11eb-ab90-d9ae814b240d.png" alt=""></p><p>当<code>dpr</code>为3，那么<code>1px</code>的<code>CSS</code>像素宽度对应<code>3px</code>的物理像素的宽度，1px的<code>CSS</code>像素高度对应<code>3px</code>的物理像素高度</p><h3 id="ppi" tabindex="-1"><a class="header-anchor" href="#ppi" aria-hidden="true">#</a> ppi</h3><p>ppi （pixel per inch），每英寸像素，表示每英寸所包含的像素点数目，更确切的说法应该是像素密度。数值越高，说明屏幕能以更高密度显示图像</p><p>计算公式如下：</p><p><img src="https://static.vue-js.com/f734adf0-91f2-11eb-ab90-d9ae814b240d.png" alt=""></p><h2 id="三、总结" tabindex="-1"><a class="header-anchor" href="#三、总结" aria-hidden="true">#</a> 三、总结</h2><p>无缩放情况下，1个CSS像素等于1个设备独立像素</p><p>设备像素由屏幕生产之后就不发生改变，而设备独立像素是一个虚拟单位会发生改变</p><p>PC端中，1个设备独立像素 = 1个设备像素 （在100%，未缩放的情况下）</p><p>在移动端中，标准屏幕（160ppi）下 1个设备独立像素 = 1个设备像素</p><p>设备像素比（dpr） = 设备像素 / 设备独立像素</p><p>每英寸像素（ppi），值越大，图像越清晰</p><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2><ul><li>https://developer.mozilla.org/zh-CN/docs/Glossary/CSS_pixel</li><li>https://hijiangtao.github.io/2017/07/09/Device-Viewport-and-Pixel-Introduction/</li></ul>',60),o=[a];function s(r,h){return p(),d("div",null,o)}const n=e(i,[["render",s],["__file","dp_px_dpr_ppi.html.vue"]]);export{n as default};
