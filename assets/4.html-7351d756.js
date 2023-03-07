import{_ as a,V as n,W as o,X as e,Y as i,Z as r,$ as c,C as s}from"./framework-7d796c00.js";const d={},g=c('<h2 id="新建仓库" tabindex="-1"><a class="header-anchor" href="#新建仓库" aria-hidden="true">#</a> 新建仓库</h2><p>打卡Github 点击 <code>New repository</code> 这里需要注意的有，如果你想你的博客地址简短，这里仓库名字需要以 <code>GitHub用户名.github.io</code> 来命名，如图所示，输入好名字之后直接点最下方的 <code>Create repository</code>即可</p><figure><img src="https://s2.loli.net/2023/03/04/6UL4H57a8BObZW1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="push代码" tabindex="-1"><a class="header-anchor" href="#push代码" aria-hidden="true">#</a> push代码</h2><p>在项目的目录下打开<code>Git Bash Here</code></p><figure><img src="https://s2.loli.net/2023/03/04/8Tv374xSjht2qsK.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>仓库创建完毕后会有一个<code>Quick setup</code>的页面，点击SSH，然后把下面的<code>2-3-4-5</code>依次粘贴进<code>Git Bash</code>中执行即可</p><figure><img src="https://s2.loli.net/2023/03/04/91UM86rQ7gZRyTW.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="github权限设置" tabindex="-1"><a class="header-anchor" href="#github权限设置" aria-hidden="true">#</a> GitHub权限设置</h2><p>打开 <code>刚刚新建的仓库 -&gt; Settings -&gt; Actions -&gt; General</code> 中去</p><figure><img src="https://s2.loli.net/2023/03/04/6UL4H57a8BObZW1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>往下翻，按照图示的设置完保存即可</p><figure><img src="https://s2.loli.net/2023/03/04/eSPGtnj9VDAFbzm.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="github-pages设置" tabindex="-1"><a class="header-anchor" href="#github-pages设置" aria-hidden="true">#</a> GitHub Pages设置</h2><p>打开 <code>刚刚新建的仓库 -&gt; Settings -&gt; Pages</code> 默认的是如下图</p><figure><img src="https://s2.loli.net/2023/03/04/afVBEPzweymoM9p.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>改成如下图所示的状态，然后点 <code>save</code></p><figure><img src="https://s2.loli.net/2023/03/04/nsqpOHGj2L5E87W.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="检查" tabindex="-1"><a class="header-anchor" href="#检查" aria-hidden="true">#</a> 检查</h2><p>查看Github工作流是否成功部署，打了绿色的 √ 即为部署成功，为红色的 x 就点开Details查看报错</p><figure><img src="https://s2.loli.net/2023/03/04/vqwIQHLKZzng8uF.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="访问博客" tabindex="-1"><a class="header-anchor" href="#访问博客" aria-hidden="true">#</a> 访问博客</h2>',22),h=e("code",null,"用户名.github.io",-1),l={href:"http://miomiora.github.io",target:"_blank",rel:"noopener noreferrer"},p=e("div",{class:"hint-container tip"},[e("p",{class:"hint-container-title"},"结束"),e("p",null,"到此为止博客就已经部署完毕")],-1);function u(f,b){const t=s("ExternalLinkIcon");return n(),o("div",null,[g,e("p",null,[i("直接输入 "),h,i(" 即可，比如本博客为 "),e("a",l,[i("miomiora.github.io"),r(t)])]),p])}const m=a(d,[["render",u],["__file","4.html.vue"]]);export{m as default};
