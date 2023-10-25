import{_ as s,o as a,c as n,M as p}from"./chunks/framework.71afdf21.js";const i=JSON.parse('{"title":"快速开始","description":"","frontmatter":{},"headers":[],"relativePath":"guide/start.md","filePath":"guide/start.md","lastUpdated":1698205420000}'),l={name:"guide/start.md"},o=p(`<h1 id="快速开始" tabindex="-1">快速开始 <a class="header-anchor" href="#快速开始" aria-label="Permalink to &quot;快速开始&quot;">​</a></h1><h2 id="本地开发" tabindex="-1">本地开发 <a class="header-anchor" href="#本地开发" aria-label="Permalink to &quot;本地开发&quot;">​</a></h2><p>该项目仓库采用monorepo架构，包管理工具推荐使用pnpm。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">i</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">pnpm</span><span style="color:#BABED8;">           </span><span style="color:#C3E88D;">//</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">全局安装pnpm</span></span></code></pre></div><p>运行以下脚本，可以统一给各个应用安装依赖包。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">i</span><span style="color:#BABED8;">                  </span><span style="color:#C3E88D;">//</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">在项目根目录下执行，安装所有包依赖</span></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">add</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">vue</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--filter</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">appliction-nam</span><span style="color:#BABED8;">e</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">   </span><span style="color:#C3E88D;">//</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">在项目根目录下执行，单独给appliction-name安装vue依赖包</span></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">add</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">vue</span><span style="color:#BABED8;">            </span><span style="color:#C3E88D;">//</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">在应用根目录下执行，单独给当前应用安装vue依赖包</span></span></code></pre></div><p>运行以下脚本，可以本地并行运行各个应用。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">run</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">start</span><span style="color:#BABED8;">           </span><span style="color:#C3E88D;">//</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">在项目根目录下执行，启动所有应用</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">run</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">start:7001</span><span style="color:#BABED8;">      </span><span style="color:#C3E88D;">//</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">在项目根目录下执行，运行端口号为7001的子应用</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">run</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">start:8001</span><span style="color:#BABED8;">      </span><span style="color:#C3E88D;">//</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">在项目根目录下执行，运行端口号为8001的主应用</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">run</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">starts:8001</span><span style="color:#BABED8;">     </span><span style="color:#C3E88D;">//</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">在项目根目录下执行，运行端口号为8001的主应用，同时运行所有关联的子应用</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">run</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">start</span><span style="color:#BABED8;">           </span><span style="color:#C3E88D;">//</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">在应用根目录下执行，运行当前目录的应用</span></span></code></pre></div><p>运行以下脚本，可以本地并行打包各个应用。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">run</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">build</span><span style="color:#BABED8;">           </span><span style="color:#C3E88D;">//</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">在项目根目录下执行，打包所有应用</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">run</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">build:7001</span><span style="color:#BABED8;">      </span><span style="color:#C3E88D;">//</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">在项目根目录下执行，打包端口号为7001的子应用</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">run</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">build</span><span style="color:#BABED8;">           </span><span style="color:#C3E88D;">//</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">在应用根目录下执行，打包当前目录的应用</span></span></code></pre></div><p>运行以下脚本，可以启动文档服务。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">run</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">doc</span><span style="color:#BABED8;">             </span><span style="color:#C3E88D;">//</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">在项目根目录下执行，启动文档服务</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">run</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">docs:dev</span><span style="color:#BABED8;">        </span><span style="color:#C3E88D;">//</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">在docs目录下执行，启动文档服务</span></span></code></pre></div><p>各应用对应端口：</p><table><thead><tr><th>项目名</th><th>系统名</th><th>端口号</th></tr></thead><tbody><tr><td>docs</td><td>文档服务</td><td>5173</td></tr><tr><td>micro-framework</td><td>子应用基础框架</td><td>7000</td></tr><tr><td>large-screen</td><td>前端大屏项目</td><td>7001</td></tr><tr><td>excrement-resource</td><td>粪污资源化平台</td><td>7002</td></tr><tr><td>system-background</td><td>系统后台</td><td>7004</td></tr><tr><td>main-framework</td><td>主应用基础框架</td><td>8000</td></tr></tbody></table>`,14),t=[o];function e(r,c,B,y,D,E){return a(),n("div",null,t)}const C=s(l,[["render",e]]);export{i as __pageData,C as default};
